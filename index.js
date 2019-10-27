const hamburger = document.querySelector('.hamburger')
const ul = document.querySelector('ul')
const link  = document.querySelectorAll('ul li')
hamburger.addEventListener('click', () => {
    ul.classList.toggle('open');
})