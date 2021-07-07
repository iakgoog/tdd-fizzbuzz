const fizzbuzz = require('../src/fizzbuzz');

describe('fizzbuzz unit test', () => {
    it('fizzbuzz of 0', () => {
        expect(fizzbuzz(0)).toEqual('0');
    });

    it('fizzbuzz of 1', () => {
        expect(fizzbuzz(1)).toEqual('1');
    });

    it('fizzbuzz of 3', () => {
        expect(fizzbuzz(3)).toEqual('Fizz');
    });

    it('fizzbuzz of 5', () => {
        expect(fizzbuzz(5)).toEqual('Buzz');
    });

    it('fizzbuzz of 6', () => {
        expect(fizzbuzz(6)).toEqual('Fizz');
    });

    it('fizzbuzz of 10', () => {
        expect(fizzbuzz(10)).toEqual('Buzz');
    });

    it('fizzbuzz of 15', () => {
        expect(fizzbuzz(15)).toEqual('FizzBuzz');
    });
})

