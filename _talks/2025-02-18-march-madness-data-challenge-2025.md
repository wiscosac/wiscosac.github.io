---
title: "March Madness Data Challenge 2025"
date: 2025-02-18
collection: talks
type: "Spring 2025"
permalink: /Challenge/2025/SP/MarchMadness
---
Due Date: Mar 20, 2025 8:30 AM

### Background

For this challenge, you will be expected to provide a likelihood estimate for every possible matchup in the tournament (Meaning many of these games won’t ever happen). Once the tournament teams are selected, we will provide code here in both R and Python to systematically create this standardized submission file, so that we can easily measure success. This CSV file will consist of 3 columns and 1 row for each possible matchup (68 C 2 = 2278 rows). The first column will consist of the better seed, the second will be the worse seed, and the last column will be your model’s predicted likelihood of the better seed winning (0-1).

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


You can find the submission csv [here](http://wiscosac.github.io/files/2025_competition_submission.csv).

You can find the submission form [here](https://docs.google.com/forms/d/e/1FAIpQLScJu6MdJnkgEljtTcpliyI2fqKmRTpr5vSTgFARl-BAmRSL3w/viewform?usp=dialog).

### Milestones

Completion dateProject phaseDescriptionMar 20, 2025 8:30 AMSubmissions dueMust submit deliverables to Google sheet by 8:30 AM to be credited for participatingMar 20, 2025 10:00 AMTournament Games StartMarch Madness 2025 tips off!Apr 7, 2025 8:00 PMMarch Madness ChampionshipA champion of March Madness is crowned, and we tally final scores for participants

### Resources

- Kaggle

    - https://www.kaggle.com/competitions/march-machine-learning-mania-2025/data

    - https://www.kaggle.com/datasets/nishaanamin/march-madness-data/data

- [ESPN](https://www.espn.com/mens-college-basketball/team/stats/_/id/275)

- [Basketball Reference](https://www.sports-reference.com/cbb/schools/wisconsin/men/2025.html)

- [Kenpom](https://kenpom.com/)

### Results

Best Brier Score: Jack

Most Games Correct: Tom

The full results can be found [here](https://docs.google.com/spreadsheets/d/19CZfk3I_lN4vUIgLnUD-1oFKSAt1Zf5CCKF1uFadi38/edit?gid=0#gid=0).
