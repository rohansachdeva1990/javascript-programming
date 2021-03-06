/////////////////////////////////
// Lecture: Arrays


// const boxes = document.querySelectorAll('.box');

// //ES5
// // Converting nodeList to array: HACK HACK HACK!!!
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur) {
//     cur.style.backgroundColor = 'dodgerblue';
// });

// //ES6
// const boxesArr6 = Array.from(boxes);
// Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');


// //ES5
// for(var i = 0; i < boxesArr5.length; i++) {
    
//     if(boxesArr5[i].className === 'box blue') {
//         continue;
//     }
    
//     boxesArr5[i].textContent = 'I changed to blue!';
    
// }

// //ES6
// // Of is used for arrays
// for (const cur of boxesArr6) {
//     // Just need to check blue
//     if (cur.className.includes('blue')) {
//         continue;
//     }
//     cur.textContent = 'I changed to blue!';
// }


//ES5
var ages = [12, 17, 8, 21, 14, 11];

// Creating a boolean array
var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


//ES6 - find and findIndex (similar to filter in Java)
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));


