import lottie from '@lottiefiles/lottie-player';

document.addEventListener('DOMContentLoaded', () => { // Wait for the DOM to be fully loaded
    const animationContainer = document.getElementById('hero-animation');
    const anim = lottie.loadAnimation({
      container: animationContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'src/az-backdrop.json' 
    });
  });