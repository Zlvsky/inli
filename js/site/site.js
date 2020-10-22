const loading = document.getElementById('loading'),
      nav = document.getElementById('main-nav'),
      menuitems = document.querySelectorAll('.menu-item-a'),
      inli = document.getElementById('inli'),
      bgHome = document.getElementById('bg-home'),
      root = document.documentElement,
      input = document.getElementById('myCheck'),
      hiddenMenu = document.getElementById('hidden-menu'),
      hiddenLinks = document.querySelectorAll('.menu-hidden');

let currentScroll,
    currentOpacity;

window.onload = function() {
  const fadeEffect = setInterval(function () {
    if(!loading.style.opacity) {
      loading.style.opacity = 1;
    }
    if(loading.style.opacity > 0) {
      loading.style.opacity -= 0.1;
    } else {
      loading.style.display = 'none';
      clearInterval(fadeEffect);
    }
  }, 40);
}

window.onscroll = function(){ scrollFunction();}
function scrollFunction() {
  var scrollTop = (document.documentElement || document.body.parentNode || document.body).scrollTop;
  currentOpacity = 1 - scrollTop / 400;
  nav.style.opacity = currentOpacity;
}
function addMultiListener(element, eventNames, listener) {
  const events = eventNames.split(' ');
  for(let i = 0, iLen = events.length; i<iLen; i++) {
    element.addEventListener(events[i], listener, false);
  }
}

addMultiListener(window, 'hashchange load', function () {
    if(window.location.hash == "#home" || window.location.hash == "") {
      root.style.setProperty('--borderopacity', 'rgba(255, 255, 255, 0.0)');
      root.style.setProperty('--bordercolor', 'rgba(255, 255, 255, 1)');
      root.style.setProperty('--spancolor', '#ffffff');
      menuitems.forEach(e => {
        e.style.opacity = 1;
        e.style.color = 'white';
      });
      inli.style.color = 'white';
      nav.style.borderBottom = '1px solid white';
    } else {
      root.style.setProperty('--borderopacity', 'rgba(0, 0, 0, 0.0)');
      root.style.setProperty('--bordercolor', 'rgba(0, 0, 0, 1)');
      root.style.setProperty('--spancolor', '#000000');
      menuitems.forEach(e => {
        e.style.opacity = 1;
        e.style.color = 'black';
      });
      inli.style.color = 'black';
      nav.style.borderBottom = '1px solid black';
    }
})

input.onchange = function() {
  hiddenMenu.style.transform = this.checked? 'none': 'translateY(-100%)';
  nav.style.borderBottom = this.checked? 'none': '';
  if(window.location.hash == "#home" || window.location.hash == "") {
    nav.style.borderBottom = this.checked? 'none': '1px solid white';
  } else {
    nav.style.borderBottom = this.checked? 'none': '1px solid black';
    inli.style.color = this.checked? 'white': 'black';
    if(this.checked) {
      root.style.setProperty('--spancolor', '#ffffff');
    } else {
      root.style.setProperty('--spancolor', '#000000');
    }
  }
}
window.addEventListener('hashchange', function () {
  if(input.checked) {
    input.click()
  }
});
