function SumNumbers(input) {
    let sum = 0;
    for (let num of input){
        sum+=num;
    }
    console.log("sum=" + sum);
    console.log("vat=" + sum*0.2);
    console.log("total=" + sum*1.20);
}

