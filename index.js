let employee1 = {

    name : "Rahul",
    designation : "CSE",
    id : 111,
    
}
// showDetails: function(age,gender) {
//     console.log(this.name, this.id, this.designation);
// }
// function showDetails(){
//     console.log()
// }

// employee1.showDetails();
function showDetails(age,gender) {
    console.log(this.name, this.id, this.designation,age,gender);
}

let employee2 = {

    name : "Karan",
    designation : "IT",
    id : 112,

}

let employee3 = {

    name : "Raju",
    designation : "ECE",
    id : 113,
    
}

// employee1.showDetails.call(employee2);//passing the arguments(23,M)
// employee1.showDetails.call(employee3);

// employee1.showDetails.apply(employee2);//[23,"M"]
// employee1.showDetails.apply(employee3);



// let res1 = employee1.showDetails.bind(employee2);
// let res2 = employee1.showDetails.bind(employee3);
// res1();
// function add(){
//     console.log("I am an addition fn");
// }

// let arr = [1,2,3,4,5];
// let arr1 = [1,2,3,4,5];
// let arr2 = [1,2,3,4,5];

// let student1 = {
//     fname: "Sidhant",
//     lname: "Gupta",
//     age : 23,
// }

// let student2 = {
//     fname : "Raju",
// }

// student2.__proto__ = student1;
// console.log(student2);

// console.log(arr1.__proto__);
// console.log(arr1.__proto__.__proto__);
// console.log(arr1.__proto__.__proto__.__proto__);


// const dum = eval("")

showDetails.call(employee1 ,21,"M");
showDetails.call(employee2,22,"M");
showDetails.call(employee3,23,"M");
showDetails.apply(employee1,[21,"M"]);
showDetails.apply(employee2,[22,"M"]);
showDetails.apply(employee3,[23,"M"]);

let res1 = showDetails.bind(employee1);
 
res1(21,"M");
showDetails.bind(employee2)(22,"M");
showDetails.bind(employee3)(23,"M");


const studentPrototypes = {
calcAge(){
    console.log(2022-this.bYear);
},
initialise(fname,lname,bYear){
    this.fname = fname;
    this.lname = lname;
    this.bYear = bYear;
}
}
const ramesh = Object.create(studentPrototypes);
ramesh.fname = "Ramesh";
ramesh.lname = "thakur";
ramesh.bYear = 1999;
ramesh.calcAge();
console.log(ramesh);

const suresh = Object.create(studentPrototypes);
console.log(suresh);
suresh.initialise("suresh","sharma",1994);
suresh.calcAge();
console.log(suresh);

// classes-
// classes in JS doesnot work exactly the same ways as that of class in java/c++
// they are just a syntactic suger to object prortotypr,instaces that we have read.
// they are special kind of function with some veriation.
// 1.classes are also first class function.
// 2.classes are not support hoisting.

const classPrototypes = class{
    constructor (fname,lname,bYear){
        this.fname = fname;
        this.lname = lname;
        this.bYear = bYear;
    }
    calcAge(){
        console.log(2022-this.bYear);
    }
}

const mahesh = new classPrototypes("mahesh","bhatt",1995);
console.log(mahesh);
mahesh.calcAge();
console.log(mahesh.__proto__);
console.log(mahesh.__proto__.__proto__);
console.log(mahesh.__proto__.__proto__.__proto__);

classPrototypes.prototype.great = function(){
    console.log("Hi i am someone");
}
mahesh.great();
console.log(mahesh.__proto__);

console.log("22"+22);
console.log("hi"+22);
console.log("22"-22);
console.log("22"*22);
console.log("22"/22);
console.log("22"%2);
// ----------
console.log(2^"2");
console.log("10"^2);

