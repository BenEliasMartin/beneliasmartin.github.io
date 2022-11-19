const cube = document.querySelector("#cube")
const ball = document.querySelector("#ball")
const scoreHTML = document.querySelector("#scoreHtml");
const startInstructions = document.querySelector(".startInstruction")
const startButton = document.querySelector("#start")

let score = 0;
let speed = 70; // in ms
let turns = 0;
let iterationsBall = 32;
let ballY = 0;
let cubeMode = 1; // 1 = Red, 2 = Blue, 3 = Green, 4 = Yellow
let ballMode = 2; //same as for the cubeMode

scoreHTML.innerHTML = score;
ball.style.display = "none"

//makes a new ball
function makeBall() {
    ballMode = Math.ceil(Math.random() * 4);
    ball.style.display = "none"
    ballY = 0;
    switch (ballMode) {
        case 1:
            ball.style.backgroundColor = '#FF0000';
            break;
        case 2:
            ball.style.backgroundColor = '#5546B0';
            break;
        case 3:
            ball.style.backgroundColor = '#FAFF00';
            break;
        case 4:
            ball.style.backgroundColor = '#55D628';
            break;
        default:
            ball.style.backgroundColor = 'black';
            break;

    }
}

//turnes the cube
function cubeTurn() {
    if (cubeMode < 4) {
        turns += 1;
        cubeMode += 1;
    }
    else {
        turns += 1;
        cubeMode = 1;
    }
    switch (cubeMode) {
        case 1:
            cube.style.transform = `rotate(${turns * 90}deg)`;
            break;
        case 2:
            cube.style.transform = `rotate(${turns * 90}deg)`;
            break;
        case 3:
            cube.style.transform = `rotate(${turns * 90}deg)`;
            break;
        case 4:
            cube.style.transform = `rotate(${turns * 90}deg)`;
            break;
        default:
            cube.style.transform = `rotate(${turns * 90}deg)`;
            break;

    }

}

function updateScore() {
    if (ballMode == cubeMode) {
        score += 1;
    }
    else {
        score = "you lost!"
    }
    scoreHTML.innerHTML = score;
}
// function to let the ball fall slowly
function ballFall() {
    ballY = 0;
    ball.style.top = `0rem`;
    for (var i = 0; i < iterationsBall; i++) {
        (function (i) {
            setTimeout(function () {
                ball.style.top = `${ballY}rem`;
                ball.style.display = "block"
                ballY += 1;
            }, speed * i);
        })(i);
    };
}

// checking if space is clicked

document.body.onkeyup = function (e) {
    if (e.key == " " ||
        e.code == "Space" ||
        e.keyCode == 32
    ) {
        console.log("cube turned")
        cubeTurn();
    }
}

//checking if cube was clicked
cube.addEventListener("click", () => {
    console.log("cube turned");
    cubeTurn();
})


//this is the main function of the game
function game() {
    makeBall()
    ballFall()
    setTimeout(() => {
        updateScore()
        if (!(score === "you lost!")) {
            speed -= 1;
            game();
        }
        else {
            restart();
        }
    }, iterationsBall * speed) // update the score after the ball landed

}

function hideStartInstructions() {
    startInstructions.style.display = "none";
}
function restart() {
    speed = 70;
    score = 0;
    scoreHTML.innerHTML = score;
    startButton.innerHTML = "Click to restart"
    startInstructions.style.display = "block";
}
function start() {
    score = 0;
    hideStartInstructions()
    game()
}
startButton.addEventListener("click", () => {
    start()
})
