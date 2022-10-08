let myName = ["", "<", "B", "e", "n", " ", "M", "a", "r", "t", "i", "n", "/", ">"];
const header = document.querySelector('h1')
const image = document.querySelector('img')


window.onscroll = function (e) {
    setTimeout(() => {
        document.querySelector('.aboutMe').style.opacity = 1;
        document.querySelector('.achievements').style.opacity = 1;
        document.querySelector('.projects').style.opacity = 1;
    }, 100)

}
image.addEventListener('mouseover', () => {
    console.log("hi")
})
header.innerHTML = ""

function loopThroughSplittedText(splittedText) {
    for (var i = 0; i < splittedText.length; i++) {
        (function (i) {
            setTimeout(function () {
                console.log(splittedText[i]);
                header.innerHTML += splittedText[i]
            }, 200 * i);
        })(i);
    };
}

loopThroughSplittedText(myName)