'use strict';

const header = document.querySelector('.header');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu');
const moto = document.querySelector('.moto');
const navLink = document.querySelectorAll('.menu-item');

hamburger.addEventListener('click', toggleMenu);

navLink.forEach((n) => n.addEventListener('click', toggleMenu));

function toggleMenu() {
  header.classList.toggle('active');
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  moto.classList.toggle('active');
}
