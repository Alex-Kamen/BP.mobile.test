import {Translation} from "./models/Translation";
import './style.css';
import './assets/avatars.png';
import './assets/creation.png';
import './assets/styles.png';

document.querySelectorAll('.price__item').forEach(priceItemNode => {
    priceItemNode.addEventListener('click', (event) => {
        document.querySelector('.price__item--active').classList.remove('price__item--active');
        priceItemNode.classList.add('price__item--active');
        document.querySelector('a.btn').setAttribute('href', priceItemNode.getAttribute('to'));
    })
})

new Translation().translate();

