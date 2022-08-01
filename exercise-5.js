function memoize(fn) {
  let cache = {};
  return (number) => {
    if (cache[number]) {
      console.log ('Fetching from cache for ' + number)
      return cache[number]
    }
    console.log ('Calculating results for ' + number)
    const output = fn(number);
    cache[number] = output;
    return output;
  }

}







function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

let factory = memoize(factorial);
console.log(factory(10));
console.log(factory(6));
console.log(factory(5));
console.log(factory(10));
console.log(factory(6));
console.log(factory(5));