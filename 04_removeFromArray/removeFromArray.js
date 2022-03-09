const removeFromArray = function(...args) {
   const testArray = args[0];
   const removedArray = [];

   testArray.forEach((item) => {
        if(!args.includes(item)) {
        removedArray.push(item);
        }
    });
    return removedArray;
};

//Additional way to pass tests using filter
//const removeFromArray = function(...args) {
//    const array = args[0];
//    return array.filter(item => !args.includes(item));
//}


// Do not edit below this line
module.exports = removeFromArray;