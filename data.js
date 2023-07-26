const g = "#14A44D";
const p = "#3B71CA";
const n = "gray";

let score = 0;
let gamemode = 2;
let theword = "";
let dailyScore = 0;
let wordLength = 4;

const fourLetterWords = [
    {
        answer: "BARE", 
        clue1: "BAKE",
        clue2: "stripped; unadorned",
        color: [g, g, n, g],
    },
    {
        answer: "WALK", 
        clue1: "FOLK",
        clue2: "stroll",
        color: [n, n, g, g]
    },
    {
        answer: "PLUG", 
        clue1: "GULP",
        clue2: "hype; promote",
        color: [p, p, p, p],
    },
    {
        answer: "AQUA", 
        clue1: "QUIP",
        clue2: "shade of blue at the swimming pool",
        color: [p, p, n, n]
    },
    {
        answer: "DULL", 
        clue1: "SULK",
        clue2: "uninteresting... or pointless?",
        color: [n, g, g, n]
    },
    {
        answer: "CITY", 
        clue1: "TACO",
        clue2: "metropolis",
        color: [p, n, p, n]
    },
    {
        answer: "EVIL", 
        clue1: "LIVE",
        clue2: "wicked; nefarious",
        color: [p, p, p, p]
    },
    {
        answer: "FORK", 
        clue1: "OKRA",
        clue2: "split in two directions... or, an eating implement",
        color: [p, p, g, n]
    },
    {
        answer: "CURE", 
        clue1: "RACE",
        clue2: "antidote",
        color: [p, n, p, g]
    },
    {
        answer: "MYTH", 
        clue1: "HYMN",
        clue2: "legendary story",
        color: [p, g, p, n]
    },
    {
        answer: "WING", 
        clue1: "WANT",
        clue2: "part of a bird or building",
        color: [g, n, g, n]
    },
    {
        answer: "IDEA", 
        clue1: "DEAL",
        clue2: "product of brainstorming",
        color: [p, p, p, n]
    },
    {
        answer: "WHIM", 
        clue1: "SHIN",
        clue2: "sudden impulse",
        color: [n, g, g, n]
    },
    {
        answer: "PLOT", 
        clue1: "LOOT",
        clue2: "storyline; what a spoiler might spoil",
        color: [p, n, g, g]
    },
    {
        answer: "TREE", 
        clue1: "FEET",
        clue2: "maple or sequoia, for example",
        color: [n, p, g, p]
    },
    {
        answer: "SONG", 
        clue1: "SWIG",
        clue2: "ballad or serenade, for example",
        color: [g, n, n, g]
    },
    {
        answer: "FLAG", 
        clue1: "CALF",
        clue2: "national symbol",
        color: [n, p, p, p]
    },
    {
        answer: "GLUE", 
        clue1: "LURE",
        clue2: "sticky arts and crafts supply",
        color: [n, p, p, p]
    },
    {
        answer: "ALSO", 
        clue1: "SOUL",
        clue2: "in addition",
        color: [p, p, n, p]
    },
    {
        answer: "SHOE", 
        clue1: "HOSE",
        clue2: "clog or sneaker, for example",
        color: [p, p, p, g]
    },
    {
        answer: "BOWL", 
        clue1: "BLOW",
        clue2: "soup or cereal dish",
        color: [g, p, p, p]
    },
    {
        answer: "ONCE", 
        clue1: "CONE",
        clue2: "at some point; without repetition",
        color: [p, p, p, g]
    },
    {
        answer: "WOLF", 
        clue1: "FLOW",
        clue2: "common fairytale antagonist",
        color: [p, p, p, p]
    },
]

