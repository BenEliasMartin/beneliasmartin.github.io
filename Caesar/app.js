
let keyInp = document.querySelector("#Key");
let decryptInp = document.querySelector("#DecryptInput");
let button = document.querySelector("#decryptButton");
let showOutput = document.querySelector("h4");


let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbersInput = [];


let key = keyInp.value;
let storage = [];
let final = [];
let finalVar = "";


let input = decryptInp.value;
button.addEventListener("click", () => {
    storage = [];
    final = [];
    finalVar = "";
    numbersInput = [];
    input = decryptInp.value.toLowerCase();
    key = keyInp.value;

    for (let i = 0; i < input.length; i++) {
        numbersInput.push(letters.indexOf(input[i]));
    }
    if (key > 25) {
        let multiple = Math.floor(key / 26);
        key -= multiple * 26;
    }
    for (const element of numbersInput) {
        if (element - key < 0) {
            storage.push(element - key + 26);
        } else {
            storage.push(element - key);
        }
    }
    console.log(storage)
    for (const element of storage) {
        final.push(letters[element]);
    }

    for (const element of final) {
        finalVar += element;
    }
    console.log(final);
    console.log(finalVar)
    showOutput.innerHTML = finalVar;
})