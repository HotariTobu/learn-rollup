'use strict';

const lazy = () => {
  Promise.resolve().then(function () { return require('./foo-Zha3UPTo.js'); })
    .then(({ default: foo }) => {
      console.log(foo);
    });
};

exports.lazy = lazy;
