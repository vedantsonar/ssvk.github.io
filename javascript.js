

const toggleButton = document.querySelector('.nav-toggle');
const navlinks = document.querySelector('.navbar');
const navlists = document.querySelector('.nav-list');

  toggleButton.addEventListener('click', () =>{
    navlists.classList.toggle('v-class');
    navlinks.classList.toggle('h-nav');
  })