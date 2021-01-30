/**
 * Generates a list of names.
 * @param {Number} amount 
 * @returns {Array}
 */
module.exports.generateName = function(amount) {
    const vowels = "aeiouy";
    const consonants = "bcdfghklmnprstvwz";
    const length = Math.round(Math.random() * 4) + 5;
    
    var lastletter = "'";
    var name = "";
    
    var usedVowels = 0;
    var usedConsonants = 0;
    
    function chance(number) {
        return Math.random() >= (number / 10) ? true : false;
    }
    function random(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    
    function koolKid(char) {
        char = char.toLowerCase()
        char = char.replace('a', '4');
        char = char.replace('e', '3');
        char = char.replace('g', '6');
        char = char.replace('h', '4');
        char = char.replace('i', '1');
        char = char.replace('o', '0');
        char = char.replace('s', '5');
        char = char.replace('l', '7');
        return char;
    }
    
    for(c = 0; c < length; c++) {
        if((chance(5) || usedConsonants == 1) && usedVowels < 4) {
            var randomvowel=random(vowels.split(''));
            name+=randomvowel;
            lastletter=randomvowel;
            usedVowels++;
        } else {
            if((chance(2) || usedVowels == 1) && usedConsonants < 4) {
            var randomconsonant=random(consonants.split(''));
            name+=randomconsonant;
            lastletter=randomconsonant;
            usedConsonants++;
            };
        };
    };
    name = name.split('').map(char => Math.random() > 0.5 ? koolKid(char) : char).join("")
    .split('').map(char => Math.random() > 0.9 ? '_' : char).join("")
    .split('').map(char => Math.random() > 0.5 ? char.toUpperCase() : char).join("");
    /**
     * 
     * @param {string} string 
     * @param {number} length
     * @returns {string}
     */
    function trunicate(string, length) {
        if(string.length > length) {
            string.slice(0, length);
            return string;
        } else return string;
    };
    switch(Math.round(Math.random() * 40)) {
        case 1:
            name = trunicate(name, 12);
            name = chance(5) ? `xX${name}Xx` : `Xx${name}xX`;
        break;
        case 2:
            name = trunicate(name, 13);
            name = `${name}_YT`;
        break;
        case 3:
            name = trunicate(name, 13);
            name = `${name}LPs`;
        break;
        case 4:
            name = trunicate(name, 12);
            name = name.concat(Math.round(Math.random() * 1000));
        break;
        case 5:
            name = trunicate(name, 10);
            name = chance(5) ? `xXx${name}xXx` : `TBNR${name}`;
        break;
        case 6:
            name = trunicate(name, 10);
            name = `${name}Gaming`;
        break;
        case 7:
            name = trunicate(name, 14);
            name = `${name}TV`;
        break;
        case 8:
            name = trunicate(name, 9);
            name = `${name}_Master`;
        break;
        case 9:
            name = trunicate(name, 12);
            name = `${name}_PvP`;
        break;
        case 10:
            name = trunicate(name, 11);
            name = `${name}Sucks`;
        break;
        default:
    
        break;
    }
    var a = [];
    if(typeof amount === 'number') {
        if(amount >= 1 && amount <= 100) {
            for(i = 0; i < amount; i++) {
                a.push(this.generateName());
            }
        } else if(amount > 100) {
            var chunks = new Array(Math.floor(amount / 100)).fill(100).concat(amount % 100).filter(n => n > 0);
            for(var chunk of chunks) {
                a.push(this.generateName(chunk));
            };
    
        };
    }
    return a.length ? a : name;
    }