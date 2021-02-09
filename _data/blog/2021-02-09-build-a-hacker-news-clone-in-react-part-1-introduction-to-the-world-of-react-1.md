---
template: BlogPost
path: /react-hackernews-2
date: 2021-02-10T17:46:26.204Z
title: >-
  Build A Hacker News Clone in React (Part 2) - What does Create-React-App
  Include?
metaDescription: React.js tutorial for beginners.
thumbnail: /assets/hn.png
---
## Project Setup

Prior to starting building, let's go over some of the files that come with the create react app. Within your favourite text editor let's take a look at the files (I use Visual Studio Code, which has a plethora of plugins just for React).

If you haven't read the first part, make sure you do that first,  **[click here](https://colorcoder.hashnode.dev/build-a-hacker-news-clone-in-react-part-1-introduction-to-the-world-of-react)** ! 

### Folder Structure

```

```

Let's explore each of these files and their functionality.

#### README

A README file contains information about other files within the project. A README provides documentation about a project which can include everything from how to install the dependencies to run the application. If we open the Create-React-App README file we can find information on what different npm commands do. These npm commands include ones like `npm start` which we used in the previous part. 

![readme](https://cdn.hashnode.com/res/hashnode/image/upload/v1612832044499/IkT4P49bu.png)

### node_modules

This is the directory that contains all the project dependencies which come with create-react-app but also where future dependencies that are added will be installed as well. 

To install an npm package we can use the `npm install {package name}` command. You can find a list of most used packages [here](https://www.npmjs.com/browse/depended), the npm library contains thousands of extremely useful packages. Most of these packages are well documented as well.

### package.json

The package.json file is the document that contains various metadata relevant to the project. The file is used to give node information about the project such that it can handle dependencies and run scripts. This file is formatted in JSON.

![package.json preview](https://cdn.hashnode.com/res/hashnode/image/upload/v1612832059648/S0fZEP8d8.png)

Let's cover the two most important parts of this file. Starting with the dependencies list. The dependency list shows each installed dependency alongside the version. Every time you use `npm install`, it will show up here if the installation was successful.

![dependecies.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1612832066377/SzIBNMTMo.png) The second most important section is the script section. This section shows what each command actually runs. Each individual item is an alias to the full script. Then each script can be run using by prefixing it with `npm`. So when we ran `npm start`, we actually ran `npm react-scripts start`.

![scripts preview](https://cdn.hashnode.com/res/hashnode/image/upload/v1612832083101/_K0Hqq6iX.png)

### .gitignore

A gitignore files is where you specify which files you do not want added to your Github. This is usually done so that you don't accidentally end up uploading sensitive information such as passwords and API keys to public places. In our case, we don't want to upload all the dependencies to source control, we can use the `npm install` command to install dependencies from the package.json file.

### public/

![index.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1612832203601/gI-9AGEVo.png) The public folder stores the static files that are part of the project. It includes a file called index.html which is the entry point for our React project. The index.html file is a pretty straightforward HTML file. The section to note is is 

```html

```

This is the div where our React components are injected into, more coming on this later.

### src/

This is where all our React logic will be located. Let's explore this directory further.

#### index.js

The index.js file is the section which parents all our application, this is what gets rendered in the root div mentioned above. Let's break this apart into sections.

At the top of all component files, we will find import statements. This can include components, modules and libraries used within the file.

**Importing Modules**

In React we use **ES6** syntax to import modules. Which follows `import alias from package` structure. This will allow us to use these modules within our files.

![importstatements.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1612832091227/NtwYQkpZ1.png)

**ReactDOM**

![reactdom.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1612832100765/iaxRGIVCC.png)

In the imports above, we see that we import,

```js

```

The react-dom package provides methods to manipulate the DOM. The render method takes two arguments, the component to render and the container or element we want to render the component into. 

```js

```

This is how our index.html gets populated with the React components.

#### reportWebVitals.js

The reportWebVitals file is a file that allows you to measure and analyze the performance of your application. But we won't be using this in our project so you can delete the file but make sure you also remove the import statement and the method call within index.js

```js

```

#### App.js

![app.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1612832119939/xFbJXRNq0.png) The **App.js** is the main container for all your components. You can imagine this as your home page. This file is an example of a Functional Component, we can tell this is a functional component by the structure which is as follows.

```js

```

All a functional component is a javascript function that returns some HTML. For our project let's clear out some of the code here which we do not need. Let's remove everything between `<div className="App> </div>` as well as the import logo statement. You should be left with just. Let's throw in a hello world to make sure it works later.

```js

```

You can now go ahead and delete the `logo.svg` , we won't be needing that either.

#### App.css and index.css

These files are CSS files injected to both index.js and app.css. We can remove all the content within them and we will add to them later as we build our project.

### App.test.js and setupTest.js

This is a setup for React testing using Jest but we will not be covering tests in this series so we can delete these files as we.

## Our Final Step

Now, let's open up a terminal and run `npm start` within our directory and if all the steps above have been completed we should end up with the following.

![final.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1612832134818/vYml2dkjL.png)

## Next Steps

Now hopefully you have a high-level understanding of what each of the files represents. If you would like to read more, please refer to the Create React App [documentation](https://create-react-app.dev/docs/getting-started/). In the next tutorial, we will start building out our application and cover what JSX is.



[Back to Part 1](https://www.colorcoder.dev/react-hackernews-1) &larr;
