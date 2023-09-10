const choices = ['rock', 'paper', 'scissors']
let scores = []
let scoreStatus = ''

function getComputerChoice() {
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)]
}

function getPlayerSelection() {
    const choice = prompt('Select Rock, Paper or Scissors', 'paper')
    const lowercaseChoice = choice.toLowerCase()
    return choices.findIndex(value => {
        return value === lowercaseChoice
    })
}

function playRound() {
    const playerSelection = getPlayerSelection()
    const computerSelection = getComputerChoice()

    const playerChoice = choices[playerSelection]

    if (playerSelection === computerSelection) {
        scoreStatus = "It's a draw! Both of you chose the same sign!"
        scores.push('draw')
    } else if (
        (playerSelection === 0 && computerSelection === 'scissors') ||
        (playerSelection === 1 && computerSelection === 'rock') ||
        (playerSelection === 2 && computerSelection === 'paper')
    ) {
        scoreStatus = `You Win! ${playerChoice} beats ${computerSelection}`
        scores.push('win')
    } else if (
        (playerSelection === 0 && computerSelection === 'paper') ||
        (playerSelection === 1 && computerSelection === 'scissors') ||
        (playerSelection === 2 && computerSelection === 'rock')
    ) {
        scoreStatus = `You Lose! ${computerSelection} beats ${playerChoice}`
        scores.push('lose')
    }

    console.log('player:', playerChoice)
    console.log('computer:', computerSelection)
    console.log('status:', scoreStatus)
    console.log('scores:', scores)
    console.log(' ')
}

function game(roundNumber = 5) {
    for (let i = 1; i <= roundNumber; i++) {
        playRound()
    }

    const winCount = scores.filter(value => value === 'win').length
    const drawCount = scores.filter(value => value === 'draw').length

    if (winCount >= Math.round(roundNumber / 2)) {
        console.log('You Win!')
    } else if (drawCount === roundNumber) {
        console.log("It's a draw!")
    } else {
        console.log('You Lose!')
    }
}
