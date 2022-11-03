//1-generer deux nombre compris entre [0,10],
const num1=Math.ceil(Math.random()*10)
const num2=Math.ceil(Math.random()*10)
//2-recureper avec L Api DOM
const formEL=document.getElementById("form")
const inputEl=document.getElementById("input")
const ScoreEl=document.getElementById("score")
const questionEl=document.getElementById("question");
//3-Affichage des Questions
questionEl.innerText=`What is ${num1} multipy by ${num2} ?`;
//6-affichage score
let score=JSON.parse(localStorage.getItem("Score"));
if(!score){
    score=0;
}


//4-entendre l evennement du bouton submit,
ScoreEl.innerText=`score : ${score}`;
const correctAns=num1*num2;
formEL.addEventListener("submit",()=>{
const userAns= +inputEl.value
if(userAns===correctAns){
    score++
    updateLocalStorage()
}else{
    score--
    updateLocalStorage()
}
})
5//function pour stocker les reponse,JSon.stringify convertir en nombre
let updateLocalStorage=()=>{
    localStorage.setItem("Score", JSON.stringify(score))
}

