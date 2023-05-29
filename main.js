'use strict';

// Ejercicio 1. Practicando

for (let i = 1; i < 11; i++) {
    console.log('Voy por la vuelta ' + i);
}

let acc = 0;

for (let i = 0; i < 10; i = i+2) {
    acc += i;
}

console.log('El resultado es ' + acc);

// Ejercicio 2. La media

// a y b

const numbers = [1, 2, 3, 4, 5, 6];

let acc2 = 0;

for (let i = 0; i < numbers.length; i++) {
    acc2 += numbers[i] / numbers.length;
}

console.log('La media es ' + acc2);

// c

const numbers2 = [10, 20, 50, 5];

function average (array) {
    let acc3 = 0;
    for (let i = 0; i < array.length; i++) {
    acc3 += array[i];
}
    return acc3 / array.length;
}

console.log(average(numbers));
console.log(average(numbers2));

// Ejercicio 3. Tenemos mucho en común



