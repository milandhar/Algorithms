// Write a function called containsDuplicates that accepts an array and returns true or false depending on if the array contains any duplicate values.
//
// Sample IO
// input: ["hippo", "cat", "dog", "cat"]
// output: true
//
// input: [1, 2, 3, 4, 5, 2]
// output: true
//
// input: [1, 2, 3, 4, 5]
// output: false
//
// input: []
// output: false

function containsDuplicates(array){
  let duplicatesFlag = false
  for(let i = 0; i < array.length; i++){
    for(let j = 1; j < array.length; j++){
      if(array[j] === array[i] && j !== i){
        duplicatesFlag = true
      }
    }
  }
  return duplicatesFlag
}
