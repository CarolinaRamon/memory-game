

document.addEventListener('DOMContentLoaded', () =>{

    const cardArrayOriginal = [
        {
          verb: 'go',
          img: 'images/go.png'
        },
        {
          verb: 'go',
          img: 'images/went.png'
        },
        {
          verb: 'teach',
          img: 'images/teach.png'
        },
        {
          verb: 'teach',
          img: 'images/taught.png'
        },
        {
          verb: 'drink',
          img: 'images/drink.png'
        },
        {
          verb: 'drink',
          img: 'images/drank.png'
        },
        {
          verb: 'eat',
          img: 'images/eat.png'
        },
        {
          verb: 'eat',
          img: 'images/ate.png'
        },
        {
          verb: 'bring',
          img: 'images/bring.png'
        },
        {
          verb: 'bring',
          img: 'images/brought.png'
        },
        {
          verb: 'see',
          img: 'images/see.png'
        },
        {
          verb: 'see',
          img: 'images/saw.png'
        },
        {
          verb: 'forget',
          img: 'images/forget.png'
        },
        {
          verb: 'forget',
          img: 'images/forgot.png'
        },
        {
          verb: 'sing',
          img: 'images/sing.png'
        },
        {
          verb: 'sing',
          img: 'images/sang.png'
        },
        {
          verb: 'buy',
          img: 'images/buy.png'
        },
        {
          verb: 'buy',
          img: 'images/bought.png'
        }
      ]


let cardArray = cardArrayOriginal.slice();      
cardArray.sort( () => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []


function createBoard(){
    for (let i=0; i<cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('img-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

function showBoard(){
  for (let i=0; i<cardArray.length; i++) {
      let cards = document.querySelectorAll('img')
      cards[i].setAttribute('src', cardArrayOriginal[i].img)
  }
}

function checkForMatch() { 
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You have to click different cards!!')
    } else if (cardsChosen[0] === cardsChosen[1]){  
        cards[optionOneId].setAttribute('src', 'images/pink.png')
        cards[optionTwoId].setAttribute('src', 'images/pink.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
    }
    cardsChosen = []
    cardsChosenId = []
    if (cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = "Congratulations! You've found them all!"
        showBoard()
    }
}

function flipCard(){
    let cardId = this.getAttribute('img-id')
    cardsChosen.push(cardArray[cardId].verb)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 1500)    
    }
}

createBoard()


})

