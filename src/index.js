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
    
    let res = '';
    const words = expr.split('**********');

    for (word of words) {
        
            let letter = word.slice(0, 10);

        for (let i = 1; letter !== ""; i++) {
                  
            const startIndex = letter.indexOf('1');
            letter = letter.slice(startIndex);          

            let message = '';

            for (let j=0; j < letter.length / 2; j++) {
                if (letter.slice(j*2, (j+1) * 2) == '10') {
                    message += '.';
                } else {
                    message += '-';
                }
            }

            res += MORSE_TABLE[message];

            letter = word.slice(i*10, (i+1) * 10);
        }

        res += ' ';
    }
    
    // Delete last ' '
    return res.substring(0, res.length - 1);
}

module.exports = {
    decode
}