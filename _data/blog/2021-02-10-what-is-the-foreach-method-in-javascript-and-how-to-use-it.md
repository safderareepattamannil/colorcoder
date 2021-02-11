---
template: BlogPost
path: /js-arraymethod-1
date: 2021-02-10T22:00:23.650Z
title: What is the forEach method in Javascript and How to Use It?
metaDescription: >-
  This post describes the functionality of the forEach array method in
  Javascript, forEach can be used for both arrays and objects.
thumbnail: /assets/foreach.png
---
The [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method is used to iterate over an array or object. Then used to either extract, manipulate or transform the data in some way.

The structure of **forEach** is as follows. I have indicated the optional arguments for the function as well.  

## How does the forEach() method work?

```js
array.forEach(function(currentValue, index [optional], array [optional]), thisArg[optional])
```
###

The forEach method loops through the given array however unlike the common **for** loop it passes a **callback function** for each **non-empty** element of the array.  Let's take a look at the forEach syntax again.    

```js
// Lets initialize an array called numbers
let numbers = [1,2,3,4]

numbers.forEach(function(){
	// code
})
```
###

Here we can see that the forEach method takes a callback function. The callback function takes three arguments mentioned above. The current value, index and the array object itself.  

The current value is the value on that current iteration. This is the only required argument so let's call the argument something semantically correct. A list of numbers, would have elements called number.  

```js
numbers.forEach(function(number){
	// code
})
```
###

Now we can add some logic to the function. Let's log to console for now.

```js
let numbers = [1,2,3,4]
numbers.forEach(function(number){
	console.log(number);
})

// logs 1
// logs 2
// logs 3
// logs 4
```
###

#### We can also define the callback functions separately for the forEach method.

```js
let users = ['user1','user2','user3']

// A method to use as callback
function findUser(user){
	if(user == 'user2') console.log('user found');
}

// Pass the callback into the function
users.forEach(findUser);
// logs user found
```
###

## What about the remaining optional arguments?

### Index

The first optional argument for the callback function is the index. The index is a representation of the current number of iteration. Equivalent to the **i** variable in a regular **for** loop, `for (let i=0; i < array.length; i++)`.  

```js
let names =['kate','jack','john']
names.forEach(function(name,index){
	console.log(index, name);
})

// logs 0 kate
// logs 1 jack
// logs 2 john
```
###

#### Quick Aside: forEach callback an arrow function

My preferred method of writing functions is as arrow functions. We can replace the callback function with an arrow function.   

```js
array.forEach((element) => {
	console.log(element);
})
```
###

### thisArg

This parameter is not used very often but **thisArg** refers to the context on which callback should be called. If you do not specify a **thisArg** parameter, the context that is referred to by the **this** keyword becomes the **[window](https://developer.mozilla.org/en-US/docs/Web/API/Window)**.

Within your browser, the tab you are on is the window context as it executed the JavaScript code. The window can also be thought of as the outermost global object. 

Please keep in mind that you cannot use an arrow function if you want the context to be bound to thisArg instead of window. 

```js
array.forEach(function(item)=>{
	console.log(this === window) // true
	console.log(this === array) //false
})

// add thisArg parameter.
array.forEach(function(item)=>{
	console.log(this === window) //false
	console.log(this == array) //true
}, array)
```
###

## When should you use forEach over a for loop?

1. forEach keeps all variables inside the scope of the callback function. So variables outside retain the value. Below we can see that the **name** variable retains block scope for the callback function.

```js
const name = 'john'
const arrNames = ['jack','jill','june']

arrNames.forEach(function(name){
	console.log(name);
})
// logs john

console.log(name)
// logs name
```
###

2. Prevent boundary errors when we access elements by indexing using the **for** loop. Let's say we wanted to iterate over the full list but did not put the correct range in the loop, we can prevent this by using forEach.

```js
let fruits = ['apple','banana','orange'];
for(let i = 0; i <= fruits.length ; i++){
	console.log(fruits[i]);
}
// logs apple
// logs banana
// logs orange
// logs undefined (since we stepped out of range)

fruits.forEach(function(fruit){
	console.log(fruit);
})

// logs apple
// logs banana
// logs orange
```
###

## When should you not use a forEach over a for loop?

I  use **forEach** loop wherever possible as it is more concise than the **for** loop. However, the only time to avoid a forEach loop is when we want to break out of a loop early using the **break statement** or pass the current iteration with a **continue statement**.

For example, we want to break out of a loop when some search condition is met.

```js
let conditionalCheck = [1,2,3,null,4,5,6]

for(let i = 0; i < conditionalCheck.legnth; i++){
	if(conditionalCheck[i] == null){
		break;
	} 
	console.log(conditionalCheck[i])
}

// logs 1
// logs 2
// logs 3
```

###

## Conclusion
This post should provide you insights you need when deciding on what type of loop to use. As for performance between the two loops, the for loop is faster in comparison to the forEach loop. However, the readability and maintainability of codebases should be a priority which the forEach can provide.
