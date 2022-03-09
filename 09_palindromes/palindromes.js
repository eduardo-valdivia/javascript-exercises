const palindromes = function (word) {
    let re = /[\W_]/g;
    // or you can use  /[^A-Za-z0–9]/g instead of /[\W_]/g
    let finalWord = word.toLowerCase().replace(re,'');
    const palindromeArray = finalWord.split('').reverse();
    let reverseWord = palindromeArray.join('');
    if (reverseWord === finalWord) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
