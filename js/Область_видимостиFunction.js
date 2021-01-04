'use strict';
//Замыкание функции

/*function one() {
  let x = 10;

  function two(y) {
    function tree() {
      return x * y;
    }

    console.dir(tree);
    return x + y + tree();
  };


  
  return two(15);
};

console.log(one());*/


function funcMath(a) {
  return function() {
    console.log(a * a);
  };
};

const mathPow = funcMath(6);
mathPow();
console.dir(mathPow);

