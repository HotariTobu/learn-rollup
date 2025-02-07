'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var foo = 'Hello_World!';

var version = "1.0";

var main = () => {
  console.log(foo);
};
const v = () => {
  console.log('version ' + version);
};

exports.default = main;
exports.v = v;
