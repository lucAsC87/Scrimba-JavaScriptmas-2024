import { codedMessage } from './codedMessage.mjs'

/*
codedMessage.js holds a coded message (well, the name makes it obvious, huh?).

**Task**
- Decode the message!

key.md will help!

**Stretch Goal**
No stretch goal for the final day. Just stretch your legs!
*/
function binaryConverter(message) {
    let convertedString = '';
    message.forEach(function(bin) {
        let asciiValue = parseInt(bin, 2);
        let convertedChar = String.fromCharCode(asciiValue);

        if (asciiValue >= 32 && asciiValue <= 36) {
            convertedChar = String.fromCharCode(asciiValue + 86);
        } else {
            convertedChar = String.fromCharCode(asciiValue - 10);
        }
        convertedString += convertedChar;
    });

    return (convertedString);
}

console.log(binaryConverter(codedMessage))
