//1.Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.


const firstName = 'john'
const lastName = 'pollard'
const country = 'india'
const city = 'chennai'
const age = 23
const isMarried = 'single'
const year = 2023


console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))

//2.Check if type of '10' is equal to 10

console.log(10 == '10')           // true, compare only value
console.log(10 === '10')          // false, compare both value and data type

//3.Check if parseInt('9.8') is equal to 10

let number = '9.8'
let number2 = parseInt(number)
let number1 = 10

console.log(number2 == number1) 

//4.Boolean value is either true or false.

//Write three JavaScript statement which provide truthy value.

let isLightOn = true
let num = 2
let name = 'fawaz'

//Write three JavaScript statement which provide falsy value.

// let firstName
// console.log(firstName

// let empty = null
// console.log(empty) 

// let number3  = 0
// console.log(number3)


//5.Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3 //true
// console.log(4>3)
// 4 >= 3 // true
// console.log(4>=3)
// 4 < 3 //false
// console.log(4<3)
// 4 <= 3 //false
// console.log(4<=3)
// 4 == 4 // true
// console.log(4==4)
// 4 === 4 //true
// console.log(4===4)
// 4 != 4 //false
// console.log(4!=4)
// 4 !== 4 //true
// console.log(4!==4)
// 4 != '4' //false
// console.log(4!='4')
// 4 == '4' //false
// console.log(4 =='4')
// 4 === '4' //false
// console.log(4 ==='4')
// Find the length of python and jargon and make a falsy comparison statement.

const language1 = 'python'

const language2 = 'jargon'

console.log((language1.length !== language2.length))



//6.Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log('fawaz')

4 > 3 && 10 < 12 // t && t = true
console.log(4 > 3 && 10 < 12 )
4 > 3 && 10 > 12  //false
console.log(4 > 3 && 10 > 12 )
4 > 3 || 10 < 12 //true
console.log(4 > 3 || 10 < 12 )
4 > 3 || 10 > 12  //true
console.log(4 > 3 || 10 > 12 )
!(4 > 3) //false
console.log(!(4 > 3))
!(4 < 3) //true
console.log(!(4 < 3))
!(false) //true
console.log(!(false))
!(4 > 3 && 10 < 12) // false
console.log(!(4 > 3 && 10 < 12))
!(4 > 3 && 10 > 12) // true
console.log(!(4 > 3 && 10 > 12))
!(4 === '4') // true
console.log(!(4 === '4'))
// There is no 'on' in both dragon and python

const language3 = 'dragon'

const language4 = 'python'

console.log(language3.slice(0,-2) !== language4.slice(0,-2))



//7.Use the Date object to do the following activities

// What is the year today?
const toFindCurrentYear = new Date()
console.log(toFindCurrentYear.getFullYear()) // 2022


// What is the month today as a number?
const toFindCurrentMonth = new Date()
console.log(toFindCurrentMonth.getMonth()) // 0, because the month is January,  month(0-11)


// What is the date today?
const toFindCurrentDate = new Date()
console.log(toFindCurrentDate.getDate())


// What is the day today as a number?
const toFindCurrentDay = new Date()
console.log(toFindCurrentDay.getDay())


// What is the hours now?
const toFindCurrentHours = new Date()
console.log(toFindCurrentHours.getHours())


// What is the minutes now?
const toFindCurrentMinutes = new Date()
console.log(toFindCurrentMinutes.getMinutes())

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
const toFindCurrentSeconds = new Date()
console.log(toFindCurrentSeconds.getSeconds()) 


