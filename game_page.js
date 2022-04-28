var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");
var player1_score = 0;
var player2_score = 0;
var question_turn = "player1";
var answer_turn = "player2";
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player1_name").style.color="yellow";
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;  
document.getElementById("player2_name").style.color="yellow";

function send() {
    number1 = document.getElementById("n1").value;
    number2 = document.getElementById("n2").value;
    answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " x " + number2 + "</h4>";
    input_box = " Answer : <input type='text' id='che_box' placeholder='Answer'>";
    check_button = " <br> <br><button class='btn btn-info' style='width:100px;' onclick='check()'> Check </button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}   