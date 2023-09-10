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
        changeChoicesColorAccordingToResult('draw')
    } else if (playerWins) {
        scoreStatus = `You Win! ${playerSelection} beats ${computerSelection}`
        addScoreToPlayer()
        changeChoicesColorAccordingToResult('win')
        scores.push('win')
    } else {
        scoreStatus = `You Lose! ${computerSelection} beats ${playerSelection}`
        addScoreToOpponent()
        changeChoicesColorAccordingToResult('lose')
        scores.push('lose')
    }

    displayResult(scoreStatus)
}

function resetGame() {
    scores = []
    cleanDisplayedScores()
    changeChoicesColorAccordingToResult('undefined')
    displayPlayerChoice()
    displayOpponentChoice()
    displayRockPaperScissorsButtons()
    displayResult('Select Rock, Paper or Scissors')
}

async function game(roundNumber = 5) {
    const playerWin =
        scores.filter(value => value === 'win').length === roundNumber
    const playerLose =
        scores.filter(value => value === 'lose').length === roundNumber

    if (playerWin || playerLose) {
        const result = playerWin ? 'You Win!' : 'You Lose!'
        displayPlayAgainButton(result, () => {
            resetGame()
            game()
        })
    } else {
        displayRockPaperScissorsButtons()
        await playRound()
        game()
    }
}

game()
