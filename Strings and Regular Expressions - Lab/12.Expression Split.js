function printSplittedExpression(expression) {
  console.log(expression
        .split(/[\s().,;]/g)
        .filter(e => e !== '')
        .join('\n')
    );
}
printSplittedExpression('let sum = 4 * 4,b = "wow";');
console.log('*'.repeat(25));
printSplittedExpression('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');