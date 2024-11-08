document.querySelector('.button7').addEventListener('click', () =>{
    appendToDisplay('7');
});
document.querySelector('.button8').addEventListener('click', () =>{
    appendToDisplay('8');
});
document.querySelector('.button9').addEventListener('click', () =>{
    appendToDisplay('9');
});
document.querySelector('.buttonCsillag').addEventListener('click', () =>{
    appendToDisplay('*');
});
document.querySelector('.button4').addEventListener('click', () =>{
    appendToDisplay('4');
});
document.querySelector('.button5').addEventListener('click', () =>{
    appendToDisplay('5');
});
document.querySelector('.button6').addEventListener('click', () =>{
    appendToDisplay('6');
});
document.querySelector('.buttonHozzaad').addEventListener('click', () =>{
    appendToDisplay('+');
});
document.querySelector('.button1').addEventListener('click', () =>{
    appendToDisplay('1');
});
document.querySelector('.button2').addEventListener('click', () =>{
    appendToDisplay('2');
});
document.querySelector('.button3').addEventListener('click', () =>{
    appendToDisplay('3');
});
document.querySelector('.buttonMinusz').addEventListener('click', () =>{
    appendToDisplay('-');
});
document.querySelector('.buttonPer').addEventListener('click', () =>{
    appendToDisplay('/');
});
document.querySelector('.buttonPont').addEventListener('click', () =>{
    appendToDisplay('.');
});
document.querySelector('.buttonEgyenlo').addEventListener('click', () =>{
    calculate();
});
document.querySelector('.buttonClear').addEventListener('click', () =>{
    clear();
});
document.querySelector('.button0').addEventListener('click', () =>{
    appendToDisplay('0');
});

const screen = document.getElementById("screen");

function appendToDisplay(input) {
    screen.value += input;
};

function clear() {
    screen.value = '';
};

function calculate() {
    try {
        screen.value= eval(screen.value);
    } catch (error) {
        screen.value = 'Error';
    }
}