//Activity 1 

//Task 1 
const a = 66;
const b = 33;

const add = () => {
     c = a+b;
    return  c;
}
add();
console.log(`Addition is ${c}`);

//Task 2
const subtract = () => {
    s = a-b;
    return s;
}
subtract();
console.log(`Substraction is ${s}`);

//Task 3 
const multiply = () => {
    m = a*b;
    return m;
}
multiply();
console.log(`Multiplication is ${m}`);

//Task 4 
function divide (){
    d = a/b;
    return d;
}
divide();
console.log(`Divison is ${d}`);

//Task 5 
const remainder = () => {
    r = a%b;
    return r;
}
remainder();
console.log(`Remainder is ${r}`);

//Activity 2 

//Task 6
let ae = 3;
function addequals (){
    ae +=4;
    return ae; 
}
addequals();
console.log(`Addequals is ${ae}`);

//Task 7
const subequals = () =>{
    ae -= 2;
    return ae;
}
subequals();
console.log(`Subbequals is ${ae}`);

//Activity 3

//Task 8
const symbol = () => {
    if(a>b){
        return " a is greater than b ";
    }
    else{
        return "b is greater than a";
    }
}
symbol();
console.log(symbol());
//we havet use less than symbol  also like above 

//Task 9 
//In these task only we have to use greater than and less than symbol with the equals to symbol  

//Task 10 
let dob = 79;
let bod = "79";
const compare = () => {
    if(dob == bod){
        return "dob and bod are same by values"
    }
    if(dob === bod){
        return "dob and bod are same by types also"
    }
    else {
        return "they are not same by values also"
    }
}
compare();
console.log(compare());
//triple equals to symbol checks the type of variable also and double checks only vlaue 

//Activity 4

//Taks 11
const andoperator = () => {
    if(dob==bod && dob === bod){
        return "the dob and bod is same by value also and type also"
    }
//Task 12
    if(dob == bod || dob === bod){
        return "the dob and bod is same by one value or type"
    }
//Task 13
    if(dob != bod){
        return "the dob is not equal to bod"
    }
    else{
      return "the dob and bod is not same by value or type"
    }
}
andoperator();
console.log(andoperator());

//Activity 5 
  
//Task 14 
let numb = 2;
let posnumb = numb >=0 ? "the number is positive":"the number is negative";
console.log(posnumb);

//Feature Request

const calci = (n1,n2) => {
    const plus = n1+n2;
    const minus = n1-n2;
    const into = n1*n2;
   const oper = `the addition is ${plus} the sunstraction is ${minus} the multiplication is ${into}` 
  return oper;
}
const run = calci(4,6);
console.log(run);
 
//another two task are same as above given 
