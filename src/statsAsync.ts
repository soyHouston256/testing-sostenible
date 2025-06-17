export async function  sum(numbers: number[]): Promise<number> {
    return numbers.reduce((previus, current )=> previus + current)
}

export async function average(numbers: number[]): Promise<number>{
    return  await sum(numbers)/numbers.length;
}