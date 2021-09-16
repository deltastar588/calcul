// a function without a return statement
function add(number1, number2) {
    return(number1 + number2);
  }
  
  // a function with a return statement
  function multiply(number1, number2) {
    return number1 * number2;
  }
  
  // a function with a return statement
  function subtract(number1, number2) {
    return number1 - number2;
  }
  
  function divide(dividend, divisor){
    if(divisor === 0){
      return "Not Allowed."
    }else{
      let result = dividend / divisor;
      return result;
    }
  }