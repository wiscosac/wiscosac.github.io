---
title: "Predicting YAC from Separation"
date: 2025-12-17
collection: publications
tags: big-data-bowl
permalink: /projects/2025/12/YAC-Separation
excerpt: "Understanding how defensive positioning and movement affect yards after catch (YAC) on completed pass plays in the NFL \n By Max Rotblut, Shekhar Shah, Sam Negus, Josh Leffel"
---

By Max Rotblut, Shekhar Shah, Sam Negus, Josh Leffel

In the NFL today, most interest is directed toward the offense, even when it comes to advanced analytics. Naturally, we were inspired to complete a study that can benefit the defense while also speaking to what the offense is doing. This study examines how defensive positioning and movement affect yards after catch (YAC) on completed NFL pass plays in the NFL. YAC is a critical component of offensive success, often determining whether a short completion becomes a routine gain or an explosive play. By analyzing player tracking data from the 2023 NFL season, we quantified how close defenders are to receivers at the moment of the catch, understood the likely objective of the defender based on their movement direction and speed, and how these factors influence the likelihood and magnitude of YAC.

Using the play-by-play data, we identified targeted receivers and their primary defenders on each completed pass. For each play, we constructed spatial features such as the final distance between the defender and receiver at the catch point and directional alignment between the two players. We also built dynamic features that measure how quickly defenders are closing toward the receiver in the moments leading up to the catch. YAC was defined as total yards gained minus air yards, and a binary outcome was created to indicate whether a play resulted in at least four yards after the catch.

To model the probability of generating meaningful YAC, we trained an XGBoost classification model using these spatial and motion-based features. Our results showed that a defender’s closing speed, final separation distance, and directional alignment are among the most influential predictors of YAC outcomes. We also estimated a regression model to explain actual YAC using the model’s predicted probabilities along with situational football variables such as down, yards to go, pass length, and coverage type. The results confirm that defensive proximity and movement significantly impact post-catch production even after considering situational context.

Overall, this project demonstrates that defender positioning and reactive movement play a measurable and meaningful role in limiting YAC. These findings provide actionable insight for defensive coaching, particularly in emphasizing pursuit angles, closing speed, and leverage at the point of catch to reduce explosive plays.


[View the full Kaggle Writeup Here](https://www.kaggle.com/competitions/nfl-big-data-bowl-2026-analytics/writeups/new-writeup-1765340522824)

[View the code on GitHub Here](https://github.com/mrotblut/Sports_Analytics_big_data_bowl)