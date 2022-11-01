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


/* Problem 3
// Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element 
is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are 
strings that EXACTLY follow this example and use the values that were input into the function:

// Third element: "4 and 7 and 5 sum to 16."
// Fourth element: "The product of 4 and 7 and 5 is 140."

// IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, 
and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure 
out how to do this. However, you may continue to use the + operator for string concatenation.

// Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the 
testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line
  let sumOfAB = sum(a, b);
  let sumOfABC = sum(sumOfAB, c);
  return sumOfABC;
}

// Here is the test for sumAndMultiply(); uncomment it to run it
sumAndMultiply(4,7,5);
