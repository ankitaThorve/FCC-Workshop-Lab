function mutation(arr) {
    const first = arr[0].toLowerCase();
    const second = arr[1].toLowerCase();

    for (let char of second) {
        if (!first.includes(char)) {
            return false;
        }
    }
    return true;
    // const charCount={};
    // for(let char of first){
    //   charCount[char]=(charCount[char] || 0) + 1;
    // }

    // for(let char of second){
    //   if(!charCount[char]){
    //     return false;
    //   }
    //   charCount[char]--;
    // }
    // return true;
}
