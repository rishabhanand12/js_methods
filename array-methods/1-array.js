// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
let largest = Math.max(...numbers);

// Find longest string in strings
let longest = strings[0].length;
var j;
for(var i=0;i<strings.length;i++) {
  if(strings[i].length>longest) {
    longest = strings[i].length;
    j=i;
  }
}
console.log(strings[j]);

// Find all the even numbers
var even=numbers.filter(v=>(v%2==0));
console.log(even);

// Find all the odd numbers
var odd=numbers.filter(v=>v%2!=0);
console.log(odd);

// Find all the words that contain 'is' use string method 'includes'
strings.includes("is");

// Find all the words that contain 'is' use string method 'indexOf'
strings.indexOf("is")!==-1;

// Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every(value=>value%3==0);

//  Sort Array from smallest to largest
numbers.sort((a,b)=>a-b);

// Remove the last word in strings
strings.pop();

// Add a new word in the array
strings.push("new");

// Remove the first word in the array
strings.shift();

// Place a new word at the start of the array use (upshift)
strings.upshift("first");

// Make a subset of numbers array [18,9,7,11]
numbers.slice(4,7);

// Make a subset of strings array ['a','collection']
strings.slice(2,3);

// Replace 12 & 18 with 1221 and 1881
numbers.splice(1,1,1221);
numbers.splice(3,1,1881);

// Replace words with string in strings array
strings.splice(strings.length-1,1,"string");

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];

// Find all customers whose firstname starts with 'J'
var start=[];
var i=0;
customers.forEach((customer)=> {
  if(customer.firstname.startsWith("J")) {
    start[i] = customer;
    i++;
  } 
 }
);
console.log(start);

// Create new array with firstname and lastname
var firstName=[];
var lastName=[];
for(var i=0;i<customers.length;i++) {
  firstName.push(customers[i].firstname);
  lastName.push(customers[i].lastName);
}
console.log(firstName);
console.log(lastName);

// Sort the array created above alphabetically
firstName.sort();
lastName.sort();