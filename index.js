window.onload = function () {
  const suit = Math.floor(Math.random() * 4) + 1;
  const number = Math.floor(Math.random() * 13) + 1;
  const card = document.querySelector('.card');
  if (suit === 1) {
    card.classList.add('spade');
  } else if (suit === 2) {
    card.classList.add('club');
  } else if (suit === 3) {
    card.classList.add('heart');
  } else if (suit === 4) {
    card.classList.add('diamond');
  }

  const cardNumber = number === 1 ? 'A' : number === 11 ? 'J' : number === 12 ? 'Q' : number === 13 ? 'K' : number;
  const cardNumberSpan = document.querySelector('.card .card-number');
  cardNumberSpan.textContent = cardNumber;

  const topSuitSpan = document.querySelector('.card .top-suit');
  const bottomSuitSpan = document.querySelector('.card .bottom-suit');
  topSuitSpan.textContent = '';
  bottomSuitSpan.textContent = '';

  if (suit === 1) {
    topSuitSpan.textContent = '♠';
    bottomSuitSpan.textContent = '♠';
  } else if (suit === 2) {
    topSuitSpan.textContent = '♣';
    bottomSuitSpan.textContent = '♣';
  } else if (suit === 3) {
    topSuitSpan.textContent = '♥';
    bottomSuitSpan.textContent = '♥';
  } else if (suit === 4) {
    topSuitSpan.textContent = '♦';
    bottomSuitSpan.textContent = '♦';
  }
};
