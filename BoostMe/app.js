/*const numbers = []
function createNumberArray(start, end) {
    for (let i = start; i <= end; i++) {
        numbers.push(i)
    }
    return numbers;
}
let x
let y

function randomPosition() {
    x = Math.floor(Math.random() * parentWidth(document.querySelector('.page1')) - 100)
    y = 0
    return x, y;
}
function parentWidth(elem) {
    return elem.parentElement.clientWidth;
}



function createPositionForJobs() {
    createNumberArray(1, 26);
    for (let i = 0; i < numbers.length; i++) {
        const currentLi = document.querySelector(`.j${numbers[i]}`);
        randomPosition()
        currentLi.style.position = "relative";
        currentLi.style.top = `${y}px`;
        currentLi.style.left = `${x}px`;
    }
}

createPositionForJobs()

window.onscroll = function (e) {
    setTimeout(() => {
        document.querySelector('.aboutMe').style.opacity = 1;
        document.querySelector('.achievements').style.opacity = 1;
        document.querySelector('.projects').style.opacity = 1;
    }, 100)

}*/

const smartHeader = document.querySelector("#smartHeaders")
let schlaueSprüche = ["lost bei der Studienwahl? 😫", "unsicher was nach dem Studium zu machen ist? 😫", "überfordert bei der Jobsuche? 😫"]
let ii = 0;
for (let i = 0; i < 10; i++) {

    setTimeout(() => {
        smartHeader.innerHTML = schlaueSprüche[ii];
        ii += 1;
        if (ii === 3) {
            ii = 0;
        }
        console.log(ii)
    }, 3000 * i)
}
