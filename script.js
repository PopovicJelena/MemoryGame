function init() {

    const grid = document.querySelector('.grid');
    const result = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    let arrOfCard = [
        {
            image: 'images/cheeseburger.png',
            name: 'cheesburger'
        },
        {
            image: 'images/fries.png',
            name: 'fries'
        },
        {
            image: 'images/hotdog.png',
            name: 'hotdog'
        },
        {
            image: 'images/ice-cream.png',
            name: 'ice-cream'
        },
        {
            image: 'images/milkshake.png',
            name: 'milkshake'
        },
        {
            image: 'images/pizza.png',
            name: 'pizza'
        },
        {
            image: 'images/cheeseburger.png',
            name: 'cheesburger'
        },
        {
            image: 'images/fries.png',
            name: 'fries'
        },
        {
            image: 'images/hotdog.png',
            name: 'hotdog'
        },
        {
            image: 'images/ice-cream.png',
            name: 'ice-cream'
        },
        {
            image: 'images/milkshake.png',
            name: 'milkshake'
        },
        {
            image: 'images/pizza.png',
            name: 'pizza'
        }
    ]
    arrOfCard.sort(() => 0.5 - Math.random());

    function createBoard () {
        for(let i = 0; i < arrOfCard.length; i++) { 
            let card = document.createElement('img');
            card.src = 'images/blank.png';
            card.id = i;
            card.addEventListener('click', function() {
                if (!card.src.includes('images/white.png')) {
                    if(cardsChosenId[0] != card.id) {
                        cardsChosen.push(arrOfCard[i].name);
                        cardsChosenId.push(i);
                        card.src = arrOfCard[i].image;
                    }
                    if (cardsChosen.length === 2) {
                        setTimeout(checkForMatch, 500)
                    }
                }
            });
            grid.appendChild(card); 
        }
    }
    createBoard();

    function checkForMatch() {
        let cards = document.querySelectorAll('img');
        let cardOneId = cardsChosenId[0];
        let cardTwoId = cardsChosenId[1];

        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!')
            cards[cardOneId].setAttribute('src', 'images/white.png');
            cards[cardTwoId].setAttribute('src', 'images/white.png');
            cardsWon.push(cardsChosen);
        } else {
            cards[cardOneId].setAttribute('src', 'images/blank.png');
            cards[cardTwoId].setAttribute('src', 'images/blank.png');
            alert('Sorry, try again');
        }
        cardsChosen = [];
        cardsChosenId = [];
        result.textContent = cardsWon.length;
        if (cardsWon.length === arrOfCard.length / 2) {
            result.textContent = 'Congratulations! You found them all!';
        }
    }
}
init();