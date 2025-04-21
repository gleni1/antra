/* PROBLEM 1 */

// const func = (num) => {
//     let arr = num.toString().split('');
//     let i = 0;
//     let j = arr.length -1;
//     while(i <= j){
//         let n = arr[i];
//         arr[i] = arr[j];
//         arr[j] = n;
//         i += 1;
//         j -= 1;
//     }
//     let new_num = parseInt(arr.join(''), 10);
//     return new_num;
// }

// let x = 11356933217;

// let result = func(x);
// console.log(result)


/////////////////////////////////////////////////////////////


/* PROBLEM 2 */


// const isPalindrome = (word) => {
//     let cleaned = word.replace(/[^a-z0-9]/gi, ''); 
//     let reversed_word = cleaned.split('').reverse().join('');
//     return reversed_word === cleaned;
// }

// let word = "nurses run";
// let new_word = isPalindrome(word);
// console.log(new_word);

/////////////////////////////////////////////////////////////


/* PROBLEM 3 */

// const combinations = (word) => {
//     let i = 0;
//     let j = 0;
//     let arr = [];
//     while(i<word.length-1){
//         j = i+1;
//         while(j<=word.length){
//             let substr = word.slice(i, j);
//             if (!arr.includes(substr)) {
//                 arr.push(substr);
//             }
//             j+=1;
//         }
//         i+=1;
//     }
//     return arr;
// }

// let word = "glen";
// let array1 = combinations(word);
// console.log(array1);

/////////////////////////////////////////////////////////////


/* PROBLEM 4 */

// const sortString = (word) => {
//     let str = word.split('').sort().join('');
//     return str;
// }

// let word = "webmaster";
// let str = sortString(word);
// console.log(str);

/////////////////////////////////////////////////////////////


/* PROBLEM 5 */

// const capitalizeString = (string) => {
//     let arr = string.split(' ')
//     let result = [];
//     for (word of arr){
//         let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
//         result.push(capitalized);
//     }
//     let final = result.join(' ');
//     return final;
// }

// let word = "i am not here";
// let str = capitalizeString(word);
// console.log(str);


/////////////////////////////////////////////////////////////

/* PROBLEM 6 */

// const findLongest = (string) => {
//     let arr = string.split(' ')
//     let longest = arr[0];
//     for (word of arr){
//         if(word.length > longest.length){
//             longest = word;
//         }
//     }
//     return longest;
// }

// let word = "Web Development Tutorial";
// let str = findLongest(word);
// console.log(str);


/////////////////////////////////////////////////////////////


/* PROBLEM 7 */

// const countVowels = (string) => {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
//     for(c of string){
//         if(vowels.includes(c.toLowerCase())){
//             count += 1;
//         }
//     }
//     return count;
// }

// let word = "The quick brown fox";
// let v_count = countVowels(word);
// console.log(v_count);

/////////////////////////////////////////////////////////////

/* PROBLEM 8 */

// const isPrime = (num) => {
//     if (num <= 1) {
//         return false; 
//     }
//     let sqrtValue = Math.sqrt(num);
//     for (let i = 2; i <= sqrtValue; i++){
//         if(num %i==0){
//             return false;
//         }
//     }
//     return true;
// }

// let number = 3;
// let final = isPrime(number);
// console.log(final);

/////////////////////////////////////////////////////////////

/* PROBLEM 9 */

// const checkType = (val) => {
//     return typeof(val);
// }

// let prm = "dfsfda";
// let final = checkType(prm);
// console.log(final);

/////////////////////////////////////////////////////////////

/* PROBLEM 10 */

// const identityMatrix = (n) => {
//     let arr = []
//     for(let i = 0; i<n; i++){
//         let row = []
//         for (let j = 0; j<n; j++){
//             if(i == j){
//                 row.push(1);
//             }else{
//                 row.push(0);
//             }
//         }
//         arr.push(row);
//     }
//     return arr
// }

// let num = 3;
// let final = identityMatrix(num);
// console.log(final);

