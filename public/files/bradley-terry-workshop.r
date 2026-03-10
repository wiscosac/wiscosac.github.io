library(BradleyTerry2)
library(dplyr)


#pulled from march machine learning mania data
teams <- read.csv("MTeams (1).csv")
regmatch <- read.csv("MRegularSeasonDetailedResults (2).csv")

match25 <- regmatch %>%
  filter(Season == 2025)

all_teams <- sort(unique(c(match25$WTeamID, match25$LTeamID)))
match25 <- match25 %>%
  mutate(
    WTeamID = factor(WTeamID, levels = all_teams),
    LTeamID = factor(LTeamID, levels = all_teams)
  )

outcome <- cbind(win = rep(1, nrow(match25)), loss = rep(0, nrow(match25)))

#set a reference team
ref_team <- as.character(all_teams[1])

bt_model <- BTm(
  outcome = outcome,
  player1 = data.frame(team = match25$WTeamID),
  player2 = data.frame(team = match25$LTeamID),
  formula = ~ team,
  id = "team",
  refcat = ref_team,
  separate.ability = FALSE
)

# Extract abilities
abilities <- lambda_hat <- BTabilities(bt_model)

team_df <- data.frame(
  team_id = rownames(lambda_hat),
  ability = lambda_hat[, "ability"],
  se = lambda_hat[, "s.e."]
)

teams$TeamID <- as.character(teams$TeamID)
team_df <- team_df %>%
  left_join(teams, by = c("team_id" = "TeamID"))