// const obj = {
//   name: "Arbaz",
//   greet: ()=> {
//     console.log(this .name);
//   },
//   add: {city:"delhi"},

// };

// let deepCopy=JSON.parse(JSON.stringify(obj))
// let deepCopy=structuredClone(obj)
// deepCopy.add.city="kalpi"
// console.log("deep copy",deepCopy)
// obj.add.city="kanpur"
// console.log("original",obj)

// let shallowCopy={...obj}
// shallowCopy.add.city="mimbai";
// // console.log(shallowCopy)
// obj.add.city="delhi";
// // console.log(obj)
// console.log(shallowCopy)
// console.log(obj)
// obj.greet();  // arbaz

// const greetFn = obj.greet;
// greetFn(); // undefined


// function makeCounter(){
//     let count=0;
//     return  function inner(){
//          return count++
//     }
// }

// let counter=makeCounter()
// counter()
// counter()
// counter()

// reverse string 
// function strrv(str){
//     return str.split("").reverse().join("");
// }

// console.log(strrv("arbaz"));
// function revStr(str){

//     let revstr="";
//     for(let i=str.length-1;i>=0;i--){
//         revstr+=str[i];
//     }
//     return revstr;
// }

// console.log(revStr("arbaz"))
// console.log(function(a,b){
//     return a+b;
// } (2,3));

// function add(a,b){
//     return a+b;
// }
// console.log(abc(1,2))

// let ab=(a,b)=> a+b;
// console.log(ab(2,3))

// function add(a,b){
//     return a+b;
// }

// let result= add(2,4)

// function higher(x,y,result){

//     let result result(x,y);
//     console.log(result);
// }
// higher(2,3,add)

// function greet(name) {
//   return `Hello ${name}`;
// }

// function higherOrder(fn) {
//   return fn("Arbaz");
// }

// console.log(higherOrder(greet));


// function add(a,b){
//     return a+b;
// }

// function sub(a,b){
//     return a-b;
// }

// function higerOrder(fn){
//     return fn(2,3);
// }

// console.log(higerOrder(add))
// console.log(higerOrder(3,5,sub))

// let arr=[1,2,3,4,5]

// let arr2=arr.map((item)=> item+2)
// console.log(arr2)

// function iterator(number){
//     console.log(number)
// }
// // iterator(arr)

// arr.forEach(iterator);

// function hello(){
//     console.log('hello') 
// }

// function higher( greet){
//     greet() 
// }
// higher(hello)

// console.log('before settimeout')
// setTimeout(()=>{
//     console.log(' i am set timeout')
// },1000)
// Promise.then(()=>{
    
//     console.log(" i am promise ")
// }). catch((err)=>{
//     console.log("error:" ,err);
// })

// console.log(" after settime out function")

// const myPromise=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         let raandomNum=Math.floor(Math.random()*10);
//         if(raandomNum<8){
//             resolve({
//                 status:"success",
//                 data:raandomNum
//             })
            
//         } else{
//             reject({
//                  status:"failed",
//                 data:raandomNum
//             })
//         }

//     },1000)
// })

// myPromise.then((data)=>{
//     console.log(data.status, data.data)

// })
// .catch((err)=>{
//     console.log(err.status, err.data)
// })

//  let=returbData=fetch("https://jsonplaceholder.typicode.com/users");
//  console.log(returbData.then((data)=>{
//     console.log(data.ok)
//  }
//  let arr=[1,2,3,4,5]

//  let double=arr.map(item=>item*2);
//  console.log(double);
//  console.log(arr)

// IIFE(IMMEDIAT INBVIKE FUNCTION EXPRESION )


// (function hello(){
//     console.log('hello bhaiya!')
// })();
// (function hello(){
//     console.log('hello bhaiya!')
// })()


//clouser

// function outer(){
//     let counter=0;
//     return {
//         inc: function(){
//             counter++;
//             return counter;
//         },

//         dec:function(){
//             counter--
//             return counter;
//         },
//         display: function(){
//             let message="current clouser is=:" +counter
//             return message;
//         }
//     }
    
     
// }

// let counter=outer();
//  console.log(counter.inc())
//  console.log(counter.inc())
//  console.log(counter.display())
//  console.log(counter.dec());
//  console.log(counter.display())


// setTimeout(()=>{
//     console.log("hi! i am settimeout guru")
// },1000)

// let intervalId=setInterval(()=>{
//     console.log("hi i am a setinterval")
// },1000)

// setTimeout(() => {
//     clearInterval(intervalId);
    
// }, 4000);

// const usersData = [
//   {
//     id: 1,
//     name: "Arbaz Khan",
//     email: "arbaz@example.com",
//     role: "Admin",
//     active: true
//   },
//   {
//     id: 2,
//     name: "Rahul Sharma",
//     email: "rahul@example.com",
//     role: "User",
//     active: true
//   },
//   {
//     id: 3,
//     name: "Aman Verma",
//     email: "aman@example.com",
//     role: "User",
//     active: false
//   }
// ];

// function getUsers(){
//     return new Promise((resolve,reject)=>{

//         let success=true;
//       setTimeout(()=>{
//           if(success){
//             resolve({
//                 status:"success",
//                 data:usersData
//             })
            
//         } else{
//             reject({
//                 status:"faild",
//                 message:"userData is not found"
//             })
//         }

//       },2000)
//     })
// }

// getUsers()
//   .then(result => {
//     console.log("SUCCESS");
//     console.log(result.status);
//     result.data.forEach(user => {
        
//         console.log(user.id,user.name)
//         console.log(user.email)
//         console.log(user.role)
//         console.log(user.active)
//         console.log('........................')
        
//     });
//   })
  
  
//   .catch(error => {
//     console.log("ERROR");
//     console.log(error.status);
//     console.log(error.message);
//   });



// async function fetchedData(){

//     try{
//         let response=await fetch("https://jsonplaceholder.typicode.co")

//     let data=await response.json()
//     data.forEach(element => {
        
//         console.log(element.id)
//          console.log(element.title)
//          console.log("..............")
        
//     });
//     // console.log("data fetched!",data)
//     } catch(err){
//         console.log("error is ", err)
//     }

    
// }
// fetchedData();

// function cook(ing1,ing2,ing3){
//      console.log(`${this.name} having a meel with ${ing1} ${ing2} and ${ing3} `)
// }

// let adam={name:"arbaz khan"}

// cook.call(adam,"chicken",'rice',"water");
// cook.apply(adam,["chicken",'rice',"water"])
// let adamCook=cook.bind(adam,"chicken",'rice',"water")
// adamCook()

// reduce array

// let arr=[1,2,3,4,5]
// let double=arr.reduce((acc,curr)=>{
//     return acc+curr ;

// })
// console.log(double)
// console.log(arr)

// function curring

// function multiply(a){
//     return function(b){
//         return function(c){
//             return a*b*c;

//         }
//     }
// }

// const mul=multiply(2)
// console.log(mul(2)(3))

// generator function

// function* infineSequence(){
//     let count=1;
//     while(true){
//         yield count;
//         count++;
//     }
// }

// let seq=infineSequence()
// // console.log(seq.next().value);
// // console.log(seq.next().value);
// for(let i=1;i<=10;i++){
//     console.log(seq.next().value);
// }

// function* colors() {
//   yield "red";
//   yield "green";
//   yield "blue";
// }

// for (let color of colors()) {
//   console.log(color.next());
// }

function sum(...nums){
   return nums.reduce((acc,curr)=>{
    return acc+curr;
   })
}
console.log(sum(1,2,3,4,5,6,9))