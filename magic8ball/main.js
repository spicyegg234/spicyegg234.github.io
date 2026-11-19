const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let ballanswers = {
    0: "Yes",
    1: "It is certain",
    2: "It is decidedly so",
    3: "Without a doubt",
    4: "Yes, definitely",
    5: "You may rely on it",
    6: "As I see it, yes",
    7: "Most likely",
    8: "Outlook good",
    9: "Signs point to yes",

    10: "Reply hazy, try again",
    11: "Ask again later",
    12: "Better not tell you now",
    13: "Cannot predict now",
    14: "Concentrate and ask again",

    15: "Don\'t count on it",
    16: "My reply is no",
    17: "My sources say no",
    18: "Outlook not so good",
    19: "Very doubtful",
};

const button = document.getElementById("8ballasker");
const display = document.getElementById("8ballanswer");

button.addEventListener( "click", () => {
    let number = getRandomInt(0, 19)
    let answer = ballanswers[number]
    display.textContent = answer;
});

context.fillStyle = "white";
context.fillRect(0,0,800,600);

context.beginPath();
context.arc(400, 300, 150, 0, Math.PI * 2);
context.fillStyle = "black";
context.fill();
context.closePath();

context.beginPath();
context.arc(400, 300, 90, 0, Math.PI * 2);
context.fillStyle = "grey";
context.fill();
context.closePath();

context.beginPath();
context.arc(400, 300, 150, 0, Math.PI * 2);
context.strokeStyle = "cyan";
context.lineWidth = 6;
context.stroke();
context.closePath();