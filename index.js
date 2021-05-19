const menuButton = document.getElementById('menuu');
const mobileNav = document.getElementById('mobile-navv');
const desctopNav = document.getElementById('desktop-nav');

// mobileNav.style.display = 'none'
menuButton.addEventListener('click', e => {
 
  mobileNav.style.display =  'block' 
  desctopNav.style.display =  'block' 
  menuButton.style.display = 'none' 
})

const navLink1 = document.getElementById('nav-v1');
const navLink2 = document.getElementById('nav-v1');
const navLink3 = document.getElementById('nav-v1');

navLink1.addEventListener('click', () => {
  menuButton.style.display = 'block';
  mobileNav.style.display = 'none';
  desctopNav.style.display =  'none' 
})