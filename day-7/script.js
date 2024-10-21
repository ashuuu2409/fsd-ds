const students = [
    {name : 'alice', score: 50} , 
    {name : 'bob', score: 65} , 
    {name : 'charlie', score: 75} , 
    {name : 'david', score: 85} , 
    {name : 'emma', score: 90}
]
let newar = students.filter((student) => student.score > 60);
console.log(newar);
console.log("start");
setTimeout(() => {
    console.log("first task completed");
    setTimeout(() => {
        console.log("second task completed")
        setTimeout(() => {
            console.log("second task completed");
        },3000);
    },2000);

},1000);
console.log("end")
