---
template: BlogPost
path: /react-hackernews-3
date: 2021-02-15T16:22:28.094Z
title: >-
  Learn React.js by Building Hacker News (Part 3) - JSX and adding CSS To Your
  App
metaDescription: >-
  In this article, you will start building out your React application and get
  into the most important concept in React, Javascript XML (JSX).
thumbnail: /assets/hn.png
---
In this article, you will start building out your React application and get into the most important concept in React, Javascript XML (JSX).

**JSX** is easy to pick up if you are familiar with **HTML** and **JavaScript**.

If you ended up here without reading the previous sections, you can find all the previous parts below. I would recommend reading this series in order.

**Hacker News Clone Series:**

Part 1: [What is React?](https://www.colorcoder.dev/react-hackernews-1)\
Part 2: [Create-React-App Internals](https://www.colorcoder.dev/react-hackernews-2)\
Part 3: [JSX and adding CSS To Your React App](link)

You can find all of the source code for the series at my [Github](https://github.com/safderareepattamannil/hackernewclone-react-tutorial). The source code can be found [here](https://github.com/safderareepattamannil/hackernewclone-react-tutorial/tree/part-3).

Clone this branch, open up a terminal in the folder, run `npm start`, and let's get right into it.

## What is JSX?

**JSX is the syntax** used by React to embed HTML into a JavaScript file. It also allows you to nest JavaScript into those HTML components as well. The **JSX** code is compiled into HTML and Javascript using [Babel](https://babeljs.io/docs/en/). 

![Image result for babel logo png](https://cms-assets.tutsplus.com/uploads/users/48/posts/24512/preview_image/babel-1.png)

Babel is a transpiler. A transpiler converts the source code into an equivalent source code in another language. A great reference for transpilers can be found here at [Javascript Transpilers](https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them) by Peleke Sengstacke.

Let's take a look at *App.js*.

```js
function App(){
	return (
		<div className="App">
		   <h1>Hello World</h1>
		</div>	
	)	
}
```

  Here we can see some interesting syntax that looks like a combination of **Javascript** and **HTML**.

The return statement can be thought of as a wrapper for everything that shows up on the page in that component. We see **Hello World** in our local environment because we render it via the return statement.

Although the syntax look's similar to HTML, there are some rules to consider when working with JSX.

## Multiple HTML Tags

The first consideration to make is when we want to return multiple items in the return statement. **Nested elements must be wrapped in at least one parent container.**

In the *App.js* file, we have nested the `<h1>` tag within a parent `<div>`. 

Let's remove, the parent `<div>` container and see what happens.

```js
function App(){
	return (
		<h1>Hello World</h1>
	)	
}
```

Did nothing happen? That's expected, it will only throw an error if there are multiple HTML elements.

Let's add a couple more elements.

```js
function App(){
	return (
		<h1>Hello World</h1>
		<p>I am Color Coder</p>
		<p> I like to write things </p>
	)	
}
```

You should see the following error now.

> **<span style="color:red"> Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment</span>.**

No big deal, let's fix this error by wrapping the elements within a `<div>` container.

```js
function App() {
    return (
        <div>
            <h1>Hello World</h1>
            <p>I am Color Coder</p>
            <p> I like to write things </p>
        </div>
    );
}
```

We should be back in business now.

Now let's starting building out our barebones navigation component of [Hacker News](https://news.ycombinator.com/). 

![Hacker News Navigation](/assets/navbar.png)

We can layout the menu items using `<a>` tags and use a nested image for the logo. You can find the logo within the source code. I've left the **href** as a placeholder for now until we start building out the other pages.

**Aside: React requires you to pass in a value for alt text aatribute in `<img>` tags**.

```js
function App() {
    return (
        <div>
            <a href="#"><img src="/assets/logo.gif" alt="hn logo"/></a>
            <a href="#">Hacker News</a> 
            <a href="#">new</a> | 
            <a href="#">threads</a> | 
            <a href="#">comments</a> |
            <a href="#">ask</a> |
            <a href="#">show</a> |
            <a href="#">jobs</a> |
            <a href="#">submit</a> 
            <a href="#">login</a>
        </div>
    );
}
```

Might not look great yet but it's a start. 

## Defining JSX Attributes

**JSX Attributes** are optional parameters that can be passed into the **JSX** tags. In React, these attributes are referred to are **Properties (props)**. This includes everything you would recognize from classes to event handlers. You can find the full list of all the available props at the [React Dom Elements documentation](https://reactjs.org/docs/dom-elements.html).

Let's start styling this to resemble the navigation bar. Styling in React can be done in two ways.  

1. Inline Styling  
2. Importing from external CSS files.

### Inline CSS Styling

To style CSS inline we need to pass the `style` prop into a JSX element. Let's add the background color to the navigation bar.

First add a `style` prop to the parent `<div>` container. A prop is enclosed in curly braces `{}`. The style prop takes a JavaScript object containing the styles we would like to add. You can read more about styles in React [here](https://reactjs.org/docs/dom-elements.html#style).

One thing to note is that the property names from CSS when using JSX vary a little bit. JSX uses **camel-case notation** to identify the property. So instead of `background-color: color`, we would remove the hyphen and convert it to camel-case. `backgroundColor: 'color'`. Also, note that the property value must be a string as React expects a Javascript object.

```js
function App() {
    return (
        <div style={{backgroundColor: '#ff6600'}}>
            <a href="#"><img src="/assets/logo.gif" alt="hn logo"/></a>
            <a href="#">Hacker News</a> 
            <a href="#">new</a> | 
            <a href="#">threads</a> | 
            <a href="#">comments</a> |
            <a href="#">ask</a> |
            <a href="#">show</a> |
            <a href="#">jobs</a> |
            <a href="#">submit</a> 
            <a href="#">login</a>
        </div>
    );
}
```

You should end up with this,

![Inline Styled Nav Bar](/assets/inlinestyled.png)

Let's add some more styles to make this more like the actual website.

```js
function App() {
    return (
        <div style={{
                    backgroundColor: "#ff6600",
                    display: "flex",
                    flexDirection: "row",
                    color: "black",
                    padding: "2px",
                }}
        >
            <a href="#"><img src="/assets/logo.gif" alt="hn logo"/></a>
            <a href="#">Hacker News</a> 
            <a href="#">new</a> | 
            <a href="#">threads</a> | 
            <a href="#">comments</a> |
            <a href="#">ask</a> |
            <a href="#">show</a> |
            <a href="#">jobs</a> |
            <a href="#">submit</a> 
            <a href="#">login</a>
        </div>
    );
}
```

**Hold on, this is starting to get messy.** Imagine if we needed to style each of those links, that would be a lot of information written inline.

Let's optimize and refactor the code by storing style as a variable.

```js
function App() {
    return (
    	const navStyles = {
	        backgroundColor: "#ff6600",
	        display: "flex",
	        flexDirection: "row",
	        color: "black",
	        padding: "2px",
   	   };
    
    
        <div style={navStyles}
        >
            <a href="#"><img src="/assets/logo.gif" alt="hn logo"/></a>
            <a href="#">Hacker News</a> 
            <a href="#">new</a> | 
            <a href="#">threads</a> | 
            <a href="#">comments</a> |
            <a href="#">ask</a> |
            <a href="#">show</a> |
            <a href="#">jobs</a> |
            <a href="#">submit</a> 
            <a href="#">login</a>
        </div>
    );
}
```

This is better but once again if we had complex applications with more components we would need to create multiple variables and styles. There has to be a better way.

### The better way: external Style Sheets.

Similar to when developing a vanilla website using **HTML/CSS** we can define external **CSS** files and then import them into our application. 

Create React App provides us with an *index.css* and an *App.css* file. The *index.css* file is the global stylesheet that is applied to our *index.js* file. Here we can store the styles that we want to carry throughout our application. 

Remove all the existing content and add the following code into your *index.css* file.

```css
/** Utilities **/
.bold {
    font-weight: bold;
}

:root{
--orange: #ff6600;
}

/** Globals **/
html {
    box-sizing: border-box;
}

body {
    font-family: Verdana, Geneva, sans-serif;
    color: black;
}

.container {
    display: flex;
    width: 80%;
    margin: 0 auto;
}

a {
    text-decoration: none;
    color: #000;
}
```

The *App.css* file is **CSS** file defined to be used within *App.js*. This  introduces modularity and decouples your styles into multiple files. This makes your code organized and easy to work on. Let's delete the *App.css* file and under the src directory, create another directory called styles.We will store all our styles within this folder.

React will likely throw an error but don't worry about it as it is because *App.js* references the *App.css* file which we deleted. We will remove that soon.

Then create a file called *Nav.css* in the styles directory. 

![File Structure](/assets/filestructure.png "Project File Structure")

Add the following code into the *Nav.css* file.

```
/** Navigation Styling **/
.navigation {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--orange);
  color: black;
  padding: 2px;
  width: 100%;
}

.navigation a {
  padding: 0px 5px;
}

.hn-logo {
  border: 1px solid white;
  margin-top: 2px;
}

.title {
  margin-right: 5px;
}

.navigation .login {
  margin-left:auto;
}
```

Now we will need to inject this CSS into our application.

Open up App.js and change the import statement reference from the deleted *App.css* file to the following.

`import "./styles/Nav.css";`

Now we can use the `className` prop to attach CSS classes to the tag. This is equivalent to adding the `class` attribute to an HTML tag. 

Here is the full *App.js* file,

```
import "./styles/Nav.css";

function App() {

    return (
        <div className="container">
            <div className="navigation">
                <a href="#">
                    <img
                        className="hn-logo"
                        src="/assets/logo.gif"
                        alt="hn logo"
                    />
                </a>
                <a href="#" className={"bold title"}>
                    Hacker News
                </a>
                <a href="#">new</a> |<a href="#">threads</a> |
                <a href="#">comments</a> |<a href="#">ask</a> |
                <a href="#">show</a> |<a href="#">jobs</a> |
                <a href="#">submit</a>
                <a href="#" className="login">
                    login
                </a>
            </div>
        </div>
    );
}
export default App;
```

### Final Result

![Final Result](/assets/final_result.png)

 **You did it,** you styled and built out your own Hacker News navigation!

## What's next?

Now that you have a grasp of how JSX and styling work in React. We will start exploring further concepts in JSX such as **JS Expressions and Comments**. We will start refactoring code by introducing the technical aspects of **React Functional and Class-Based Components**.

If you liked this tutorial and are enjoying the series. Make sure you subscribe to my newsletter to keep up with the latest posts and updates. The next tutorial will be delivered right to your inbox.

See you in the next one! 

&larr; [Part 2](https://www.colorcoder.dev/react-hackernews-2)
