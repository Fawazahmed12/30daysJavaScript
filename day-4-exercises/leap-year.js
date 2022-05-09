/*Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.*/


let monthUserInput = prompt('What is the number of days in a month ?')
let month = dayUserInput.toLowerCase()

switch (month) {
  case 'January':
    console.log('January has 31 day')
    break
  case 'February':
    console.log('February has 28 days')
    break
  case 'March':
    console.log('February has 28 days')
    break
  case 'April':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}


//Write a program which tells the number of days in a month, now consider leap year.