---
title: "Predicting NBA MVP"
date: 2024-06-11
collection: publications
permalink: /projects/2024/06/NBA-MVP
excerpt: 'Max Rotblut’s project using ML to predict future NBA MVP’s'
---
By Max Rotblut

Predicting the MVP of a season using Machine Learning (Sklearn) with data from 2019-20 season to 2023-24 season for all players and data from the 1955-56 season for MVP’s

I did this using Machine learning, the model I created first applies a Standard Scalar transformation then a Linear Regression.

A standard scaler centers the data around 0 then makes the variance of the data 1, allowing the machine to easily understand the data is comparison to other columns. The following transformation is applied:

$$x_{scaled} = X - \frac{\mu}{\sigma}$$

After the data is made uniform, a linear regression is applied, this assumes there is a relationship between the data and finds the relationship using ordinary least squares linear regression. Sklearn forms the following formula:

$$y = Xw + b$$

Where 

$y$ = the dependant variable (Whether or not a player is MVP) 

$X$ = the matrix of input features 

$w$ = the vector of coefficients 

$b$ = the intercept term

This formula can then be used on new data to predict the dependant variable.

The model is 76% correct at predicting past MVP’s, and can be used to get an idea on who will be MVP for a season. It can’t be perfect because MVP is the opinion of a panel of sportswriters and broadcasters throughout the United States and Canada, therefore the model is trying to predict human decisions based on opinion without any information about the people.

[View full project and code on Github](https://github.com/mrotblut/NBA-MVP/)
