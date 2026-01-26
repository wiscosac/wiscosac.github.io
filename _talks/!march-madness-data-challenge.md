---
title: "March Madness Data Challenge 2026"
date: 2026-03-19
collection: talks
type: "Spring 2026"
permalink: /Challenge/SP/MarchMadness
excerpt: ""
---
Due Date: Mar 19, 2026 8:30 AM

### Background

For this challenge, you will be expected to provide a likelihood estimate for every possible matchup in the tournament (Meaning many of these games won’t ever happen). Once the tournament teams are selected, we will provide code here in both R and Python to systematically create this standardized submission file, so that we can easily measure success. This CSV file will consist of 3 columns and 1 row for each possible matchup (68 C 2 = 2278 rows). The first column will consist of the better seed, the second will be the worse seed, and the last column will be your model’s predicted likelihood of the better seed winning (0-1).

This year, we will be hosting two bracket competitions via ESPN Bracket Challenge. You are welcome to sign up for both. 

- The **UW Madison SAC Bracket Challenge - Analytics** bracket will be meant for you to directly input your results/findings from your project. Your picks for this bracket would be exactly what your CSV and results would indicate (i.e if Duke plays Wisconsin, and your CSV indicates Wisconsin has a 75% chance to win, you would select Wisconsin for that matchup).
- The **UW Madison SAC Bracket Challenge - General** bracket will be for your brackets based on your own interpretation/basketball knowledge. You don’t have to use exact findings/results from your project, but you certainly can use that to inform your decisions (i.e in the same example as above, if you think Duke will beat Wisconsin despite your model/results indicating Wisconsin has a 75% chance to win, you can still select Duke).

We are allowing up to 1 bracket for each bracket challenge, meaning you can submit 2 brackets, total. 


### Objectives

- You will need to submit (1) the CSV file with your likelihood of winning for each possible matchup and (2) replicable code file(s) that show the methods you used to get your predictions.

Scoring: There will be 2 winners in our competition:

- Winner 1: Highest Score using Brier Score. This is the mean squared difference between your predicted likelihood and the actual outcome of the game. Ex. if a 1-seeded Purdue loses to a 6-seeded Wisconsin in the Elite 8, and your model predicted that Purdue had a 70% chance to win, you would receive (1-0.7)^2=0.3^2 points for this matchup. These scores will be calculated for each game that is played and averaged together, regardless of whether you expected the teams to even make it to the game that they played in.

- Winner 2: Most games picked correctly (likelihood > 0.5)

### Scope and deliverables

|Deliverable|Description|
|--|--|
|Source Code|Github link to the code used to generate likelihood estimates for game outcomes;|
|CSV File of Predictions|Three column CSV submission containing columns higher seed team, lower seed team, likelihood of higher seed winning.|


*Check back later for the submission CSV and Form*

### Milestones

|Completion date|Project phase|Description|
|--|--|--|
|Mar 19, 2026 8:30 AM|Submissions due|Must submit deliverables to Google sheet by 8:30 AM to be credited for participating|
|Mar 19, 2026 10:00 AM|Tournament Games Start|March Madness 2026 tips off!|
|Apr 6, 2026 8:00 PM|March Madness Championship|A champion of March Madness is crowned, and we tally final scores for participants|

### Resources

- Kaggle

    - https://www.kaggle.com/competitions/march-machine-learning-mania-2025/data (This years has not been released yet)

    - https://www.kaggle.com/datasets/nishaanamin/march-madness-data/data

- [ESPN](https://www.espn.com/mens-college-basketball/team/stats/_/id/275)

- [Basketball Reference](https://www.sports-reference.com/cbb/schools/wisconsin/men/2026.html)

- [Kenpom](https://kenpom.com/)

### 2026 Leaderboard

Best Brier Score: TBD

Most Games Correct: TBD

[Full 2026 leaderboard](https://docs.google.com/spreadsheets/d/1sRFJgvxx4c63FZUt5ZMW6lF6AmVirCb1VyBDZYuXly4/edit?usp=sharing)

### 2025 Leaderboard 

Best Brier Score: Jack

Most Games Correct: Tom

[Full 2025 Leaderboard](https://docs.google.com/spreadsheets/d/19CZfk3I_lN4vUIgLnUD-1oFKSAt1Zf5CCKF1uFadi38/edit?gid=0#gid=0).

### 2024 Leaderboard

|Name:|Brier Score|Matchups Correct:|
|--|--|--|
|Jake|0.1547086041|97|
|Luke|0.159260227|96|
|Maya|0.1655846008|100|
|Shekhar|0.1692066925|94|
|Leo|0.2646|75|

[Full 2024 Leaderboard](https://docs.google.com/spreadsheets/d/1Q2f371ulX-dQiYylXB5pb6boc1aUJglycX-VVWV3rCs/edit#gid=0)
