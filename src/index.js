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
    let space = '**********';
    let result = "";
    for (let i = 0; i < expr.length; i+=10){
        let encodedLetter = expr.substr(i, 10);
        if(encodedLetter == space) result += " ";
        else {
            let repr = "";
            for(let j = 0; j < 10; j+=2){
                if(encodedLetter.substr(j, 2) == "10"){
                    repr +=".";
                } else if(encodedLetter.substr(j, 2) == "11"){
                    repr +="-";
                }
            }
            result += MORSE_TABLE[repr];
        }
    }
    return result;

}

module.exports = {
    decode
}