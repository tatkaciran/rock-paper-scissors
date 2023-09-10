let scores = []

function getComputerChoice() {
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)]
}

async function getPlayerChoice() {
    const selectionPromise = new Promise((resolve, reject) => {
        const buttons = document.querySelectorAll('.buttons > button')
        buttons.forEach(function (button) {
            button.addEventListener('click', event => {
                const selection = event.currentTarget.querySelector('img').alt
                resolve(selection)
            })
        })
    })

    return await selectionPromise
}

async function playRound() {
    const playerSelection = await getPlayerChoice()
    displayPlayerChoice(playerSelection)
    const computerSelection = getComputerChoice()
    displayOpponentChoice(computerSelection)

    let scoreStatus = ''

    const playerWins =
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')

    if (playerSelection === computerSelection) {
        scoreStatus = "It's a draw! Both of you chose the same sign!"
        scores.push('draw')
    } else if (playerWins) {
        scoreStatus = `You Win! ${playerSelection} beats ${computerSelection}`
        scores.push('win')
    } else {
        scoreStatus = `You Lose! ${computerSelection} beats ${playerSelection}`
        scores.push('lose')
    }

    console.log('player:', playerSelection)
    console.log('computer:', computerSelection)
    console.log('status:', scoreStatus)
    console.log('scores:', scores)
    console.log(' ')
}

async function game(roundNumber = 5) {
    for (let i = 1; i <= roundNumber; i++) {
        await playRound()
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

game()