// let $=1;
// const _=22/7;

// function display(){
//    console.log($)
// }
// display();
// console.log(_);

// <<<<<<<<------------------------------------------------------------------------------------------------------------------->>>>>>>>>

// let a=12;
// let b=22/7;
// let c="hello";
// let d=[1,2,3,4]
// let e={
//     name:"arjun",
//     id:12,
// }
// let f=true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f);
// let x="12"+"6";
// let y="12"*"6";
// let u="12"/"6";
// let v="12"-"6";
// console.log(x)
// console.log(y)
// console.log(u)
// console.log(v)
// let bol=true;
// let str=String(bol);
// console.log(str.charAt(1));

// <<<<<<<<------------------------------------------------------------------------------------------------------------------->>>>>>>>>

// let str="abh";
// let num=Number(str);
// console.log(typeof num)
// console.log(num);

// <<<<<<<<------------------------------------------------------------------------------------------------------------------->>>>>>>>>

// function display(){
//     let x=confirm("are you sure");
//     alert("user selects : "+x)
// }

// <<<<<<<<------------------------------------------------------------------------------------------------------------------->>>>>>>>>

// function display(){
//     let x=prompt("enter your name:","saumya")
//     alert("your name is: " +x)
// }

// <<<<<<<<------------------------------------------------------------------------------------------------------------------->>>>>>>>>

// let a="12";
// let b=12.0;
// console.log(a==b);
// console.log(a===b);

// <<<<<<<<------------------------------------------------------------------------------------------------------------------->>>>>>>>>

function validate() {
    let usr = document.getElementById("username").value; // Corrected 'login' to 'username'
    let pass = document.getElementById("pass").value;
    let p1 = document.getElementById('result');
    
    if (usr == "admin" && pass == "admin") {
        p1.innerText = "Login successful";
    } else {
        p1.innerText = "Login failed";
    }
    
    return false; // Prevent form submission for testing
}
