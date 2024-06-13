import './style.css';
import menuPho from './menu.png';


function menu() {

    const content = document.querySelector('#content');

    const headline = document.createElement('h1');
    headline.innerHTML = "Our Delicious Menu";
    content.appendChild(headline);

    const menuImage = document.createElement('img');
    menuImage.src = menuPho;
    menuImage.classList.add('menuImg');
    content.appendChild(menuImage);
}

export default menu;