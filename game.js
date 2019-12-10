const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startgame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
      optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
  
    textNode.options.forEach(option => {
      if (showOption(option)) {
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectOption(option))
        optionButtonsElement.appendChild(button)
      }
    })
  }

function showOption(option) {
    return true
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
    }
    state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}
const textNodes = [
    {
        id: 1,
        text: 'You wake up and look around',
        options: [
            {
                text:'Open door',
                setState: { OpenDoor: true },
                nextText: 2
            },
            {
                text: 'Close Door',
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'The creaks open you enter the hallway there is 3 corridor to follow.',
    options: [
        {
            text: 'Turn left',
            setState: { Turnleft: true, Turnright: false, straight: false},
        }
      ]
    }

]

startgame()
