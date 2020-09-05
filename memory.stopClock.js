let ms = 0;
let s = 0;
let min = 0;
let timer;

let stopWatch = document.querySelector(".stopWatch");

function startWatch(){
    if(min <= 60){
        if(!timer){
            timer = setInterval(run, 10) // every 10 miliseconds
        }
    } else {
        stop();
    }

    
}   


function run(){
    stopWatch.textContent = `${min < 10 ? "0" + min : min}:${s < 10 ? "0" + s : s}:${ms < 10 ? "0" + ms : ms}`
    ms++
    if(ms === 100){ 
        ms = 0;
        s++;
    }
    if(s === 60){
        s = 0;
        min++;
    }
    if(min === 60) {
        min = 0;
    }
}

function stop(){
    ms = 0;
    s = 0;
    min = 0;
    clearInterval(timer);
    timer = false // change timer value to false, to start again.
}
