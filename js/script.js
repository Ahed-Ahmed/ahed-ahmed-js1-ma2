// question 1

const chButton = document.querySelector("#bg");

chButton.onclick = function () {
    document.body.style.background = "green";
}

// question 2

const togButton = document.querySelector(".toggler");
const togDiv = document.querySelector(".togglee")

togButton.onclick = function () {
    togDiv.classList.toggle("extra");
}

// question 3

const select = document.querySelector("select");
const parContainer = document.querySelector(".paragraphs-container");

select.onchange = function () {
    const selectedValue = this.value;
    parContainer.innerHTML = "";
    
    for (let i = 1; i <= selectedValue; i++) {
        parContainer.innerHTML += `<p class="content"></p>`;
    }
}

// question 4

const txtInput = document.querySelector(".input");
const txtCounter = document.querySelector(".char-count b");

txtInput.onkeyup = function () {
    const len = event.target.value.length;
    txtCounter.innerHTML = len;
}

// question 5

const body = document.querySelector("body");

function hScroll() {
    const scrolledY = window.scrollY;

    if (scrolledY >= 35) {
        document.body.classList.add("highlight");
    }
    else {
        document.body.classList.remove("highlight");
    }
}

window.addEventListener("scroll", hScroll);