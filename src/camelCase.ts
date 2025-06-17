export function  camelCase(str: string) {
    if (str.length === 0) {
        return '';
    }
    return str.split(/[ _-]/).map((word)=> word.charAt(0).toUpperCase() + word.slice(1)).join('');
}