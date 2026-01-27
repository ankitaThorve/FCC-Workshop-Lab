function truncateString(str, num){ //inputs 2 - string, number
  if(str.length > num){ //check string is longer than number
    let truncate = str.slice(0,num); //truncate the string using slice() method
    return truncate + "..."; //return trucated string concatenated with ...
  }
  return str; //If condition is false, return original string
}


console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11))
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2))
console.log(truncateString("A-", 1))
console.log(truncateString("Absolutely Longer", 2))