const fiveLetterWords = [
    {
        answer: "PLANK", 
        clue1: "FLASK",
        clue2: "core workout... or, a pirate ship feature",
        color: [n, g, g, n, g],
    },
    {
        answer: "SLEEP", 
        clue1: "BLIMP",
        clue2: "snooze",
        color: [n, g, n, n, g]
    },
    {
        answer: "AMPLE", 
        clue1: "ANKLE",
        clue2: "plenty",
        color: [g, n, n, g, g],
    },
    {
        answer: "EARTH", 
        clue1: "HEART",
        clue2: "you are here",
        color: [p, p, p, p, p]
    },
    {
        answer: "WHEAT", 
        clue1: "WHITE",
        clue2: "toast choice",
        color: [g, g, n, p, p]
    },
    {
        answer: "MANOR", 
        clue1: "WAGON",
        clue2: "large estate or home",
        color: [n, g, n, g, p]
    },
    {
        answer: "JOKER", 
        clue1: "COVER",
        clue2: "wild card in a deck",
        color: [n, g, n, g, g]
    },
    {
        answer: "WASTE", 
        clue1: "SWEAT",
        clue2: "scrap; trash",
        color: [p, p, p, p, p]
    },
    {
        answer: "ANVIL", 
        clue1: "VITAL",
        clue2: "blacksmith's block",
        color: [p, p, n, p, g]
    },
    {
        answer: "RADAR", 
        clue1: "RADIO",
        clue2: "speed-detecting device",
        color: [g, g, g, n, n]
    },
    {
        answer: "CLEAR", 
        clue1: "PEARL",
        clue2: "transparent; unambiguous",
        color: [n, p, p, p, p]
    },
    {
        answer: "ZEBRA", 
        clue1: "BLAZE",
        clue2: "striped zoo animal",
        color: [p, n, p, p, p]
    },
    {
        answer: "TRIAL", 
        clue1: "LATER",
        clue2: "experiment; run-through",
        color: [p, p, p, n, p]
    },
    {
        answer: "FOCUS", 
        clue1: "BOGUS",
        clue2: "concentrate",
        color: [n, g, n, g, g]
    },
    {
        answer: "LIMBO", 
        clue1: "BLOOM",
        clue2: "middle state; gray area",
        color: [p, p, p, n, p]
    },
]

const sixLetterWords = [
    {
        answer: "DRAGON", 
        clue1: "JARGON",
        clue2: "Chinese New Year figure",
        color: [n, p, p, g, g, g],
    },
    {
        answer: "PILLOW", 
        clue1: "YELLOW",
        clue2: "where one might lay their head?",
        color: [n, n, g, g, g, g]
    },
    {
        answer: "STAPLE", 
        clue1: "PASTEL",
        clue2: "paperclip alternative",
        color: [p, p, p, p, p, p],
    },
    {
        answer: "CROUCH", 
        clue1: "CRUNCH",
        clue2: "stoop; lay low",
        color: [g, g, p, n, g, g]
    },
    {
        answer: "AVATAR", 
        clue1: "TRIVIA",
        clue2: "profile persona",
        color: [p, p, n, p, n, p]
    },
    {
        answer: "LAMENT", 
        clue1: "BEMOAN",
        clue2: "greatly regret",
        color: [n, p, g, n, p, p]
    },
    {
        answer: "PEOPLE", 
        clue1: "PUZZLE",
        clue2: "humans",
        color: [g, n, n, n, g, g]
    },
    {
        answer: "BOTANY", 
        clue1: "ROSARY",
        clue2: "horticulturist's field of study",
        color: [n, g, n, g, n, g]
    },
    {
        answer: "CANDOR", 
        clue1: "CANARY",
        clue2: "honesty",
        color: [g, g, g, n, p, n]
    },
    {
        answer: "CRATER", 
        clue1: "RACKET",
        clue2: "lunar feature; meteorite's creation",
        color: [p, p, p, n, g, p]
    },
    {
        answer: "CREDIT", 
        clue1: "TRICKY",
        clue2: "give recognition... or, a cash alternative",
        color: [p, g, p, p, n, n]
    },
    {
        answer: "BALLOT", 
        clue1: "COBALT",
        clue2: "voting slip",
        color: [n, p, p, p, p, g]
    },
    {
        answer: "BALLOT", 
        clue1: "COBALT",
        clue2: "voting slip",
        color: [n, p, p, p, p, g]
    },
    {
        answer: "RECORD", 
        clue1: "GROCER",
        clue2: "best known performance... or, a jukebox item",
        color: [n, p, p, p, p, p]
    },
    {
        answer: "SUBTLE", 
        clue1: "BULLET",
        clue2: "understated; nuanced",
        color: [p, g, p, n, p, p]
    },
    {
        answer: "THRIVE", 
        clue1: "SHRINE",
        clue2: "succeed; flourish; prosper",
        color: [n, g, g, g, n, g]
    },
    {
        answer: "GAZEBO", 
        clue1: "BRONZE",
        clue2: "popular setting for an outdoor wedding",
        color: [p, n, p, n, p, p]
    },
]

