const timer = document.getElementById("display-time");
const startBtn = document.getElementById("work-btn");
const resumeBtn = document.getElementById("resume-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");
const shortBreakBtn = document.getElementById("short-btn");
const longBreakBtn = document.getElementById("long-btn");
const settingsBtn = document.getElementById("settings-btn");
const adjust = document.getElementById("adjust-screen");
const wtTimer = document.getElementById("wt-timer");
const sbtTimer = document.getElementById("sb-timer");
const lbtTimer = document.getElementById("lb-timer");
const saveBtn = document.getElementById("save-btn");
const statusBtn = document.getElementById("status-btn");
const quoteEl = document.getElementById("quote-el");
const closeSettingsBtn = document.getElementById("close-settings");


let time, minutes, seconds, countdown;
let message, dots;

let longBTimer = lbtTimer.value * 60;
let shortBTimer = sbtTimer.value * 60;
let wTimer = wtTimer.value * 60;

wtTimer.addEventListener("input", () => {
    wTimer = wtTimer.value * 60;
})

sbtTimer.addEventListener("input", () => {
    shortBTimer = sbtTimer.value * 60;
})

lbtTimer.addEventListener("input", () => {
    longBTimer = lbtTimer.value * 60;
})




startBtn.addEventListener("click", () => {
    clearInterval(dots);
    time = wTimer;
    setTime(time);
    startBtn.style.display = "none";
    resumeBtn.style.display = "initial";

    message = "Stay Focused!!, You can do it, Yay!!"
    displayQuote(message);
    quoteEl.style.left = "7%";

    resetBtn.addEventListener("click", clearQuote);
});


shortBreakBtn.addEventListener("click", () => {
    clearInterval(dots);
    time = shortBTimer;
    setTime(time);

    message = "Coffee Break"
    displayQuote(message);
    quoteEl.style.left = "4%";

    resetBtn.addEventListener("click", clearQuote);
});

longBreakBtn.addEventListener("click", () => {
    clearInterval(dots);
    time = longBTimer;
    setTime(time);

    message = "Relax, Rest, Breath"
    displayQuote(message);
    quoteEl.style.left = "2%";

    resetBtn.addEventListener("click", clearQuote);
});

resetBtn.addEventListener("click", () => {
    startBtn.style.display = "initial";
    resumeBtn.style.display = "none";
    clearInterval(countdown);
    timer.textContent = "10:00";
    minutes = 10;
    seconds = 0;
})


settingsBtn.addEventListener("click", () => {
    if (adjust.style.display === "block"){
        adjust.style.display = "none";
    } else {
        adjust.style.display = "block";
    }

    if (closeSettingsBtn.style.display === "block"){
        closeSettingsBtn.style.display = "none";
    } else {
        closeSettingsBtn.style.display = "block";
    }
})

closeSettingsBtn.addEventListener("click", () => {
    closeSettingsBtn.style.display = "none";
    adjust.style.display = "none";
})

function setTime(time) {
    clearInterval(countdown);
    countdown = setInterval(runTimer, 1000);
}

function runTimer() {
    minutes = Math.floor(time/60);
    seconds = time % 60;

    if (seconds < 10){
        timer.textContent = `${minutes}:0${seconds}`;
    } else {
        timer.textContent = `${minutes}:${seconds}`;
    }

    if (time === 0){
        clearInterval(countdown);
        startBtn.style.display = "initial";
        resumeBtn.style.display = "none";
    }

    pauseBtn.addEventListener("click", () => {
        clearInterval(countdown);
        if (seconds < 10){
            timer.textContent = `${minutes}:0${seconds}`;
        } else {
        timer.textContent = `${minutes}:${seconds}`;
        }
    });

    resumeBtn.addEventListener("click", () => {
        setTime(time);
    })

    time--;
};

function displayQuote(msg) {
    quoteEl.textContent = msg;
    dots = setInterval(() => {
        if(quoteEl.textContent !== msg + "...."){
            quoteEl.textContent += "."
        } else {
            quoteEl.textContent = msg
        }
    }, 500)
}

function clearQuote(){
    quoteEl.textContent = "";
    clearInterval(dots);
}

function pauseDots() {
    clearInterval(dots);
}