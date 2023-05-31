const timeConversion = (req, res) => {
    
    let time = req.body.time;
    let parts = time.slice(0, -2).split(':');
    let period = time.slice(-2);

    let hours = parts[0];
    let minutes = parts[1];
    let seconds = parts[2];

    if(period === 'PM' && hours !== '12') {
        hours = 12 + parseInt(hours);
    } else if(period === 'AM' && hours === '12') {
        hours = '00';
    }

    return res.status(200).json({ answer: `${hours}:${minutes}:${seconds}` });

}

module.exports = {
    timeConversion: timeConversion
}