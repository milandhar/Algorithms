function validTime(time) {
  console.log(time)
  let timeArray = time.split(":")
  if (parseInt(timeArray[0]) < 24 && parseInt(timeArray[0]) >= 0
    && parseInt(timeArray[1]) >= 0 && parseInt(timeArray[1]) < 60){
    return true
  }
  else {
    return false
  }
}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));
