function concatenateAndReverse(arr) {
    let result = arr.join('').split('').reverse().join('');
    return result;
}