//1.//Displaying only even numbers
// let array=[1,2,3,4,5,6];
// Output : [2,4,6]

const array = [1,2,3,4,5,6];

function togetEvenNumbers(numbers) {
  let output = [];
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 == 0) {
      output.push(numbers[index]);
    }
  }
  return output;
}
let evenNumbers = togetEvenNumbers(array);
console.log(evenNumbers);


//2.Find given number even number or odd number
// Input: 2
// output: "2 is an even Number"
// Input: 7
// output: "7 is an odd Number"

