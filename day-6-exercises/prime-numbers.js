//9.Use for loop to iterate from 0 to 100 and print only prime numbers


// for (let i=0;i<=10;i++){
//     if(i%1 == 0){
//         console.log(i%i == 0)
//     }
// }




/*
2	3	5	7	11	13	17	19	23
29	31	37	41	43	47	53	59	61	67
71	73	79	83	89	97
*/



function isPrime(array) {
    for(var i = 0; i <= array.length; i++){
    
      if(array[i] % 2 === 0) {
 console.log("prime ")
       }
     console.log("non prime")
  }
}
isPrime([1,2,3,4,5,6])








