let timer = 60;
let score = 0

function increaseScore(){
    score += 10; 
    document.querySelector("#scoreVal").textContent = score
}

function getNewHit(){
    
    document.querySelector("#hitVal").textContent = Math.floor(Math.random() * 9 + 1)
}

function makeBubble(){
    let bubbles = "";

    for(let i=0; i<126; i++){
        
        rndNumber = Math.floor(Math.random() * 9 + 1)
        bubbles += `<div class="bubble">${rndNumber}</div>`
    }

    document.querySelector("#pbtm").innerHTML = bubbles
}

function runTimer(){
    let timerInterval = setInterval(()=>{
        document.querySelector("#timerval").textContent = timer
        timer--;
        if(timer < 0){
            clearInterval(timerInterval)
            document.querySelector("#pbtm").innerHTML = "<h1>Game Over</h1>"
        }
    }, 1000)
}

document.querySelector('#pbtm').addEventListener('click', (dets)=>{
    if(dets.target.className){
        if(dets.target.textContent === document.querySelector("#hitVal").textContent) {
            increaseScore()
            makeBubble()
            getNewHit()
        }
        
    }
    
})
makeBubble()
getNewHit()
runTimer()


