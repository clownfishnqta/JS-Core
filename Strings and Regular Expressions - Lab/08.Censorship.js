function printCensoredText(text, wordsToCensor) {
    for (let i = 0; i < wordsToCensor.length; i++) {
        let indexOfWord = wordsToCensor.indexOf(wordsToCensor[i]);
        while (indexOfWord >= 0) {
            text = text.replace(wordsToCensor[i], '-'.repeat(wordsToCensor[i].length));
            indexOfWord = text.indexOf(wordsToCensor[i]);
        }
    }

    console.log(text);
}