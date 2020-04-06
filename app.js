const cards = document.querySelectorAll('.memory-card');

let hasCardFlipped = false;
let firstCard, secondCard;
let lockBord = false;



function flipCard() {
    if (lockBord) return;
    this.classList.add('flip');

    if (!hasCardFlipped) {
        hasCardFlipped = true;
        firstCard = this; 
        
        return;
    } 
        hasCardFlipped = false;
        secondCard = this;
        checkForMatch()  
}

const checkForMatch = () => {
    let matchingPair = firstCard.dataset.name === secondCard.dataset.name;
    matchingPair ? disableCards() : unflipCards();
};

const disableCards = () => {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
};

const unflipCards = () => {
    lockBord = true;
    // not a match
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        lockBord = false;
    }, 1500)

};

cards.forEach(card => card.addEventListener('click', flipCard))
