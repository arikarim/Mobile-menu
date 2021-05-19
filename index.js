const menuButton = document.getElementById('menuu');
const mobileNav = document.getElementById('mobile-navv');
mobileNav.style.display = 'none'
menuButton.addEventListener('click', e => {
 
  mobileNav.style.display = 'none' ? 'block' : 'none'
  menuButton.style.display = 'none' 
})
