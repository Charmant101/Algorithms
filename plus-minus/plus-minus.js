'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    // we initialise three variables called positive,negative and zero representing the 3 possibility of integers which could be that it is positive or negative or zero....
    let positive = 0;
    let negative = 0;
    let zero = 0;

// we then loop through the array and then see the possibility that if any of the values present in the array is greater than 0,it will be counted as positive,less than 0,negative or be counted as a null or zero digit.
    for (let i = 0; arr.length > i; i++) {
        if (arr[i] > 0) {
            positive++;
        } else if (arr[i] < 0) {
            negative++;
        } else {
            zero++;
        }
    }

    // to then convert them to decimals we then divide them by the length of the array and we console the result of this division.
    console.log(positive / arr.length);
    console.log(negative / arr.length);
    console.log(zero / arr.length);


}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}