//1.Using console.log() print out the following statement:

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")


//2.Using console.log() print out the following quote by Mother Teresa:

const firstName = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(firstName + 'by Mother Teresa')


//3.Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

function checkTheTypeOfTheNumber(number,number1){
    if(number == number1){
        return "is equal"
    }else {
        return "is not equal"
    }

}
let num = '10'
let num1 = 10
let num3 = num1.toString();
console.log(checkTheTypeOfTheNumber(num,num3))



//4.Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

function checkTheTypeOfTheNumber(number,number1){
    if(number == number1){
        return "is equal"
    }else {
        return "is not equal"
    }

}
let number = '9.8'
let number1 = 10

let numFloat = parseFloat(number)
console.log(numFloat)
let number3 = numFloat*Math.round(numFloat)
console.log(number3)
console.log(checkTheTypeOfTheNumber(number3,number1))




//5.Check if 'on' is found in both python and jargon

let language = 'python'
let language1 = 'jargon'

console.log(language.endsWith('on'))         // true
console.log(language1.endsWith('on'))         // true


//6.I hope this course is not full of jargon. Check if jargon is in the sentence.

const message = 'I hope this course is not full of jargon'
console.log(message.endsWith('jargon'))


//7.Generate a random number between 0 and 100 inclusively.

// let randomNum = Math.random()         // generates 0 to 0.999
// let numBtnZeroAndTen = randomNum * 101

// console.log(numBtnZeroAndTen)         // this gives: min 0 and max 100.99

// let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
// console.log(randomNumRoundToFloor)    // this gives between 0 and 100


//8.Generate a random number between 50 and 100 inclusively.

let randomNum = Math.random()    
let numBtnZeroAndTen = (randomNum * 51) + 50

console.log(numBtnZeroAndTen)         

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)


//9.Generate a random number between 0 and 255 inclusively.

// let randomNum = Math.random()    
// let numBtnZeroAndTen = randomNum * 256

// console.log(numBtnZeroAndTen)         

// let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
// console.log(randomNumRoundToFloor)


//10.Access the 'JavaScript' string characters using a random number.



//11.Use console.log() and escape characters to print the following pattern.

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

function escapeCharacters(){
    let result = ''
    for(let i=1;i<=5;i++){
        result += i+'\t';
        let value =1 ;
        for(let k=1;k<5;k++){
            
            result +=  value+'\t';
            value= value*i;
        }
        result+='\n';
        
    }
    return result
}
console.log(escapeCharacters())

//12.Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

const string = 'You cannot end a sentence with because because because is a conjunction'

