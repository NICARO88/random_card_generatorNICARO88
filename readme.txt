.card .top-suit::before,
.card .bottom-suit::before {
    content: '';
}

.spade::before {
    content: '♠';
}

.club::before {
    content: '♣';
}

.heart::before {
    content: '♥';
    color: red;
}

.diamond::before {
    content: '♦';
    color: red;}

Este css está de reserva para ver qué pasa al quitar el ::before en el archivo .css

.card {
    display: inline-block;

Ésta etiqueta está abierta (no tiene el } ) porque la saqué para probar si la carta se centra al quitarle dicha propiedad a .card 

card.classList.remove('spade', 'club', 'heart', 'diamond');
esto lo eliminé de debajo de la línea 5, es decir era la línea 6, me parece que no es necesario ya que establecí una string vacía 

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
  línea 21 del js 
----------------------------------------------------------------
  .card .top-suit,
.card .bottom-suit {
    content: '';
}

.spade {
    content: '♠';
}

.club{
    content: '♣';
}

.heart{
    content: '♥';
    color: red;
}

.diamond{
    content: '♦';
    color: red; 
}
desde líne 44 del css

----------------------------------------------------------------------------------------------------------

  if (suit === 1) {
    card.classList.add('spade');
  } else if (suit === 2) {
    card.classList.add('club');
  } else if (suit === 3) {
    card.classList.add('heart');
  } else if (suit === 4) {
    card.classList.add('diamond');
  }
  desde línea 5 del js 