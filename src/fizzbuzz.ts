export function fizzbuzz(number: number) {
  if (number % 3 === 0 && number % 5 === 0) {
      return 'FizzBuzz';
  }else if (number === 1){
    return '1';
  }else if(number===3 || number % 3 === 0){
      return 'Fizz';
  }else if(number === 5 || number % 5 === 0){
    return 'Buzz';
  } else {
    return number.toString();
  }
}