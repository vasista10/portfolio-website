function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
var Typed=new Typed(".text",{
  strings: ['Web Developer', 'Frontend developer','Musician'],
  typeSpeed:100,
  backSpeed:100,
  backdelay:1000,
  loop:true
})
