library(dplyr)
library(xgboost)




fivethirtyeight <- read.csv("538 Ratings.csv")
barthome <- read.csv("Barttorvik Home.csv")
bartaway <- read.csv("Barttorvik Away.csv")
bartneutral <- read.csv("Barttorvik Neutral.csv")
coach <- read.csv("Coach Results.csv")
conf <- read.csv("Conference Results.csv")
heat <- read.csv("Heat Check Tournament Index.csv")
kenpom <- read.csv("KenPom Barttorvik.csv")
resumes <- read.csv("Resumes.csv")
matchups <- read.csv("Tournament Matchups.csv")
results <- read.csv("Team Results.csv")

# use matchups dataset to create columns for winning seed, losing seed
# and such that matchups are in the same row

#remove 2024 matchups

matchupsclean <- matchups %>% 
  filter(!is.na(matchups$BY.ROUND.NO))

# join all other data. should be roughly enough data for 50 or so columns
kenpomclean <- kenpom %>%
  filter(YEAR != 2024)

# select the win percentage as our tie breaker method for finals (1st seed vs 1st seed)

matchupsclean <- matchupsclean %>%
  left_join(select(kenpomclean, TEAM, YEAR, WIN.), by = c("TEAM" = "TEAM", "YEAR" = "YEAR"))


#matchups are in groups of two rows. we can create matchup ids for every two rows
# to help with our other operations in the next step
matchupsclean <- matchupsclean %>%
  mutate(matchup_id = rep(1:(nrow(.) / 2), each = 2))

#now that we have grouped by matchup id, we have all matchups in one row, 
processed_matchups <- matchupsclean %>%
  group_by(matchup_id) %>%
  summarise(year = first(YEAR),
            round = first(CURRENT.ROUND), 
            highseedteam = if_else(SEED[1] == SEED[2],
                                   if_else(WIN.[1] > WIN.[2], TEAM[1], TEAM[2]), 
                                   TEAM[which.min(SEED)]),
            lowseedteam = if_else(SEED[1] == SEED[2],
                                  if_else(WIN.[1] > WIN.[2], TEAM[2], TEAM[1]), 
                                  TEAM[which.max(SEED)]),
            highseed = min(SEED),
            lowseed = max(SEED),
            highseedno = TEAM.NO[which.min(SEED)], 
            lowseedno = TEAM.NO[which.max(SEED)],
            highseedscore = if_else(SEED[1] == SEED[2],
                                    if_else(WIN.[1] > WIN.[2], SCORE[1], SCORE[2]), 
                                    SCORE[which.min(SEED)]),
            lowseedscore = if_else(SEED[1] == SEED[2],
                                   if_else(WIN.[1] > WIN.[2], SCORE[2], SCORE[1]), 
                                   SCORE[which.max(SEED)]),
            highseed_win = as.integer(SCORE[which.min(SEED)] > SCORE[which.max(SEED)]))

# we want to left join the data here: keep all data from matchups df, and wherever the join function finds a
# match, include the advanced stats data from kenpomclean. don't want to lose any rows from original df
highercombined <- merge(processed_matchups, kenpomclean, by.x =c("highseedteam", "year"), by.y = c("TEAM", "YEAR"), all.x = TRUE)


adv <- c("K.TEMPO", "K.TEMPO", "KADJ.T", "K.OFF", "KADJ.O",
             "K.DEF", "KADJ.D", "KADJ.EM", "BADJ.EM", "BADJ.O", "BADJ.D", "BADJ.T", 
             "BARTHAG", "WIN.", "EFG.", "EFG.D", "FTR", 
             "FTRD", "TOV.", "TOV.D", "OREB.", "DREB.", "OP.OREB.")


winnerscombinedclean <- highercombined %>%
  select(year, round, CONF,  highseedteam, lowseedteam, highseed, lowseed, highseedno, lowseedno,
         highseedscore, lowseedscore, highseed_win, K.TEMPO, KADJ.T, K.OFF, KADJ.O,
         K.DEF, KADJ.D, KADJ.EM, BADJ.EM, BADJ.O, BADJ.D, BADJ.T, BARTHAG, WIN.,
         EFG., EFG.D, FTR, FTRD, TOV., TOV.D, OREB., DREB., OP.OREB.)

