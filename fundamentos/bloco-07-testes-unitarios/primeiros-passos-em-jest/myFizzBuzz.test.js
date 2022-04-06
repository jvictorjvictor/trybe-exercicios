const { expect } = require('@jest/globals');
const myFizzBuzz = require('./myFizzBuzz.js');

describe('testa se a função myFizzBuzz funciona', () => {
    test('número divisível por 3 e 5 deve retornar fizzbuzz', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    test('número divisível por 3 deve retornar fizz', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    });
    test('número divisível por 5 deve retornar buzz', () => {
        expect(myFizzBuzz(10)).toBe('buzz');
    });
    test('número não divisível por 3 e 5 deve retornar o próprio número', () => {
        expect(myFizzBuzz(11)).toBe(11)
    });
    test('se o parâmetro não for um número, retornar false', () => {
        expect(myFizzBuzz('olá')).toBe(false)
    });
})