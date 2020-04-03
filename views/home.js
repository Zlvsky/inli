const parallax = document.getElementById('content-home');
const bgHome = document.getElementById('bg-home');
let currentOpacity;

window.onscroll = function(){ scrolling();}
function scrolling() {
  currentScroll = document.documentElement.scrollTop / 5;
  currentOpacity = 1 - document.documentElement.scrollTop / 400;
  parallax.style.backgroundPosition = `center ${-currentScroll}px`;
  bgHome.style.opacity = currentOpacity;
  console.log(currentOpacity);
}
