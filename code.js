var up1 = document.getElementById('up1');
up1.addEventListener('click', plus1);
var up2 = document.getElementById('up2');
up2.addEventListener('click', plus2);
var up3 = document.getElementById('up3');
up3.addEventListener('click', plus3);
var up4 = document.getElementById('up4');
up4.addEventListener('click', plus4);

var down1 = document.getElementById('down1');
down1.addEventListener('click', minus1);
var down2 = document.getElementById('down2');
down2.addEventListener('click', minus2);
var down3 = document.getElementById('down3');
down3.addEventListener('click', minus3);
var down4 = document.getElementById('down4');
down4.addEventListener('click', minus4);

var firstEntry = document.getElementById('firstEntry');
var secondEntry = document.getElementById('secondEntry');
var thirdEntry = document.getElementById('thirdEntry');
var fourthEntry = document.getElementById('fourthEntry');

var guessFirstEntry = document.getElementById('guess-firstEntry');
var guessSecondEntry = document.getElementById('guess-secondEntry');
var guessThirdEntry = document.getElementById('guess-thirdEntry');
var guessFourthEntry = document.getElementById('guess-fourthEntry');

var guessCol1 = document.getElementById('guess-col1');
var guessCol2 = document.getElementById('guess-col2');
var guessCol3 = document.getElementById('guess-col3');
var guessCol4 = document.getElementById('guess-col4');

var send = document.getElementById('send');
send.addEventListener('click', sendCode);

var duplicateWarning = document.getElementById('duplicate');
var attemptsRemaining = document.getElementById('attemptsRemaining');
var attempts = document.getElementById('attempts');


var n1 = Number(firstEntry.innerText);
var n2 = Number(secondEntry.innerText);
var n3 = Number(thirdEntry.innerText);
var n4 = Number(fourthEntry.innerText);

var column1 = document.getElementById('column1');
var column2 = document.getElementById('column2');
var howManyLeft = document.getElementById('howManyLeft');
var row1 = document.getElementById('row1');

var GameOver = document.getElementById('GameOver');

function plus1() {
    n1++;
    if (n1 === 10){
        n1 = 0;
    }
    firstEntry.innerText = n1;
}
function plus2() {
    n2++;
    if (n2 === 10){
        n2 = 0;
    }
    secondEntry.innerText = n2;
}
function plus3() {
    n3++;
    if (n3 === 10){
        n3 = 0;
    }
    thirdEntry.innerText = n3;
}
function plus4() {
    n4++;
    if (n4 === 10){
        n4 = 0;
    }
    fourthEntry.innerText = n4;
}

function minus1() {
    n1--;
    if (n1 === -1) {
        n1 = 9
    }
    firstEntry.innerText = n1
}
function minus2() {
    n2--;
    if (n2 === -1) {
        n2 = 9
    }
    secondEntry.innerText = n2
}
function minus3() {
    n3--;
    if (n3 === -1) {
        n3 = 9
    }
    thirdEntry.innerText = n3
}
function minus4() {
    n4--;
    if (n4 === -1) {
        n4 = 9
    }
    fourthEntry.innerText = n4
}

function getRandom(min, max) { // creates a random number betwen min and max
    return Math.floor(Math.random() * (max - min + 1) + min);
}
var secretCode1 = getRandom(0, 9);
var secretCode2 = getRandom(0, 9);
var secretCode3 = getRandom(0, 9);
var secretCode4 = getRandom(0, 9);

var codeList = [secretCode1, secretCode2, secretCode3, secretCode4];

var duplicate = false;

function checkDuplicate(pos){
    
    var checkThis = Number(codeList.splice(pos,1));
    if (codeList.indexOf(checkThis) != -1){
        duplicate = true;
        duplicateWarning.innerText = "You found a duplicate number in the code"
        console.log('DUPLICATE is '+duplicate+" it was value "+(pos+1)+"!");
    } 
    codeList = [secretCode1, secretCode2, secretCode3, secretCode4];
}


guessFirstEntry.innerText = "-";
guessSecondEntry.innerText = "-";
guessThirdEntry.innerText = "-";
guessFourthEntry.innerText = "-";

var got1 = false;
var got2 = false;
var got3 = false;
var got4 = false;

var counter = 0;
var n = 5;      // number of attempts change here 
attempts.innerText = n - counter;

