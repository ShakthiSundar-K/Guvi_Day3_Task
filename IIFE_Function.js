### 1.Print odd numbers in an array
```
let arr=[8,7,5,3,4,2,6,10]
let odd=  ( function(arr){
    result= ""
    for(let i of arr)
    {
        if(i%2!=0)
        {
            result=result+i+" "
        }
        
    }
    return result
}
)(arr)

console.log(odd)

```
### Output:

7 5 3

### 2.Convert all the strings to title caps in a string array
```
let str = ["hello world", "hello fsd", "welcome back"];

let toTitleCaps = (function (strArray)  {
  for (let i = 0; i < strArray.length; i++) {
    let currentString = strArray[i];
    let newString = "";
    let capitalizeNext = true;

    for (let j = 0; j < currentString.length; j++) {
      if (capitalizeNext && currentString[j] !== " ") {
        newString += currentString[j].toUpperCase();
        capitalizeNext = false;
      } else {
        newString += currentString[j].toLowerCase();
      }

      if (currentString[j] === " ") {
        capitalizeNext = true;
      }
    }

    strArray[i] = newString;
  }

  return strArray;
})(str)

console.log(toTitleCaps);

```
### Output:

["Hello World", "Hello Fsd", "Welcome Back"]


### 3.Sum of all numbers in an array
```
let arr = [2,4,5,7,8]
let sum = ( function (arr)
{
    result=0
    for(let i of arr)
    {
        result=result+i
    }
    return result
}
)(arr)
console.log("Sum is "+ sum)

```
### Output:

Sum is 26

### 4.Return all the prime numbers in an array
```
let arr = [1,2,3,4,5,6,7,8,9,10]
let prime=( function(arr)
{
    result=[]
   for(let n of arr)
   {
    let isprime = true
    if(n<=1)
    {
        isprime = false
    }
    else{
    for(let i=2;i<n;i++)
    {
        if(n%i === 0)
        {
            isprime= false
            break
        }
    }
   }
   if(isprime)
   {
    result.push(n)
   }
  }
 return result
})(arr)

console.log(prime)

```
### Output:

[ 2, 3, 5, 7 ]


###5.Return all the palindromes in an array
```
let strArray = ["level", "hello", "radar", "world", "noon", "madam"];

let pal=(function (strArray) {
  let palindromes = [];

  for (let str of strArray) {
    if (str === str.split('').reverse().join('')) {
      palindromes.push(str);
    }
  }

  return palindromes;
})(strArray)

console.log(pal) 

```
### Output:

[ 'level', 'radar', 'noon', 'madam' ]

### 6.Return median of two sorted arrays of the same size.
```
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

let medianOfSortedArrays = (function(arr1, arr2) {
  const n = arr1.length;
  const mid = (n - 1) / 2;

  if (n % 2 === 0) {
    // If the length of the arrays is even
    return (arr1[mid] + arr2[mid]) / 2;
  } else {
    // If the length of the arrays is odd
    return arr1[mid];
  }
})(arr1, arr2)

console.log(medianOfSortedArrays); 

```
### Output:

2

### 7.Remove duplicates from an array
```
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [];

array.forEach((function() {
    return function(item) {
        if (!uniqueArray.includes(item)) {
            uniqueArray.push(item);
        }
    };
})());

console.log(uniqueArray); 

```
### Output:

[1, 2, 3, 4, 5]

### 8.Rotate an array by k times
```
const arr = [1, 2, 3, 4, 5];
const k = 2;
let rotateArray = (function (arr, k) {
    const rotations = k % arr.length;
    const rotatedArray = arr.slice(rotations).concat(arr.slice(0, rotations));
    return rotatedArray;
})(arr, k);

console.log(rotateArray);

```
### Output:

[ 3, 4, 5, 1, 2 ]
