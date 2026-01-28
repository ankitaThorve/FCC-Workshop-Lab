const confirmEnding = (str, target) => {
  let targetLength = target.length;
  let ending = str.slice(-targetLength);
  return ending === target;
}

