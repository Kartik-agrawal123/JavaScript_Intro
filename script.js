//1.  Ways to print in JavaScript

// console.log("Hello World");
// alert("me");
// document.write("this is document write");

//2. JavaScript Console API

// console.log("Hello World", 4 + 55, "another log");
// console.warn("this is warn");
// console.error("this is error");

//3. JavaScript Variables ( Containers to store data values)
// var number1 = 32;
// var number2 = 36;
// console.log(number1+number2);

//4. DataTypes in JavaScript
//Numbers
// var num1 = 455;
// var num2 = 465;
//Strings
// var str1 = "this is a string";
// var str2 = 'this is also a string';
//Objects
// var marks = {
//     shubham : 78,
//     kartik : 98,
//     harry : 99
// };
// console.log(marks);
//Booleans
// var a = true;
// var b = false;
// console.log(a);
//Undefine
// var und;
// console.log(und);
//null
// var n = null;
// console.log(n);
//Arrays
// var arr = [1,2,3,"string",4,5];
//Primitive data types - undefine , null , number , string ,boolean , symbol
//Reference data types - Arrays and objects

//5. Operators in JavaScript

//Arithmetic Operators
// var a = 36;
// var b = 54;
// console.log("the value of a + b is " ,a+b);
// console.log("the value of a - b is " ,a-b);
// console.log("the value of a * b is " ,a*b);
// console.log("the value of a / b is " ,a/b);
// console.log("the value of a % b is " ,a%b);

//Assignment Operators
// var c = b;
// c +=2;
// console.log(c);

//Comparison Operator
// var x = 34;
// var y = 56;
// console.log(x != y);

//Logical Operator
// console.log(true && false); //Logical AND
// console.log(true || false); //Logical OR
// console.log(!false); // Logical NOT

//6. Functions in JavaScript

// function avg(a,b){
//     return (a+b)/2;
// }
// var a = 2;
// var b = 5;
//  c = avg(a,b);
// console.log(c);

//7. Conditionals in JavaScript
//  var age = 34;
//  if(age>8){
//     console.log("you are not a kid");
//  }
//  else{
//     console.log("you are kid");
//  }

//8. Loops in JavaScript
// var arr = [1,2,3,4,5];
// for(var a = 0;a<arr.length;a++){
//    console.log(arr[a]);
// }
// arr.forEach(function(element){
//    console.log(element)
// })

// let a = 0 //Block level scope
// const a = 0 //Only for constant

//9. Arrays in JavaScript
// let arr = ["sonu", "bittu" , 34 , null , true];
// console.log(arr.length);

// arr.pop();   //Last element out
// console.log(arr);

// arr.push("harry"); //Add element
// console.log(arr);

// arr.shift();  //it removes first item
// console.log(arr);

// arr.unshift("harry"); //it add items on the first
// console.log(arr);

// arr.toString(); //it will convert array to string.
// console.log(arr);

// arr.sort(); //it will sort the array
// console.log(arr);

//10. Strings in JavaScript

// let str = "harry";
// console.log(str.length);
// console.log(str.indexOf("r"));
// console.log(str.lastIndexOf("r"));
// console.log(str.slice(0,2));
// s = str.replace("har","roh");
// console.log(s);

//Dates in JavaScript

// let date = new Date();
// console.log(date);
// console.log(date.getTime());
// console.log(date.getFullYear());
// console.log(date.getDay());
// console.log(date.getDate());
// console.log(date.getMinutes());
// console.log(date.getHours());

//DOM(Document Object Model) Manipulation
// let elem = document.getElementById('click');
// console.log(elem);
// let elem1 = document.getElementById('firstContainer');
// console.log(elem1);
//  let elemclass = document.getElementsByClassName('container');
// console.log(elemclass);
// elemclass[0].style.background =  "yellow";
// elemclass[0].classList.add("bg-primary");
// elemclass[0].classList.add("text");
// elemclass[0].classList.remove("text");
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemclass[0].innerHTML);
// console.log(elemclass[0].innerText);
// tn = document.getElementsByTagName('button');
// console.log(tn);
// tn = document.getElementsByTagName('div');
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText = "This is created paragraph";
// tn[0].appendChild(createdElement);
// console.log(tn);
// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is created bold text";
// tn[0].replaceChild(createdElement2,createdElement);

//Selecting using query

// sq = document.querySelector('.container');
// console.log(sq);
// sq = document.querySelectorAll('.container');
// console.log(sq);

//JavaScript Events

// function clicked(){
//     console.log("the button was clicked");
// }
// window.onload = function(){
//     console.log("the document was loaded");
// }
// firstContainer.addEventListener('click' , function(){
//         document.querySelectorAll('.container')[0].innerHTML = "<b> We have clicked </b>";
//         console.log('click hua ji');
// })
// firstContainer.addEventListener('mouseover' , function(){
//     console.log('Mouse aaya ji');
// })
// firstContainer.addEventListener('mouseout' , function(){
//     console.log('Mouse gaya ji');
// })
// let prev = document.querySelectorAll('.container')[0].innerHTML;
// firstContainer.addEventListener('mouseup' , function(){
//     document.querySelectorAll('.container')[0].innerHTML = prev;
//     console.log('Mouse up on container');
// })
// firstContainer.addEventListener('mousedown' , function(){
//     document.querySelectorAll('.container')[0].innerHTML = "<b> We have clicked </b>";
//     console.log('Mouse down on container');
// })

//Arrow function

// sum = (a,b)=>{
//     return a+b;
// }

//Set time out and set interval
// logkaro = ()=>{
//     document.querySelectorAll('.container')[0].innerHTML = "<b> set timeout fired </b>";
//     console.log("karlo bhai log!");
// }

// // setTimeout(logkaro , 2000);
// clr = setInterval(logkaro , 1000);

//JavaScript Local Storage
// localStorage.setItem
// localStorage
// localStorage.clear
// localStorage.getItem
//localStorage.removeItem

// JSON
obj = { name: "harry", length: "1", a: { this: "tha't" } };
// console.log(typeof obj);
// jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);
parsed1 = JSON.parse(`{"name":"harry" , "length":"1" , "a":{"this":"that"}}`);
console.log(parsed1);