const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR"; //ensures the min and max are integers, returns ERROR if they ara not integers
    if (min < 0 || max < 0) return "ERROR";  // checks to see if the integers are negative, returns ERROR if they are negative
    if (min > max) {
      const temp = min;
      min = max;
      max = temp;
    }                                       // this checks to see if the min input is the smaller if it is not it swtiches the places with max via the temp variable.

    let finalSum = min;
    for (let i = min +1; i <= max; i++) {
         finalSum += i;  
    }
        return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
