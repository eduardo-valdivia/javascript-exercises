const add = function(add1, add2) {
  let finalSum;
  finalSum = add1 + add2;
  return finalSum;
	
};

const subtract = function(sub1, sub2) {
  let finalSub;
  finalSub = sub1 - sub2;
  return finalSub;
	
};

const sum = function(sumArray) {
  let finalSum = 0;
  if(sumArray.length === 0) {
    return finalSum;
  } else {
    for (let i = 0; i < sumArray.length; i++) {
      finalSum += sumArray[i];
    }
  }
  return finalSum;
};

const multiply = function(multArray) {
  let finalMult = 1; 
  for (let i = 0; i < multArray.length; i++) {
    finalMult *= multArray[i];
  }
  return finalMult;
};

const power = function(num, power) {
  let finalPowerNum = 1;
  for (let i = 1; i <= power; i++) {
    finalPowerNum *= num;
  }
  return finalPowerNum;
};

const factorial = function(factNum) {
  if(factNum === 0 || factNum === 1) {
    return 1;
  } else {
    for (let i = factNum - 1; i >= 1;i--) {
      factNum *= i;
    }
  }
  return factNum;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