const sevenLetterWords = [
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
        answer: "FISH", 
        clue1: "SWIM",
        clue2: "salmon or cod, for example",
        color: [p, n, p, n]
    },
    {
        answer: "SQUID", 
        clue1: "QUIET",
        clue2: "ink producer",
        color: [p, p, p, n, n]
    },
    {
        answer: "SHRIMP", 
        clue1: "PERISH",
        clue2: "cocktail crustacean",
        color: [p, n, g, g, p, p]
    },
    {
        answer: "OYSTER", 
        clue1: "STEREO",
        clue2: "pearl-making shellfish",
        color: [p, p, n, p, g, p]
    },
    {
        answer: "LOBSTER", 
        clue1: "BOTTLER",
        clue2: "popular Maine export",
        color: [p, g, p, n, p, g, g],
        theme: "Sea Creatures"
    }
]

function setWord (i) {
    if (score < 10) {
        for (let j = 0; j < 4; j++) {
            document.getElementById(`l${j+1}`).innerHTML = fourLetterWords[i].clue1.charAt(j);
            document.getElementById(`q${j+1}`).style.backgroundColor = fourLetterWords[i].color[j];
      }
    } else if (score >= 10 && score < 20) {
        for (let j = 0; j < 5; j++) {
            document.getElementById(`l${j+1}`).innerHTML = fiveLetterWords[i].clue1.charAt(j);
            document.getElementById(`q${j+1}`).style.backgroundColor = fiveLetterWords[i].color[j];
        }
    } else if (score >= 20 && score < 30) {
        for (let j = 0; j < 6; j++) {
            document.getElementById(`l${j+1}`).innerHTML = sixLetterWords[i].clue1.charAt(j);
            document.getElementById(`q${j+1}`).style.backgroundColor = sixLetterWords[i].color[j];
        }
    } else if (score >= 30) {
        for (let j = 0; j < 7; j++) {
            document.getElementById(`l${j+1}`).innerHTML = sevenLetterWords[i].clue1.charAt(j);
            document.getElementById(`q${j+1}`).style.backgroundColor = sevenLetterWords[i].color[j];
        }
    }
}

function setWordDaily (i) {
    if (i === 1) {
        wordLength = 5;
    }
    if (i === 2 || i === 3) {
        wordLength = 6;
    }
    if (i === 4) {
        wordLength = 7;
    }
    for (let j = 0; j < wordLength; j++) {
        document.getElementById(`l${j+1}`).innerHTML = daily[i].clue1.charAt(j);
        document.getElementById(`q${j+1}`).style.backgroundColor = daily[i].color[j];
    }
}

