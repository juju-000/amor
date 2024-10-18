function openCard() {
    const cardInner = document.getElementById('cardInner');
    cardInner.style.transform = 'rotateY(180deg)';
}

function closeCard() {
    const cardInner = document.getElementById('cardInner');
    cardInner.style.transform = 'rotateY(0deg)';
}
