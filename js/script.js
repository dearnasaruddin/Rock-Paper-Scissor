let welcome = document.querySelector(".welcome")

let computer = document.querySelector(".computer")
let computerVersion = document.querySelector(".computerVersion")
let computerHeading = document.querySelector(".computerHeading")
let computerSubHeading = document.querySelector(".computerSubHeading")
let pcHomeBtn = document.querySelector(".pcHomeBtn")
let pcRestartBtn = document.querySelector(".pcRestartBtn")

let friend = document.querySelector(".friend")
let twoPlayerVersion = document.querySelector(".twoPlayerVersion")
let heading = document.querySelector(".heading")
let subHeading = document.querySelector(".subHeading")
let homeBtn = document.querySelector(".homeBtn")
let restartBtn = document.querySelector(".restartBtn")

let btnGroup = document.querySelector(".btnGroup")
let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissor = document.querySelector(".scissor")

let btnGroupOne = document.querySelector(".btnGroupOne")
let rockOne = document.querySelector(".rockOne")
let paperOne = document.querySelector(".paperOne")
let scissorOne = document.querySelector(".scissorOne")

let btnGroupTwo = document.querySelector(".btnGroupTwo")
let rockTwo = document.querySelector(".rockTwo")
let paperTwo = document.querySelector(".paperTwo")
let scissorTwo = document.querySelector(".scissorTwo")

let playerOneChoice;



friend.addEventListener("click", () => {
    heading.innerHTML = "Player 01"
    subHeading.innerHTML = "Chose One"
    domUpdate("friendBtn")
})

computer.addEventListener("click", () => {
    computerHeading.innerHTML = "Player 02"
    computerSubHeading.innerHTML = "Guess the Computer's Choice"
    playerOneChoice = computerChoice()
    domUpdate("computerBtn")
})


rock.addEventListener("click", () => {
    console.log(playerOneChoice)
    computerSubHeading.innerHTML = findWinner(playerOneChoice, "Rock")
    domUpdate("pc")
})

paper.addEventListener("click", () => {
    console.log(playerOneChoice)
    computerSubHeading.innerHTML = findWinner(playerOneChoice, "Paper")
    domUpdate("pc")
})

scissor.addEventListener("click", () => {
    console.log(playerOneChoice)
    computerSubHeading.innerHTML = findWinner(playerOneChoice, "Scissor")
    domUpdate("pc")
})




rockOne.addEventListener("click", () => {
    playerOneChoice = "Rock"
    domUpdate("p1")
})
paperOne.addEventListener("click", () => {
    playerOneChoice = "Paper"
    domUpdate("p1")
})
scissorOne.addEventListener("click", () => {
    playerOneChoice = "Scissor"
    domUpdate("p1")
})





rockTwo.addEventListener("click", () => {
    subHeading.innerHTML = findWinner(playerOneChoice, "Rock")
    domUpdate("p2")
})

paperTwo.addEventListener("click", () => {
    subHeading.innerHTML = findWinner(playerOneChoice, "Paper")
    domUpdate("p2")
})

scissorTwo.addEventListener("click", () => {
    subHeading.innerHTML = findWinner(playerOneChoice, "Scissor")
    domUpdate("p2")
})






function computerChoice() {
    let choiceArr = ["Rock", "Paper", "Scissor"]
    let randomIndex = Math.floor(Math.random() * choiceArr.length)
    return choiceArr[randomIndex]
}


function findWinner(pcORplayerOne, playerTwo) {
    if (
        pcORplayerOne == playerTwo
    ) { return `Player 01 Chose: <span style="color: #FE3E57; font-size: inherit "> ${pcORplayerOne} </span><br>Player 02 Chose: <span style="color: #FE3E57; font-size: inherit "> ${playerTwo} </span> <p style="color: #FE3E57; font-size: inherit; margin-top: 20px ">It's a Draw </p>` }

    if (
        (pcORplayerOne == "Rock" && playerTwo == "Paper") ||
        (pcORplayerOne == "Paper" && playerTwo == "Scissor") ||
        (pcORplayerOne == "Scissor" && playerTwo == "Rock")
    ) { return `Player 01 Chose:<span style="color: #FE3E57; font-size: inherit "> ${pcORplayerOne}</span><br>Player 02 Chose: <span style="color: #FE3E57; font-size: inherit ">${playerTwo}</span> <p style="color: #FE3E57; font-size: inherit; margin-top: 20px ">Player 02 Win</p>` }

    return `Player 01 Chose:<span style="color: #FE3E57; font-size: inherit "> ${pcORplayerOne} </span><br>Player 02 Chose: <span style="color: #FE3E57; font-size: inherit ">${playerTwo}</span><p style="color: #FE3E57; font-size: inherit ; margin-top: 20px">Player 01 Win</p>`
}


function domUpdate(type) {
    if (type == "friendBtn") {
        welcome.style.display = "none"
        twoPlayerVersion.style.display = "flex"
        heading.style.display = "block"
        subHeading.style.display = "block"
        btnGroupOne.style.display = "flex"
        homeBtn.style.display = "none"
        restartBtn.style.display = "none"
    } else if (type == "computerBtn") {
        welcome.style.display = "none"
        computerVersion.style.display = "flex"
        computerHeading.style.display = "block"
        computerSubHeading.style.display = "block"
        btnGroup.style.display = "flex"
        pcRestartBtn.style.display = "none"
    } else if (type == "p1") {
        heading.innerHTML = "Player 02"
        btnGroupOne.style.display = "none"
        btnGroupTwo.style.display = "flex"
    } else if (type == "p2") {
        heading.style.display = "none"
        btnGroupOne.style.display = "none"
        btnGroupTwo.style.display = "none"
        btnGroup.style.display = "none"
        restartBtn.style.display = "inline-block"
        homeBtn.style.display = "inline-block"
        restartBtn.addEventListener("click", () => {
            twoPlayerVersion.style.display = "flex"
            btnGroupOne.style.display = "flex"
            heading.style.display = "block"
            heading.innerHTML = "Player 01"
            subHeading.innerHTML = "Choose One"
            restartBtn.style.display = "none"
            homeBtn.style.display = "none"
        })
        homeBtn.style.display = "inline-block"
        homeBtn.addEventListener("click", () => {
            welcome.style.display = "flex"
            homeBtn.style.display = "none"
            twoPlayerVersion.style.display = "none"
        })
    } else if (type == "pc") {
        computerHeading.style.display = "none"
        heading.style.textTransform = "none"
        subHeading.style.display = "none"
        btnGroupOne.style.display = "none"
        btnGroupTwo.style.display = "none"
        btnGroup.style.display = "none"
        pcRestartBtn.style.display = "inline-block"
        pcRestartBtn.addEventListener("click", () => {
            playerOneChoice = computerChoice()
            computerVersion.style.display = "flex"
            btnGroup.style.display = "flex"
            computerHeading.style.display = "block"
            computerHeading.innerHTML = "Player 02"
            computerSubHeading.innerHTML = "Guess the Computer's Choice"
            pcRestartBtn.style.display = "none"
            pcHomeBtn.style.display = "none"
        })
        pcHomeBtn.style.display = "inline-block"
        pcHomeBtn.addEventListener("click", () => {
            welcome.style.display = "flex"
            pcHomeBtn.style.display = "none"
            computerVersion.style.display = "none"
        })
    }
}