function truncateString(str, num){ //inputs 2 - string, number
  if(str.length > num){ //check string is longer than number
    let truncate = str.slice(0,num); //truncate the string using slice() method
    return truncate + "..."; //return trucated string concatenated with ...
  }
  return str; //If condition is false, return original string
}