/////////////////////////////////////////////////////////////

/* PROBLEM 23 */

// const firstNonRepeatedChar = (str) => {
//     let charCount = [];
    
//     for (let i = 0; i < str.length; i++) {
//         if (charCount[str[i]] === undefined) {
//             charCount[str[i]] = 1;
//         } else {
//             charCount[str[i]] += 1;
//         }
//     }
    
//     for (let i = 0; i < str.length; i++) {
//         if (charCount[str[i]] === 1) {
//             return str[i];
//         }
//     }
    
//     return null;  
// }

// let str = 'abacddbec';
// let result = firstNonRepeatedChar(str);
// console.log(result);  

/////////////////////////////////////////////////////////////

/* PROBLEM 24 */

// const bubbleSort = (arr) => {
//     let n = arr.length;
//     let swapped;
    

//     for (let i = 0; i < n - 1; i++) {
//         swapped = false;
        

//         for (let j = 0; j < n - 1 - i; j++) {
//             if (arr[j] < arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//                 swapped = true; 
//             }
//         }

//         if (!swapped) {
//             break;
//         }
//     }
    
//     return arr;
// }


// let arr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
// let sortedArr = bubbleSort(arr);
// console.log(sortedArr);

/////////////////////////////////////////////////////////////

/* PROBLEM 25 */

// const longestCountryName = (countries) => {
//     let longest = '';
    
    
//     for (let i = 0; i < countries.length; i++) {
//         if (countries[i].length > longest.length) {
//             longest = countries[i];
//         }
//     }
    
//     return longest;
// }

// let countryList = ["Australia", "Germany", "United States of America"];
// let result = longestCountryName(countryList);
// console.log(result); 


/////////////////////////////////////////////////////////////

/* PROBLEM 26 */

// const longestUniqueSubstring = (str) => {
//     let start = 0; 
//     let maxLength = 0;  
//     let charIndexMap = {};  
    
//     for (let end = 0; end < str.length; end++) {
//         if (charIndexMap[str[end]] >= start) {
//             start = charIndexMap[str[end]] + 1;
//         }
        
//         charIndexMap[str[end]] = end;
        
//         maxLength = Math.max(maxLength, end - start + 1);
//     }
    
//     return maxLength;
// }

// let str = "abcabcbb";
// let result = longestUniqueSubstring(str);
// console.log(result); 

/////////////////////////////////////////////////////////////

/* PROBLEM 27 */

// const longestPalindrome = (str) => {
//     if (str.length < 1) return '';  
//     let start = 0;  
//     let maxLength = 1;  
    
//     const expandAroundCenter = (left, right) => {
//         while (left >= 0 && right < str.length && str[left] === str[right]) {
//             left--;
//             right++;
//         }
//         return right - left - 1;
//     };

//     for (let i = 0; i < str.length; i++) {
//         let len1 = expandAroundCenter(i, i);
//         let len2 = expandAroundCenter(i, i + 1);
//         let maxLen = Math.max(len1, len2);
//         if (maxLen > maxLength) {
//             maxLength = maxLen;
//             start = i - Math.floor((maxLen - 1) / 2);  
//         }
//     }

//     return str.substring(start, start + maxLength);
// }


// let str = "bananas";
// let result = longestPalindrome(str);
// console.log(result);  // Output: "anana"

/////////////////////////////////////////////////////////////

/* PROBLEM 28 */

// const greet = (callback) => {
//     console.log("Hello!");
//     callback();  // Calling the passed function
// }

// const sayGoodbye = () => {
//     console.log("Goodbye!");
// }

// greet(sayGoodbye);

/////////////////////////////////////////////////////////////

/* PROBLEM 29 */

// const getFunctionName = (func) => {
//     return func.name;
// }

// // Example functions
// const myFunction = () => {
//     console.log("This is my function!");
// }

// const anotherFunction = () => {
//     console.log("This is another function!");
// }

// console.log(getFunctionName(myFunction));  
// console.log(getFunctionName(anotherFunction));  












