// 13

// Develop a small script which generate array of 5 random numbers

for (let i = 0; i < 5; i++) {
    console.log(Math.floor(Math.random() * 100))
}
   

//Develop a small script which generate array of 5 random numbers and the numbers must be unique


// 15
//Develop a small script which generate a six characters random id:

for (let i = 0; i < 1; i++) {
    
    console.log(
        Math.random().toString(36).replace(/[^a-z]+/g, ''))
}