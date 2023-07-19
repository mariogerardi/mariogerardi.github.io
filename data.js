const g = "#14A44D";
const p = "#3B71CA";
const n = "gray";

let score = 0;
let gamemode = 2;
let theword = "";
let dailyScore = 0;

const wordlist = [
    {
        answer: "ACHIEVE", 
        clue1: "RECEIVE",
        clue2: "accomplish; pull off",
        color: [n, p, p, n, p, g, g],
    },
    {
        answer: "BONFIRE", 
        clue1: "VAMPIRE",
        clue2: "celebratory blaze",
        color: [n, n, n, n, g, g, g]
    },
    {
        answer: "BLATANT", 
        clue1: "PLASTIC",
        clue2: "obvious; lacking subtlety",
        color: [n, g, g, n, p, n, n],
    },
    {
        answer: "CATWALK", 
        clue1: "HACKSAW",
        clue2: "at the center of a fashion show",
        color: [n, g, p, p, n, p, p]
    },
    {
        answer: "COMPASS", 
        clue1: "CARCASS",
        clue2: "travel guide, with cardinal directions",
        color: [g, n, n, n, g, g, g]
    },
    {
        answer: "COWBELL", 
        clue1: "SWOLLEN",
        clue2: "it may be heard in a herd",
        color: [n, p, p, p, p, p, n]
    },
    {
        answer: "CURRANT", 
        clue1: "VIBRANT",
        clue2: "a small black, red, or white berry",
        color: [n, n, n, g, g, g, g]
    },
    {
        answer: "CHERISH", 
        clue1: "CHEETAH",
        clue2: "hold dear",
        color: [g, g, g, n, n, n, g]
    },
    {
        answer: "DESTINY", 
        clue1: "DISPLAY",
        clue2: "fate; the inevitable",
        color: [g, p, g, n, n, n, g]
    },
    {
        answer: "DRASTIC", 
        clue1: "PLASTIC",
        clue2: "having far-reaching effect",
        color: [n, n, g, g, g, g, g]
    },
    {
        answer: "FICTION", 
        clue1: "MISSION",
        clue2: "opposite of a true story",
        color: [n, g, n, n, g, g, g]
    },
    {
        answer: "HARPOON", 
        clue1: "CARTOON",
        clue2: "a barbed spear or javelin",
        color: [n, g, g, n, g, g, g]
    },
    {
        answer: "HELPFUL", 
        clue1: "HANDFUL",
        clue2: "lending a hand; of service",
        color: [g, n, n, n, g, g, g]
    },
    {
        answer: "IMITATE", 
        clue1: "IMAGINE",
        clue2: "parrot; mirror",
        color: [g, g, p, n, p, n, g]
    },
    {
        answer: "JUBILEE", 
        clue1: "SUBJECT",
        clue2: "anniversary celebration",
        color: [n, g, g, p, p, n, n]
    },
    {
        answer: "KILLJOY", 
        clue1: "BELLHOP",
        clue2: "wet blanket; party pooper",
        color: [n, n, g, g, n, g, n]
    },
    {
        answer: "LASAGNA", 
        clue1: "PANACEA",
        clue2: "layered pasta dish",
        color: [n, g, p, g, n, n, g]
    },
    {
        answer: "MELANIN", 
        clue1: "KERATIN",
        clue2: "skin pigment",
        color: [n, g, n, g, n, g, g]
    },
    {
        answer: "NONSTOP", 
        clue1: "MOISTEN",
        clue2: "all day, every day, on and on...",
        color: [n, g, n, g, g, n, p]
    },
    {
        answer: "ORGANIC", 
        clue1: "SCARING",
        clue2: "occurring naturally",
        color: [n, p, p, p, p, p, p]
    },
    {
        answer: "PANCAKE", 
        clue1: "PEACOCK",
        clue2: "often stacked breakfast staple",
        color: [g, p, p, g, n, n, p]
    },
    {
        answer: "QUARREL", 
        clue1: "SQUARED",
        clue2: "altercation; argument",
        color: [n, p, p, p, g, g, n]
    },
    {
        answer: "RESPITE", 
        clue1: "INSPIRE",
        clue2: "a quick breather",
        color: [n, n, g, g, g, p, g]
    },
    {
        answer: "TRAFFIC", 
        clue1: "AFFLICT",
        clue2: "many commuters, collectively",
        color: [p, p, p, n, p, p, p]
    },
    {
        answer: "UNDERGO", 
        clue1: "FOUNDER",
        clue2: "experience; be subjected to",
        color: [n, p, p, p, p, p, p]
    },
    {
        answer: "FALLACY", 
        clue1: "WALLABY",
        clue2: "a mistaken belief",
        color: [n, g, g, g, g, n, g]
    },
]

