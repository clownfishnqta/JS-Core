function matchDates(params) {
    let pattern = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;
    let result = '';

    for (let i = 0; i < params.length; i++) {
        let match = pattern.exec(params[i]);
        while (match) {
            result += `${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})\n`;
            match = pattern.exec(params[i]);
        }
    }

    console.log(result.trim());
}
