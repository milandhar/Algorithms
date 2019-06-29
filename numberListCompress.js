let input = [ 1, 2, 3,10, 25, 26, 30, 31, 32, 33]

function listCompress(arr) {
  let segmentsStr = ""
  let i = 0
  while(i < arr.length){
    if(i === 0){
      segmentsStr = arr[0].toString()
      i++
    } else {
    let j = i - 1
    if(arr[j] + 1 !== arr[i]){
      segmentsStr = segmentsStr.concat(', ', arr[i].toString())
      i++
    } else{
      while(arr[j] + 1 === arr[i]){
        i++
        j++
      }
      segmentsStr = segmentsStr.concat('-', arr[i-1])
    }
   }
  }
  return(segmentsStr)
}

listCompress(input)
