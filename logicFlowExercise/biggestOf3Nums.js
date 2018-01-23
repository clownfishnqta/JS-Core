function getBiggestNumber([firstNum, secondNum, thirdNum]) {
    let bigNum = Math.max(firstNum,secondNum);
    let biggestNum = Math.max(bigNum,thirdNum);

    console.log(biggestNum);
}