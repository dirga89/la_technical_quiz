const timeConversion = (time) => {
    
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

    return `${hours}:${minutes}:${seconds}`;

}

// Input time
const time = "07:05:45PM";

console.log(`input: ${time}`);

console.log("output:", timeConversion(time));