console.log('hello');
//alert('2 pop ups blocked');
// comment lines
var b = 'hello i am  variable';
console.log(b);

//document.getElementById('someText').innerHTML = 'Hey There';

//var age = prompt('What is your age ?');
//document.getElementById('someText').innerHTML = age;
// numbers in javascript.
//var num1 = 5.7;
//num1++;
//num1+=1;
//console.log(num1);
//console.log(5*10);
//console.log(50/9);
//console.log(50%2);
function fun(){
    alert('this is a statement');
}
function greeting(yourname){
   var name =  prompt('what is your name ?');
   var result = 'hello' + yourname;
   console.log(result);
}
//var name = prompt('What is your name');
//greeting(name);

function sumnumbers(num1,num2){
var result = num1+num2;
console.log(result);
}
//sumnumbers('nara ', 'simha');
/*var num =0;

while(num<100){
    num+=1;
    console.log(num);
}*/

// for loop
//for(let num =0;num<100;num++){
//    console.log(num);
//}

//data types
let yourage = 18;  // number
let yourname = 'bob'; //string
let name = {first: 'jane',last :'Doe'}; //object
let truth = false; // boolean
let groceries = ['apple', ' banana', ' oranges']; // array
let random; //undefined
let nothing = null; // value null

//strings in javascript
let fruit = 'banana';
let morefruits = 'banana\napple'; //new line
console.log(morefruits);
console.log(fruit.length);
console.log(fruit.indexOf('an'));
console.log(fruit.slice(3,6));
console.log(fruit.replace('ban','123'));
console.log(fruit.toLocaleLowerCase());
console.log(fruit.toLocaleUpperCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(',')); //split by comma.
console.log(fruit.split('')); //split by char.

// Array
let fruits = ['banana', 'apple', 'orange', 'pineapple'];
fruits = new Array('banana', 'apple', 'orange', 'pineapple');

//alert(fruits[1]); //acess values

fruits[0] = 'pear';
console.log(fruits);

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

// array common methods
console.log('to string',fruits.toString());
console.log(fruits.join(' - '));
console.log(fruits.pop(),fruits);
console.log(fruits.push('blackberries'),fruits);
console.log(fruits[3]);
fruits[4] = 'new fruit';
console.log(fruits);
fruits[fruits.length] = 'ambani'; // pushing elements
console.log(fruits);
fruits.shift();
console.log(fruits); // removing first element
fruits.unshift('kiwi');
console.log(fruits);

let vegetables = ['asparagus','tomato','broccoli'];
let allgroceries = fruits.concat(vegetables);
console.log(allgroceries);
console.log(allgroceries.reverse());
console.log(allgroceries.sort());


let somenumbers = [5,3,2,45,23,56,66,345,89,0];
console.log(somenumbers.sort(function(a,b){return a-b})); //ascending
console.log(somenumbers.sort(function(a,b){return b-a})); //descending

let emptyArray = new Array();
for(let i=0;i<10;i++){
    emptyArray.push(i);

}
console.log(emptyArray);

//objects in javascript
// dictionaries in python
let student = {first : 'Rafeh',last :'Qazi',age : 25,height :170,
               studentInfo: function(){
                   return this.first+'\n'+this.last;
               }
            };
//console.log(student.first);
//student.first = 'norafeh'; // change value
//console.log(student.studentInfo());

//conditions,control flows(if else)
//18-35 is my target demographic

let age = prompt('What is your age');
if((age>=18)&&(age<=35)){
     status = 'target demo';
     console.log(status);
}else{
    status  = 'not my audience';
    console.log(status);
}

//switch statements
//differnce between weekday and weekend
//0 --> sunday
//6 --> saturday

switch(6){
    case 0:
        text = 'weekend'
        break;
    case 5:
        text = 'weekend'
        break;
    case 6:
        text = 'weekend'
        break;
    
    default:
        text = 'weekday'
}

console.log(text);