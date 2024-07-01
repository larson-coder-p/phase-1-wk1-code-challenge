
function getStudentMark(){
let marks;
if (true);
marks = prompt("Input Student Marks (0-100):");
marks = parseFloat(Marks);
if(!isNaN(marks) && marks >=0 && marks <=100){
 break;
} else {
    alert("KIndly enter a number between 0 and 100.");
 }

 }
let grade;
if (marks > 79) {
    grade ='A'
} else if (marks >=60){
    grade = 'B'
} else if (marks >=50){
    grade = 'C'
} else if (marks >=40) {
    grade ='D'
} else {
    grade = 'E'
}


alert(`Final grade for ${marks} is ${grade}`);

getStudentMark()