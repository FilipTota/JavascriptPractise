// 1. Print numbers from 1 to 10
const countUp = []
for (let i = 1; i <= 10; i++) {
    countUp.push(i);
}
console.log("Numbers from 1 to 10: ", countUp);


// 2. Print the odd numbers less than 100
const oddNum = [];
for (let i = 1; i < 100; i += 2) {
    oddNum.push(i);
}
console.log("Odd numbers from 1 to 100: ", oddNum);


// 3. Print the multiplication table with 7
const table = [];
for (let n = 1; n <= 10; n++) {
    table.push (n * 7);
}
console.log("Multiplication table with 7: ", table);


// 4. Print all the multiplication tables with number from 1 to 10 
let result = "x ";
for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        if (i === 0 && j > 0) {
            result += `[${j}]`;
        }
        else if (j === 0 && i > 0) {
            result += `[${i}]`;
        }
        else if (i > 0 && j > 0) {
            result += `${i * j} `;
        }
    }
    result += '\n';
}
console.log(result);


// 5. Calculate the sum of numbers from 1 to 10
let sum = 0;
for (let i = 0; i <= 10; i++) {
    sum += i;
}
console.log("Sum of numbers 1-10: ", sum);


// 6. Calculate 10!
function factorial (n) {
    if (n < 1) {
        return 1;
    }
    else {
        return factorial (n - 1) * n;
    }
}
console.log("Factorial of 10: ", factorial(10));


// 7. Calculate the sum of even numbers greater than 10 and less that 30
function sumBetween (arr) {
    arr.sort((a, b) => a - b);
    let sum = 0;
    while (arr[0] <= arr[1]) {
        sum += arr[0];
        arr[0]++;
    }
    return sum;
}
console.log("Sum of numbers from 10 to 30: ", sumBetween([30, 10]));


// 8. Create a function that will convert from Celsius to Fahrenheit
// formula --> (°C × 1.8) + 32
function convertFromC (numC) {
    let sum = 0;
    sum = (1.8 * numC) + 32;
    return sum;
}
console.log("Converting 5°C to °F: ", convertFromC(5));


// 9. Create a function that will convert from Fahrenheit to Celsius
// formula --> (32°F − 32) × (5/9)
function convertFromF (numF) {
    let sum = 0;
    sum = (numF - 32) * (5/9);
    return sum;
}
console.log("Converting 6°F to °C: ", convertFromF(6));


// 10. Calculate the sum of numbers in an array of numbers
function sumOfArr (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log("Sum of numbers in an array: ", sumOfArr([2, 5, 12, 4, 20]));


// 11. Calculate the average of the numbers in an array of numbers
function average (arr) {
    let sum = 0;
    let result;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        result = sum / arr.length;
    }
    return result;
}
console.log("Average of the numbers in an array: ", average([3, 10, 8, 5, 15]));


