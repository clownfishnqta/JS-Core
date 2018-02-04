function main(input) {
    let result = [];
    let counter = 1;

    for(let command of input) {
        if(command == "add") {
            result.push(counter);
        } else {
            result.pop();
        }

        counter++;
    }

    if(result.length == 0) {
        console.log("Empty");
    } else {
        result.forEach(element => console.log(element));
    }
}