---
template: BlogPost
path: /react-hackernews-4
date: 2021-02-18T15:51:24.692Z
title: >-
  Learn React.js by Building Hacker News (Part 4) - Function vs Class Based
  Components
metaDescription: >-
  In this article, you will learn how to make your React app modular by breaking
  up the code into components. We will explore learn about class-based vs
  function components in React.
thumbnail: /assets/hn.png
---
In this article, you will learn how to make your React app modular by breaking up th code into components. We will explore learn about **class-based** vs **function** components in React.

If you ended up here without reading the previous sections, you can find all the previous parts below. I would recommend reading this series in order.

**Hacker News Clone Series:**

Part 1: [What is React?](https://www.colorcoder.dev/react-hackernews-1)\
Part 2: [Create-React-App Internals](https://www.colorcoder.dev/react-hackernews-2)\
Part 3: [JSX and adding CSS To Your React App](https://www.colorcoder.dev/link)\
Part 4: [Modular Components: Function vs Class-Based](https://www.colorcoder.dev/react-hackernews-4)

![Building Hacker News in React.js](https://cdn-images-1.medium.com/max/800/0*rRE_S6ewdtge5nj9.png)

You can find all of the source code for the series at my [Github](https://github.com/safderareepattamannil/hackernewclone-react-tutorial). The source code can be found [here](https://github.com/safderareepattamannil/hackernewclone-react-tutorial/tree/part-3).

Clone the relevant branch, open up a terminal in the folder, run `npm start`, and let's get right into it.

### React Components

Components are independent and usable chunks of code. In React we use components to create independent sections of the user interface and functionality.

The two major advantages provided by using components are

1. **Decoupling** — separates logic between components reducing dependencies and potential errors.
2. **Readability**

![MVC Flow Chart](https://cdn-images-1.medium.com/max/800/0*V2G68ibQa9P93WJA)

Unlike other software architecture approaches such as [Model, View and Controller](https://www.wikiwand.com/en/Model%E2%80%93view%E2%80%93controller) (MVC), the component-based architecture includes both the View (the user interface) and the Controller (the application logic).

### What are Function Components?

We can take the **JSX** we wrote earlier and refactor them into independent components which we can use in multiple places.

Other than being able to use them in multiple places, it allows our code to be more readable.

We have already seen a component before, the *App.js* is a **function component**. We can identify a function component by the structure of the component. The notation is the same as a **JavaScript** function.

![JavaScript Functional Component Example](https://cdn-images-1.medium.com/max/800/1*yNh-S2i0FNVr1qs_oHDE8A.png "JavaScript Functional Component Example")

### Creating A Function Component

Create a new directory under the *src* directory called components. We will store all of our components here.

Within the *component* directory create a JavaScript file called *Nav.js.* This will be our navigation component.

Your file structure should look like this.

![File Structure](https://cdn-images-1.medium.com/max/800/1*WEBBs5Rdcgh42iUHQkf2hw.png)

Within Nav.js, we can start creating our **function** component. There are three parts to every **function** component.

1. **The import statement**, where we import all required dependencies and files including other components.
2. **Function declaration**, where we declare the component and relevant JSX.
3. **The export statement**, where we allow the file to be imported from other files. You can learn more about export from the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export).

The *Nav.js* component,

```javascript
// Import Statement
import React from 'react'
// Function Declaration
function Nav() {
    return (
        <div>
            
        </div>
    )
}
// Export statement
export default Nav;
```

We can refactor this using an **arrow function** and by pulling the export into the function declaration.

```javascript
// Import Statement
import React from 'react'
// Function Declaration
export const Nav = () => {
    return (
        <div>
            
        </div>
    )
}
```

Let’s import the *Nav.css* file into the *Nav.js* component as well.

```javascript
// Import Statement
import React from 'react'
import "../styles/Nav.css";
// Function Declaration
export const Nav = () => {
    return (
        <div>
            
        </div>
    )
}
```

From *App.js* copy all the content from the navigation component we built into the *Nav.js* file. Everything from within the parent div with a class of *container*.

```javascript
import React from "react";
import "../styles/Nav.css";
export const Nav = () => {
    return (
        <div className="navigation">
            <a href="#">
                <img className="hn-logo" src="/assets/logo.gif" alt="hn logo" />
            </a>
            <a href="#" className={"bold title"}>
                Hacker News
            </a>
            <a href="#">new</a> |<a href="#">threads</a> |
            <a href="#">comments</a> |<a href="#">ask</a> |<a href="#">show</a>{" "}
            |<a href="#">jobs</a> |<a href="#">submit</a>
            <a href="#" className="login">
                login
            </a>
        </div>
    );
};
```

### Importing the New Component into our App

Within the *App.js* remove all the content which was copied earlier. We should be left with a parent div.

```javascript
function App() {
    return (
        <div className="container">
        
        </div>
    );
}
export default App;
```

We will need to **import** the *Nav.js* file to use the component within our file. Since *Nav.js* was **exported using an arrow function** we will have to use a [named import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) instead of a default import.

To use the component we wrap the name from the import in a self-closing JSX tag. This should now produce what we had before with much more readable code.

```javascript
import {Nav} from "./components/Nav"

function App() {
    return (
        <div className="container">
           <Nav/>
        </div>
    );
}
export default App;
```

### Import / Export Crash Course

Let’s quickly go over how the import and export functionality works in **React** using **ES6 JavaScript**.

**Default Imports**

A default import uses the following notation:

```javascript
// file1.js
import fileAlias from './file2'
```

A default import only works if we use a default export elsewhere

```javascript
// file2.js
export default file2
```

In the import, the file can be named anything as an alias. In this case, we use ‘fileAlias’.

**Named Imports**

A named import uses the following notation:

```javascript
// file1.js
import {file} from './file2'
```

A named import only works if we use a named export elsewhere.

```javascript
// file2.js
export const file2
```

A named import must use the name we exported unlike in a default import. But we can use the ***as***key-word to give them another name on import.

```javascript
//file1.js
import {file as myFileName} from './file2'
```

Note:  a module can only have **one default export** but can have an **unlimited amount of named exports**.

### Function vs Class-Based Components

You’re probably wondering why I’ve only been focusing on **function** components. This is due to the introduction of **React Hooks** in 2018 (version 16.8) .where the need for class components has been removed.

We will cover React Hooks in a later chapter but for now, all you need to know is that Hooks let us manipulate state and reuse stateful logic without the need for classes.

> We intend for Hooks to cover all existing use cases for classes, but **we will keep supporting class components for the foreseeable future.** At Facebook, we have tens of thousands of components written as classes, and we have absolutely no plans to rewrite them. Instead, we are starting to use Hooks in the new code side by side with classes. — [React Team](https://reactjs.org/docs/hooks-intro.html#gradual-adoption-strategy)

We won’t be diving into much about class components but let’s take a look at what they look like.

```javascript
// Example taken from React docs
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

A class component is a component declared in the form of an **[ES6 Class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).** The one major difference is it calls a render method which invokes a return method. Whereas a function component has only a return method.

We can convert a class component into a function component by removing:

1. The **class keyword** and replacing it with function (or arrow function).
2. The **extends React.Component**.
3. The **render()** method.

```javascript
// Example taken from React docs
function Clock(){
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
}
```

### Creating the Posts Component

Now you should have a broad understanding of how components work. Let’s start building out our Hacker News clone. We will be building a component that contains all the posts. The Posts component will have nested Post components that represent the individual posts.

![Sample Post Content](https://cdn-images-1.medium.com/max/800/1*ui-T1Z2PNpjeLCc1p3tmyg.png "Sample Post Content")

Create a new file called *Posts.js* under the components directory. Posts will be a function component. In the styles directory create a file called Posts.css and import that into the component as well. You can find the CSS file content in the source code as I will not be including that in the snippets.

```javascript
import React from 'react'
import '../styles/Posts.css'
export const Posts = () => {
    return (
        <div>
            Posts
        </div>
    )
}
```

We can **import** the Post component from within *App.js.*

```javascript
import {Nav} from "./components/Nav"
import { Posts } from "./components/Posts"
function App() {
return (
        <div className="container">
           <Nav/>
           <Posts/>
        </div>
    );
}
export default App;
```

![Posts filled Component](https://cdn-images-1.medium.com/max/800/1*shR8ZOB0zWEllaV8tD0IJg.png "Posts filled Component")

Now let’s create a reusable Post component called *Posts.js*and a stylesheet for it called Posts.css under styles.

Create a directory called assets, we will store assets accessed by the CSS files here.

![Profile File Structure](https://cdn-images-1.medium.com/max/800/1*WnOlmqbUiwSFTrUSa3mCfQ.png "Profile File Structure")

Your Post Component should look as follows,

```javascript
import React from "react";
import '../styles/Post.css'

export const Post = () => {
    return (
        <div className="post-container">
            <div className="top">
                <div className="rank">1.</div>
                <div className="upvote"></div>
                <div className="story-title">
                    <a href="https://www.colorcoder.dev/">
                        Learn React.js by Building Hacker News (Part
                        4) - Function vs Class Based Components 
                    </a>
                </div>
                <div className="url">(colorcoder.dev)</div>
            </div>
            <div className="bottom">
                225 points by Safder 2 hours ago | hide | 99 comments
            </div>
        </div>
    );
};
```

Here we are splitting up the Post component into different sections then hard-coding the values as a placeholder. We will be **dynamically filling** this data down the road.

I prefer to layout the user interface before dealing with data.

Let’s import the Post component into the *Posts.js* file. Since a component is reusable, let’s fill out the Post component with multiple Posts.

```javascript
import React from "react";
import "../styles/Posts.css";
import {Post} from "./Post"

export const Posts = () => {
    return (
        <div className="posts-container">            
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
};
@safderareepattamannil
```

Now it’s starting to come together!

![Final Product](https://cdn-images-1.medium.com/max/800/1*1yFhZCW8aJo96Cn63sXF0A.png)

### Conclusion

In this section, you have learned about function components everything from how to use them and how to **nest components** to split up your application frontend into multiple manageable sections.

You should start picking up on common patterns in React. One step to solidify your understanding of the concepts would be to pick another website you visit often and try to section out that website into components.

If you liked this tutorial and are enjoying the series. Make sure you subscribe to my newsletter to keep up with the latest posts and updates. The next tutorial will be delivered right to your inbox.

See you in the next one!

**Resources & Additional Helpful Reading**

[JavaScript Functions](https://developer.mozilla.org/en-US/docs/Glossary/Function)\
[Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)\
[React Components](https://reactjs.org/docs/components-and-props.html)\
[More Import/Export](https://javascript.info/import-export)

If you would like to suggest topics for me to cover or would like to chat feel free to [email me](http://safderareepattamannil@gmail.com/).
