function largestOfFour(nestedArray) {
  let i = 0
  let maxArray = []
  while(i<4){
    let arrayMax = 0
    for (let j = 0; j < nestedArray[i].length; j++){
      if(nestedArray[i][j] > arrayMax){
        arrayMax = nestedArray[i][j]
      }
    }
    maxArray.push(arrayMax)
    i++
  }
  return maxArray
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
