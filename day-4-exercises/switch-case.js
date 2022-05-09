/*Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F*/


  let scoreUserInput = prompt('What is the grade ?')
  let score = scoreUserInput.toLowerCase()
  
  switch (score) {
    case '80-100':
      console.log('A')
      break
    case '70-89':
      console.log('B')
      break
    case '60-69':
      console.log('C')
      break
    case '50-59':
      console.log('D')
      break
    case '0-49':
      console.log('F')
      break
    default:
      console.log('It is not a grade.')
  }



  /*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer*/

let weather = 'Autumn'
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'Winter':
    console.log('It might be cold, you need a jacket.')
    break
  case 'Spring':
    console.log('Go out freely.')
    break
  case 'Summer':
    console.log('Go out freely.')
    break  
  default:
    console.log(' No need for rain coat.')
}



/*Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.*/




let dayUserInput = prompt('What is the day today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Monday is a working day')
    break
  case 'tuesday':
    console.log('Tuesday is a working day')
    break
  case 'wednesday':
    console.log('Wednesday is a working day')
    break
  case 'thursday':
    console.log('Thursday is a working day')
    break
  case 'friday':
    console.log('Friday is a working day')
    break
  case 'saturday':
    console.log('Saturday is a weekend day')
    break
  case 'sunday':
    console.log('Sunday is a weekend day')
    break
  default:
    console.log('It is not a week day.')
}