function sendCode() {
    if(n1 === secretCode1){
        guessFirstEntry.innerText = n1;
        guessCol1.style.borderColor = "green";
        got1 = true;
        checkDuplicate(0); // checks for duplicates of n1
        

    } else if (n1 === secretCode2){
        if (got2 === true){
        guessCol1.style.borderColor = "#d0d0d0";
        } else {
            guessCol1.style.borderColor = "orange";
        }
    } else if(n1 === secretCode3){
        if (got3 === true){
            guessCol1.style.borderColor = "#d0d0d0";
        } else {
            guessCol1.style.borderColor = "orange";
    }
        
    } else if(n1 === secretCode4){
        if (got4 === true){
            guessCol1.style.borderColor = "#d0d0d0";
        } else {
        guessCol1.style.borderColor = "orange";
        }
    }else {
        guessCol1.style.borderColor = "red";
    }

    if(n2 === secretCode2){                         // guess column 2
        guessSecondEntry.innerText = n2;
        guessCol2.style.borderColor = "green";
        checkDuplicate(1); // checks for duplicates of n2

    } else if (n2 === secretCode1){
        if (got1 === true){
            guessCol2.style.borderColor = "#d0d0d0";
        } else {
            guessCol2.style.borderColor = "orange";
        }

    } else if(n2 === secretCode3){
        if (got3 === true){
            guessCol2.style.borderColor = "#d0d0d0";
        } else {
            guessCol2.style.borderColor = "orange";
        }
        
    } else if(n2 === secretCode4){
        if (got4 === true){
            guessCol2.style.borderColor = "#d0d0d0";
        } else {
        guessCol2.style.borderColor = "orange";
        }
    }else {
        guessCol2.style.borderColor = "red";
    }
    if(n3 === secretCode3){             // guess column 3
        guessThirdEntry.innerText = n3;
        guessCol3.style.borderColor = "green";
        checkDuplicate(2);     // checks for n3 duplicates

    } else if (n3 === secretCode1){
        if (got1 === true){
            guessCol3.style.borderColor = "#d0d0d0";
        } else {
            guessCol3.style.borderColor = "orange";
        }

    } else if(n3 === secretCode2){
        if (got2 === true){
            guessCol3.style.borderColor = "#d0d0d0";
        } else {
            guessCol3.style.borderColor = "orange";
        }
        
    } else if(n3 === secretCode4){
        if (got4 === true){
            guessCol3.style.borderColor = "#d0d0d0";
        } else {
            guessCol3.style.borderColor = "orange";
        }
    }else {
        guessCol3.style.borderColor = "red";
    }
    if(n4 === secretCode4){                         // guess column 4
        guessFourthEntry.innerText = n4;
        guessCol4.style.borderColor = "green";
        checkDuplicate(3);             // checks for duplicates of n4

    } else if (n4 === secretCode1){
        if (got1 === true){
            guessCol4.style.borderColor = "#d0d0d0";
        } else {
            guessCol4.style.borderColor = "orange";
        }

    } else if(n4 === secretCode2){
        if (got2 === true){
            guessCol4.style.borderColor = "#d0d0d0";
        } else {
            guessCol4.style.borderColor = "orange";
        }
        
    } else if(n4 === secretCode3){
        if (got3 === true){
            guessCol4.style.borderColor = "#d0d0d0";
        } else {
            guessCol4.style.borderColor = "orange";
        }
    }else {
        guessCol4.style.borderColor = "red";
    }
    counter++;
    attempts.innerText = n - counter;
    if (counter >= n){
    send.disabled = true;
    }
    gameover();
    console.log(attempts.innerText);
}

function gameover(){
    if (attempts.innerText == 0){
        column1.style.animation = "fadeOut 3s ease-out forwards";
        column2.style.animation = "fadeOut 3s ease-out forwards";
        row1.style.animation = "fadeOut 3s ease-out forwards";
        howManyLeft.style.animationDelay = "3s";
        howManyLeft.style.animation = "fadeOut 6s ease-out forwards";
        GameOver1.style.animationDelay = "6s";
        GameOver2.style.animationDelay = "6s";
        GameOver1.style.animation = "GameOver1 4s ease-in forwards";
        GameOver2.style.animation = "GameOver2 4s ease-in forwards";
    }
}



console.log(secretCode1+", "+secretCode2+", "+secretCode3+", "+secretCode4);
