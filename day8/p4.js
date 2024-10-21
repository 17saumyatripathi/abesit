function fetchdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             const student=[
     { name:"saumya" ,score:20 },
     { name:"tanya" ,score:30 },
     { name:"bagish" ,score:40},
    { name:"sweta" ,score:500 },
    { name:"succhi" ,score:60 },
 ];
            resolve(student);
        },400);
    });
}
fetchdata()
// .then((student)=>console.log(student.reduce((x,y)=>(x+y.score),0)))
.then((student)=>{
    let sum=0;
    student.forEach(student => {
        sum+=student.score;
    });
    console.log(sum);
})
.catch((error)=>{
    console.log(error);
});