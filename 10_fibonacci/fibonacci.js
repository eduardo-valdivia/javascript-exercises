const fibonacci = function(num) {
    parseInt(num);
    let num1 = 0;
    let num2 = 1;
    let sum;
    if(num < 0){
        return "OOPS";
    } else {
    for(i = 1; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    }   
    return num2;
};

// Do not edit below this line
module.exports = fibonacci;
