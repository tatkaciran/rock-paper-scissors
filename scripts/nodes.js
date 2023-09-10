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