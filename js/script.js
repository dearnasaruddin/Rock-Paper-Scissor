let welcome = document.querySelector(".welcome")
let computer = document.querySelector(".computer")
let friend = document.querySelector(".friend")
let twoPlayerVersion = document.querySelector(".twoPlayerVersion")
let heading = document.querySelector(".heading")
let subHeading = document.querySelector(".subHeading")
let restartBtn = document.querySelector("button")

let btnGroupOne = document.querySelector(".btnGroupOne")
let rockOne = document.querySelector(".rockOne")
let paperOne = document.querySelector(".paperOne")
let scissorOne = document.querySelector(".scissorOne")

let btnGroupTwo = document.querySelector(".btnGroupTwo")
let rockTwo = document.querySelector(".rockTwo")
let paperTwo = document.querySelector(".paperTwo")
let scissorTwo = document.querySelector(".scissorTwo")

let playerOneChoice;

friend.addEventListener("click",()=>{
    welcome.style.display = "none"
    twoPlayerVersion.style.display = "flex"
})

rockOne.addEventListener("click", () => {
    playerOneChoice = 1
    domUpdate("p1")
})
paperOne.addEventListener("click", () => {
    playerOneChoice = 2
    domUpdate("p1")
})
scissorOne.addEventListener("click", () => {
    playerOneChoice = 3
    domUpdate("p1")
})

rockTwo.addEventListener("click", () => {
    if (playerOneChoice == 1) {
        heading.innerHTML = "It's a Draw"
        domUpdate("p2")
    } else if (playerOneChoice == 2) {
        heading.innerHTML = "Player 01 Win"
        domUpdate("p2")
    } else if (playerOneChoice == 3) {
        heading.innerHTML = "Player 02 Win"
        domUpdate("p2")
    }
})

paperTwo.addEventListener("click", () => {
    if (playerOneChoice == 1) {
        heading.innerHTML = "Player 02 Win"
        domUpdate("p2")
    } else if (playerOneChoice == 2) {
        heading.innerHTML = "It's a Draw"
        domUpdate("p2")
    } else if (playerOneChoice == 3) {
        heading.innerHTML = "Player 01 Win"
        domUpdate("p2")
    }
})

scissorTwo.addEventListener("click", () => {
    if (playerOneChoice == 1) {
        heading.innerHTML = "Player 01 Win"
        domUpdate("p2")
    } else if (playerOneChoice == 2) {
        heading.innerHTML = "Player 02 Win"
        domUpdate("p2")
    } else if (playerOneChoice == 3) {
        heading.innerHTML = "It's a Draw"
        domUpdate("p2")
    }
})


function domUpdate(type) {
    if (type == "p1") {
        heading.innerHTML = "Player 02"
        btnGroupOne.style.display = "none"
        btnGroupTwo.style.display = "flex"
    } else if (type == "p2") {
        heading.style.textTransform = "none"
        subHeading.style.display = "none"
        btnGroupOne.style.display = "none"
        btnGroupTwo.style.display = "none"
        restartBtn.style.display = "inline-block"
        restartBtn.addEventListener("click", () => location.reload())
    }
}