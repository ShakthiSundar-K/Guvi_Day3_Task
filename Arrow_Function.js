### 1.Print odd numbers in an array

```
let arr=[8,7,5,3,4,2,6,10]
let odd=  arr => {
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


console.log(odd(arr))
```
### Output:

7 5 3

### 2.Convert all the strings to title caps in a string array
``` 
let str = ["hello world", "hello fsd", "welcome back"];

let toTitleCaps = (strArray) => {
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
};

console.log(toTitleCaps(str));
```
### Output:

["Hello World", "Hello Fsd", "Welcome Back"]

### 3.Sum of all numbers in an array
```
let arr = [2,4,5,7,8]
let sum = (arr)=>{
    result=0
    for(let i of arr)
    {
        result=result+i
    }
    return result
}

console.log("Sum is "+ sum(arr))
```
### Output:

Sum is 26

### 4.Return all the prime numbers in an array
```

let arr = [1,2,3,4,5,6,7,8,9,10]
let prime= arr =>{
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
}

console.log("prime numbers are " + prime(arr))
```
### Output:

prime numbers are 2,3,5,7

### 5.Return all the palindromes in an array

```
let strArray = ["level", "hello", "radar", "world", "noon", "madam"];


let pal= strArray=> {
  let palindromes = [];

  for (let str of strArray) {
    if (str === str.split('').reverse().join('')) {
      palindromes.push(str);
    }
  }

  return palindromes;
}

console.log(pal(strArray)) 

```
### Output:

[ 'level', 'radar', 'noon', 'madam' ]



