import './style.css';
import phoHouse from './phoHouse.png';


function contact() {

    const content = document.querySelector('#content');

    const headline = document.createElement('h1');
    headline.innerHTML = "Contact Us";
    content.appendChild(headline);

    const contactInfo = document.createElement('h3');
    contactInfo.innerHTML = 'Pho Head Office,<br> 15 Clerkenwell Green, <br>London,<br> EC1R 0DP, <br>Phone: 020 8161 0252';
    content.appendChild(contactInfo);

    const phoImage = document.createElement('img');
    phoImage.src = phoHouse;
    content.appendChild(phoImage);

    const textContent = document.createElement('h4');
    textContent.innerHTML = 'Sunday: 8am - 8pm,<br> Monday: 6am - 6pm,<br> Tuesday: 6am - 6pm,<br>Wednesday: 6am - 6pm,<br> Thursday: 6am - 10pm,<br> Friday: 6am - 10pm,<br> Saturday: 8am - 10pm';
    content.appendChild(textContent);
}

export default contact;