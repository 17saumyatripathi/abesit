let num=[1,2,3,4,45,5,45];
// let newnum=num.map(x=>x*2);
// console.log(newnum);

// <<<<<<<<------------------------------------------------------------------------------------------------------------------->>>>>>>>>

// let evennum=num.filter(x=>x%2==0);
// console.log(evennum);

// <<<<<<<<------------------------------------------------------------------------------------------------------------------->>>>>>>>>

// let sum=num.reduce((x,y)=>x+y,0);
// console.log(sum);
// let mult=num.reduce((x,y)=>x*y,1);
// console.log(mult);

// <<<<<<<<------------------------------------------------------------------------------------------------------------------->>>>>>>>>

// const student=[
//     { name:"saumya" ,score:20 },
//     { name:"tanya" ,score:30 },
//     { name:"bagish" ,score:40},
//     { name:"sweta" ,score:500 },
//     { name:"succhi" ,score:60 },
// ];

// console.log(student.map(x=>x.score).filter(x=>x>=60).reduce((x,y)=>x+y,0));
// let score=student.filter(x=>x.score>=60).map((x)=>x.score+10).reduce((x,y)=>x+y,0);
// console.log(score);
// const arr=[1,2,3,4,5];
// arr.forEach(x=>console.log(x*5));

// <<<<<<<<------------------------------------------------------------------------------------------------------------------->>>>>>>>>

// sayhello=()=>{
//     console.log('i am in hello function');
// }
// console.log("start");
// setTimeout(sayhello,2000);//asynchronous
// console.log("end");
// setTimeout(sayhello,21);

// <<<<<<<<------------------------------------------------------------------------------------------------------------------->>>>>>>>>

console.log("start");
setTimeout(()=>{
    console.log("1st task");
    setTimeout(()=>{
        console.log("2nd task");
        setTimeout(()=>{
            console.log("3rd task");
        },3000);
    },2000);
},1000);
console.log("end");