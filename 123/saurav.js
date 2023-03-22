function triArea(base, height) {
    return (base * height) / 2;
  }
  console.log(triArea(3, 2)); // Output: 3
  console.log(triArea(7, 4)); // Output: 14
  console.log(triArea(10, 10)); // Output: 50
  
  function giveMeSomething(a) {
      return "something " + a;
    }
    
    console.log(giveMeSomething("is better than nothing")); // Output: "something is better than nothing"
    console.log(giveMeSomething("Bob Jane")); // Output: "something Bob Jane"
    console.log(giveMeSomething("something")); // Output: "something something"
    
  
    function points(twoPointers, threePointers) {
      // Calculate the total points using the given formula
      const totalPoints = (2 * twoPointers) + (3 * threePointers);
      
      // Return the total points
      return totalPoints;
    }
    
    console.log(points(1, 1)); // Output: 5
    console.log(points(7, 5)); // Output: 29
    console.log(points(38, 8)); // Output: 100
  
    function lessThan100(num1, num2) {
      // Calculate the sum of the two numbers
      const sum = num1 + num2;
      
      // Check if the sum is less than 100 and return the result
      if (sum < 100) {
        return true;
      } else {
        return false;
      }
    }
    
    console.log(lessThan100(22, 15)); // Output: true
    console.log(lessThan100(83, 34)); // Output: false
    console.log(lessThan100(3, 77)); // Output: true
  
    
    function addUp(num) {
      let sum = 0;
      
      // Loop through all numbers from 1 to the input number and add them to the sum
      for (let i = 1; i <= num; i++) {
        sum += i;
      }
      
      // Return the sum
      return sum;
    }
    
    console.log(addUp(4)); // Output: 10
    console.log(addUp(13)); // Output: 91
    console.log(addUp(600)); // Output: 180300
  
    
    function oddishOrEvenish(num) {
      let sum = 0;
      
      // Convert the number to a string to iterate through its digits
      for (let digit of String(num)) {
        sum += parseInt(digit);
      }
      
      // Check if the sum is even or odd and return the corresponding string
      return sum % 2 === 0 ? "Evenish" : "Oddish";
    }
    
    console.log(oddishOrEvenish(43)); // Output: "Oddish"
    console.log(oddishOrEvenish(373)); // Output: "Oddish"
    console.log(oddishOrEvenish(4433)); // Output: "Evenish"
  
    
    function primeInRange(n1, n2) {
      // Loop through the range of numbers
      for (let i = n1; i <= n2; i++) {
        // Check if the number is prime
        let isPrime = true;
        for (let j = 2; j < i; j++) {
          if (i % j === 0) {
            isPrime = false;
            break;
          }
        }
        // If the number is prime, return true
        if (isPrime && i > 1) {
          return true;
        }
      }
      // If no prime numbers found, return false
      return false;
    }
  
    function shiftToLeft(x, y) {
      // Multiply x by 2^y
      return x * Math.pow(2, y);
    }
  
  console.log(shiftToLeft(5, 2)); // Output: 20
  console.log(shiftToLeft(10, 3)); // Output: 80
  console.log(shiftToLeft(-32, 2)); // Output: -128
  console.log(shiftToLeft(-6, 5)); // Output: -192
  console.log(shiftToLeft(12, 4)); // Output: 192
  console.log(shiftToLeft(46, 6)); // Output: 2944
  
  function binary(decimal) {
      if (decimal === 0) return "0";
      let binary = "";
      let value = 1;
      while (value <= decimal) {
        binary = (decimal & value ? "1" : "0") + binary;
        value *= 2;
      }
      return binary;
    }
  