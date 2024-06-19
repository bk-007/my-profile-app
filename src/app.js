import lottie from 'lottie-web';

let animation = lottie.loadAnimation({
    container: document.getElementById('hero-animation'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'src/az-backdrop.json' // the path to the animation json
  });
  