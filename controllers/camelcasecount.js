const camelCaseCount = (req, res) => {

    const words = req.body.words;
    let regex = /[A-Z]/g;
    let matches = words.match(regex); 
    
    return res.status(200).json({ answer: matches.length + 1 });
}

module.exports = {
    camelCaseCount: camelCaseCount
}