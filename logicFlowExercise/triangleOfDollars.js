function print(endNum) {
    for(i = 1; i <= endNum; i++){
        let line = "";

        for(j = 0; j < i; j++){
            line += "$";
        }

        console.log(line);
        line = "";
    }
}