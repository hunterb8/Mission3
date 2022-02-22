//Calculate grade
function calcGrade() {
    var number_grade = (0.55 * $("#assignments").val()) + (0.05 * $("#group_project").val()) + (0.1 * $("#quizzes").val()) + (0.2 * $("#exams").val()) + (0.1 * $("#intex").val());
    number_grade = number_grade.toFixed(2);
    var letter_grade = "";

//Assign letter grade
    if (number_grade >= 94) {
        letter_grade = "A";
    } else if (number_grade >= 90) {
        letter_grade = "A-";
    } else if (number_grade >= 87) {
        letter_grade = "B+";
    } else if (number_grade >= 84) {
        letter_grade = "B";
    } else if (number_grade >= 80) {
        letter_grade = "B-";
    } else if (number_grade >= 77) {
        letter_grade = "C+";
    } else if (number_grade >= 74) {
        letter_grade = "C";
    } else if (number_grade >= 70) {
        letter_grade = "C-";
    } else if (number_grade >= 67) {
        letter_grade = "D+";
    } else if (number_grade >= 64) {
        letter_grade = "D";
    } else if (number_grade >= 60) {
        letter_grade = "D-";
    } else {
        letter_grade = "E";
    }

//Alert number and letter grades
    alert("Number Grade: " + number_grade + "\n" + "Letter Grade: " + letter_grade);
}

//Run function on click of form submit button
$("#btnCalc").click(function () {
    calcGrade();
})