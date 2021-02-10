---
template: BlogPost
path: /react-hackernews-1
date: 2021-02-09T17:41:56.379Z
title: >-
  Build a Hacker News Clone in React (Part 1) - Introduction to the World of
  React
metaDescription: Tutorial series on React.js.
thumbnail: /assets/hn.png
---
## What is React.js?

![1_yjH3SiDaVWtpBX0g_2q68g.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1612810012755/wGckgPaYa.png)

If you haven't already heard of React, most likely you've been living under a rock. React is a JavaScript library created by Facebook, it used to create beautiful functional user interfaces using a **component-based architecture** (we'll get to that in a second).

React allows us to use reusable pieces of code to build web applications. Before React and other frontend frameworks we were limited to using 'vanilla Javascript' and libraries such as jQuery to build out applications. This meant long development cycles and hard to catch errors and bugs. React can also be used to create cross-platform mobile applications via React Native (hopefully a tutorial on Native coming soon as well). React is used by multiple large companies which include Uber, Airbnb, Pinterest, Instagram and Netflix. 

If those weren't good enough reasons to learn React, according to the [2020 Stack Overflow Developer Survey](https://insights.stackoverflow.com/survey/2020). React.js is catching up to ASP.NET as the most loved and more importantly, is the **MOST WANTED** web framework technology amongst employers.

![react-stats.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1612806182899/w6TotnDup.png)

## What are you going to build?

This is the first chapter in the multipart series on how to build a full application React. We will be building a Hacker News clone which where we can add posts, delete posts and search for posts. Sounds familiar right? The classic CRUD application. To those of you who are not familiar with CRUD, it is defined as follows:

**Create, Read, Update and Delete (CRUD)**

> In computer programming, create, read, update, and delete[ (CRUD) are the four basic functions of persistent storage. -Wikipedia 

The best part about understanding how to build a CRUD application is that almost every application that exists on the web is some form of CRUD. Being able to abstract this idea will allow you to build anything. The idea is to develop an arsenal of patterns that you can tweak and reapply to different problems, if you run into a problem, 99% of the time someone else has already had this problem (and most likely the solution already exists, so don't go reinventing the wheel).

I want you to be able to create other similar applications as soon as you finish this series or start alongside. The best part of being a Software Engineer is that you can manifest all your ideas yourself.

I will be including all the source code on GitHub in case you get stuck anywhere. The source code will be split up by individual branches per tutorial. When I first started I always found that I was getting stuck in tutorials because I would miss one word then my whole application would stop running. This should help you have a reference to make sure you are on the right track. 

This series will cover the following React topics in-depth and few other topics a swell.

1. Create-React-App 
2. JSX
3. Functional Components vs Class based Components (although we will be focusing on Functional in this tutorial series)
4. Props
5. State handling with useState
6. useEffect
7. Conditional Rendering
8. Fetch API for requests
9. React best practices

### What are components?

A React application is made up of multiple components. Components are simply reusable bits of code, they are almost like functions but work in isolation and when React renders it to the DOM it returns an HTML element. Components come in two types, Class based components and Functional components. We will cover those two in a later post. A component can have other components inside it, this is called component nesting.

### How to think in Components?

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1612810111055/Fzn5qmAO8.png) Our first step in planning out a React application is deciding how we want to split up the user inferace. I generally like to do this  [Figma](http://figma.com/) or on paper and just draw out a low fidelity version of the application before diving into the code. It helps me have a sense of direction instead of just winging it. So let's take a look at the [Hacker News](https://news.ycombinator.com/) website.

**Step one** is to decide how we want to split up the website into components. Looking for distinct sections. We can see that there is a clear Navigation bar, a content area and a footer. This can be our starting point.

![highlightedcomponents.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1612806207898/1WtQ0QlTw.png) **Step two** is to look for repeating patterns. Look for parts of the layout where something appears consistently. We notice that each post has the same layout, it includes an article number, a title, an author, date, upvote button, url, etc. We can make this into a component called Post.

![highlightedposts.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1612806217581/MBV640sXK.png)

## What do you need to know before starting?

The only things you need to be comfortable with before diving into React. You should have an intermediate understanding of Javascript (ES6 -- arrow functions, array methods etc), HTML, CSS and basic terminal usage. It would also be good if you had a grasp of more advanced JavaScript such as Promises, Callbacks and common functional patterns but not necessary as I'll run through a refresher each time one of those concepts come up.

**So let's get started!**

# Project Setup

We will be using **Create React App** (CRA), CRA is an environment used for learning React but can be easily used for simple to medium scale React applications as well. It allows us to use the latest JavaScript features and does all your building for you. This means you can sit back, relax and focus on the fun part of coding instead of spending time on setup. CRA uses Babel and Webpack to build your app but more on that later (this is called a tool chain). 

1. The first thing you will need to do is to install Node. You can check if you have Node installed by opening a terminal and running `npm --version`.

If it returns a version number(at the time of writing I got 6.14.11) means that you have Node installed. If you do not have Node installed you can download it directly from [nodejs.org](https://nodejs.org/en/). Once you have run through the installation, you can run the terminal command to ensure it has been set up correctly.

2. Once Node is installed, it will come with npm. Npm is a package manager for Javascript and allows us to use third party packages and libraries in our applications. You'll be using this al ot so if you have the time you should skim the [npm documentation](https://docs.npmjs.com/getting-started), this will help you in the current and future projects. Now we start our project setup. 
3. Open a terminal and cd into a folder you would like to set up your project in then run the following commands. What this will do use npx which from npm to install the CRA dependencies from the npm registry into a folder called hackernews. Then npm start will spin up a local server on port 3000 which has live reload so any changes you make in the code will be reflected here.

```shell
npx create-react-app hackernews
cd hackernews
npm start
```

![cra.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1612806200845/Dj8ybv94U.png)

## Next steps

This seems like a good point to stop and take a breather. In the next post, we will start working on the project structure and developing the application layout. I'll catch you in the next one where we will be covering the structure of a create-react-app and all the bells and whistles included.

[Continue to Part 2](https://www.colorcoder.dev/react-hackernews-2) &rarr;
