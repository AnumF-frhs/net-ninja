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
//console.log(true,false, "true", "false") //these are NOT strings unless you have '' or ""

//methods can return booleans
//let email = 'meow@gmail.com';
//let names = ['mario', 'luigi', 'toad'];
//let result  = email.includes('!')
 //if the method includes=true, not=false
 //let result = names.includes('luigi');
//console.log(result);

//01:07 time stamp

//14-10-25, stop at 26:40
// use conditional statment for checking conditions
//If (some condtion is true) {
//    do something...
// }

//for loops

//for(let i = 0; i < 5; i++){
//console.log('in loop:',i);
//}

//console.log('loop finished');

//no semicolons for loops at the end
//{}= closing
// 2nd=is the condition, 1st is an expression...only execute code if it is true. i=0 and is less than 5 so it is true.

//const names= ['shaun', 'mario', 'luigi'];

//for(let i = 0; i < names.length; i++) {
    // console.log(names[i]);
    //let html = `<div>${names[i]}</div>`;
   // console.log(html);
//}

//interation: 1 cycle of data

// while loops, exactly the same as for loop
//difference=syntax
//while i is an infinite loop, could cause a crash if i isn't defined properly

//const names = ['shaun', 'mario', 'luigi'];
//let i = 0;
//while(i < 5){
  // console.log('in loop:',i);
  // i++;
//}

//let i = 4;

//do {
   // console.log('val of i is:', i);
 //   i++;
//} while (i < 5);

// if statements

/* const age = 25;

if(age > 20){
    console.log('you are over 20 years old');
}

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];
if(ninjas.length > 3){
    console.log("that's a lot of ninjas");
}
    //{} used as "then"
//used double quotes bc you used ' in that's in the string

*/

/*const password = 'p@ssword7654'; 
if (password.length >= 12){
    console.log('that password is strong');
} else if(password.length >= 8){
    console.log('that password is long enough');
} else {
    console.log('password is not long enough');
}
*/

//we want a message to appear if it is false too
//use else statement
//only 1 code block will run

//28/10...net ninja #4..functions
// to recall the function: showScores(), can define a code once and recall in multiple 
//function declaration
//function greet() {
  //  console.log('hello there');

//}

//function expression, arguments and parameters
//const speak = function(name = 'luigi', time = 'night'){ //lines 268-270 is known as a function expression. add a ; at the end of {} bc it is an expression
  //  console.log('good ${time} ${name}');
//};

/*greet();
greet();
greet();
*/
 //speak();
 //speak ('shaun', 'day'); //these values can override the values.

//returning values

//const speak = function(name = 'luigi', time = 'night'){
//    console.log(`good ${time} ${name}`);
//}

//const caclArea = function(radius){
 //   return 3.14 * radius**2; //advantage: we can find other stuff like volume by simply recalling
   // return area; //we are not logging the console now, we are recalling the area.
//}

//const area = caclArea(5); //this calls the function
//console.log(area); //this wouldnt work yet bc area is  not defined
//console.log(area);

// const calcVol = function(area){

//};

//calcVol(area)

// regular function, reference

//const calcArea = function(radius){
  // return 3.14 * radius**2;
//}

//arrow function, cleaner way to write functions
//const calcArea = radius;  { //this only works when there is 1 parameter, need () if there's none >1 parameters
//return 3.14 * radius**2
//};



//const area = calcArea(5); 
//console.log('area is: ', area);

//net ninja 5: stop at 27:47
//29/10
//objects in java

//propteries: email, username, gender...these have methods (i.e. login/logout)
//object literal notation

//object literals {} make the object... comma is used to add more

/*
let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@gmailcom',
  location: 'location',
  blogs: ['why mac and cheese rules', '10 things to make with marmite']

  
};

console.log(user);
console.log(user.name);

//user.age = 35
console.log(user.age); //this is used to override 
const key = 'location'; // same as saying (user['location'])

console.log(user['email']);//used to update
user['name']='chun-li';
cponsole.log(user['name']);

console.log (typeof user);

*/
//adding methods.
/*
let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@gmailcom',
  location: 'location',
  blogs: ['why mac and cheese rules', '10 things to make with marmite'],
  login: function(){
    console.log('the user is logged in');
  },
  logout: function(){
    console.log('the user logged out');
  },
  logBlogs: function(){
    //console.log(blogs);
    //console.log(this.blogs) //this=context object
    console.log('this user has written the following blogs');
    this.blogs.forEach(blog=> {
      console.log(blog);
    })
  }
  
};
user.logBlogs
console.log(this);
user.logout();
user.login();

const name = 'mario';
name.toUpperCase();
*/

//more
/*
const blogs = [
  {title: 'why mac and cheese rules', likes:30},
  {title: '10 things to make with marmite', likes:50} //this is an object
];
*/

//console.log(blogs);
/*
let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@gmailcom',
  location: 'location',
  blogs: [
     {title: 'why mac and cheese rules', likes:30},
  {title: '10 things to make with marmite', likes:50} 
  ],
  login(){
    console.log('the user logged in');
  },
  logout(){
    console.log('the user logged ou')
  },
  logBlogs(){
    console.log('this user has written the following blogs:');
    this.blogs.forEach(blog => {
      console.log(blog.title, blog.likes);
    });
  }
  
};

user.logBlogs();
*/

//math objects!
/*
console.log(Math); //shows props of math
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;
console.log(Math.round(area)); //rounds # to nearest integer
console.log(Math.floor(area)); //floors number to lowest nearest integer (7.7 -->7)
console.log(Math.ceil(area)); //opposite of floor, 7.7 --> 8
console.log(Math.trunc(area)); //takes away decimalm --> 7

//random number gen

const random = Math.random();
console.log(random); //each time u reload, a diff # comes up btwn 0-1
console.log(Math.round(random*100)); //makes 1 or 0, x10, gets any # btwn 1-100
*/