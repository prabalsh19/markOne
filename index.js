const readLineSync = require('readline-sync')
let score = 0
function welcome(){
 const name =  readLineSync.question('What is your Name? ')
  console.log("Welcome " +  name+ " Do you know Prabal?")
}
const highestScore = [{name:'Elon' , score: "3"},
                      {name:'Warren' , score:'2'},{name:'Bill',score:0}]
const questions = [{question: "What is my fav color? ",answer:"White"},{question: "Where Do I Live? ",answer:"Bhopal"},{question:"His fav activity " ,answer:"Listening to youtube videos"}]

const play = ()=>{
  for(const question in questions){
 const userAnswer = readLineSync.question(questions[question].question) 
  validateAnswer(userAnswer,questions[question].answer)
    
  }
}
const validateAnswer = (userAnswer,validAnswer)=>{
  if(userAnswer.toLowerCase() === validAnswer.toLowerCase()){
    score++
    console.log( 'Right')
    console.log("Current Score " + score)
    console.log("-------------")
    
    
  }else{
    console.log("Wrong")
    console.log("Current Score " + score)
    console.log("-------------")
  }
}
const showFinalScore = ()=>{
  console.log('YAY! You SCORED: ',score);
  console.log("Check out some of the highest scores!")
  for(const key in highestScore){
    console.log(highestScore[key].name+":"+ highestScore[key].score)
  }
}
welcome()
play()
showFinalScore()