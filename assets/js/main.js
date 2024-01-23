/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
sr.reveal('.resume__title, .resume__info', { interval: 200 });



// js for text animation
// Additional Script for Home Section
const homeTitle = document.querySelector('.home__title');
const phrases = [
  { text: 'Hi, I am Mubashir', color: 'blue' },
  { text: 'I am a', color: 'black' },
  { text: 'Frontend Developer', color: 'blue' },
  { text: 'Backend Developer', color: 'black' },
  { text: 'Full Stack Developer', color: 'blue' }
];
let index = 0;
let charIndex = 0;

function updateText() {
  const currentPhrase = phrases[index];
  const { text, color } = currentPhrase;

  homeTitle.innerHTML = `<span style="color: ${color};">${text.substring(0, charIndex)}</span><br>`;

  charIndex++;

  if (charIndex <= text.length) {
    setTimeout(updateText, 100);
  } else {
    charIndex = 0;
    index = (index + 1) % phrases.length;
    setTimeout(updateText, 2000); // Change duration before moving to the next phrase
  }
}

// Initial update
updateText();




