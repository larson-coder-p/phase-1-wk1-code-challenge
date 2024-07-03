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




## Speed Check Program

This project consists of an HTML file and a JavaScript file that work together to prompt the user to input the speed of a car, validate the input, and print either "Ok" or the total number of demerit points based on the speed.

## Files

1. **index.html**: The HTML file that contains the structure of the webpage.
2. **script.js**: The JavaScript file that contains the logic for prompting the user and calculating demerit points.

## How to Run

1. **Clone the repository**:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Open `index.html`**:
    - on the browser click check speed button
    enter valid speed,press ok



    **Use the Application**:
    - On the webpage, click the "Check Speed" button.
    - A prompt will appear asking you to input the speed of the car (in km/h).
    - Enter a valid positive number and click "OK".
    - The program will print "Ok" if the speed is less than 70 km/h. Otherwise, it will print the total number of demerit points based on the speed.

## Speed Check Logic

- **Ok**: If the speed is less than 70 km/h.
- **Demerit Points**: For every 5 km/h above the speed limit (70 km/h), one demerit point is given.