const daily = [
    {
        answer: "FALLACY", 
        clue1: "WALLABY",
        clue2: "a mistaken belief",
        color: [n, g, g, g, g, n, g]
    },
    {
        answer: "UNDERGO", 
        clue1: "FOUNDER",
        clue2: "experience; be subjected to",
        color: [n, p, p, p, p, p, p]
    },
    {
        answer: "PANCAKE", 
        clue1: "PEACOCK",
        clue2: "often stacked breakfast staple",
        color: [g, p, p, g, n, n, p]
    },
    {
        answer: "MELANIN", 
        clue1: "KERATIN",
        clue2: "skin pigment",
        color: [n, g, n, g, n, g, g]
    },
    {
        answer: "TRAFFIC", 
        clue1: "AFFLICT",
        clue2: "many commuters, collectively",
        color: [p, p, p, n, p, p, p]
    }
]

function setWord (i) {
    for (let j = 0; j < 7; j++) {
        document.getElementById(`l${j+1}`).innerHTML = wordlist[i].clue1.charAt(j);
        document.getElementById(`q${j+1}`).style.backgroundColor = wordlist[i].color[j];
    }
}

function setWordDaily (i) {
    for (let j = 0; j < 7; j++) {
        document.getElementById(`l${j+1}`).innerHTML = daily[i].clue1.charAt(j);
        document.getElementById(`q${j+1}`).style.backgroundColor = daily[i].color[j];
    }
}

function setClue (i) {
    document.getElementById("clue").innerHTML = wordlist[i].clue2;
}

function setClueDaily (i) {
    document.getElementById("clue").innerHTML = daily[i].clue2;
}

function guess() {
    const nodeList = document.querySelectorAll("input");
    let answer = []
    for (let i = 0; i < 7; i++) {
        answer.push(nodeList[i].value);
    }
    const finalAnswer = answer.join("");
    return finalAnswer;
}

function reset() {
    location.reload();
}

function endless() {
    document.getElementById('endless').style.backgroundColor = g;
    document.getElementById('endless').style.borderWidth = "2px";
    document.getElementById('endless').style.borderColor = "whitesmoke";
    document.getElementById('daily5').style.backgroundColor = p;
    document.getElementById('daily5').style.borderWidth = 0;
    if (gamemode === 1 || gamemode === 2) {
        gamemode = 0;
    }
}

function daily5() {
    document.getElementById('daily5').style.backgroundColor = g;
    document.getElementById('daily5').style.borderWidth = "2px";
    document.getElementById('daily5').style.borderColor = "whitesmoke";
    document.getElementById('endless').style.backgroundColor = p;
    document.getElementById('endless').style.borderWidth = 0;
    if (gamemode === 0 || gamemode === 2) {
        gamemode = 1;
    }
}

function dailyTimer() {
    let downloadTimer = setInterval(function() {
        document.getElementById("time").innerHTML = timeleft;
        timeleft += 1;
    }, 1000);
}

