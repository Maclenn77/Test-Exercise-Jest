const stringLength = require('./task1');
const reverseString = require('./task2');
const Calculator = require('./task3');
const capitalize = require('./task4')

const calculator = new Calculator();

it('Task 1: Return string length' , () => {
    expect(stringLength('string')).toBe(6);
})

it('Task 1: Return Error if string is longer than 10 characters' , () => {
    expect(() => stringLength('stringstring')).toThrow('String should be at least 1 character long and not longer than 10 characters');
})

it('Task 1: Return Error if string is shorter than 1 character' , () => {
    expect(() => stringLength('')).toThrow('String should be at least 1 character long and not longer than 10 characters');
})

it('Task 2: Return the reverse of a string' , () => {
    expect(reverseString('string')).toBe('gnirts');
})

describe('Task 3.1: Sum in Calculator', () => {

    test('Addition with positive numbers', () => {
        expect(calculator.sum(3, 4)).toBe(7);
    })

    test('Addition with negative numbers', () => {
        expect(calculator.sum(-3, -4)).toBe(-7);
    })

    test('Addition with negative and positive numbers', () => {
        expect(calculator.sum(-3, 4)).toBe(1);
    })
})

describe('Task 3.2: Multiply with Calculator', () => {

    test('Multiply with positive numbers', () => {
        expect(calculator.multiply(3, 4)).toBe(12);
    })

    test('Multiply with negative numbers', () => {
        expect(calculator.multiply(-3, -4)).toBe(12);
    })

    test('Multiply with negative and positive numbers', () => {
        expect(calculator.multiply(-3, 4)).toBe(-12);
    })
})

describe('Task 3.3: Substraction with Calculator', () => {

    test('Substract with positive numbers. Last one is higher', () => {
        expect(calculator.subs(3, 4)).toBe(-1);
    })

    test('Substract with negative numbers', () => {
        expect(calculator.subs(-3, -4)).toBe(1);
    })

    test('Substract with negative and positive numbers', () => {
        expect(calculator.subs(-3, 4)).toBe(-7);
    })
})

describe('Task 3.4: Division with Calculator', () => {

    test('Divide with positive numbers. First one is higher', () => {
        expect(calculator.divide(8, 4)).toBe(2);
    })

    test('Divide with positive numbers. Last one is higher', () => {
        expect(calculator.divide(4, 8)).toBeCloseTo(0.5);
    })

    test('Divide with negative and positive numbers', () => {
        expect(calculator.divide(-8, 4)).toBe(-2);
    })

    test('Divide zero', () => {
        expect(calculator.divide(4, 0)).toEqual(Infinity);
    })
})

test('Task 4. Capitalize string', () => {
    let testString = 'test'
    expect(capitalize(testString)).toBe('TEST');
})