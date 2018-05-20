'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var FontFaceObserver = require('fontfaceobserver');

var Fonts = function Fonts() {
  var link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Raleway:300,400,500,700,900';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  var raleway = new FontFaceObserver('Raleway');

  raleway.load().then(function () {
    document.documentElement.classList.add('raleway');
  });
};

exports.default = Fonts;