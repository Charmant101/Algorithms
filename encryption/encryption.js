'use strict';

const fs = require('fs');

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

// Complete the encryption function below.

    function encryption(s) {
        s = s.replace(/ /g, '');
        let result = [], arr = [];
        let count = 0;
        let rows = Math.floor(Math.sqrt(s.length));
        let columns = Math.ceil(Math.sqrt(s.length));

        if ((rows * columns) < s.length) {
            rows++;
        }

        for (let i = 0; i < Math.ceil(s.length / columns); i++) {
            for (let j = 0; j < columns; j++) {
                if (s[count]) {
                    arr.push(s[count++]);
                }
            }

            result.push(arr);
            arr = [];
        }

        return displayEncryption(result, rows, columns);
    }

    function displayEncryption(arr, rows, columns) {
        let i = 0, j = 0;
        let stri = '', res = '';

        for (let a = 0; a < columns; a++) {
            while (i < rows) {
                if (arr[i][j]) {
                    stri += arr[i][j];
                }
                i++;
            }
            res += stri + ' ';
            stri = '';
            i = 0;
            j++;
        }

        return res.trim();
    }
      



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = encryption(s);

    ws.write(result + "\n");

    ws.end();
}