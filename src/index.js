module.exports = function toReadable(number) {
    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
        'ninety'];
    if (number === 0) return 'zero';
    if (number < 20) {
        return ones[number];
    }
    let numberToString = number.toString();
    if (numberToString.length === 2) {
        return (tens[numberToString[0]] + ' ' + ones[numberToString[1]]).trim();
    }
    if (numberToString.length === 3) {
        if (numberToString[1] === '0' && numberToString[2] === '0')
            return ones[numberToString[0]] + ' hundred';
        else
            return ones[numberToString[0]] + ' hundred ' + toReadable(+(numberToString[1] + numberToString[2]));
    }
}
