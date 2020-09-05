
const start = document.querySelector('.start')
const game = document.querySelector('.game')
const canvas = document.querySelector('.canvas')
const newGame = document.querySelector('.new-game')
let counter = document.querySelector('.counter'); // number of wrong answers
let cardItem = {};
let check2CardSArray =[];
let numberOfTry = 0
console.log(typeof numberOfTry)//////////////////////////////////////////////
let wins = 0; // number of rigth answers
let gameArrayOfCards = [];

let cardsArray = [
    {
        id: 1,
        img: './image/simpsons-1.webp',
    },
    {
        id: 2,
        img: './image/simpsons-2.jfif',
    },
    {
        id: 3,
        img: './image/simpsons-3.png',
    },
    {
        id: 4,
        img: './image/simpsons-4.png',
    },
    {
        id: 5,
        img: './image/simpsons-5.jpg',
    },
    {
        id: 6,
        img: './image/simpsons-6.png',
    },
    {
        id: 7,
        img: './image/simpsons-1.webp',
    },
    {
        id: 8,
        img: './image/simpsons-2.jfif',
    },
    {
        id: 9,
        img: './image/simpsons-3.png',
    },
    {
        id: 10,
        img: './image/simpsons-4.png',
    },
    {
        id: 11,
        img: './image/simpsons-5.jpg',
    },
    {
        id: 12,
        img: './image/simpsons-6.png',
    },
    {
        id:13,
        img:"./image/simpsons-7.jfif"
    },
    {
        id:14,
        img:"./image/simpsons-8.jpg"
    },
    {
        id:15,
        img:'./image/simpsons-9.jpg'
    },
    {
        id:16,
        img:'./image/simpsons-10.jpg'
    },
    {
        id:17,
        img:'./image/simpsons-11.jpg'
    },
    {
        id: 18,
        img: './image/simpsons-12.jpg'
    },
    {
        id:19,
        img:"./image/simpsons-7.jfif"
    },
    {
        id: 20,
        img:"./image/simpsons-8.jpg"
    },
    {
        id: 21,
        img:'./image/simpsons-9.jpg'
    },
    {
        id: 22,
        img:'./image/simpsons-10.jpg'
    },
    {
        id: 23,
        img:'./image/simpsons-11.jpg'
    },
    {
        id: 24,
        img: './image/simpsons-12.jpg'
    },
];



function startGame() {
    
    game.classList.add('open')
    
    startWatch()// start clock function
    randomCards(12)
}

function randomCards(numberOfCards) {
    gameArrayOfCards = cardsArray.slice(0, numberOfCards);
    gameArrayOfCards = gameArrayOfCards.sort(() => Math.random() - 0.5);
    console.log(gameArrayOfCards);
    createCards(gameArrayOfCards); // start array of obj
    return gameArrayOfCards;
}


function createCards(gameArrayOfCards) {
    gameArrayOfCards.forEach((card)=> {
        
        const contain = document.createElement('div');
        contain.classList.add('flip-card')// container
        const flipCardInner = document.createElement('div');
        flipCardInner.classList.add('flip-card-inner')// inner card
        const cardFront = document.createElement('div')
        cardFront.classList.add('flip-card-front')
        const cardBack = document.createElement('div')
        cardBack.style.backgroundImage = `url('${card.img}')` /////////////////// card img 
        cardBack.style.backgroundSize = 'cover'
        cardBack.classList.add('flip-card-back')
        flipCardInner.appendChild(cardFront)
        flipCardInner.appendChild(cardBack)
        flipCardInner.id = `${card.id}`
        contain.appendChild(flipCardInner)
        
   
        
        // push object to array
        gameArrayOfCards.push(cardItem)
        canvas.appendChild(contain)
        
        flipCardInner.addEventListener('click', () => evenet(card))

    })
   
}



function evenet(obj) {
    check2CardSArray.push(obj)
    const card1 = document.getElementById(`${obj.id}`)
    card1.classList.add('flip')
    if(check2CardSArray.length === 2){
        document.querySelector('.canvas').classList.add('event') //stop any click on screen
        checkIfSameCard(check2CardSArray)
    }

}

function checkIfSameCard(arrayOf2) {
    
    setTimeout(() => {
        if(arrayOf2[0].img === arrayOf2[1].img){
            arrayOf2.forEach((card) => {
                document.getElementById(`${card.id}`).classList.add('hidden') // add hidden class 
            }) 

            wins++
            console.log(arrayOf2)
            ifWon(wins)
        } else {
            numberOfTry++
            counter.textContent = `${numberOfTry}`
            arrayOf2.forEach((card) => {
                document.getElementById(`${card.id}`).classList.remove('flip') // add hidden class 
            })
             
        }
        check2CardSArray =[]; // מחזיר מערך ריק 
        document.querySelector('.canvas').classList.remove('event')
        
        
    }, 1000)
    
}

function ifWon(wins) {
    console.log(cardsArray)
    console.log('heloooooooooooooo')
    console.log(wins)

    if( wins === (6) ) { //////////////////////////////////////////////////// fix the array
        const winDisplay = document.getElementById('win-display');
        winDisplay.classList.add('open');
        stop();// stop time
        gameArrayOfCards =[];
        const startOver = document.querySelector('.start-over');
        startOver.addEventListener('click', restartGame); 
     
    }
}

function restartGame() {
    stop(); 
    document.getElementById('win-display').classList.remove('open');
    canvas.innerHTML = '';
    
    startGame();
}

newGame.addEventListener('click', restartGame) 
start.addEventListener('click', startGame)