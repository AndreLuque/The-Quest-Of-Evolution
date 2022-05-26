
// function handler(params) {

//the oracles verse scroll to EXPLORE  section or
//   journey name sa  class hay ko get kiya hay 
const homesectionone = document.querySelector(".homesectionone");
const journey = document.querySelector(".home-journey");

// the oracles verse scroll to EXPLORE section ko get kiy hay or is ka image get kiya hay
const frogesectionone = document.querySelector(".frogesectionone ")
const characterImg = document.querySelector(".characterImg");
const characterImg2 = document.querySelector(".characterImg2");
const characterImg3 = document.querySelector(".characterImg3");
const characterImg4 = document.querySelector(".characterImg4");
const characterImg5 = document.querySelector(".characterImg5");
const characterImg6 = document.querySelector(".characterImg6");

// the leap of salumun section ko get kiya hay
const frogesectiontwo = document.querySelector(".frogesectiontwo")
const frogetext = document.querySelector(".frogetext");


const homesectiontwo = document.querySelector(".homesectiontwo")
const journeyone = document.querySelector(".journeyone")


const frogesectionthree = document.querySelector("#frogesectionthree")
const frogetextthree = document.querySelector(".frogetextthree");


const homesectionthree = document.querySelector(".homesectionthree")
const journeytwo = document.querySelector(".journeytwo")


const homesectionfour = document.querySelector(".homesectionfour")
const ankerone = document.querySelector(".ankerone")
const ankertwo = document.querySelector(".ankertwo")


const novelitems = document.querySelector(".containeres");
const noveloracles = document.querySelector(".novel-oracles");

const frogesectionthreeImg = document.querySelector("#frogesectionthreeImg");

// const froge = document.querySelector("#froge");

// }


journey.addEventListener("click", (e) => {
    e.preventDefault();
    togglePages(homesectionone, novelitems);
})
noveloracles.addEventListener("click", (e) => {
    e.preventDefault();
    togglePages(novelitems, frogesectionone);
})
characterImg.addEventListener("click", (e) => {
    e.preventDefault();
    togglePages(frogesectionone, frogesectionthree);
    frogesectionthreeImg.src = './assects/images/1.jpg';
})
characterImg2.addEventListener("click", (e) => {
    e.preventDefault();
    togglePages(frogesectionone, frogesectionthree);
    frogesectionthreeImg.src = './assects/images/toad (1).jpg';
})
characterImg3.addEventListener("click", (e) => {
    e.preventDefault();
    togglePages(frogesectionone, frogesectionthree);
    frogesectionthreeImg.src = './assects/images/30.jpg';
})
characterImg4.addEventListener("click", (e) => {
    e.preventDefault();
    togglePages(frogesectionone, frogesectionthree);
    frogesectionthreeImg.src = './assects/images/40.jpg';
})
characterImg5.addEventListener("click", (e) => {
    e.preventDefault();
    togglePages(frogesectionone, frogesectionthree);
    frogesectionthreeImg.src = './assects/images/50.jpg';
})
characterImg6.addEventListener("click", (e) => {
    e.preventDefault();
    togglePages(frogesectionone, frogesectionthree);
    frogesectionthreeImg.src = './assects/images/60.jpg';
})
journeyone.addEventListener("click", (e) => {
    e.preventDefault();
    togglePages(frogesectionthree, frogesectiontwo);
})


function togglePages(currentPage, nextPage) {
    console.log('cyr', currentPage, nextPage)
    currentPage.style.display = "none";
    nextPage.style.display = "block"
}

// word counter

function countWords() {
    // Get the input text value
    var text = document
        .getElementById("inputField").value;
    text = text.replace(/(^\s*)|(\s*$)/gi, "");
    text = text.replace(/[ ]{2,}/gi, " ");
    text = text.replace(/\n /, "\n");
    document.querySelector(".count-words").innerHTML = text.split(' ').length
}

document.getElementById("inputField").addEventListener('keydown', (e) => {
    countWords();
})
