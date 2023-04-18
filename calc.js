
const screen = document.querySelector('#screen');

const buttons = document.querySelectorAll('button');

const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const divide = document.querySelector('#divide');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const multiply = document.querySelector('#multiply');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const subtract = document.querySelector('#subtract');
const zero = document.querySelector('#zero');
const equals = document.querySelector('#equals');
const add = document.querySelector('#add');
const clear = document.querySelector('#clear');

// create a variable to store screenValue
let screenValue = '';


// add event listeners for all the buttons
seven.addEventListener('click', (e) => {
    screenValue += '7';
    screen.value = screenValue;
})
eight.addEventListener('click', (e) => {
    screenValue += '8';
    screen.value = screenValue;
})
nine.addEventListener('click', (e) => {
    screenValue += '9';
    screen.value = screenValue;
})
divide.addEventListener('click', (e) => {
    screenValue += '/';
    screen.value = screenValue;
})
four.addEventListener('click', (e) => {
    screenValue += '4';
    screen.value = screenValue;
})
five.addEventListener('click', (e) => {
    screenValue += '5';
    screen.value = screenValue;
})
six.addEventListener('click', (e) => {
    screenValue += '6';
    screen.value = screenValue;
})
multiply.addEventListener('click', (e) => {
    screenValue += '*';
    screen.value = screenValue;
})
one.addEventListener('click', (e) => {
    screenValue += '1';
    screen.value = screenValue;
})
two.addEventListener('click', (e) => {
    screenValue += '2';
    screen.value = screenValue;
})
three.addEventListener('click', (e) => {
    screenValue += '3';
    screen.value = screenValue;
})
subtract.addEventListener('click', (e) => {
    screenValue += '-';
    screen.value = screenValue;
})
zero.addEventListener('click', (e) => {
    screenValue += '0';
    screen.value = screenValue;
})
equals.addEventListener('click', (e) => {
    screen.value = eval(screenValue);
})
add.addEventListener('click', (e) => {
    screenValue += '+';
    screen.value = screenValue;
})
clear.addEventListener('click', (e) => {
    screenValue = '';
    screen.value = screenValue;
})
