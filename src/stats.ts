export function sum(numbers: number[]): number {
    return numbers.reduce((previus, current )=> previus + current)
}

export function average(numbers: number[]): number{
    return  sum(numbers)/numbers.length;
}