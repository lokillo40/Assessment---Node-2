function timeword(time) {
    const words = {
        '0': 'twelve', '1': 'one', '2': 'two', '3': 'three',
        '4': 'four', '5': 'five', '6': 'six', '7': 'seven',
        '8': 'eight', '9': 'nine', '10': 'ten', '11': 'eleven',
        '12': 'twelve', '13': 'thirteen', '14': 'fourteen',
        '15': 'fifteen', '16': 'sixteen', '17': 'seventeen',
        '18': 'eighteen', '19': 'nineteen', '20': 'twenty',
        '30': 'thirty', '40': 'forty', '50': 'fifty'
    };

    // Split the time into hours and minutes
    const [hour, minute] = time.split(':').map(Number);

    // Convert the hour to its word representation
    let hourWord = words[String(hour % 12)] || words[String(hour)];

    // Convert the minutes to its word representation
    let minuteWord = '';
    if (minute === 0) {
        if (hour === 0) return 'midnight';
        if (hour === 12) return 'noon';
        return `${hourWord} o’clock ${hour < 12 ? 'am' : 'pm'}`;
    } else if (minute < 10) {
        minuteWord = `oh ${words[String(minute)]}`;
    } else if (minute < 20) {
        minuteWord = words[String(minute)];
    } else {
        const tens = Math.floor(minute / 10) * 10;
        const ones = minute % 10;
        minuteWord = `${words[String(tens)]}` + (ones ? ` ${words[String(ones)]}` : '');
    }
    
    return `${hourWord} ${minuteWord} ${hour < 12 ? 'am' : 'pm'}`;
}

module.exports = timeword;