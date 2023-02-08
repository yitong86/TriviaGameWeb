
let results=[]
let nextBtn = document.querySelector('.nextBtn')
 let category=[]
 let questionPage=document.querySelector('.page')
let currentQuestion= null
let currentCategory= null
let rightAns
let currentChoices

function renderQuestion(){
    let randomNum = parseInt(Math.random() * result.length)
   // console.log(randomNum)
   let del = result.splice(randomNum,1)
   currentQuestion = del[0]
   //console.log(currentQuestion.question)

    // let h3= document.getElementById("category")
    // let h2 = document.getElementById("question")
    // h3.innerHTML = currentQuestion.category
    // h2.innerHTML = currentQuestion.question
   
   
}
   

//call api using xmlHttpRequest->get trivia
let url = ' https://the-trivia-api.com/api/questions'
 
const xhr = new XMLHttpRequest()
console.log(xhr)
xhr.open('GET',url)
 
xhr.onload =function() {
    result = JSON.parse(xhr.responseText)
    //console.log(result)
   const results = result[0];
   console.log(results)
    document.getElementById("question").innerHTML = results.question;
    document.getElementById("category").innerHTML = results.category;
   
     currentChoices = [...results.incorrectAnswers,results.correctAnswer];
    console.log(currentChoices)

    renderQuestion();

    // nextBtn.onclick = function(){
     
    //     renderQuestion()
    // }


    for (let i = 0;i < 4;i++){
        let index = 1+i
     //  console.log(`answer${index}`)
      document.getElementById(`answer${index}`).innerHTML = currentChoices[i]
     document.getElementById(`answer${index}`).value = currentChoices[i]
      let correctButton = document.getElementById("answer1")
              correctButton.onclick = function(){
                     alert("Correct")
              }
              for (let i=2;i<5;i++){
            let incorrectButton = document.getElementById(`answer${[i]}`)
       
                  incorrectButton.onclick = function(){
                      alert("Incorrect")
                  }
               renderQuestion(results);


   
              }
 
}
 
}
xhr.send()
function run() {
  
    // Creating Our XMLHttpRequest object 
    var xhr = new XMLHttpRequest();

    // Making our connection  
    var url = 'https://the-trivia-api.com/api/questions';
    xhr.open("GET", url, true);

    // function execute after request is successful 
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    }
    // Sending our request 
    xhr.send();
}
run();
