install.packages("rvest")

library(rvest)
library(dplyr)
library(stringr)
library(httr)
library(tidyverse)
library(cfbfastR)

#Rosters from cfbfastR
seasons = 2022:2024

rosters <- map_dfr(seasons, load_cfb_rosters)

#Scraping NJ Passing Stats

url <- "https://www.maxpreps.com/nj/football/stat-leaders/offense/passing/yds/"

page <- read_html(GET(url))

heads <- page %>%
  html_elements("th") %>%
  html_text()
data <- page %>%
  html_elements("td") %>%
  html_text()


n_col <- length(heads)

mat <- matrix(data, ncol = n_col, byrow = TRUE)

df <- as.data.frame(mat, stringsAsFactors = FALSE)

colnames(df) <- headers

