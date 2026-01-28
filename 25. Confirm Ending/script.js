const confirmEnding = (str, target) => { // 2 inputs string, target
  let targetLength = target.length; 
  let ending = str.slice(-targetLength);
  return ending === target; //match ending, targeted string
}

