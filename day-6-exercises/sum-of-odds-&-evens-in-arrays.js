//12
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

  //[2550, 2500]

let sumOfOdd1 = 0
for (let i=0;i<=100;i++){
    if(i%2 == 0){
        sumOfOdd1  = sumOfOdd1 + i
    }
   }
   let sumOfEven1 = 0
for (let i=0;i<=100;i++){
    if(i%2 == 1){
        sumOfEven1  = sumOfEven1 + i
    }
   }
// sumOfEven1,sumOfOdd1.split(" ")
console.log(sumOfOdd1,sumOfEven1)



