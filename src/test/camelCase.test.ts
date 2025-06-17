import { camelCase } from '../camelCase';
describe('camelCase', () => {
    it('Allow empty string', () => {
        expect(camelCase('')).toBe('');
    })
    it ('Convert single word to camelCase', () => {
        expect(camelCase('Hello')).toBe('Hello');
    })
    it ('Join the capitalize word that are separate by space', () => {
        expect(camelCase('Hello Word')).toBe('HelloWord');
    })
    it ('Join the capitalize word that are separate by hyphens', () => {
        expect(camelCase('Hello-Word')).toBe('HelloWord');
    })
    it ('Convert to first character to uppercase', () => {
        expect(camelCase('hello')).toBe('Hello');
    })
    it ('Join the capitalize word that are separate by space', () => {
        expect(camelCase('hello world')).toBe('HelloWorld');
    })
})