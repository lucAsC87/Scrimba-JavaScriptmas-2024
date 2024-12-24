const emojis = ['🎄', '🎁', '🎅', '☃️']; // Your set of emojis


/**
 *🎄 Requirements:
 * - This is a classic "Find the Pair" game with a christmas theme.
 * - The player should be able to reveal cards by clicking on them.
 * - When the player reveals one card, it should stay revealed until a second card is revealed.
 * - When the player reveals two cards:
 *   - If they are the same, they should remain revealed for the rest of the game.
 *   - If they are different, they should be flipped back to hidden.
 * - The cards should be shuffled at the start of each game.
 */

let cardValues = [...emojis, ...emojis]; 
let firstCard = null; 
let secondCard = null;
let lockedBoard = false;

const board = document.getElementById('game-board');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createCards() {
    shuffle(cardValues);
    cardValues.forEach(value => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.cardValue = value;
        card.addEventListener('click', flipCard);
        board.appendChild(card);
    });
}

function flipCard() {
    if (lockedBoard || this.classList.contains('revealed')) return;
    this.classList.add('revealed');
    this.textContent = this.dataset.cardValue;
    if (!firstCard) {
        firstCard = this;
    } else {
        secondCard = this;
        lockedBoard = true;
        if (firstCard.dataset.cardValue === secondCard.dataset.cardValue) {
            resetCards();
        } else {
            setTimeout(() => {
                firstCard.classList.remove('revealed');
                firstCard.textContent = '';
                secondCard.classList.remove('revealed');
                secondCard.textContent = '';
                resetCards();
            }, 1000);
        }
    }
}

function resetCards() {
    [firstCard, secondCard] = [null, null];
    lockedBoard = false;
}

createCards();

/**
 * 🎅 Stretch Goals:
 * - Add a point system where points are awarded for each correctly revealed pair 
 *   and deducted for each incorrect pair (you decide the exact points for each action).
 * - Implement a high-score system using the browser's local storage.
 * - Add a "Restart Game" button that appears when the game ends so the user can start over.
 */
  