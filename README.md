# Progressive Web Apps @cmda-minor-web · 2021/22

## Assessment
"In this course we will convert the client side web application previously made Web App From Scratch into a server side rendered application. We also add functionalities based on the Service Worker and turn the application into a Progressive Web App. Ultimately we are going to implement a series of optimisations to improve the performance of the application."


![pwa](https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png)

## Table of Contents
- [Synopsis](#synopsis)
- [Description](#description)
- [Communication](#communication)
- [Goals](#goals)
- [Grading](#grading)
- [Programme](#programme)


## Description
In this course we convert the client side web application, made during the Web App From Scratch course, into a server side rendered application. We also add functionalities based on the Service Worker and turn the application into a Progressive Web App. Finally we’ll implement a series of optimisations to improve the performance of the application.  

## Week 1

In week one I converted my Barcode Scanner application into a server side application. But after one day I realised that this was not the best strategy and I wanted to create something new. In the mean time I started reading about NodeJS and Express. I followed some tutoials and got my first look at the project.

On day 2 I decied to try to make a new application but with another API. I chose for [The Movie Databse API](https://developers.themoviedb.org/3/getting-started/introduction). With this API I could get the data from different movies and tv shows. I started with trying to fetch the data server side and into my console.

## Week 2

I made a home page last week that displayed the movies. Now it's time to make a overview page per movie. I created a new route that get's the ID of the movie. This route will contain the data from the movie with that corresponding ID. 
I also wanted to make a search form in my application for the user to be able to search for movies. But after I learned about service workers and making your PWA work offline I decided not to implement that idea.
This week I also created a service worker that made my PWA usable even if the user lost his or hers connection with the internet.

### How to get the server up and running 
#### Installation
To install this application you need to have `NodeJS` and `NPM` installed on your device.

##### How to get this to your machine?

Clone this repo to your computer with the following command
```
git clone https://github.com/basv1996/progressive-web-apps-2122.git
```
In the command line type the following code to download 

```
npm install
```
this will install all the packages you need to run this application 

#### Starting the server
The application should start autamatically if not then try the following.
```bash
npm run start
```
The application will be running on port 3000. So you'll have to go to localhost:3000

## Communication
- [Github](https://github.com/cmda-minor-web/progressive-web-apps-2122)
- [Microsoft Teams](https://teams.microsoft.com/l/channel/19%3aacf0946687dc4ba9a9400fb7c6d7a81c%40thread.tacv2/05%2520-%2520Progressive%2520Web%2520Apps)
- [Brightspace](https://dlo.mijnhva.nl/d2l/home/324147)

If you have questions:
- [Look at the additional resources]()
- [Use a search engine like startpage](https://www.startpage.com/)
- [Ask questions on MS Teams](https://teams.microsoft.com/l/channel/19%3a2b5ac900b14c4b68a31dc5dbb380dcbe%40thread.tacv2/06%2520-%2520Real%2520Time%2520web) (please help each other!)
- [Contact a student-assisstant](#synopsis)
- [Contact a lecturer](#synopsis)

## Goals
After finishing this program you can:
- _deal with server side rendering;_
- _implement a Service Worker;_
- _enhance the critical render path for a better runtime or percieved performance._

## Grading
Your efforts will be graded using a single point rubric (see below). You will have to pass the criterion (centre column) to pass the course. During the test you will be consulted and will be given feedback on things we think deficient and things we think are an improvement on the criterion.

| Deficiency | Criterion | Improvement |
|:--|:--|:--|
|  | *Project* Your app is published and can be accessed using the browser. Your project is thoroughly documented in the `README.md` file in your repository. Included are an explanation of client- server rendering, an activity diagram including the Service Worker and a list of enhancements to optimize the critical render path implemented your app. |  |
|  |*Serverside rendering* You’ve implemented serverside rendering and have articulated how it works and why you should want it. |  |
|  |*Service Worker* You’ve implemented a usefull Service Worker and show it’s working in an activity diagram. |  |
|  |*Critical render path* You’ve enhanced the critical render path for a better runtime or percieved performance in multiple ways and have described how you managed to do this. |  |

## Programme

### Daily Schedule
To keep things simple we use a daily schedule that will be used during normal course days (monday/tuesday). We make exceptions for fridays, on these days a different schedule will be given.

| Time | Who | Activity |
|:--|:--|:--|
| *~09:00* | *(Declan, Justus)* | *Standup* |
| 09:30 | Tribe *+(Declan, Justus)* | Talk with crucial information (make sure you attend!) |
| 11:00 | Tribe | Work on the (day)assignment |
|  | Team 1 *+(Declan)* | Standup |
|  | Team 2 *+(Justus)* | Standup |
| 11:20 | Team 3 *+(Declan)* | Standup |
|  | Team 4 *+(Justus)* | Standup |
| 11.40 | Team 5 *+(Declan)* | Standup |
|  | Team 6 *+(Justus)* | Standup |
| 12.00 | Team 7 *+(Declan)* | Standup |
|  | Team 8 *+(Justus)* | Standup |
| 12.20 | Team 9 *+(Declan)* | Standup |
|  | Team 10 *+(Justus)* | Standup |
| 13:00 | Tribe *+(Daan, Justin)* | Continue work on the (day)assignment |
| 16:00ish | Tribe *+(Daan, Justin)* | Wrapup |

### Week 1 - Server Side Rendering 📡
Goal: Render web pages server side

[Exercises for week 1](./course/week-1.md)

#### Monday 21 maart    
We start out with a short explanation of this course. Right behind is a presentation on Server Side Rendering by Declan Rek from *de Voorhoede* [Server Side Rendering - slides by Declan Rek](course/cmd-2022-server-side-rendering.pdf)

After this presentation you may start working on [this weeks exercises](./course/week-1.md). We’ll hold standup meetings in teams according to the roster you see at [daily schedule](#daily-schedule). At the end of the day you’ll do a wrap-up of your work and take the evening off.

#### Tuesday 22 maart
We’ll split up in two groups, those who want to go through the details again team up with Justus, those who want to go deeper team up with Declan. Both groups will hold live-coding sessions and will be able to ask questions.

After this live-coding session you continue working on [this weeks exercises](./course/week-1.md). We’ll hold standup meetings in teams according to the roster you see at [daily schedule](#daily-schedule). You’ll finish with a wrap-up of your work and take the evening off.

#### Friday 25 maart
We’ll be introduced to Coolblue! They’ll show us around their workfloor and tell us about (working in) their company. You can use the spare time to finish [this weeks exercises](./course/week-1.md) and ask questions. Wrap-up your work and take off for the weekend. We might go for drinks..

| Time | Who | Activity |
|:--|:--|:--|
| 13.00 | Tribe *+(Declan, Justus)* | Questions.. |
| 13.30 | Tribe *+(Declan, Justus)* | Virtual company meeting @ Coolblue |
| 16.00 | Tribe *+(Declan?, Justus?)* | (drinks?!) |

### Week 2 - Progressive Web App 🚀
Goal: Convert application to a Progressive Web App

[Exercises for week 2](./course/week-2.md)  

#### Monday 28 maart
We set off the week with a presentation on Progressive Web Apps by Declan Rek from *de Voorhoede* [Progressive Web Apps - slides Declan Rek](./course/cmd-2020-progressive-web-apps.pdf)

After this presentation you’ll start working on [this weeks exercises](./course/week-2.md). Again, we’ll hold standup meetings in teams according to the roster you see at [daily schedule](#daily-schedule). We’ll wrap-up the day as usual and take the evening off.

#### Tuesday 29 maart
We’ll split up again, those who want to go through the details again team up with Justus, those who want to go even deeper team up with Declan. Both groups will hold live-coding sessions and will be able to ask questions.

After this live-coding session you continue working on [this weeks exercises](./course/week-2.md). We’ll hold standup meetings in teams according to the roster you see at [daily schedule](#daily-schedule). You’ll finish with a wrap-up of your work and take the evening off.

#### Friday 1 april (or is it...?!)
We will have a [peer review session](./course/peer-review.md). You will read, comment and fire issues on each others code. Doing this helps others dotting the i’s on their project.

| Time | Who | Activity |
|:--|:--|:--|
| 13.00 | Tribe *+(Declan, Justus)* | Peer review |
| 15.30 | Tribe *+(Declan, Justus)* | Wrap-up for the weekend |
| 16.00 | Tribe?! | (drinks?! or not?!) |

### Week 3 - Critical Rendering Path 📉 
Goal: Optimize the Critical Rendering Path

[Exercises for week 3](./course/week-3.md)  

#### Monday 4 april
We’ll set of the 3rd and final week with a presentation on the Critical Rendering Path by Declan Rek from *de Voorhoede* [Progressive Web Apps - slides Declan Rek](./course/cmd-2020-critical-rendering-path.pdf)

After this presentation you’ll work on [this weeks exercises](./course/week-3.md). Again, we’ll hold standup meetings in teams according to the roster you see at [daily schedule](#daily-schedule). We’ll wrap-up the day (are you starting to get the hang of it?) as usual and take the evening off.

#### Tuesday 5 april
We’ll split a third time... Again, those who want to go through the details team up with Justus. Those who want to go beyond.. fearlessly.. into the dark depths of optimization, team up with Declan. Both groups will hold live-coding sessions and will be able to ask questions.

After this live-coding session you continue working on [this weeks exercises](./course/week-3.md). We’ll hold standup meetings in teams according to the roster you see at [daily schedule](#daily-schedule). You’ll finish with a wrap-up of your work and take the evening off.

#### Friday 8 april
We will have our final [peer review session](./course/peer-review.md). You will read, comment and fire issues on each others code. Doing this helps others dotting the i’s on their project.

| Time | Who | Activity |
|:--|:--|:--|
| 13.00 | Tribe *+(Declan, Justus)* | Peer review |
| 15.30 | Tribe *+(Declan, Justus)* | Finalize your assignment |
| 16.00 | Tribe *+(Declan, Justus)* | (drinks?!) |


<!-- Here are some hints for your project! -->

<!-- Start out with a title and a description -->

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- ☝️ replace this description with a description of your own work -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- ...you should implement an explanation of client- server rendering choices 🍽 -->

<!-- ...and an activity diagram including the Service Worker 📈 -->

<!-- This would be a good place for a list of enhancements to optimize the critical render path implemented your app  -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- We all stand on the shoulders of giants, please link all the sources you used in to create this project. -->

<!-- How about a license here? When in doubt use GNU GPL v3. 📜  -->
