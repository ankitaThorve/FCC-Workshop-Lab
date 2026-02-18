const questions = [
  {
    category: "one",
    question: "What does HTML stand for?",
    choices: ["Hyper Transfer Text Language", "Hypertext Markup Language" ,"High-Level Text Markup Language"],
    answer: "Hypertext Markup Language"
  },
  {
    category: "two",
    question: "Which HTML tag is used for the largest heading?",
    choices: ["<h6>","<h1>","<heading>"],
    answer: "<h1>"
  },
  {
    category: "three",
    question: "Which character is used to indicate an end tag in HTML?",
    choices: ["?", "/", ">"],
    answer: "/"
  },
  {
    category: "four",
    question: "Which HTML element is used to insert a line break?",
    choices: ["<br>","<break>","<newline>"],
    answer: "<br>"
  },
  {
    category: "five",
    question: "Which attribute specifies an alternate text for an image, if the image cannot be displayed? ",
    choices: ["title","alt","longdesc"],
    answer: "alt"
  }
];

function getRandomQuestion(questions){
  const randomQue = Math.floor(Math.random()* questions.length);
  return questions[randomQue];
}

function getRandomComputerChoice(choices){
  const randomAns = Math.floor(Math.random()* choices.length);
  return choices[randomAns];
}

const question = getRandomQuestion(questions)

const computerChoices = getRandomComputerChoice(question.choices);

function getResults(question,computerChoices){
  if(computerChoices === question.answer){
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`
  }
}