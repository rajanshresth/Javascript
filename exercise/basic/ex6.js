// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400
const isWithin20 = (x) => {
    return (x >= 80 && x <= 120) || (x >= 380 && x <= 420);
  };

  console.log(isWithin20(220))