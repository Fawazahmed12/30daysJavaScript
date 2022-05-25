//1.In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
// If it does not exist add to the countries list.

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

function ethiopiaExistOrNot(countries){
    for(let index=0;index<countries.length;index++){
        if(countries[index] === 'Ethiopia'){
            console.log(countries[index] === 'Ethiopia')
            return 'ETHIOPIA'
        }
    }
}
const result = ethiopiaExistOrNot(countries)
console.log(result)