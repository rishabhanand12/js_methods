var data = [
  {
    name: "Butters",
    age: 3,
    type: "dog"
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog"
  },
  {
    name: "Red",
    age: 1,
    type: "cat"
  },
  {
    name: "Joey",
    age: 3,
    type: "dog"
  },
  {
    name: "Pochi",
    age: 3,
    type: "dog"
  }
];

// write a function that will sum all of the dogs ages in dog years using for loop.
// 1 human year = 7 dog year

function age(data) {
  var sum=0;
  for(var i=0;i<data.length;i++) {
    if(data[i].type=="dog") {
      sum+=data[i].age*7;
    }
  }
  return sum;
}

// your code goes here

// Solution is 105

// Write the same function using
// 1. filter - for filtering the cat or dog
// 2. map - to multiply human year to dog year
// 3. reduce - to accumulate total age.
object.age(data.filter(x => (x.type=="dog") )).map(x=>x*7).reduce((acc,x) =>acc+x);


// Solution 105
