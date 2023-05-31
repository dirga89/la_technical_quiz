const powerSum = (X, N) => {
    
    let powers = [];

    for (let i = 1; i <= Math.pow(X, 1/N); i++) {
        powers.push(Math.pow(i, N));
    }
    
    return countWays(X, powers, powers.length);
}

let countWays = (X, powers, m) => {
    if (X == 0)
        return 1;
    if (X < 0 || m <= 0)
        return 0;
    return countWays(X, powers, m-1) + countWays(X - powers[m-1], powers, m-1);
}

// Input X & N
const X = 100;
const N = 3;

console.log(`input: \n X : ${X} \n N : ${N} \n`)

console.log("output:", powerSum(X, N));