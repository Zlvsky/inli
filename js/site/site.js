
// const menuitem = document.getElementsByClassName('menu-item-a');
// const item = document.getElementsByClassName('menu-item');
// for(var i = 0; i<menuitem.length; i++) {
//   menuitem[i].addEventListener('mouseover', function() {
//     item[i].style.borderBottom = 'solid 2px black';
//   })
// }
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

var parallax = document.getElementById('content-home');

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
  currentOpacity = 1 - document.documentElement.scrollTop / 400;
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
})
// input.onchange = function() {
//   if(this.checked) {
//     inli.addEventListener('click', function() {
//       input.click();
//     })
//   } else {
//     inli.onclick = null;
//   }
// }
// hiddenLinks.forEach(el => {
//   el.addEventListener('click', function() {
//     console.log('elo');
//     input.click();
//   })
// })


// function scrolling() {
//   console.log(document.getElementById('bg-home'));
//   currentScroll = document.documentElement.scrollTop / 5;
//   currentOpacity = 1 - document.documentElement.scrollTop / 400;
//   document.getElementById('content-home').style.backgroundPosition = `center ${-currentScroll}px`;
//   document.getElementById('bg-home').style.opacity = currentOpacity;
// }
// window.addEventListener('hashchange', function() {
//   if($('#content-home').length > 0) {
//     window.onscroll = function(){ scrolling();}
//   }
// })

// window.onscroll = function(){ scrolling();}
// function scrolling() {
//   currentScroll = document.documentElement.scrollTop / 5;
//   currentOpacity = 1 - document.documentElement.scrollTop / 400;
//   document.getElementById('content-home').style.backgroundPosition = `center ${-currentScroll}px`;
//   bgHome.style.opacity = currentOpacity;
//   console.log(currentOpacity);
// }

// window.addEventListener('hashchange', function () {
//     if(window.location.hash == "#home" || window.location.hash == "") {
//       menuitems.forEach(e => {
//         e.style.opacity = 1;
//         e.style.color = 'white';
//       });
//       inli.style.color = 'white';
//     } else {
//       menuitems.forEach(e => {
//         e.style.opacity = 1;
//         e.style.color = 'black';
//       });
//       inli.style.color = 'black';
//     }
// }, false);
