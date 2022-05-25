//11

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

//The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.


//even;
let sumOfOdd = 0
for (let i=0;i<=100;i++){
    if(i%2 == 0){
        // console.log(i)
        sumOfOdd  = sumOfOdd + i
    }
   }
console.log(sumOfOdd)

//odds;
let sumOfEven = 0
for (let i=0;i<=100;i++){
    if(i%2 == 1){
        // console.log(i)
        sumOfEven  = sumOfEven + i
    }
   }
console.log(sumOfEven)




