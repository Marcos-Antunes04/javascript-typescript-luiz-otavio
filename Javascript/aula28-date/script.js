// const date = new Date('2022-09-14 05:00');
// console.log("Today's day':", date.getDate())
// console.log('Month', date.getMonth() + 1) //Starts from 0 (Janueary)
// console.log('Year', date.getFullYear())
// console.log('Hours', date.getHours())
// console.log('Minutes', date.getMinutes())
// console.log('Seconds', date.getSeconds())
// console.log('ms', date.getMilliseconds())
// console.log('Day of the week', date.getDay()) //0 is Sunday, 6 is Saturday
// console.log(date.toString())

function addZero(number) {
    return number >= 10 ? number : `0${number}`
}

function formatData(fullDate) {
    const date = addZero(fullDate.getDate());
    const month = addZero(fullDate.getMonth() + 1);
    const year = addZero(fullDate.getYear());
    const hour = addZero(fullDate.getHours());
    const min = addZero(fullDate.getMinutes());
    const sec = addZero(fullDate.getSeconds());

    return `${date}/${month}/${year} - ${hour}:${min}:${sec}`
} 

const date = new Date(Date.now());
const brazilDate = formatData(date);
console.log(brazilDate);