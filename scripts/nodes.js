const playerScoresNode = document.querySelector('.player-scores')
const opponentScoresNode = document.querySelector('.opponent-scores')

const createImg = (name = 'undefined') => {
    const img = document.createElement('img')
    img.alt = `${name}`
    img.src = `assets/${name}.svg`
    return img
}

const displayChoice = (who, choice) => {
    const whoChoice = document.querySelector(`${who}`)
    const img = createImg(choice)
    whoChoice.innerHTML = ''
    whoChoice.appendChild(img)
}

const displayPlayerChoice = choice => displayChoice('.player-choice', choice)

const displayOpponentChoice = choice =>
    displayChoice('.opponent-choice', choice)

function changeChoicesColorAccordingToResult(result) {
    const choices = document.querySelector('.choices')
    choices.classList = []
    choices.classList.add('choices')
    choices.classList.add('centered')
    choices.classList.add(`${result}`)
}

function displayScore(result) {
    const score = document.createElement('li')
    const img = createImg(result)
    score.appendChild(img)
    score.classList.add('score')
    score.classList.add(`${result}`)
    return score
}

const addScoreToOpponent = () =>
    opponentScoresNode.appendChild(displayScore('lose'))

const addScoreToPlayer = () => playerScoresNode.appendChild(displayScore('win'))
