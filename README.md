# project_2_team_5

 [Technology-Stop-And-Blog](#Technology-Stop-And-Blog)
    - [Table of Contents](#table-of-contents)
  * [Motivation](#motivation)
  * [Description](#description)
  * [Pre-requisite](#pre-requisite)
  * [Demo](#demo)
  * [Technologyused](#technologyused-)
  * [Install](#install-)
  * [Codebase](#codebase)
  * [Application Walk-through](#Application-walk-through)

## Motivation
<strong> MOTIVATION:</strong> <br>
The motivation behind this project was to create an app that lets users create events and see what events they are attending. We wanted an app where people could host events, see what events they are attending and also add what they want to bring to the event if there is a potluck or a gift registery. Project creation is for the UT Austin Coding Bootcamp 2020/2021

## Description
This application allows a host to schedule an event online , in-person or an announcement for a few different types of events: Potluck & Party. 
Host can send invites to recipients via email, also add items that participants can contribute or gift registries they would like to bring to the event or announcement which is open for all who have access to the application.
Invitees can RSVP to the event with the number of adults & kids, choose available options for potluck & gifts that they would like include. They can view all received invitations from different hosts within their account.
Host can view RSVP details of participants to get a better idea of who will attend the event.

<strong>Features </strong>
The difference between our app and other event planning apps is that we utlize the functions of allowing guests to have a potluck feature and gift registery feature to make the event more oragnized. <br>


## Pre-requisite
Install NodeJS 

## Demo
![](./public/assets/myGif.gif?raw=true)
<img src="./public/assets/SS1.png">
<img src="./public/assets/SS2.png">
<img src="./public/assets/SS3.png">
<img src="./public/assets/SS4.png">

## Technologyused:
<ul>
    <li> 
    <a href="https://sequelize.org/" target="_blank">Sequilize  <a>
    <br>
    </li>
    <li> 
    <a href="https://nodejs.org/en/docs/" target="_blank">NodeJS <a>
    <li> 
    <a href="https://expressjs.com/en/guide/routing.html" target="_blank">Express.js<a>
    </li>
    <li> 
    <a href="https://dev.mysql.com/doc/" target="_blank">mySQL2 </a>
    </li>
     <li> 
    <a href="https://handlebarsjs.com/" target="_blank">Handlebars </a>
    </li>
</ul>
     NPM packages: <br>
    session, bcrypt, body-parser,connect-session, sequelize, express-handlebars, mysql2, nodemon,   sweet alert.


## Install:
<strong>Code installation:</strong> <br>
$ cd [path_to_save_codebase] <br>
$ git clone https://github.com/amcourson/project_2_team_5<br>

Add env file: <br>
Go to Folder, add new file name it as .env <br>
DB_USER='<your mysql username>' <br>
DB_PASSWORD='<your mysql password>' <br>
DB_NAME='EventPlanner_db' <br>

Installing Database: <br>
1. Via Terminal: <br>
msql -u root -p  <press enter> <br>
DROP DATABASE IF EXISTS EventPlanner_db; <press enter>  <br>
CREATE DATABASE EventPlanner_db; <br> <press enter> <br>

2. Using mysql work bence: <br>
Open sql work bence <br>
DROP DATABASE IF EXISTS EventPlanner_db;
CREATE DATABASE EventPlanner_db; <br>

<strong> Run the application: </strong> <br>
Open Terminal <br>
$ npm install <br>
$ npm run seed <br>
$ npm start <br>

<strong>How to use</strong>
This app uses the basic functionality of any common website but also allows users to create a login, create events, <br>
see what events they are attending as well as add to the potluck and gift registery depending on event. <br>

## Codebase
Github Repo: https://github.com/amcourson/project_2_team_5 


## Application Walk-through
<a href="https://serene-oasis-98788.herokuapp.com/" target="_blank"> Click here for Application Live url </a>


<strong>Process: </strong>
1. Run npm init -y. <br>
2. Install npm packages. <br>
3. Work feature by feature to implement the framework. <br>
4. Create server file. <br>
5. Create and seed database. <br>
6. Create models. <br>
7. Deploy to Heroku. <br>
8. Create homepage using api routes, handlebars, utils and helpers. <br>
9. Create login page using api routes, handlebars, utils and helpers. <br>
10. Create event page using api routes, handlebars, utils and helpers. <br>


<strong>Contribute</strong>
Please contact creators of the app. 

<strong> Credits </strong>
<br>

<strong> License </strong>
MIT licenses

© Angelica Courson, Arti Karnik, Brandon Andreae, Brodi Russell
