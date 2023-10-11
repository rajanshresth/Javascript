// Write a JavaScript program to check two given integers whether one is positive and another one is negative.
const check_fn=(x,y)=>{
    if ((x < 0 && y > 0) || x > 0 && y < 0) 
    {
      return true;
    }
    else 
    {
      return false;
    }
}
console.log(check_fn(-3,3))