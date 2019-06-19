// Example
//
// input = ["aba", "aa", "ad", "vcd", "aba"]
// output = ["aba", "vcd", "aba"]
// Input/Output
//
// [time limit] 4000ms (js)
// [input] array.string inputArray
// A non-empty array.
//
// Guaranteed constraints:
//
// 1 ≤ inputArray.length ≤ 10,
//
// 1 ≤ inputArray[i].length ≤ 10.
//
// [output] array.string
// Array of the longest strings, stored in the same order as in the inputArray.
//

function longestStrings(stringArray){
  let arrayLength = stringArray.length
  let longStrings = []
  let maxLength = 0

  for (let i = 0; i < arrayLength; i++){
    console.log(`i: ${i}`)
    console.log(`string length: ${stringArray[i].length}`)
    if (stringArray[i].length > maxLength){
      maxLength = stringArray[i].length
    }
    console.log(`maxLength: ${maxLength}`)
  }
  for(let j = 0; j < arrayLength; j++){
    if (stringArray[j].length === maxLength){
      longStrings.push(stringArray[j])
    }
  }
  return longStrings
}
