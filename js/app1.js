
function testSum() { //eslint-disable-line
if (sum(4, 7)[0] === 11 && sum(4, 7)[1] === 'The sum of 4 and 7 is 11.') {
    console.log('%c TEST FOR sum() PASSES', 'color: green');
} else {
    console.log('%c TEST FOR sum() FAILS', 'color: red');
 }
}