var student = {
  name : "Bogdan",
 surname : "Uhrak",
  rate: 3
}

console.log(student.name);

var string = JSON.stringify(student);
console.log(string);

student.rate = 5;
console.log(student.rate);

var string = JSON.stringify(student);
console.log(string);