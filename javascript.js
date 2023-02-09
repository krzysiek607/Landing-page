const time = 100;
const aboutMe = 'KIM JESTEM?'.split('');
const introTitle = document.querySelector('#intro-title');
const myName = 'Krzysztof Tarnas'.split('')
const owner = document.querySelector('#name')
window.onload = (() => {
    for (let i = 0; i < aboutMe.length; i++) {
        ((ind) => {
            setTimeout(() => {
                introTitle.append(aboutMe[ind])
            }, time * ind);
        })(i);
    }
    for (let j = 0; j < myName.length; j++) {
        ((ind) => {
            setTimeout(() => {
                owner.append(myName[ind])
            }, time * ind);
        })(j);
    }
});


const menu = document.querySelector('.hamburger');

menu.addEventListener('click', () => {
    menu.classList.toggle('hamburger--active');
});

let box = document.querySelector("#box");
// setInterval(function () { console.log(box.getBoundingClientRect().top)}, 1000);

box.firstElementChild.classList.remove("inner");
box.firstElementChild.classList.add("inner2");

let interval = setInterval(function () {
    box.getBoundingClientRect().top <= 0 ? changeClass() : null
});

function changeClass() {
    box.firstElementChild.classList.remove("inner2");
    box.firstElementChild.add("inner");
    clearInterval(interval);
}