//Calculator
var Calculator = {
    add: function (addend1, addend2) {
        return addend1 + addend2; // sum
    },
    sub: function (minuend, subtrahend) {
        return minuend - subtrahend; //difference
    },
    div: function (dividend, divisor) {
        return divisor && dividend/divisor; //quotient
    },
    mul: function (multiplicand, multiplier) {
        return multiplicand * multiplier; //product
    }
};

//test

describe('calculator', function () {     
    //Numbers from 1-100, 5 round of test
    for (var i=5; i>0; i--){
        var number1 = Math.floor((Math.random() * 100) + 1),
            number2 = Math.floor((Math.random() * 100) + 1);

        it('should add ' + number1 + ' plus ' +number2 + ' and be equals to ' + (number1 + number2), function () {
            expect(Calculator.add(number1, number2)).toBe(number1 + number2);
        });

        it('should subtract' + number1 + ' from ' +number2 + ' and be equals to ' + (number1 - number2), function () {
            expect(Calculator.sub(number1, number2)).toBe(number1 - number2);
        });

        it('should multiply ' +number1 + 'x' + number2 + ' and be equals to ' + (number1*number2), function () {
           expect(Calculator.mul(number1, number2)).toBe(number1 * number2);
        });

        it('should divide ' + number1 + '/' + number2 + ' and be equals to ' + (number2 && number1/number2), function () {
            expect(Calculator.div(number1, number2)).toBe(number2 && number1/number2);
        });
    }
});

