const menuButton = document.getElementById('menuu');
const mobileNav = document.getElementById('mobile-navv');
const desctopNav = document.getElementById('desktop-nav');

menuButton.addEventListener('click', e => {
 
  mobileNav.style.display =  'block' 
  desctopNav.style.display =  'block' 
  menuButton.style.display = 'none' 
})

const navLink1 = document.getElementById('nav-v1');
const navLink2 = document.getElementById('nav-v2');
const navLink3 = document.getElementById('nav-v3');

navLink1.addEventListener('click', () => {
  menuButton.style.display = 'block';
  mobileNav.style.display = 'none';
  desctopNav.style.display =  'none' 
})

navLink2.addEventListener('click', () => {
  menuButton.style.display = 'block';
  mobileNav.style.display = 'none';
  desctopNav.style.display =  'none' 
})

navLink3.addEventListener('click', () => {
  menuButton.style.display = 'block';
  mobileNav.style.display = 'none';
  desctopNav.style.display =  'none' 
})

const close1 = document.getElementById('span1');

close1.addEventListener('click', () => {
  menuButton.style.display = 'block';
  mobileNav.style.display = 'none';
  desctopNav.style.display =  'none' 
})