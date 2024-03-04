---
title: "March Madness Data Challenge"
permalink: /march-madness/
author_profile: true
---
# March Madness Data Challenge
## Hosted by Sports Analytics Club, UW-Madison
The tasks of this challenge are quite simple, predict the likelihood of victory for each game in the Men's and Women's 2024 NCAA March Madness Tournament, with data-backed selection of your choices. This is a branch-off of a much larger, and long-standing challenge that is being hosted for the tenth time on Kaggle (link), and you are encouraged to participate in both challenges, however the end-of-challenge submission is slightly different.

**Data:** Please refer to Kaggle's Data tab ([link](https://www.kaggle.com/competitions/march-machine-learning-mania-2024/data)) to access the provided data, and the accompanying data dictionary. You are welcome to, but not expected to, collect any additional data that you would like.

**Submitting:** A major distinction between the 2 challenges is what you need to submit. For both, you will be spending most of your effort building a model to predict the winner of a game. However, for this challenge, you will be expected to provide a likelihood estimate for every possible matchup in the tournament (Meaning many of these games won't actually ever happen). Once the tournament teams are selected, we will provide code in both R and Python to systematically create this standardized submission file, so that we can easily measure success.

**You will need to submit (1) the csv file with your likelihood of winning for each possible matchup and (2) replicatable code file(s) that show the methods you used to get your predictions.** 

**Scoring:**
There will be 3 winners for our competition:
* Winner 1: Highest Score using win likelihood estimates. For each game that is actually played, your predicted likelihood of the higher seed will be compared to the actual outcome, and you will get a score for the difference. So, for example if a 1 seeded Purdue loses a 6 seeded Wisconsin in the Elite 8, and your model predicted that Purdue had a 70% chance to win, you would receive 1-0.7=0.3 points for this matchup. These scores will be calculated and added together for every game that is actually played, regardless of if you expected the teams to even make it to the game that they played in.

* Winner 2: Most games picked correctly (likelihood > 0.5)

* Winner 3: Most creative, or unique approach to building your model.

That's all for now, so get started on building a model for predicting the winner of a game between 2 teams.
Then, come back here on Selection Sunday (March 17th) once the tournaments are set. From there, you can run your model for each possible matchup, with code that will be made available here.
Once done, fill out this Google Form to submit your files. From there, keep up with how your model is doing by checking back here after each round!