function play() {
    if (gamemode === 0) {
        document.getElementById('disable').style.pointerEvents = "none";
        document.getElementById('endless').style.pointerEvents = "none";
        document.getElementById('daily5').style.pointerEvents = "none";
        i = Math.floor(Math.random() * wordlist.length)
        setWord(i);
        setClue(i);
        document.getElementById(`clue`).className = "default"        
        let clue = document.getElementById('clue').innerHTML;
        timeleft = 20;
        let realAnswer = wordlist[i].answer;
        theword = realAnswer;
        if (score === 0) {
            let downloadTimer = setInterval(function(a) {
                if (timeleft <= 0) {
                    clearInterval(downloadTimer);
                    alert(`Game over. Your final score was ${score}. The correct answer was ${theword}.`);
                    reset();
                } else {
                    document.getElementById("time").innerHTML = timeleft;
                }
                timeleft -= 1;
            }, 1000);
        };
        document.addEventListener('keydown', function moveInput(event, i) {
            if (event.key == 'Enter') {
                let yourAnswer = guess();
                if (yourAnswer.toUpperCase() === realAnswer) {
                    score++;
                    for (let i = 0; i < 7; i++) {
                        document.getElementById(`a${i+1}`).className = "inputbox bounce correctblocks";    
                    };
                    document.getElementById('clue').innerHTML = "&check; Correct"
                    document.getElementById(`clue`).className = "pop correct"        
                    setTimeout(() => {
                        for (let i = 0; i < 7; i++) {
                            document.getElementById(`a${i+1}`).value = "";
                            document.getElementById(`a${i+1}`).className = "inputbox";
                        };
                    }, "500");
                    document.getElementById("score").innerHTML = score;
                    this.removeEventListener('keydown', moveInput);
                    setTimeout(() => {
                        play(Math.floor(Math.random() * wordlist.length));
                    }, "500");
                } else {
                    document.getElementById('clue').innerHTML = "&cross; Incorrect"
                    for (let i = 0; i < 7; i++) {
                        document.getElementById(`a${i+1}`).className = "inputbox shake";    
                    };
                    setTimeout(() => {
                        document.getElementById('clue').innerHTML = clue;
                        document.getElementById(`clue`).className = "default" 
                        for (let i = 0; i < 7; i++) {
                            document.getElementById(`a${i+1}`).className = "inputbox";    
                        };       
                    }, "500");
                    document.getElementById(`clue`).className = "pop incorrect"
                }
            } else if (event.key == 'Backspace') {
                document.activeElement.innerHTML = ""
                setTimeout(() => {
                    document.activeElement.previousElementSibling.focus();    
                }, "10");
            } else {
                document.activeElement.value = ""; 
                setTimeout(() => { 
                    document.activeElement.innerHTML = event.key;
                }, "10");
                setTimeout(() => {
                    document.activeElement.nextElementSibling.focus();     
                }, "12");
            }
        });
        document.getElementById("a1").focus();
    } else if (gamemode === 1) {
        document.getElementById('disable').style.pointerEvents = "none";
        document.getElementById('endless').style.pointerEvents = "none";
        document.getElementById('daily5').style.pointerEvents = "none";
        if (dailyScore === 5) {
            alert(`Congratulations! Your total time to complete today's Daily 5 was ${timeleft-1} seconds! Today's words were ${daily[0].answer}, ${daily[1].answer}, ${daily[2].answer}, ${daily[3].answer}, and ${daily[4].answer}. Thanks for playing!`);
            reset();
        };
        setWordDaily(dailyScore);
        setClueDaily(dailyScore);
        if (dailyScore === 0) {
            timeleft = 0;
        }
        document.getElementById(`clue`).className = "default"        
        let clue = document.getElementById('clue').innerHTML;
        let realAnswer = daily[dailyScore].answer;
        theword = realAnswer;
        if (score === 0) {
            dailyTimer();
        }
        document.addEventListener('keydown', function moveInput(event, i) {
            if (event.key == 'Enter') {
                let yourAnswer = guess();
                if (yourAnswer.toUpperCase() === realAnswer) {
                    score++;
                    for (let i = 0; i < 7; i++) {
                        document.getElementById(`a${i+1}`).className = "inputbox bounce correctblocks";    
                    };
                    document.getElementById('clue').innerHTML = "&check; Correct"
                    document.getElementById(`clue`).className = "pop correct"        
                    setTimeout(() => {
                        for (let i = 0; i < 7; i++) {
                            document.getElementById(`a${i+1}`).value = "";
                            document.getElementById(`a${i+1}`).className = "inputbox";
                        };
                    }, "500");
                    document.getElementById("score").innerHTML = score;
                    dailyScore++;
                    this.removeEventListener('keydown', moveInput);
                    setTimeout(() => {
                        play();
                    }, "500");
                } else {
                    document.getElementById('clue').innerHTML = "&cross; Incorrect"
                    for (let i = 0; i < 7; i++) {
                        document.getElementById(`a${i+1}`).className = "inputbox shake";    
                    };
                    setTimeout(() => {
                        document.getElementById('clue').innerHTML = clue;
                        document.getElementById(`clue`).className = "default" 
                        for (let i = 0; i < 7; i++) {
                            document.getElementById(`a${i+1}`).className = "inputbox";    
                        };       
                    }, "500");
                    document.getElementById(`clue`).className = "pop incorrect"
                }
            } else if (event.key == 'Backspace') {
                document.activeElement.innerHTML = ""
                setTimeout(() => {
                    document.activeElement.previousElementSibling.focus();    
                }, "10");
            } else {
                document.activeElement.value = ""; 
                setTimeout(() => { 
                    document.activeElement.innerHTML = event.key;
                }, "10");
                setTimeout(() => {
                    document.activeElement.nextElementSibling.focus();     
                }, "12");
            }
        });
        document.getElementById("a1").focus();
    } else {
        alert(`You must select a gamemode first.`);
    }
}