names(winnerscombinedclean)[names(winnerscombinedclean) %in% adv] <- paste("higher", names(winnerscombinedclean)[names(winnerscombinedclean) %in% adv], sep = "_")


lowercombined <- merge(processed_matchups, kenpomclean, by.x =c("lowseedteam", "year"), by.y = c("TEAM", "YEAR"), all.x = TRUE)


loserscombinedclean <- lowercombined %>%
  select(year, round, CONF,  highseedteam, lowseedteam, highseed, lowseed, highseedno, lowseedno,
         highseedscore, lowseedscore, highseed_win, K.TEMPO, KADJ.T, K.OFF, KADJ.O,
         K.DEF, KADJ.D, KADJ.EM, BADJ.EM, BADJ.O, BADJ.D, BADJ.T, BARTHAG, WIN.,
         EFG., EFG.D, FTR, FTRD, TOV., TOV.D, OREB., DREB., OP.OREB.)

names(loserscombinedclean)[names(loserscombinedclean) %in% adv] <- paste("lower", names(loserscombinedclean)[names(loserscombinedclean) %in% adv], sep = "_")

loserscombinedclean <- loserscombinedclean %>%
  select(-year, -round, -CONF, -highseedteam, -lowseedteam, -highseed, -lowseed, -highseedno,
         -lowseedno, -highseedscore, -lowseedscore, -highseed_win)

finalfeature <- cbind(winnerscombinedclean, loserscombinedclean)

finalfeature <- na.omit(finalfeature)


traindata <- finalfeature %>%
  filter(!year %in% c(2021, 2022, 2023))

testdata <- finalfeature %>%
  filter(year %in% c(2021, 2022, 2023))


traindataclean <- traindata %>%
  select(-year, -CONF, -highseedteam, -lowseedteam, -highseedno, -lowseedno, -highseedscore,
         -lowseedscore)

testdataclean <- testdata %>%
  select(-year, -CONF, -highseedteam, -lowseedteam, -highseedno, -lowseedno, -highseedscore,
         -lowseedscore)

traindataclean$round <- as.factor(traindataclean$round)

testdataclean$round <- as.factor(testdataclean$round)


round_dummies <- model.matrix(~ round - 1, data = traindataclean)
traindataencoded <- cbind(traindataclean[, !(names(traindataclean) %in% 'round')], round_dummies)

round_dummies <- model.matrix(~ round - 1, data = testdataclean)
testdataencoded <- cbind(testdataclean[, !(names(testdataclean) %in% 'round')], round_dummies)


X_train <- traindataencoded %>%
  select(-highseed_win)

x_test <- testdataencoded %>%
  select(-highseed_win)

X_train <- as.matrix(X_train)
y_train <- traindataencoded$highseed_win

y_test <- testdataencoded$highseed_win
x_test <- as.matrix(x_test)

dtrain <- xgb.DMatrix(data = X_train, label = y_train)
dtest <- xgb.DMatrix(data = x_test, label = y_test)

params <- list(
  objective = "binary:logistic",
  eta = 0.01,
  max_depth = 4,
  min_child_weight = 0.5
  
)

num_round <- 150  # Number of boosting rounds

set.seed(1234)
# Train the model
xgboost <- xgb.train(
  params = params,
  data = dtrain,
  nrounds = num_round,
  verbose = 1
)

preds <- predict(xgboost, dtest)

testdatapreds <- cbind(testdata, preds)

testdatapreds <- testdatapreds %>%
  select(year, round, highseedteam, lowseedteam, highseed, lowseed, highseed_win, preds)

brier_score <- mean((preds - y_test)^2)
print(brier_score)

log_loss <- -mean(y_test * log(preds) + (1 - y_test) * log(1 - preds))
print(log_loss)







