
var random_string = function  () 
{
  return Math.random().toString(36).substr(7);
}

var random_number = function  () 
{
  return Math.floor(Math.random() * 100000);
}

console.log("random_string" , random_string());
console.log("random_number ", random_number());