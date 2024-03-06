//Homework
// we are given array of markss of students filter outof the marks of sstudents that scored 90


const marks = [100, 90, 80, 97, 60, 50, 94, 30, 92, 10];


const students = marks.filter((mark) => mark >= 90);


console.log(students);
