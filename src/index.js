import pageLoader from "./pageLoader";
import aboutUs from './aboutUs';
import menu from './menu';
import contact from './contact';




pageLoader();

const content = document.querySelector('#content');


const aboutUsButton = document.querySelector('#aboutUs');
aboutUsButton.addEventListener('click', function() {
    content.innerHTML="";
    aboutUs();
});


const homeButton = document.querySelector('#home');
homeButton.addEventListener('click', function() {
    content.innerHTML="";
    pageLoader();
});

const menuButton = document.querySelector('#menu');
menuButton.addEventListener('click', function() {
    content.innerHTML="";
    menu();
});

const contactButton = document.querySelector('#contact');
contactButton.addEventListener('click', function() {
    content.innerHTML="";
    contact();
});