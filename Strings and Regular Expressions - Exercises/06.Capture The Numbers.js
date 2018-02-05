function captureNumbers(arr) {
    let pattern = /[0-9]+/g;
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        let match = pattern.exec(arr[i]);
        while (match) {
            result += match + ' ';
            match = pattern.exec(arr[i]);
        }
    }

    return result.trim();
}