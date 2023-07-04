# COMMENTS

>// This is in-line cmt

>/* Multiline Cmt */


#
&nbsp;
&nbsp;
#


# DATA TYPES

JS has 7 data types.

- Undefine: Hasn't been defined, a variable that hasn't been set to anything
- Null: Nothing
- Boolean: True or False
- String: A string
- Symbol: An immutable primitive value that is unique
- Number: A number
- Object: Can store key-value pairs


#
&nbsp;
&nbsp;
#


# VARIABLES

- Variable names in JS are case sensitive.

## Var
**Var data** variables can have store any type of data type<br>
It can be used anywhere in the program
```
var myName = "Ani"
myName = 10
```
<br>

## Let
**Let** will be used only within the scope where it is used
```
let ourName = "javascript"
```
<br>

## Const
**Const** value can never change
```
const pi=3.14
```

#
&nbsp;
&nbsp;
#


# Assignment Operator


## Storing Values with the Assignment Operator
```
var a;
var b=2;

console.log(a)

a=7;

b=a;

console.log(a)
```
[Code](/Codes/001_code.js)
<br>

## Storing Values with the Assignment Operator
```
var a=9; 
```
[Code](/Codes/002_code.js)


#
&nbsp;
&nbsp;
#


# MATHEMATICAL OPERATIONS

## Basic Operations
```
var a=10;
var b=5;

var sum=a+b;
var diff=a-b;
var prod=a*b;
var div=a/b;
var mod=a%b;

console.log(sum);
console.log(diff);
console.log(prod);
console.log(div);
console.log(mod);
```
[Code](/Codes/003_code.js)x
<br>

## Increment Decrement Operators
```
var a=5;
var b=10;
a++;
b--;
```
[Code](Codes/005_code.js)
<br>


#
&nbsp;
&nbsp;
#


# STRING
```
var lang="javascript";
var vs="code";
```
<br>

*How to Escape Literal Quotes?*
We can do so by using the `\` icon before the quote marks that we want to retain.
```
var str="Hello there, \"I am using Visual Studio Code\"";
```
[Code](Codes/006_code.js)