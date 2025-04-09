import { VFX } from "https://esm.sh/@vfx-js/core";

//Toggling Menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

//Toggling Active Link
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Scroll Reveal

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.home-title', {} )
sr.reveal('.button', {delay: 100} )
//sr.reveal('.home-img', {delay: 200} )
sr.reveal('.home-social', {delay: 200,} )

sr.reveal('.about-img', {} )
sr.reveal('.about-subtitle', {delay: 100} )
sr.reveal('.about-text', {delay: 200} )

sr.reveal('.skills-subtitle', {delay: 100} )
sr.reveal('.skills-text', {delay: 150} )
sr.reveal('.skills-data', {interval: 200} )
sr.reveal('.skills-img', {delay: 200} )

sr.reveal('.work-img', {interval: 100} )

sr.reveal('.contact-input', {interval: 100} )



class ButtonEffect {
  constructor(funbutton) {
    this.vfx = this.vfx = new VFX();
    funbutton.addEventListener("mouseenter", (e) => {
      this.vfx.add(funbutton, { shader: "glitch", overflow: 100 });
    });

    funbutton.addEventListener("mouseleave", (e) => {
      this.vfx.remove(button);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new ButtonEffect(document.querySelector("funbutton"));
});
