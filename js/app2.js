/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) { //eslint-disable-line
  let twoSum = a + b;
  console.log(twoSum);
}

// Here is the test for sum(); uncomment it to run it
sum(4, 7);


/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of 
those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) { //eslint-disable-line
  let answer = a * b;
  let message = 'The product of ' + a + ' and ' + b + ' is ' + answer;
  let result = [answer, message];
  return result;
}

multiply(5,9);
