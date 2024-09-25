install.packages("nflreadr")
install.packages("dplyr")
install.packages("xgboost")
install.packages('ggplot2')
install.packages("ggthemes")
install.packages("tidyr")


library(nflreadr)
library(dplyr)
library(xgboost)
library(ggplot2)
library(ggthemes)
library(tidyr)

pbp <- load_participation(seasons = 2016:2023, include_pbp = TRUE)

pbp <- pbp %>%
  filter(qb_dropback == 1 & qb_scramble == 0 & sack == 0)

pbpclean <- pbp %>%
  mutate(pressure = ifelse(was_pressure == "TRUE", 1, 0))

pbpselected <- pbpclean %>%
  select(passer_player_name, posteam, season, week, complete_pass, pressure, shotgun,
         ngs_air_yards, time_to_throw, ydstogo, yardline_100, pass_location, down)

pbpselected <- na.omit(pbpselected)

pbpselected <- pbpselected %>%
  mutate(
  down = as.factor(down),
  pass_location = as.factor(pass_location),
  shotgun = as.factor(shotgun),
  pressure = as.factor(pressure)
)

pbp_down_encoded <- pbpselected %>%
  mutate(down_indicator = 1) %>%
  pivot_wider(names_from = down, values_from = down_indicator, values_fill = list(down_indicator = 0), names_prefix = "down")

pbp_pass_location_encoded <- pbp_down_encoded %>%
  mutate(pass_location_indicator = 1) %>%
  pivot_wider(names_from = pass_location, values_from = pass_location_indicator, values_fill = list(pass_location_indicator = 0), names_prefix = "pass_location")

pbp_shotgun_encoded <- pbp_pass_location_encoded %>%
  mutate(shotgun_indicator = 1) %>%
  pivot_wider(names_from = shotgun, values_from = shotgun_indicator, values_fill = list(shotgun_indicator = 0), names_prefix = "shotgun")

pbp_pressure_encoded <- pbp_shotgun_encoded %>%
  mutate(pressure_indicator = 1) %>%
  pivot_wider(names_from = pressure, values_from = pressure_indicator, values_fill = list(pressure_indicator = 0), names_prefix = "pressure")

finaldata <- pbp_pressure_encoded

train_data <- finaldata %>%
  filter(season <= 2021)

test_data <- finaldata %>%
  filter(season > 2021)

set.seed(2015)

train_matrix <- xgb.DMatrix(data = as.matrix(train_data %>% select(-complete_pass, -passer_player_name, -season, -week, -posteam)), label = train_data$complete_pass)
test_matrix <- xgb.DMatrix(data = as.matrix(test_data %>% select(-complete_pass, -passer_player_name, -season, -week, -posteam)), label = test_data$complete_pass)


params <- list(
  objective = "binary:logistic",
  eval_metric = "logloss",
  max_depth = 6,
  eta = 0.3
)

xgboost_model <- xgboost(
  data = train_matrix,
  params = params,
  nrounds = 100
)

test_data$xComp <- predict(xgboost_model, test_matrix)

importance_matrix <- xgb.importance(feature_names = colnames(train_matrix), model = xgboost_model)

xgb.plot.importance(importance_matrix)

results <- test_data %>%
  mutate(
    cpoe = complete_pass - xComp
  )

eval <- results %>%
  group_by(passer_player_name, season) %>%
  summarise(
    att = n(),
    exp = mean(xComp),
    act = mean(complete_pass),
    cpoe = mean(cpoe)
  ) %>%
  filter(att >= 150)

geno_data <- test_data %>%
  filter(passer_player_name == "G.Smith", season %in% c(2022, 2023)) %>%
  mutate(air_yard_bin = cut(ngs_air_yards, breaks = seq(-10, 50, by = 5), right = FALSE)) %>%
  group_by(passer_player_name, air_yard_bin, season) %>%
  summarise(cpoe = mean(complete_pass-xComp, na.rm = TRUE))

ggplot(geno_data, aes(x = air_yard_bin, y = cpoe, color = factor(season), group = season)) +
  geom_line(size = 1.2) +
  geom_point(alpha = 0.6) +
  labs(title = "Geno CPOE by Air Yards in 2022 vs 2023",
       x = "Air Yards",
       y = "CPOE",
       color = "Season")+
  theme_fivethirtyeight()+
  theme(
    axis.text.x = element_text(angle = 45, hjust = 1),
    axis.text = element_text(size = 12),
    axis.title = element_text(size = 14),
    plot.title = element_text(size = 16, face = "bold")
  )