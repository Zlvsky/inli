'use strict';

(function() {
  function init(){
    var router = new Router([
      new Route('home', 'home.html', true),
      new Route('contact', 'contact.html'),
      new Route('about', 'about.html'),
      new Route('zamowienia', 'zamowienia.html'),
      new Route('informacje', 'informacje.html')
    ]);
  }
  init();
}());
