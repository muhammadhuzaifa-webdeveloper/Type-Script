// -----------Object and interface in TytpeScript----------------------------------------------------
//--------------------


//-------------Extending Interface----------------------------
// interface User {
//     name:string,
// }
// interface userDetails extends User {
//      employesId:number,
// }
// let emp :userDetails ={
//     name:"Huzaifa",
//     employesId:14488905834565698686462586529627659572,
// }
// console.log(emp)


// ----------------------Readonly Property-----------------------------
// interface User {
//     name: String,
//     age: number,
//     rollNo: number,
//     readonly email: string,
// }

// let student: User = {
//     name: "Uzair",
//     age: 13,
//     rollNo: 101,
//     email: "muhammadhuzaifa@gmail.com",
// }

// let students: User = {
//     name: "Mazz",
//     age: 16,
//     rollNo: 103,
//     email: "mazz@gmail.com",
// }
// student.name = "Huzaifa;"
// student.email = "huzaifa@gmail.com";
// console.log(student)
// console.log(students)

//-------------Optional----------------------------
// interface User {
//     name: String,
//     age: number,
//     rollNo: number,
//     email?: string,
// }

// let student1: User = {
//     name: "Huzaifa",
//     age: 15,
//     rollNo: 101,

// }

// let student2: User = {
//     name: "Uzair",
//     age: 13,
//     rollNo: 101,
//     email: "muhammadhuzaifa@gmail.com",
// }

// let student3: User = {
//     name: "Mazz",
//     age: 16,
//     rollNo: 103,
//     email: "mazz@gmail.com",
// }
// console.log(student1)
// console.log(student2)
// console.log(student3)
//----------------InterFAce --------------------------
// interface User {
//     name:String,
//     age :number,
// }
// let student1: User = {
//     name:"Huzaifa",
//     age :15,
// }

// let student2: User = {
//     name:"Uzair",
//     age :13,
// }

// let student3: User = {
//     name:"Mazz",
//     age :16,
// }
// console.log(student1)
// console.log(student2)
// console.log(student3)
//----------Objet------------------
// let user:{name:String,age:number} = {
//     name :"Huzaifa",
//     age :15,
// }
// console.log(user)

// ------------------------------------------------------------
//---------------Decoter------------------------
// function logger(constructor: Function){
//     console.log("Logging....")
// }
// @logger
// class Car {
//     constructor(public brand: string){}
// }



// -----------Name space ----------------------------
// namespace Utils {
//     export function log(msg:string ){
//         console.log(msg)
//     }
//     Utils.log("Hello")
// }


// ----------Types------------------------------
// type Status = "Success" | "Error";
//  let result1:Status = "Success";
//  let result2:Status = "Success";
//  let result3:Status = "Error";

// console.log(result1)
// console.log(result2)
// console.log(result3)

// ----------Generic Class----------------------------
// class box<T>{
//     constructor(public content:T){}
// }
// let box1 = new box <string>("huzaifa");
// let box2 = new box <number>(25);
// console.log(box1.content);
// console.log(box2.content);

//------------------Generic Function-------------------------------
// function identity<T>(value:T):T{
//     return value;
// }
// console.log(identity<string>("huzaifa"))
// console.log(identity<number>(15))



// ---------------------------Classes------------------

// class Student extends person {
//     constructor(name:string,public rollNo:number){
//         super(name);
//     }
// }


// class person {
//     constructor(public name: string ) {}
// }
// let umair = new person ("Huzaifa")

// let student1 = new Student ("Huzaifa,101")
// let student2 = new Student ("Huzaifa,102")
// console.log(umair.name);
//-------------------interfaces-------------------------
// interface User {
//     name: string;
//     age: number;
//     isActive: boolean;
// }
// let Person: User = {
//     name: "Huzaifa",
//     age: 15,
//     isActive: true,
// }
// console.log(Person);

// -------------------Function--------------------------
// function greet(name: string = "Guest"): string {
//     return `Hello ${name}`;
// }

// console.log(greet());
// console.log(greet("Huzaifa"));
// function greet(name: string = "Guest"):string{
//     return `Hello ${name}`
// }
// console.log(greet())
// console.log(greet("Huzaifa"))


// function add(a:number ,b:number ):number{
//   return a + b
// }
// console.log(add(5,10))


//--------------Arrays-------------------------

// let tupples : [string ,number ] = ['huzaifa',15]
// console.log(tupples)

// let fruits : Array<string> =["Apple ", "Mango" ,"Banana", "Orange" ,"Grapes"]
// console.log(fruits)
// let number :number[] =[1,2,2,3,3]
// ------------Variables---------------------------------
// let age: number = 15;
// let name: string = "Huzaifa";
// let isActive: boolean = true;
// let nothing: null = null;

// console.log(age);
// console.log(name);
// console.log(isActive);
// console.log(nothing);


// let age:number = 15;
// let isName :string = "Huzaifa";
// let isActive : boolean = true;
// let nothing:null =null;

// console.log(age);
// console.log(isName);
// console.log(isActive);
// console.log(nothing);