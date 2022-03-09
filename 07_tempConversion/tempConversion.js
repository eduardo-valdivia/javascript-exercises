const ftoc = function(tempF) {
  let tempConvertedToC;
  tempConvertedToC = (tempF - 32) * (5/9);
  let roundedC = Math.round(tempConvertedToC * 10) / 10;
  return roundedC;

};

const ctof = function(tempC) {
  let tempConvertedToF;
  tempConvertedToF = (tempC * (9/5)) + 32;
  let roundedF = Math.round(tempConvertedToF * 10) / 10;
  return roundedF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
