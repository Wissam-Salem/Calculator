let output = document.getElementById('output');
let zero = document.getElementById('zero');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let plus = document.getElementById('plus');
let neg = document.getElementById('neg');
let div = document.getElementById('div');
let mult = document.getElementById('mult');
let e = document.getElementById('e');
let dot = document.getElementById('dot');
let clear = document.getElementById('clear');
let del = document.getElementById('del');
let eql = document.getElementById('eql');

zero.onclick = () => {
    output.innerHTML += 0;
}

one.onclick = () => {
    output.innerHTML += 1;
}

two.onclick = () => {
    output.innerHTML += 2;
}

three.onclick = () => {
    output.innerHTML += 3;
}

four.onclick = () => {
    output.innerHTML += 4;
}

five.onclick = () => {
    output.innerHTML += 5;
}

six.onclick = () => {
    output.innerHTML += 6;
}

seven.onclick = () => {
    output.innerHTML += 7;
}

eight.onclick = () => {
    output.innerHTML += 8;
}

nine.onclick = () => {
    output.innerHTML += 9;
}

plus.onclick = () => {
    output.innerHTML += '+';
}

neg.onclick = () => {
    output.innerHTML += '-';
}

div.onclick = () => {
    output.innerHTML += '/';
}

mult.onclick = () => {
    output.innerHTML += '*';
}

e.onclick = () => {
    output.innerHTML += 2.718;
}

dot.onclick = () => {
    output.innerHTML += '.';
}

clear.onclick = () => {
    output.innerHTML = ''
}

del.onclick = () => {
    output.innerHTML = output.innerHTML.slice(0, -1)
}

eql.onclick = () => {
    output.innerHTML = eval(output.innerHTML)
}