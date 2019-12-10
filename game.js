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
                nextText: 5
            }
        ]
    },
    {
        id: 2,
        text: 'The door creaks open you enter the hallway there is 3 corridor to follow.',
    options: [
        {
            text: 'Turn left',
            setState: { Turnleft: true, Turnright: false, straight: false},
            nextText: 3
        },
        {
          text: 'Turn right',
          setState: { Turnleft: false, Turnright: true, straight: false},
          nextText: 4
        },
        {
          text: 'Walk down stright',
          setState: { Turnleft: false, Turnright: false, straight: true},
          nextText: 6
        },
      ]
    },
    {
      id: 3,
      text: 'You turned left and fell to your death you died',
      setState: {Died: true},
    },
    {
      id: 4,
      text: 'You turned right and see the bathroom',
      setState: {Died: false, Turnleft: false, Turnright: false, straight: false},
    },
    {
      id: 5,
      text: 'You dont open the door and die in your room cold and alone.',
      setState: {Died: true},
    },
    {
      id: 6,
      text: 'You walk stright down the hallway and you see a staircase',
      options: [
      {
        text: 'Yeet down the stairs',
        setState: {Died: false},
        nextText: 8 //add id number later
      },
      {
        text: 'Walk down the stairs',
        setState: {Died: false}
      },
      {
        text: 'Slide down the railing',
        setState: {Died: true},
        nextText: 7      
      },
      {
        text: 'Roll down the stairs',
        setState: {Died: true}
      },
      ]   
    },
    {
      id: 7,
      text: 'You lost your balance causing you to slipped off of the railing and die',
      setState: {Died: true}
    },
    {
      id: 8,
      //finish later (makes it down the stairs)
    }

  
]

startgame()
