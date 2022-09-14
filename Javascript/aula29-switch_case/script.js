const date = new Date(Date.now());
const day = date.getDay();

let weekday = function(day) {
    let weekday;
    switch(day) {
        case 0:
            weekday = 'Sunday'
            return weekday
        case 1:
            weekday = 'Monday'
            return weekday
        case 2:
            weekday = 'Tuesday'
            return weekday
        case 3:
            weekday = 'Wednesday'
            return weekday
        case 4:
            weekday = 'Thursday'
            return weekday
        case 5:
            weekday = 'Friday'
            return weekday
        case 6:
            weekday = 'Saturday'
            return weekday
        default:
            console.log('Undefined day')
    }
};

console.log('Today is ' + weekday(day), day)