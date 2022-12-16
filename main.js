let user = 'John Doe';

console.log(user);

const student = 'Milena Ivanova';

console.log(student);

user = student;

console.log(user); // expected output: 'Milena Ivanova'
// -----------------------------------------------------------
let test = 1;
test++;

console.log(test + '1'); // expected output: '21'
console.log(test - 1); // expected output: 1

test = Boolean(test); // expected output: true
// test = !test; // expected output: false

console.log(test);
// -----------------------------------------------------------
const arr = [2, 3, 5, 8];
let result = 1;

for (let i = 0; i < arr.length; i++) {
  result *= arr[i];
}

console.log(result);
// -----------------------------------------------------------
const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arr2.length; i++)
  if (arr2[i] > 5 && arr2[i] < 10) {
    console.log(arr2[i]);
  }
// -----------------------------------------------------------
const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arr3.length; i++)
  if (arr3[i] % 2 === 0) {
    console.log(arr3[i]);
  }
