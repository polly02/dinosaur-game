const dino = document.querySelector(".dino");
const cactus = document.querySelector(".cactus");

document.addEventListener("keydown", (event) => {
    jump()
});

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump")
    }
    setTimeout(function () {
        dino.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval(function(){
    let dinotop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
})