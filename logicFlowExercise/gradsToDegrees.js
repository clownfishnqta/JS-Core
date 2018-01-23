function gradsToDegrees(grad){
    grad = grad % 400;
    let degree = grad * 0.9;
    return degree < 0 ? 360 + degree : degree;
}

let output = gradsToDegrees([-50]);
console.log(output);