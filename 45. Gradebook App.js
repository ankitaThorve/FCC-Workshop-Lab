// function getAverage(array){
//   if(array.length === 0) return 0;
//   const sum=array.reduce((accumulator, currentValue)=> accumulator + currentValue,0);
//   return sum/array.length;
// }

function getAverage(numbers) {
    if (numbers.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    const average = sum / numbers.length;
    return average;
}

function getGrade(studScore) {
    if (studScore === 100) {
        return "A+";
    } else if (studScore >= 90) {
        return "A";
    } else if (studScore >= 80) {
        return "B";
    } else if (studScore >= 70) {
        return "C";
    } else if (studScore >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function hasPassingGrade(studScore) {
    // if(grade == "F"){return false;}
    const grade = getGrade(studScore);
    return grade !== "F";
}

function studentMsg(numbers, studScore) {
    const average = getAverage(numbers);
    const grade = getGrade(studScore);
    if (hasPassingGrade(studScore)) {
        return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
    } else {
        return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
    }
}
