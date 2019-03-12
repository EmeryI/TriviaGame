$(document).ready(function() {
    var twoMinutes = 60 * 2;
    var correctAnswer;
    var wrongAnswers;
    var missedAnswer;

    $("#start").on("click", function() {
        startGame();
    })

    function startGame() {
        var display = document.querySelector('#time');
        startTimer(twoMinutes, display);

    };
    /* creating 3 different divs and assigning variables x,y,z so 
    that the js can recognize the different divs*/
    var x = document.getElementById("start");
    var y = document.getElementById("questions");
    var z = document.getElementById("answers");
    /*this is used to show initial div and hide the others using the a "hide divs" 
    function in js. block means show and none means hide.*/
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
    /*this function controls the display of different divs.
    this function is called when an event click is made from the
    html file for the start button aka (onClick). Once
    the myDisplay function reads the first line of the if 
    statement and sees that var x is showing (the start page), it will then make var x
    hidden, var y to show (the questions page) and var z hidden*/
    function myDisplay() {
        if (x.style.display === "block") {
            x.style.display = "none";
            y.style.display = "block";
            z.style.display = "none";
            /*here the function will start back from the top and see if
            var x is showing (block). It sees that it is not showing
            and moves to the else if statement here. when it sees that
            var y is showing it will then hide both var x and var y and only
            var z (the answers page) */
        } else if (y.style.display = "block") {
            x.style.display = "none";
            y.style.display = "none";
            z.style.display = "block";
        };
    }
    // creating countodown timer for quesions page
    function startTimer(duration, display) {
        console.log("In timer function")
        var timer = duration,
            minutes, seconds;
        setInterval(function() {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
        myDisplay();
    }
    /*if user click on submit button get the values from radiobutton and caluculate right 
        and wrong and show scores and play again button;*/
    $('#btnSubmit').click(function(event) {
        // prevents submit button from trying to send a form
        event.preventDefault();
        var totalAnswerValue = [];
        // looks to see if a button has been selected for question 1
        // also sets a value to the selected button for true or false
        var value1 = $('input[name=rbnNumber1]:checked').val();
        console.log(value1);
        totalAnswerValue.push(value1);
        console.log(totalAnswerValue + " totansval");


        // copy line 76 for each trivia question

        // use a for loop to count the trues and falses in totalanservalue array and add if statement

        // set the counts to the correct and wrong variables

        // setting value of the variable for correct and wrong answers
        var correct = 0;
        var wrong = 0;
        $('#questions').html('Correct:' + correct + "wrong" + wrong)





        //or if twominutes==0 then do the same and show scores  and show play again 


    });
});