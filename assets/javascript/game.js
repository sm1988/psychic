var win = 0;
var loss = 0;
var chances = 10;

var audio = new Audio('Ta Da-SoundBible.com-1884170640.wav');
var NumberOfWords = 28
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "connection"
words[2] = "impossible"
words[3] = "symptomatic"
words[4] = "periodic"
words[5] = "enchanted"
words[6] = "grandchild"
words[7] = "overjoyed"
words[8] = "foregoing"
words[9] = "mammoth"
words[10] = "recess"
words[11] = "talented"
words[12] = "governor"
words[13] = "discovery"
words[14] = "technician"
words[15] = "scarce"
words[16] = "structure"
words[17] = "therapeutic"
words[18] = "behavior"
words[19] = "deranged"
words[20] = "entertaining"
words[21] = "overrated"
words[22] = "witchcraft"
words[23] = "concentrate"
words[24] = "thumbprint"
words[25] = "motorcycle"
words[26] = "responsible"
words[27] = "guiltless"
words[28] = "bankruptcy"

function BuildArray(size) {
    this.length = size
    for (var i = 1; i <= size; i++) {
        this[i] = null
    }
    return this
};
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords);

var str = words[rnd];

function PickRandomWord(frm) {
    //remove half of the letters and replace with underscores 
    var newStr = str;
    var strLen = newStr.length / 2 - 1;
    for (var i = 0; i <= strLen; i++) {
        newStr = removeRandomLetter(newStr);
    }
    // Display the new string inside the text box
    frm.WordBox.value = newStr;
    function removeRandomLetter(newStr) {
        var pos = Math.floor(Math.random() * strLen);
        var x = newStr[pos];
        return newStr = newStr.replace(x, "-");
    }
}

function userGuess(frm) {
    // Capture the user input 
    var guess = frm.WordBox.value;
    //Compare the user Input against words[rnd]
    if (guess === str) {
        // Increase win counter by 1
        win++;
        // Play winning sound 
        audio.play();
        document.getElementById("winScore").innerHTML = " Your Wins : " + win;
    }
    else {
        // Increase loss counter by 1
        loss++;
        document.getElementById("lossScore").innerHTML = " Your Losses : " + loss;
        // Reduce the chances by 1
        chances = chances - 1;
        document.getElementById("myChances").innerHTML = " You have " + chances + "  left";
    };

};