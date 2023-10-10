// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
const isLeapYear = (year) => {
    if (year % 4 === 0 && year % 100 !== 0) {
      return true;
    } else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  };
  
  console.log(isLeapYear(1000)); // false
  // Check if the year 2000 is a leap year
  console.log(isLeapYear(2000)); // true
  
  // Check if the year 1900 is a leap year
  console.log(isLeapYear(1900)); // false