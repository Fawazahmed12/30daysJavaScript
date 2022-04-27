//sum of two numbers:

// function sum (number,number1){
//     return number + number1
// }

// const result = sum(10,20)
// console.log(result)

//sum of arrays:
// const numbers = [1,2,3]
//  function sumOfNumbers(sum){
//    let num = 0;
//     for(let i=0;i<sum.length;i++){
       
//        num = num + sum[i]
//     }
//     return num;
//  }

//  let result1 = sumOfNumbers(numbers)
//  console.log(result1)


 ////3
// const input = [fawaz,fawad,ramaesh,faiyaz,ravi]

// function occurrences(){

// }

// let result = occurrences(input)
// console.log(result)
 

//4
// const numbers = [1,4,8,10]

// function findMax(input) {
//    let largestNum = input[0];
//    for (let i = 0; i < input.length; i++) {
//      if (input[i] > largestNum) {
//        largestNum = input[i];
//      }
//    }
//    return largestNum;
//  }


//  console.log(findMax(numbers))


 //5 find the largest number in two numbers
//  function findMax(num1,num2){
//     if(num1>num2){
//       return num1;
//     }else{
//       return num2
//     }
//  }

//  console.log(findMax(8,3))


 //6


//  function findGreatestNumber(numbers){
//   let maxNum = 0;
//   for(let index=0; index<numbers.length; index++){

//     const value = numbers[index]
//     if(maxNum<value){
//       maxNum =value;
//     }

//   }
//   return maxNum
// }

// const input = [2,10,3]
// const result = findGreatestNumber(input)
// console.log(result)


//7.

const a = [1,2,3,4,5,6];
const lastvalue = a[a.length-1];
for(let i=a.length-1;i>=0;i--){
  a[i] = a[i-1];
}

a[0] = lastvalue;
console.log(a)