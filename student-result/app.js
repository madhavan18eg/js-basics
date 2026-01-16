const Result=require("./studentService"); 

let students=[
    {name:"Alice",marks:85},
    {name:"Bob",marks:58},
    {name:"Charlie",marks:92},
    {name:"David",marks:45}
];  

students.forEach(student =>
{
    console.log (student.name + ": " + Result.calculateResult(student.marks));    
});
