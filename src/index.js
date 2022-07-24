const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    arr = [];
    for (i=0; i<expr.length; i += 10) {
        let letter = expr.slice(i, i+10);
        if (letter[0] == '0') {
            arr.push(letter.slice(letter.indexOf('1')))
        } else {
            arr.push(letter)
        }
    }
    for (i=0; i<arr.length; i++) {
        if (arr[i][0] == '*') {
            arr[i] = ' ';
        } else {
            let letter ='';
            for (j=1;j<arr[i].length;j+=2) {
                if (arr[i][j]=='0') {
                    letter+='.'
                } else {
                    letter+='-'
                }
            }
            arr[i] = letter
        }
    }
    res = arr.map(item => MORSE_TABLE[item]);
    for (i=0; i<res.length; i++) {
        if (res[i] == undefined) {
            res[i] = ' ';
        }
    }
    return res.join('')
}

module.exports = {
    decode
}