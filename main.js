const choices = ['rock', 'paper', 'scissors']

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
