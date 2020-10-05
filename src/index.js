module.exports = function toReadable (number) {

    const NUMBERS = {
        DIGITAL: {
            0: 'zero',
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine',
        },
        FROM11_TO19: {
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen',
        },
        MULTIPLES_OF_10: {
            10: 'ten',
            20: 'twenty',
            30: 'thirty',
            40: 'forty',
            50: 'fifty',
            60: 'sixty',
            70: 'seventy',
            80: 'eighty',
            90: 'ninety',
        }
    };

    const getDoubleNumber = (tenths, digit) => {
        if(number % 10) {
            return (
                (tenths === 1) ?
                    NUMBERS.FROM11_TO19[10 + digit] :
                    NUMBERS.MULTIPLES_OF_10[tenths * 10] + (digit === 0 ? '' : ' ' + NUMBERS.DIGITAL[digit]));
        }
        else {
            return NUMBERS.MULTIPLES_OF_10[tenths * 10];
        }
    };

    const getSingleNumber = (digit) => {
        return NUMBERS.DIGITAL[digit];
    };

    const inputDigits = number.toString().split('');
    const inputLength = inputDigits.length;
    if(inputLength === 1) {
        const digit = Number(inputDigits[0]);
        return getSingleNumber(digit);
    }
    else if(inputLength === 2) {
        const tenths = Number(inputDigits[0]);
        const digit = Number(inputDigits[1]);
        return getDoubleNumber(tenths, digit);
    }
    else if(inputLength === 3) {
        const hundreds = Number(inputDigits[0]);
        const tenths = Number(inputDigits[1]);
        const digit = Number(inputDigits[2]);
        const hundredNumber = NUMBERS.DIGITAL[hundreds] + ' hundred';
        let tenthNumber = '';
        let digitNumber = '';
        if(tenths) {
            tenthNumber =  getDoubleNumber(tenths, digit);
        }
        else if(digit) {
            digitNumber =  getSingleNumber(digit);
        }
        return (hundredNumber + (tenthNumber ? ' ' + tenthNumber : '') + (digitNumber ? ' ' + digitNumber : ''));

    }

}

