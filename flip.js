const card = document.querySelector('.card_inner');
const button = document.querySelector('.fliper');
const button1 = document.querySelector('.fliper1');

button.addEventListener('click', function(){
    card.classList.toggle('is_flipped');
});

button1.addEventListener('click', function(){
    card.classList.toggle('is_flipped');
});