let nav = document.querySelector('.header__nav');
let burger = document.querySelector('.hamburger');
let burgerFirstLine = document.querySelector('.hamburger__line:nth-child(1)');
let burgerSecondLine = document.querySelector('.hamburger__line:nth-child(2)');
let burgerThirdLine = document.querySelector('.hamburger__line:nth-child(3)');
let links = document.querySelectorAll('.header__nav--link');

burger.addEventListener('click', function () {
  burgerFirstLine.classList.toggle('hamburger__line-1');
  burgerSecondLine.classList.toggle('hamburger__line-2');
  burgerThirdLine.classList.toggle('hamburger__line-3');

  nav.classList.toggle('display__nav');
});
