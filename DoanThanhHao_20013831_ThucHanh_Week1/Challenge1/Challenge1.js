/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
*/ 
//§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
let massMark1 = 78;
let heightMark1 = 1.69;
let massJohn1 = 92;
let heightJohn1 = 1.95;
let BMIMark1 = massMark1 / heightMark1 ** 2;
let BMIJohn1 = massJohn1 / heightJohn1 ** 2;
let markHigherBMI1 = BMIMark1 > BMIJohn1;
console.log('Data 1: ', markHigherBMI1);
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
let massMark2 = 95;
let heightMark2 = 1.88;
let massJohn2 = 85;
let heightJohn2 = 1.76;
let BMIMark2 = massMark2 / heightMark2 ** 2;
let BMIJohn2 = massJohn2 / heightJohn2 ** 2;
let markHigherBMI2 = BMIMark2 > BMIJohn2;       
console.log('Data 2: ', markHigherBMI2);