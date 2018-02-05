function matchWords(input){
    let pattern = /\w+/g;
    let words = [];

    let match = pattern.exec(input);
    if(match){
        words.push(match)
    }
    while(match = pattern.exec(input)){
        words.push(match)
    }
    console.log(words.join('|'));
}
matchWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');