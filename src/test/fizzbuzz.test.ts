import { describe, expect, test } from '@jest/globals';
import { fizzbuzz } from '../fizzbuzz';

describe('FizzBuzz', () => {
  it('should return "1" for input 1', () =>{
    expect(fizzbuzz(1)).toBe('1');
  })
  it ('should return "Fizz" for input 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
  })
  it('should return "Buzz" for input 5', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
  })
  it('should return "Fizz" for input 6', () => {
    expect(fizzbuzz(6)).toBe('Fizz');
  })
  it('should return "Buzz" for input 10', () => {
    expect(fizzbuzz(10)).toBe('Buzz');
  })
  it('should return "Buzz" for input 11', () => {
    expect(fizzbuzz(11)).toBe('11');
  })
});