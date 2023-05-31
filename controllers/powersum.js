const powerSum = (req, res) => {
    
    let powers = [];
    let X = req.body.x;
    let N = req.body.n;

    for (let i = 1; i <= Math.pow(X, 1/N); i++) {
        powers.push(Math.pow(i, N));
    }
    
    return res.status(200).json({ answer: countWays(X, powers, powers.length) });
}

let countWays = (X, powers, m) => {
    if (X == 0)
        return 1;
    if (X < 0 || m <= 0)
        return 0;
    return countWays(X, powers, m-1) + countWays(X - powers[m-1], powers, m-1);
}

module.exports = {
    powerSum: powerSum
}