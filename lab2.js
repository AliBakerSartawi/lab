'use strict';

let userName = 'mahmoud';
console.log(userName);

//  always use === in JS not ==... to keep in mind the type of the value

let age =prompt('what\'s your age?');
let gender = prompt('what\'s your gender?')
let isMonday = confirm('is it monday?');

if(gender.toLowerCase() === 'female'){
  alert('it\'s freeeeeee!!!!');
}if(age > 22){
  alert('you are good to go!');
}else if(age >= 18 && age < 22) {
  console.log('you got a discount');
}else {
  alert('you got a free ticket');
}

