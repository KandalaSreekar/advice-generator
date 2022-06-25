const adviceText = document.getElementById("advice-text")
const adviceNumber = document.getElementById("advice-number")
const refrestBtn = document.getElementById("get-data")

refrestBtn.addEventListener("click", ()=> {
    getAdvice();
})

window.onload = () => {
    getAdvice();
}

function getAdvice (){
fetch("https://api.adviceslip.com/advice").then(response=> {
    return response.json();
    }).then(adviceData=>{
        const Adviceobj = adviceData.slip
        adviceText.textContent = Adviceobj.advice;
        adviceNumber.textContent = Adviceobj.id;
        }).catch(error => {
            console.log(error);
        })
}
