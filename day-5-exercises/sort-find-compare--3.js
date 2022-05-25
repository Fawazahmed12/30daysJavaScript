//1.The following is an array of 10 students ages:


//Sort the array and find the min and max age
//Find the median age(one middle item or two middle items divided by two)
//Find the average age(all items divided by number of items)
//Find the range of the ages(max minus min)
//Compare the value of (min - average) and (max - average), use abs() method 
//1.Slice the first ten countries from the countries array

// console.log(ages.sort())


//max
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
function findMax(maximum){
    let largerNum = maximum[0]
    for(let i=0;i<maximum.length;i++){
        if(maximum[i] >= largerNum){
            largerNum = maximum[i]
        }
    }
    return largerNum;
}
const maximumAge = findMax(ages)
console.log(maximumAge)



//min
function findMin(minimum){
    let smallerNum = minimum[0]
    for(let i=0;i<minimum.length;i++){
        if(minimum[i] <= smallerNum){
            smallerNum = minimum[i]
        }
    }
    return smallerNum;
}
const minimumAge = findMin(ages)
console.log(minimumAge)



//median

function findMedianAge(medians){
    return
}

findMedianAge(ages)