function setClue (i) {
    if (score < 10) {
        document.getElementById("clue").innerHTML = fourLetterWords[i].clue2;
    } else if (score >= 10 && score < 20 ) {
        document.getElementById("clue").innerHTML = fiveLetterWords[i].clue2;
    } else if (score >= 20 && score < 30 ) {
        document.getElementById("clue").innerHTML = sixLetterWords[i].clue2;
    } else if (score >= 30) {
        document.getElementById("clue").innerHTML = sevenLetterWords[i].clue2;
    }
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
        if (score < 10) {
            document.getElementById('a1').style.backgroundColor = "#875fd8";
            document.getElementById('a2').style.backgroundColor = "#875fd8";
            document.getElementById('a3').style.backgroundColor = "#875fd8";
            document.getElementById('a4').style.backgroundColor = "#875fd8";
            document.getElementById('a5').readOnly = true;
            document.getElementById('a6').readOnly = true;
            document.getElementById('a7').readOnly = true;
            document.getElementById('disable').style.pointerEvents = "none";
            document.getElementById('endless').style.pointerEvents = "none";
            document.getElementById('daily5').style.pointerEvents = "none";
            i = Math.floor(Math.random() * fourLetterWords.length)
            setWord(i);
            setClue(i);
            document.getElementById(`clue`).className = "default"        
            let clue = document.getElementById('clue').innerHTML;
            timeleft = 20;
            realAnswer = fourLetterWords[i].answer;
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
                        for (let i = 0; i < 4; i++) {
                            document.getElementById(`a${i+1}`).className = "inputbox bounce correctblocks";    
                        };
                        document.getElementById('clue').innerHTML = "&check; Correct"
                        document.getElementById(`clue`).className = "pop correct"        
                        setTimeout(() => {
                            for (let i = 0; i < 4; i++) {
                                document.getElementById(`a${i+1}`).value = "";
                                document.getElementById(`a${i+1}`).className = "inputbox";
                            };
                        }, "500");
                        document.getElementById("score").innerHTML = score;
                        this.removeEventListener('keydown', moveInput);
                        setTimeout(() => {
                            play(Math.floor(Math.random() * fourLetterWords.length));
                        }, "500");
                    } else {
                        document.getElementById('clue').innerHTML = "&cross; Incorrect"
                        for (let i = 0; i < 4; i++) {
                            document.getElementById(`a${i+1}`).className = "inputbox shake";    
                        };
                        setTimeout(() => {
                            document.getElementById('clue').innerHTML = clue;
                            document.getElementById(`clue`).className = "default" 
                            for (let i = 0; i < 4; i++) {
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
                    if (document.activeElement.id === "a4") {
                        return;
                    } else {
                        setTimeout(() => {
                            document.activeElement.nextElementSibling.focus();     
                        }, "12");
                    }
                }
            });
            document.getElementById("a1").focus();
        }
        if (score >= 10 && score < 20) {
            document.getElementById('a5').style.backgroundColor = "#875fd8";
            document.getElementById('a5').readOnly = false;
            i = Math.floor(Math.random() * fiveLetterWords.length)
            setWord(i);
            setClue(i);
            document.getElementById(`clue`).className = "default"        
            let clue = document.getElementById('clue').innerHTML;
            timeleft = 20;
            realAnswer = fiveLetterWords[i].answer;
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
                        for (let i = 0; i < 5; i++) {
                            document.getElementById(`a${i+1}`).className = "inputbox bounce correctblocks";    
                        };
                        document.getElementById('clue').innerHTML = "&check; Correct"
                        document.getElementById(`clue`).className = "pop correct"        
                        setTimeout(() => {
                            for (let i = 0; i < 5; i++) {
                                document.getElementById(`a${i+1}`).value = "";
                                document.getElementById(`a${i+1}`).className = "inputbox";
                            };
                        }, "500");
                        document.getElementById("score").innerHTML = score;
                        this.removeEventListener('keydown', moveInput);
                        setTimeout(() => {
                            play(Math.floor(Math.random() * fiveLetterWords.length));
                        }, "500");
                    } else {
                        document.getElementById('clue').innerHTML = "&cross; Incorrect"
                        for (let i = 0; i < 5; i++) {
                            document.getElementById(`a${i+1}`).className = "inputbox shake";    
                        };
                        setTimeout(() => {
                            document.getElementById('clue').innerHTML = clue;
                            document.getElementById(`clue`).className = "default" 
                            for (let i = 0; i < 5; i++) {
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
                    if (document.activeElement.id === "a5") {
                        return;
                    } else {
                        setTimeout(() => {
                            document.activeElement.nextElementSibling.focus();     
                        }, "12");
                    }
                }
            });
            document.getElementById("a1").focus();
        }
        if (score >= 20 && score < 30) {
            document.getElementById('a6').style.backgroundColor = "#875fd8";
            document.getElementById('a6').readOnly = false;
            i = Math.floor(Math.random() * sixLetterWords.length)
            setWord(i);
            setClue(i);
            document.getElementById(`clue`).className = "default"        
            let clue = document.getElementById('clue').innerHTML;
            timeleft = 20;
            realAnswer = sixLetterWords[i].answer;
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
                        for (let i = 0; i < 6; i++) {
                            document.getElementById(`a${i+1}`).className = "inputbox bounce correctblocks";    
                        };
                        document.getElementById('clue').innerHTML = "&check; Correct"
                        document.getElementById(`clue`).className = "pop correct"        
                        setTimeout(() => {
                            for (let i = 0; i < 6; i++) {
                                document.getElementById(`a${i+1}`).value = "";
                                document.getElementById(`a${i+1}`).className = "inputbox";
                            };
                        }, "500");
                        document.getElementById("score").innerHTML = score;
                        this.removeEventListener('keydown', moveInput);
                        setTimeout(() => {
                            play(Math.floor(Math.random() * fiveLetterWords.length));
                        }, "500");
                    } else {
                        document.getElementById('clue').innerHTML = "&cross; Incorrect"
                        for (let i = 0; i < 6; i++) {
                            document.getElementById(`a${i+1}`).className = "inputbox shake";    
                        };
                        setTimeout(() => {
                            document.getElementById('clue').innerHTML = clue;
                            document.getElementById(`clue`).className = "default" 
                            for (let i = 0; i < 6; i++) {
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
                    if (document.activeElement.id === "a6") {
                        return;
                    } else {
                        setTimeout(() => {
                            document.activeElement.nextElementSibling.focus();     
                        }, "12");
                    }
                }
            });
            document.getElementById("a1").focus();
        }
        if (score >= 30) {
            document.getElementById('a7').style.backgroundColor = "#875fd8";
            document.getElementById('a7').readOnly = false;
            document.getElementById('disable').style.pointerEvents = "none";
            document.getElementById('endless').style.pointerEvents = "none";
            document.getElementById('daily5').style.pointerEvents = "none";
            i = Math.floor(Math.random() * sevenLetterWords.length)
            setWord(i);
            setClue(i);
            document.getElementById(`clue`).className = "default"        
            let clue = document.getElementById('clue').innerHTML;
            timeleft = 20;
            let realAnswer = sevenLetterWords[i].answer;
            theword = realAnswer
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
                            play(Math.floor(Math.random() * sevenLetterWords.length));
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
        }
    } else if (gamemode === 1) {
        document.getElementById('disable').style.pointerEvents = "none";
        document.getElementById('endless').style.pointerEvents = "none";
        document.getElementById('daily5').style.pointerEvents = "none";
        if (dailyScore === 5) {
            alert(`Congratulations! Your total time to complete today's Daily 5 was ${timeleft-1} seconds! Today's words were ${daily[0].answer}, ${daily[1].answer}, ${daily[2].answer}, ${daily[3].answer}, and ${daily[4].answer} - today's theme was ${daily[4].theme}. Thanks for playing!`);
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
        if (score === 0) {
            dailyTimer();
        }
        for (let i = 0; i < realAnswer.length; i++) {
            document.getElementById(`a${i+1}`).style.backgroundColor = "#875fd8";
        };      
        document.addEventListener('keydown', function moveInput(event, i) {
            if (event.key == 'Enter') {
                let yourAnswer = guess();
                if (yourAnswer.toUpperCase() === realAnswer) {
                    score++;
                    for (let i = 0; i < realAnswer.length; i++) {
                        document.getElementById(`a${i+1}`).className = "inputbox bounce correctblocks";    
                    };
                    document.getElementById('clue').innerHTML = "&check; Correct"
                    document.getElementById(`clue`).className = "pop correct"        
                    setTimeout(() => {
                        for (let i = 0; i < realAnswer.length; i++) {
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
                    for (let i = 0; i < realAnswer.length; i++) {
                        document.getElementById(`a${i+1}`).className = "inputbox shake";    
                    };
                    setTimeout(() => {
                        document.getElementById('clue').innerHTML = clue;
                        document.getElementById(`clue`).className = "default" 
                        for (let i = 0; i < realAnswer.length; i++) {
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
                    if (document.activeElement.id === `a${realAnswer.length}`) {
                        return;
                    } else {
                    document.activeElement.nextElementSibling.focus();   
                    }  
                }, "12");
            }
        });
        document.getElementById("a1").focus();
    } else {
        alert(`You must select a gamemode first.`);
    }
}