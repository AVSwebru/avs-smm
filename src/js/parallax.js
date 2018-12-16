import Parallax from 'parallax-js';

let scene = document.querySelector('.js-parallax-scene');
let parallaxInstance = new Parallax(scene);

parallaxInstance.friction(0.25, 0.25);
