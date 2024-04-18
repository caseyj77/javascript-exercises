const convertToCelsius = function(tempF) {
    tempC = (tempF-32) * (5/9);
    tempCRound = Math.round(tempC * 10) / 10;
    return tempCRound;
    
};

const convertToFahrenheit = function(tempC) {
    tempF = ((9/5)* tempC) +32;
    tempFRound = Math.round(tempF * 10) / 10;
    return tempFRound;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
