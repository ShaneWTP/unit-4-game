//game will load once page is loaded
$(document).ready(function() {

    //create array for random computer target value
    var random = [];

    for(var i = 19; i <= 120; i++) {
        random.push(i);
    }

    //create array for rupee values
    var rupees = [];

    for(var r = 1; r <= 12; r++) {
        rupees.push(r);
    }

    //Global Scope Variables

    var randomNumber;
    var rupeeNumbers = [];
    var rupee1;
    var rupee2;
    var rupee3;
    var rupee4;

    var scoreTotal = 0;
    var wins = 0;
    var losses = 0;

    //random target number choice function
    function randomNumberChoice(arr) {
        var x = arr[Math.floor(Math.random() * arr.length)];
        randomNumber = x;
        $("#randomNumber").html(randomNumber);
    }

    //random values of rupees
    function randomRupee(arr) {
        for(var y = 0; y < 4; y++) {
            var a = arr[Math.floor(Math.random() * arr.length)];
            rupeeNumbers.push(a);
        }
    }

    //random rupee choice value function
    function rupeeValue(arr) {
        for(var i = 0; i < arr.length; i++) {
            $("#button-" + [i+1]).attr("value", arr[i]);
        }
        rupee1 = arr[0];
        rupee2 = arr[1];
        rupee3 = arr[2];
        rupee4 = arr[3];
    }

    //reset game
    function resetGame(x) {
        rupeeNumbers = [];
        randomNumberChoice(random);
        randomRupee(rupees)
        rupeeValue(rupeeNumbers);
        
        scoreTotal = 0;
        $("#scoreTotal").html(scoreTotal);
    }

    resetGame();

    //start settings
    randomNumberChoice(random);
    randomRupee(rupees)
    rupeeValue(rupeeNumbers);

    //functions for each rupee
    $("#button-1").on("click", function() {
        scoreTotal += rupee1;
        $("#scoreTotal").html(scoreTotal);
    });

    $("#button-2").on("click", function() {
        scoreTotal += rupee2;
        $("#scoreTotal").html(scoreTotal);
    });

    $("#button-3").on("click", function() {
        scoreTotal += rupee3;
        $("#scoreTotal").html(scoreTotal);
    });

    $("#button-4").on("click", function() {
        scoreTotal += rupee4;
        $("#scoreTotal").html(scoreTotal);
    });

    //adjust wins and losses
    $("button").on("click", function() {
		if (scoreTotal == randomNumber) {
            wins++;
			$("#scoreTotal").html(scoreTotal);
            $("#wins").html("Wins: " + wins);
            resetGame();
		}
        else if (scoreTotal > randomNumber){
            losses++;
			$("#scoreTotal").html(scoreTotal);
            $("#losses").html("Losses: " + losses);
            resetGame();
        }
	});
});


