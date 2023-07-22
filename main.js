const choices = ['rock', 'paper', 'scissors']
let scores = []
let scoreStatus = ''

function getComputerChoice() {
    return Math.floor(Math.random() * 3)
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
    const computerChoice = choices[computerSelection]

    if (playerSelection === computerSelection) {
        scoreStatus = "It's a tie! Both of you chose the same sign!"
        scores.push('draw')
    } else if (
        (playerSelection === 0 && computerSelection === 2) ||
        (playerSelection === 1 && computerSelection === 0) ||
        (playerSelection === 2 && computerSelection === 1)
    ) {
        scoreStatus = `You Win! ${playerChoice} beats ${computerChoice}`
        scores.push('win')
    } else if (
        (playerSelection === 0 && computerSelection === 1) ||
        (playerSelection === 1 && computerSelection === 2) ||
        (playerSelection === 2 && computerSelection === 0)
    ) {
        scoreStatus = `You Lose! ${computerChoice} beats ${playerChoice}`
        scores.push('lose')
    }

    console.log('player:', playerChoice)
    console.log('computer:', computerChoice)
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
        console.log("It's a tie!")
    } else {
        console.log('You Lose!')
    }
}

game()
