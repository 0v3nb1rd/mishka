// var navMain = document.querySelector('.top-menu');
var topMenu = document.querySelector('.top-menu__wrapper');
var navToggle = document.querySelector('.top-menu__toggle');

topMenu.classList.remove('top-menu--nojs');

navToggle.addEventListener('click', function() {
  if (topMenu.classList.contains('top-menu--closed')) {
    topMenu.classList.remove('top-menu--closed');
    topMenu.classList.add('top-menu--opened');
    console.log('opened')
  } else {
    topMenu.classList.add('top-menu--closed');
    topMenu.classList.remove('top-menu--opened');
    console.log('closed')
  }
});
