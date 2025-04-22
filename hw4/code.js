// MAP METHOD

// const my_arr = [1, 4, 7, 5 ,6 ,23]

// arr.__proto__.myMap = function(cb) {
//     let new_arr = [];
//     for (let i = 0; i<this.length; i++){
//         new_arr.push(cb(this[i]));
//     }
//     return new_arr;
// }

// const doubledArr = my_arr.myMap((value)=>{
//     return value * 2;
// })

// console.log(`Doubled Array: ${doubledArr}`);

/////////////////////////////////////////////////////

// FILTER METHOD

// const arr = [2, 4, 5, 6, 9]

// arr.__proto__.myFilter = function(cb) {
//     let new_arr = [];
//     for (let i = 0; i<this.length; i++){
//         if (cb(this[i])){
//             new_arr.push(this[i])
//         }
//     }
//     return new_arr;
// }

// const evensArr = arr.myFilter((value)=>{
//     return value % 2 === 0;
// })

// console.log(evensArr);

////////////////////////////////////////////////////

// REDUCE METHOD

// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// fruits.__proto__.myReduce = function(cb, initialValue) {
//     let acc = initialValue;
//     for (let i = 0; i<this.length; i++) {
//         acc = cb(acc, this[i], i, this);
//     }
//     return acc;
// }

// const fruitFreq = fruits.myReduce((freq, currFruit)=>{
//     freq[currFruit] = (freq[currFruit] || 0) +1;
//     return freq;
// }, {})

// console.log(fruitFreq);


// INCLUDES METHOD

// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// fruits.__proto__.myIncludes = function(val) {
//     for (let i = 0; i<this.length; i++){
//         if(this[i]===val){
//             return true;
//         }
//     }
//     return false;
// }

// let isFruit = fruits.myIncludes('strawberry')
// console.log(isFruit)


// FIND METHOD

// const nums = [1, 2, 3, 4, 5];

// nums.__proto__.myFind = function(cb) {
//     for (let i = 0; i<this.length; i++){
//         if(cb(this[i], i, this)){
//             return this[i];
//         }
//     }
//     return undefined;
// }

// let isNum = nums.myFind(function(num){
//     return num > 4;
// });

// console.log(isNum);


// SLICE METHOD

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.__proto__.mySlice = function(p1, p2){
//     let result = [];
//     for(let i = 0; i<this.length; i++){
//         if(i>=p1 && i < p2){
//             result.push(this[i]);
//         }
//     }
//     return result;
// }

// const slicedArr = arr.mySlice(2, 7);

// console.log(slicedArr); 
