/* console.log(1);
console.log(2);
console.log(5+8);
console.log(10/4);

let age = 25;
let year = 2019;

console.log(age);
console.log(age+5);

// log things to console
console.log(age, year);
 
age=30;
console.log(age);

const points = 100;
console.log(points);

var score = 75;
console.log(score);

*/

//*strings
//console.log('hello,world');
//let email = 'mario@thenetninja.co.uk';
//console.log(email);



//string conactention

//let favFood ='Funnel Cake';
//console.log(favFood);

//let day='23';
//let month = '12';
//let year = '2008;' 
//let dateBirth = month +'/' + day +'/' + year
//console.log(dateBirth);

//let firstName = 'Anum';
//let lastName = 'Farghani';

//let fullName = firstName + ' ' + lastName;
//console.log(fullName);



//getting characters
//console.log(fullName[2])



//string length
//console.log(fullName.length);


//string methods
// console.log(fullName.toUpperCase());
//let result = fullName.toLowerCase();
//console.log(result, fullName);
//let index = email.indexOf('@');
//console.log(index)

//common string methods
// let email = 'mario@thenetninja.co.uk';
//let result = email.lastIndexOf('n');
//let result = email.slice(0, 5);
//let result = email.substr(4, 10);
//let result = email.replace ('m', 'w');
// let result = email.replaceAll('n', 'w');
//console.log(result)

//let radius= 10;
//const pi = 3.14 //

//console.log(radius, pi);
//let result= radius % 3;
//let result = pi * radius**2;

//order of operation - B I D M A S

//let result = 5 * (10-3)**2;

//console.log(result);

//let likes = 10;

// likes = likes +1;
//likes++;
//likes--;

//likes +=10;
//likes -= 5;
//likes *= 2;
//likes /= 2;

//console.log(likes);

//NOTES

// Na - not a number

// console.log(5 / 'hello');
// console.log(5 * 'hello');

//let result = 'the blog has ' + likes+ ' likes';
//console.log(result);

//const title = 'Best reads of 2019';
//const author = 'Mario';
//const likes = 30;

//concatenation way
//let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
//The blog called Best reads of 2019 by Mario  has 30 likes...very messy
//console.log(result);

//template string, used so we do not need to keep entering and exiting each string
//let result = `The blog called ${title} by ${author} has ${likes} likes`;
//console.log(result);
//used ` marks; good use of these are with html templates

// creating html template

//let html = `
//<h2>${title}</h2>
//<p>By ${author}</p>
//<span>This blog has ${likes} likes</spam>
//`;

//console.log(html);

//let ninjas = ['shaun', 'ryu','chun-li']; //array syntax..they store data//
//ninjas[1] = 'ken';
//console.log(ninjas[1]); //java is a 0 based code...position
//let's overide now...(ken)

//let ages = [20,25, 30, 35];
//console.log(ages[2]); //this is to pick different data.

//let random = ['shaun', 'crystal', 30,20];
//console.log(random);

//arrays have properties and methods.

//console.log(ninjas.length); //counts the number of elements

//array methods

//let result = ninjas.join(','); //joins elements with a comma/dash/whatever that is between the ''
//let result = ninjas.indexOf('chin-lu'); //index of this value
//let result = ninjas.concat('ken', 'crystal') //joins another array w/ another
//let result = ninjas.push('ken') // turn length of new array: push new value to the array
// result = ninjas.pop('ken'); //take off end value
//console.log(result);

//null and undefined.
//null: intentional lack of value
//undefine: not intentinal

//let age = null; //different bc null means we as the human said it was undefined unlike the computer

//console.log(age, age+3, `the age is ${age}`) //undefined bc no value was written

//booleans: def as true/false
console.log(true,false, "true", "false") //these are NOT strings unless you have '' or ""

//methods can return booleans
let email = 'meow@gmail.com';
let names = ['mario', 'luigi', 'toad'];
//let result  = email.includes('!')
 //if the method includes=true, not=false
 let result = names.includes('luigi');
console.log(result);

//1:07 time stamp

