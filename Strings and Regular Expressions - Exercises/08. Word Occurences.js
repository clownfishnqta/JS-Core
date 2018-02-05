function countOccurances(str, key) {
    let matches = str
        .match(new RegExp(`\\b${key}\\b`, 'gi'));

    return matches === null ? 0 : matches.length
}