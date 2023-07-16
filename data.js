const g = "#14A44D";
const p = "#3B71CA";
const n = "gray";

let score = 0;
let timeleft = 60;
let theword = "";

const wordlist = [
    {
        answer: "ACHIEVE", 
        clue1: "RECEIVE",
        clue2: "accomplish",
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
        clue2: "obvious; lacking in subtlety",
        color: [n, g, g, n, p, n, n],
    },
    {
        answer: "COMPASS", 
        clue1: "CARCASS",
        clue2: "tool with a magnetized pointer",
        color: [g, n, n, n, g, g, g]
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
        clue2: "fate",
        color: [g, p, g, n, n, n, g]
    },
    {
        answer: "DRASTIC", 
        clue1: "PLASTIC",
        clue2: "having far-reaching effect",
        color: [n, n, g, g, g, g, g]
    },
    {
        answer: "EPITHET", 
        clue1: "UPTIGHT",
        clue2: "nickname",
        color: [n, g, p, p, n, p, g]
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
        clue2: "a barbed spear",
        color: [n, g, g, n, g, g, g]
    },
    {
        answer: "HELPFUL", 
        clue1: "HANDFUL",
        clue2: "productive; valuable",
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
        clue2: "wide and flat pasta",
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
        clue2: "all day, every day, on and on and on...",
        color: [n, g, n, g, g, n, p]
    },
    {
        answer: "PANCAKE", 
        clue1: "PEACOCK",
        clue2: "flat breakfast food",
        color: [g, p, p, g, n, n, p]
    },
    {
        answer: "QUARREL", 
        clue1: "SQUARED",
        clue2: "altercation",
        color: [n, p, p, p, g, g, n]
    },
    {
        answer: "RESPITE", 
        clue1: "INSPIRE",
        clue2: "a quick breather",
        color: [n, n, g, g, g, p, g]
    },
]

function setWord (i) {
    for (let j = 0; j < 7; j++) {
        document.getElementById(`l${j+1}`).innerHTML = wordlist[i].clue1.charAt(j);
        document.getElementById(`q${j+1}`).style.backgroundColor = wordlist[i].color[j];
    }
}

function setClue (i) {
    document.getElementById("clue").innerHTML = wordlist[i].clue2;
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

function wrong() {
    for (let i = 0; i < 7; i++) {
        document.getElementById(`a${i}`).style.animation = "wiggle 1s linear normal";
    }
}

function play(i) {
    setWord(i);
    setClue(i);
    document.getElementById(`clue`).className = "default"        
    let clue = document.getElementById('clue').innerHTML;
    timeleft = 15;
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
                    document.getElementById(`a${i+1}`).className = "inputbox pop correctblocks";
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
                setTimeout(() => {
                    document.getElementById('clue').innerHTML = clue;
                    document.getElementById(`clue`).className = "default"        
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
}