//1.Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

const namedChallenge = '30 Days Of JavaScript'
console.log(namedChallenge)

//2.Print the string on the browser console using console.log()

console.log('string')

//3.Print the length of the string on the browser console using console.log()

const name = 'string'
console.log(name.length)

//4.Change all the string characters to capital letters using toUpperCase() method

const message = 'hi everybody'
console.log(message.toUpperCase())

//5.Change all the string characters to lowercase letters using toLowerCase() method

const messages = 'HI EVERYBODY'
console.log(messages.toLowerCase())

//6.Cut (slice) out the first word of the string using substr() or substring() method

const firstWordSlice = 'they are playing'
console.log(firstWordSlice.substring(0,4))

//7.Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

const text = '30 Days Of JavaScript'
console.log(text.slice(3,7))

//8.Check if the string contains a word Script using includes() method

const includesScript = 'i learned javascript'
console.log(includesScript.includes('script'))


//9.Split the string into an array using split() method

const toArray = 'i learned javascript'
console.log(toArray.split())

//10.Split the string 30 Days Of JavaScript at the space using split() method

const changeToArray = '30 Days Of JavaScript'
console.log(changeToArray.split(' '))

//11.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

const word = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(word.split(','))

//12.Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

const replaceJavaToPython = '30 Days Of JavaScript'
console.log(replaceJavaToPython.replace('JavaScript','python'))

//13.What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
 const findIndex = '30 Days Of JavaScript'
 console.log(findIndex.charAt(15))


 //14.What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

 const findIndexes = '30 Days Of JavaScript'
 console.log(findIndexes.charCodeAt(11))

//15.Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

const determineTheFirstPosition = '30 Days Of JavaScript'
console.log(determineTheFirstPosition.indexOf(3))


//16.Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

const determineTheLastPosition = '30 Days Of JavaScript'
console.log(determineTheLastPosition.lastIndexOf('t'))