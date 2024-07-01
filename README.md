   ### STUDENT GRADE CALCULATOR
This project has two files,HTML and Javascript that operate in unison to give intergrated and corresponding marks and grades depending on the input.
To run the program one should;
     git clone <repository-url>
     cd <repository-directory>
After that you can open the index.html on your browser.On your web browser,opoen the Enter Marks button,you will be directed toenter the marks scored(0-100).Enter then press "OK".
A message will be displayed corresponding to the entered marks.
#####The grading criteria is as follows;
    A- Marks above 79
    B- Marks between 60 and 79
    C- Marks between 50 and 59
    D- Marks between 40 and 49
    E- Marks below 40

    ####The following is the html code;
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Grade Analyzer</title>
</head>
<body>
    <h1>Student Grade Analyzer</h1>
    <p>Click the button below to enter student marks.</p>
    <button onclick="getstudentmarks()">Enter Marks</button>

    <script src="script.js"></script>
</body>

</html>

The HTML file consists of a button that offers the getStudentMark function when pressed.

#####Below is "script.js"


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

##Acknowledgement
Special thanks to Moringa for providing guidance that inspired this creation.