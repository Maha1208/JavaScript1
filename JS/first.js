
// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world !";
//Imperative,procedural,declarative,functional,oops
const nums=[18,26,39,40,5,6,97,3,09,10];
const result=[];

for(let i=0; i<nums.length; i++)
{
if(nums[i]>5)
{
result.push(nums[i]);
}
}
console.log(result);

//arrow func and filter method
const num1=[18,26,39,40,5,6,97,3,09,10];
console.log(num1.filter(num1 => num1 > 5))
console.log(num1);