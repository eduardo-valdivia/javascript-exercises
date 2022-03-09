const reverseString = function(word) {
    if (word === '') {
        return '';
    } else {
        const splitArray = word.split('');
        const reverseArray = splitArray.reverse();
        let reverseText = reverseArray.join('');
        return reverseText;
    }
};

// Do not edit below this line
module.exports = reverseString;
