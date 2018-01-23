function solve(size) {
    for (let i = 0; i <= size; i++){
        console.log("*".repeat(i).trim())
    }
    for (let i = size - 1; i > 0; i--){
        console.log("*".repeat(i).trim())

    }
}
