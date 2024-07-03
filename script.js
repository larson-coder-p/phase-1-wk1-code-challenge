document.getElementById('marksForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const marks = parseFloat(document.getElementById('marksInput').value);
    const resultElement = document.getElementById('result');

    if (isNaN(marks) || marks < 0 || marks > 100) {
        resultElement.textContent = "Kindly enter ypur marks between 0 and 100.";
        resultElement.style.color = "blue";
        return;
    }

    let grade;
    if (marks > 79) grade = 'A';
    else if (marks >= 60) grade = 'B';
    else if (marks >= 50) grade = 'C';
    else if (marks >= 40) grade = 'D';
    else grade = 'E';

    resultElement.textContent = `Final grade for ${marks} is ${grade}`;
    resultElement.style.color = "black";
});







