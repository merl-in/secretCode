function getRandom(min, max) { // creates a random number betwen min and max
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var secretCode1 = getRandom(0, 9);
var secretCode2 = getRandom(0, 9);
var secretCode3 = getRandom(0, 9);
var secretCode4 = getRandom(0, 9);

duplicate = false;

var codeList = [secretCode1, secretCode2, secretCode3, secretCode4];

function checkDuplicate(pos){
    
    var checkThis = Number(codeList.splice(pos,1));
    if (codeList.indexOf(checkThis) != -1){
        duplicate = true;
        console.log('DUPLICATE is '+duplicate+" it was value "+(pos+1)+"!");
    } 
    codeList = [secretCode1, secretCode2, secretCode3, secretCode4];
}
checkDuplicate(0);
checkDuplicate(1);
checkDuplicate(2);
checkDuplicate(3);
console.log(codeList);