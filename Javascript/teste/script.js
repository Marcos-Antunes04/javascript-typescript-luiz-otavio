const year = 2017;

function dayOfProgrammer(year) {
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let month = 1;
  let dayCountdown = 256;
  let day = 0;

  function getDay() {
    for (let i in months) {
      if (dayCountdown < months[i]) {
        day = dayCountdown;
        return `${day}.` + (month > 10 ? `${month}` : `0${month}`) + `.${year}`
      }
      dayCountdown -= months[i]
      month++
    }
  }

  if (year < 1918) {
    if(year % 4 === 0) {
      months[1] = 29;
      return getDay();
    }
    return getDay();
  }

  if (year == 1918) {
    months[1] = 15;
    return getDay();
  }

  if (year > 1918) {
    if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
      months[1] = 29;
      return getDay();
    }
    return getDay();
  }
}
 
console.log(dayOfProgrammer(year));