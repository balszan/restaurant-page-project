import './style.css';
import pho from './pho.png';

function pageLoader() {

const content = document.querySelector('#content');

const headline = document.createElement('h1');
headline.innerHTML = "Best Pho in Town!";
content.appendChild(headline);

const phoImage = document.createElement('img');
phoImage.src = pho;
content.appendChild(phoImage);

const textContent = document.createElement('p');
textContent.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque laboriosam ab alias voluptatum suscipit adipisci fugit, odit, officia amet sequi, mollitia nihil assumenda at ipsa illum sit molestiae sunt impedit? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque eligendi repellat sed, facere impedit voluptatum magnam id animi libero sint ut culpa veritatis? Non provident itaque ipsa facilis? Vel, veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam architecto nesciunt ipsum hic! Similique deleniti itaque dolorem facere. Unde quaerat natus mollitia ut cum, molestiae tenetur facere quidem reiciendis.';
content.appendChild(textContent);


}

export default pageLoader;