const readLineSync = require('readline-sync')
let score = 0
function welcome() {
  const name = readLineSync.question('What is your Name? ')
  console.log("Welcome " + name + " Do you know Prabal?")
}
const highestScore = [{ name: 'Arun', score: "3" },
{ name: 'Rahul', score: '2' }, { name: 'Viraj', score: 0 }]

const questions = [{ question: "What is my fav color? ", answer: "White" }, { question: "Where Do I Live? ", answer: "Bhopal" }, { question: "His fav activity ", answer: "Listening to youtube videos" },{question:"Which course am I pursuing? ",answer:"BCA"},{question:"Where was I born? ",answer:"Guna"},{question:"Which college I go to? ",answer:"LNCT"}]

const play = () => {
  for (const question in questions) {
    const userAnswer = readLineSync.question(questions[question].question)
    validateAnswer(userAnswer, questions[question].answer)

  }
}
const validateAnswer = (userAnswer, validAnswer) => {
  if (userAnswer.toLowerCase() === validAnswer.toLowerCase()) {
    score++
    console.log('Right')
    console.log("Current Score " + score)
    console.log("-------------")


  } else {
    console.log("Wrong")
    console.log("Current Score " + score)
    console.log("-------------")
  }
}
const showFinalScore = () => {
  console.log('YAY! You SCORED: ', score);
  console.log("Check out some of the highest scores!")
  for (const key in highestScore) {
    console.log(highestScore[key].name + ":" + highestScore[key].score)
  }
}
welcome()
play()
showFinalScore()