// 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers
function positiveArr (arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log("Array of positive numbers: ", positiveArr([2, -3, 4, 6, -8]));


// 13. Find the maximum number in an array of numbers
function maxNum (arr) {
    const max = Math.max(...arr);
    return max;
}
console.log("Max number in array: ", maxNum([2, 5, 10, 4, -1, 4]));


// 14. Print the first 10 Fibonacci numbers without recursion
function fibonacci (num) {
    let result = [0];
    let b = 0, a = 1, temp;
    while (num >= 0) {
        temp = a;
        a += b;
        b = temp;
        result.push(b);
        num--;
    }
    return result;
}
console.log("First 10 Fibonacci numbers: ", fibonacci(8));


// 15. Create a function that will find the n-th Fibonacci number using recursion
function recFibonacci (n) {
    if (n < 1) {
        return 0;
    }
    if (n <= 2) {
        return 1;
    }
    else {
        return recFibonacci(n - 1) + recFibonacci(n - 2);
    }
}
console.log("n-th Fibonacci number: ", recFibonacci(4));


// 16. Create a function that will return a Boolean specifying if a number is prime
// 0 and 1 --> not prime
// 2 is prime but all other even numbers aren't
function isPrime (num) {
if (num === 2) {
    return true;
}
if (!Number.isInteger(num) || num < 2 || (num % 2) === 0) {
    return false;
}
for (let i = 3; i <= num - 1; i += 2) {
    if (num % i === 0) {
        return false;
    }
}
return true;
}
console.log("Prime or not: ", isPrime(101));

// 17. Calculate the sum of digits of a positive integer number
function sumPositive (n) {
    let sum = 0;
    let num = n.toString();
    for (let i = 0; i < num.length; i++) {
        if (num[i] > 0) {
            sum += parseInt(num[i]);
        }
    }
    return sum;
}
console.log("Sum of digits of a positive integer number: ", sumPositive(124376));


// 18. Print the first 100 prime numbers
let arrPrime = [];
for (let i = 0; i <= 100; i++) {
    if (isPrime(i)) {
        arrPrime.push(i);
    }
}
console.log("Prime numbers from 0 to 100: ", arrPrime);


// 19. Create a function that will return in an array the first "p" prime numbers greater than "n"
function greaterThan (pNumbers, n) {
    let arr = [];
    while (arr.length < pNumbers) {
        if (isPrime(n)) {
            arr.push(n);
        }
        n++;
    }
    return arr;
}
console.log("First 'p' prime numbers greater than 'n': ", greaterThan(10, 5));


// 20. Rotate an array to the left 1 position
function rotateLeft(arr) {
    let firstNum = arr.shift();
    arr.push(firstNum);
    return arr;
}
console.log("Array rotated to left: ", rotateLeft([1, 3, 10, 8, 15]));


// 21. Rotate an array to the right 1 position
function rotateRight(arr) {
    let lastNum = arr.pop();
    arr.unshift(lastNum);
    return arr;
}
console.log("Array rotated to the right: ", rotateRight([5, 10, 4, 20, 2]));


// 22. Reverse an array
function reversedArr(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log("22. Reversed array: ", reversedArr([3, 6, 1, 10, 5]));

// 23. Reverse a string
function reversedString (string) {
    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}
console.log("23. Reversed string: ", reversedString("Working in Javascript"));
// Same task with different solution
function reversedString2 (string) {
    let newString = string.split("").reverse("").join("");
    return newString;
}
console.log("23. Reversed string with different code solution: ", reversedString2("Javascript practice"));


// 24. Create a function that will merge two arrays and return the result as a new array
function arrMerge (arr1, arr2) {
    let newArr = arr1.concat(arr2);
    return newArr;
}
console.log("24. Merging to arrays into one: ", arrMerge([1, 2], [3, 4]));


// 25. Create function that will receive two arrays of numbers as arguments and return an array composed of
// all the numbers that are either in the first array or second array but not in both
function composedArr(arr1, arr2) {
    let firstArr = arr1.filter(num => {
        if (!arr2.includes(num)) {
            return num;
        }
    });
    let secondArr = arr2.filter(num => {
        if (!arr1.includes(num)) {
            return num;
        }
    });
    return firstArr.concat(secondArr);
}
console.log("25. Array composed of all the numbers that are either in the first array or second array but not in both", composedArr([1, 4, 3, 6, 7, 9], [1, 5, 3, 8, 9]));


// 26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
function arrElements (arr1, arr2) {
    let arr = arr1.filter(num => {
        if (!arr2.includes(num)) {
            return num;
        }
    });
    return arr;
}
console.log("27. Array with elements that are in the first array but not in the second: ", arrElements([3, 6, 10, 1, 5, 7, 9], [1, 2, 4, 13, 7, 8]));


// 27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
function distinct (arr) {
    return [... new Set(arr)];  
}
console.log("Array of distinct elements: ", distinct([1, 3, 4, 10, 3, 5, 1, 4, 8]));


// 28. Calculate the sum of first 100 prime numbers
function sumOfPrime () {
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        if (isPrime(i)) {
            sum += i;   
        }
    }
    return sum;
}
console.log("28. Sum of first 100 prime numbers = ", sumOfPrime());


// 30. Create a function that will add two positive numbers of indefinite size. The numbers are received as string and
// the result should be also provided as string
function addIndefinite(num1, num2) {
    let sum = 0;
    let first = parseInt(num1);
    let second = parseInt(num2);
    
    sum = first + second;
    let result = sum.toString();
    return result;
}
console.log("30. Added numbers in string: ", addIndefinite("1456", "3251"));


// 31. Create a function that will return the number of words in a text
function wordsCount(string) {
    let counter = 0;
    let arr = string.split(" ");

    for (const elem of arr) {
        counter++;
    }
    return counter;
}
console.log("31. Number of words in text: ", wordsCount("Today I am learning basic Javascript"));


// 32. Create a function that will capitalize the first letter of each word in a text
function upperCase(string) {
    let arr = string.toLowerCase().split(' ');
    let word = [];
    for (const elem of arr) {
        let upperCase = elem[0].toUpperCase() + elem.substring(1)
        word.push(upperCase);
    }
    return word.join(" ");
}
console.log("32. Capitalizing a first letter of every word in a string: ", upperCase("coding in Javascript"));


// 33. Calculate the sum of numbers received in a comma delimited string
function sumOfNumbers(string) {
    let arr = string.split(",")
    let sum = 0;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(parseInt(arr[i]));
        sum += newArr[i];
    }
    return sum;
}
console.log("33. Sum of numbers: ", sumOfNumbers("1, 2, 3, 4, 5"));


// 34. Create a function that returns an array with words inside a text
function textArr(text) {
    let arr = text.split(" ");
    return arr;
}
console.log("34. Array of text ", textArr("Coding in Javascript"));


// 35. Create a function to convert a CSV text to a "bi-dimensional" array
let text = "John, Smith, 34\n" +
           "Michael, Tiger, 25\n" + 
           "William, Braum, 30";

function csvToArr(text) {
    let arr1 = text.split("\n");

    for (let i = 0; i < arr1.length; i++) {
        let arr2 = arr1[i].split(",");
        arr1[i] = arr2;
    }
    return arr1;
}
console.log("35. CSV text converted to array: ", csvToArr(text));


// 36. Create a function that converts a string to an array of characters
function charArr(text) {
    // to remove space between words
    let arr = text.split("");

    // to create final array
    let finalArr = arr.filter(el => {
        return el !== ' ';
    })
    return finalArr;
}
console.log("36. String in array of characters: ", charArr("Coding in Javascript"));


// 37. Create a function that will convert a string in an array containing ASCII codes of each character
function stringToAscii(text) {
    let arr = [];
    for (let i = 0; i < text.length; i++) {
        let eachChar = text.charCodeAt(i);
        arr.push(eachChar);
    }
    return arr;
}
console.log("37. String in an array containing ASCII codes of each character ", stringToAscii("Coding in Javascript"));


// 38. Create a function that will converte an array containing ASCII codes in a string
function asciiToString(arr) {
    let newArr = [];
    for (let el of arr) {
        let newString = String.fromCharCode(el);
        newArr.push(newString);
    }
    return newArr.join("");
}
console.log("38. Converting array of ASCII codes in a string: ", asciiToString([72, 101, 108, 108, 111]));