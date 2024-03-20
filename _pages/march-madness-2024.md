---
title: "March Madness Data Challenge"
permalink: /march-madness/
author_profile: true
---

## Hosted by Sports Analytics Club, UW-Madison
The tasks of this challenge are quite simple, predict the likelihood of victory for each game in the Men's and Women's 2024 NCAA March Madness Tournament, with a data-backed selection of your choices. This is a branch-off of a much larger, and long-standing challenge that is being hosted for the tenth time on Kaggle ([link](https://www.kaggle.com/competitions/march-machine-learning-mania-2024/overview)). You are encouraged to participate in both challenges, however, the end-of-challenge submission is slightly different.

**Workshop:** There are two workshops taking place in the week leading up to Selection Sunday. You are welcome to attend either, or both!
- Sports Analytics Club will be hosting a workshop for getting started with a prediction model for any game of 2 opponents. This will take place on Monday, March 11 at 5:30pm in Engineering Hall, room 2255. Links to the files for this workshop are posted [below](#machine-learning-workshop-download-links).
- dotData Club is also hosting a similar workshop on Wednesday, March 13 at 6pm in Computer Sciences, room 1240. This workshop will be led by Professor Bret Larget.

**Data:** Please refer to Kaggle's Data tab ([link](https://www.kaggle.com/competitions/march-machine-learning-mania-2024/data)) to access the provided data and the accompanying data dictionary. You are welcome to, but not expected to, collect any additional data that you would like.

**Submitting:** A major distinction between the 2 challenges is what you need to submit. For both, you will be spending most of your effort building a model to predict the winner of a game. However, for this challenge, you will be expected to provide a likelihood estimate for every possible matchup in the tournament (Meaning many of these games won't ever happen). Once the tournament teams are selected, we will provide code here (not yet available) in both R and Python to systematically create this standardized submission file, so that we can easily measure success. This CSV file will consist of 3 columns and 1 row for each possible matchup (68 C 2 = 2278). The first column will consist of the better seed, the second will be the worse seed, and the last column will be your model's predicted likelihood of the better seed winning (0-1).

*Here is the dataframe that will be used to evaluate your model. You must use your model to add a new column to this dataframe, with values 0 to 1, that represents the likelihood that T1 would win against the given T2.*

| |T1_Spelling|T1_ID|T1_Seed|T2_Spelling|T2_ID|T2_Seed|
|--- | --- | --- | --- | --- | --- | --- |
0|south carolina|3376|1|usc|3425|1
1|south carolina|3376|1|texas|3400|1
2|south carolina|3376|1|iowa|3234|1
3|south carolina|3376|1|ohio state|3326|2
4|south carolina|3376|1|notre dame|3323|2

<a href="https://wiscosac.github.io/files/2024_Potential_Matchups.csv">Download the whole dataframe here</a> <br>
[Submission form](https://forms.gle/iHJ7xNB9RS6omVGc6) <br>
[Python Submission Guide](https://github.com/wiscosac/wiscosac.github.io/blob/master/files/python_submission_ex.ipynb)

**You will need to submit (1) the CSV file with your likelihood of winning for each possible matchup and (2) replicable code file(s) that show the methods you used to get your predictions.** 

**Scoring:**
There will be 3 winners in our competition:
* Winner 1: Highest Score using Brier Score. This is the mean squared difference between your predicted likelihood and the actual outcome of the game. **Ex.** if a 1-seeded Purdue loses to a 6-seeded Wisconsin in the Elite 8, and your model predicted that Purdue had a 70% chance to win, you would receive (1-0.7)^2=0.3^2 points for this matchup. These scores will be calculated for each game that is played and averaged together, regardless of whether you expected the teams to even make it to the game that they played in.

* Winner 2: Most games picked correctly (likelihood > 0.5)

* Winner 3: Most creative, or unique approach to building your model.

That's all for now, so get started on building a model for predicting the winner of a game between 2 teams.
Then, come back here on Selection Sunday (March 17th) once the tournaments are set. From there, you can run your model for each possible matchup, with code that will be made available here (not yet available).
Once done, fill out this (not yet available) Google Form to submit your files. From there, keep up with how your model is doing by checking back here after each round!

Please reach out to llwelsh@wisc.edu with any questions!

## Machine Learning Workshop Download Links

* <a href="https://wiscosac.github.io/files/modelcode.R">R Workshop</a>
    * Data for the R workshop can be found [here](https://www.kaggle.com/datasets/nishaanamin/march-madness-data).
* <a href="https://wiscosac.github.io/files/ML_Mania_Workshop.ipynb">Python Workshop</a>
    * Data for the Python workshop can be found [here](https://www.kaggle.com/competitions/march-machine-learning-mania-2024/data).
    
