function fizbuzz(num) {
    if (num === 0) return "0";
    let result = '';
    if (num % 3 === 0) { result = 'Fizz' }
    if (num % 5 === 0) { result += 'Buzz' }
    return result !== '' ? result : num.toString();
}

module.exports = fizbuzz;