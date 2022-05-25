//1.In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'.
// If it does not exist add Sass to the array and print the array.

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]


webTechs.unshift('Sass')

  function sassExistOrNot(webTechs){
    for(let index=0;index<webTechs.length;index++){
        if(webTechs[index] === 'Sass'){
            return webTechs
        }
    }
}
const result = sassExistOrNot(webTechs)
console.log(result)