'use strict';

// 
let last_known_scroll_position = 0;
let ticking = false;
const navbar = document.querySelector('.nav__container');

function doSomething(scroll_pos) {
    if (scroll_pos > 0) {
        navbar.classList.add('nav-scroll');
    } else {
        navbar.classList.remove('nav-scroll');
    }
}

document.addEventListener('scroll', function (e) {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function () {
            doSomething(last_known_scroll_position);
            ticking = false;
        });

        ticking = true;
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// MODAL
document.querySelectorAll('a[data-toggle="modal"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('data-target')).classList.add('show');
    });
});
document.querySelectorAll('.modal span.close').forEach(close => {
    close.addEventListener('click', function (e) {
        e.preventDefault();
        // becsukom az összes modal-t
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('show');
        });
    });
});