// let a=()=>{
//     console.log("arrow function")
// };
// let b=()=>console.log("arr func 2");
// a();
// b();

// <<<<<<<<------------------------------------------------------------------------------------------------------------------->>>>>>>>>

// let c=(x,y)=>{
//     return x+y;
// }
// let res=c('vishal','saumya');
// let res1=c(10,50);
// console.log(res,res1)

// <<<<<<<<------------------------------------------------------------------------------------------------------------------->>>>>>>>>

// function display(){
//     let p1=document.querySelectorAll('p');
//     p1[0].innerHTML='i am a paragraph';
//     p1[0].style.backgroundColor='orange';
//     p1[1].innerHTML='i am a second paragraph';
//     p1[1].style.backgroundColor='green';
// }
// function show(){
//     let head1=document.querySelector('h1');
//     head1.textContent="changed title";
//     let a1=document.querySelector('a');
//     a1.setAttribute('href','http://aktu.ac.in');
//     a1.innerHTML='aktu website';
// };

// <<<<<<<<------------------------------------------------------------------------------------------------------------------->>>>>>>>>

let addcontent=()=>{
    const newdiv=document.createElement('div');
    newdiv.textContent='this is new div';
    const body=document.querySelector('body');
    body.appendChild(newdiv)
}