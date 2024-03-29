// create an object of players: with each character as another object :
//4 players: darth, princess, yoda, emperor
//Each character has 3 attributes: 'Health Points`, `Attack Power` and `Counter Attack Power`.

$(document).ready(function () {

    var players = {
        "Darth Vadar": {
            name: "Darth",
            health_points: 100,
            attack_power: 5,
            counter_attack_power: 5,
            image: "../images/darth2.jpg",
            defeated: false
        },

        "Emperor": {
            name: "Emperor",
            health_points: 120,
            attack_power: 8,
            counter_attack_power: 8,
            image: "../images/emperor2.jpg",
            defeated: false
        },

        "Yoda": {
            name: "Yoda",
            health_points: 180,
            attack_power: 25,
            counter_attack_power: 25,
            image: "../images/yoda2.jpg",
            defeated: false
        },

        "Princess": {
            name: "Princess",
            health_points: 150,
            attack_power: 20,
            counter_attack_power: 20,
            image: "assets/images/princess2.jpg",
            defeated: false
        }

    };
   

    // ------Global Variables --------- //


    // did player select their character 
    var playerSelected = false;

    // did player select the enemy
    var defenderSelected = false;

    // variable to store the user's chosen character
    var player1 = {};

    // variable to store the chosen enemy
    var defender = {};

    // number of enemies defeated
    var defendersDefeated = 0;

    // boolean for is the game over
    var gameOver = false;

    //---------------sounds --------------//
    // attack sound
    // path of saber sound from repo folder is unit-4-game/assets/sounds/coolsaber.mp3 moving up a folder then into sounds then selecting sound should work but does not.

    var attMP3 = document.getElementById("attackSound").play();
    attMP3.volume = 0.2;
    if (attMP3 !== undefined) {
        attMP3.then(_ => {}).catch(error => {});
    };


    // --------- code was done with mentor to catch error for unfullfilled promise with audio play
    var themeMP3 = document.getElementById("themeMusic").play();
    themeMP3.volume = 0.2;
    if (themeMP3 !== undefined) {
        themeMP3.then(_ => {}).catch(error => {});
    }
    // ------- attempted to lower theme volume currently playing at full level
    themeMP3.volume = 0.2;

    //-----initializer functions------// 

    // function will set the player selected values
    function initializePlayer(playerSelected) {
        var newObject = {
            "objectPlayer": {
                name: playerSelected.name,
                health_points: playerSelected.health_points,
                attack_power: playerSelected.attack_power,
                counter_attack_power: playerSelected.attack_power,
                defeated: false
            }
        };
        return newObject;
    };

    // function will set the defender selected values
    function initializeDefender(defenderSelected) {
        var newObject = {
            "objectDefender": {
                name: defenderSelected.name,
                health_points: defenderSelected.health_points,
                attack_power: defenderSelected.attack_power,
                counter_attack_power: defenderSelected.attack_power,
                defeated: false
            }
        };
        return newObject;
    };
    // function will take players not selected and move them into defender selection section 
    // and remove the selected defender into a non displayed class
    function gameOverDisplay() {
        $("#charCont").appendTo(".defendersFought");
        $("header").append('<img src="assets/images/game_over_samuel.gif">');
        $("header").append('<p class="gameOver">You have no more health points</p>');
        $("header").append('<p class="gameOver">Game 0ver! Press Restart to try again!</p>');
        $("header").append('<button class="btn-outline-success rounded gameOver" id="restartBTN">Restart</button>');
        $("#restartBTN").on("click", function () {
            location.reload();
        });
    };

    function youWonDisplay() {
        $("#charCont").appendTo(".defendersFought");
        $("header").append('<img src="assets/images/you_won.gif">');
        $("header").append('<p class="youWon">The force is strong with you!</p>');
        $("header").append('<p class="youWon">You Won! Press Restart to play again!</p>');
        $("header").append('<button class="btn-outline-success rounded youWon" id="restartBTN">Restart</button>');
        $("#restartBTN").on("click", function () {
            location.reload();
        });
    };

    function reset() {
        location.reload();
    }
    // ------------------------on click finctions for each player-------------------------//

    // make a jQuery on click function for each of 4 players that determines if they are selected where all other players are moved
    //if no player/character has been selected this player/character will be 'your character' 
    //then run initialize function to define player variables // move remaining characters to `enemies available`
    $("#darth").on("click", function () {
        if (!playerSelected) {
            player1 = initializePlayer(players["Darth Vadar"]);
            $("#dHealth").text("Health: " + player1.objectPlayer.health_points);
            $("#darth").appendTo("#player");
            $("#yoda").appendTo("#enemies");
            $("#emperor").appendTo("#enemies");
            $("#princess").appendTo("#enemies");
            playerSelected = true;
        } else if (playerSelected && !defenderSelected && player1.objectPlayer.name !== "Vadar") {
            defender = initializeDefender(players["Darth Vadar"]);
            $("#darth").appendTo("#defender");
            $("#dHealth").text("Health: " + defender.objectDefender.health_points);
            defenderSelected = true;
            $(".attack").attr("disabled", false);
        }
    });

    $("#emperor").on("click", function () {
        if (!playerSelected) {
            player1 = initializePlayer(players.Emperor);
            $("#eHealth").text("Health: " + player1.objectPlayer.health_points);
            $("#emperor").appendTo("#player");
            $("#yoda").appendTo("#enemies");
            $("#darth").appendTo("#enemies");
            $("#princess").appendTo("#enemies");
            playerSelected = true;
        } else if (playerSelected && !defenderSelected && player1.objectPlayer.name !== "Emperor") {
            defender = initializeDefender(players.Emperor);
            $("#emperor").appendTo("#defender");
            $("#eHealth").text("Health: " + defender.objectDefender.health_points);
            defenderSelected = true;
            $(".attack").attr("disabled", false);
        }
    });

    $("#yoda").on("click", function () {
        if (!playerSelected) {
            player1 = initializePlayer(players.Yoda);
            $("#yHealth").text("Health: " + player1.objectPlayer.health_points);
            $("#yoda").appendTo("#player");
            $("#darth").appendTo("#enemies");
            $("#emperor").appendTo("#enemies");
            $("#princess").appendTo("#enemies");
            playerSelected = true;
        } else if (playerSelected && !defenderSelected && player1.objectPlayer.name !== "Yoda") {
            defender = initializeDefender(players.Yoda);
            $("#yoda").appendTo("#defender");
            $("#yHealth").text("Health: " + defender.objectDefender.health_points);
            defenderSelected = true;
            $(".attack").attr("disabled", false);
        }
    });

    $("#princess").on("click", function () {
        if (!playerSelected) {
            player1 = initializePlayer(players.Princess);
            $("#pHealth").text("Health: " + player1.objectPlayer.health_points);
            $("#princess").appendTo("#player");
            $("#yoda").appendTo("#enemies");
            $("#emperor").appendTo("#enemies");
            $("#darth").appendTo("#enemies");
            playerSelected = true;
            initializeDefender();
        } else if (playerSelected === true && defenderSelected === false && player1.objectPlayer.name !== "Princess") {
            defender = initializeDefender(players.Princess);
            $("#princess").appendTo("#defender");
            $("#pHealth").text("Health: " + defender.objectDefender.health_points);
            defenderSelected = true;
            $(".attack").attr("disabled", false);
        }
    });
    //-------------on click function and logic for attack button----------------------//

    $(".attack").on("click", function () {
        var attMP3 = document.getElementById("attackSound").play();
        attMP3.volume = 0.2;
        if (attMP3 !== undefined) {
            attMP3.then(_ => {}).catch(error => {});
        };
        // attMP3.play();
       
        //created variable to target correct characters health caption, 
        //since id's are unique to the first letter of the players name + health targeted that with these variables
        var phealth = player1.objectPlayer.name.charAt(0).toLowerCase() + "Health";
        var dhealth = defender.objectDefender.name.charAt(0).toLowerCase() + "Health";

        $("#" + phealth).text("Health: " + player1.objectPlayer.health_points);
        $("#" + dhealth).text("Health: " + defender.objectDefender.health_points);

        //conditions for players not defeated and results of attacks on healthpoints & counter attack power
        if (player1.objectPlayer.health_points > 0 && defender.objectDefender.health_points > 0) {
            if (playerSelected && defenderSelected && !gameOver) {
                defender.objectDefender.health_points = defender.objectDefender.health_points - player1.objectPlayer.counter_attack_power;
                player1.objectPlayer.health_points = player1.objectPlayer.health_points - defender.objectDefender.counter_attack_power;
                // update Health Points for defender and player
                $("#" + phealth).text("Health: " + player1.objectPlayer.health_points);
                $("#" + dhealth).text("Health: " + defender.objectDefender.health_points);
                // update player console with attack results
                $("#playerConsole1").text("You attacked " + defender.objectDefender.name + " for " + player1.objectPlayer.counter_attack_power + " damage.");
                $("#playerConsole2").text(defender.objectDefender.name + " attacked you back for " + defender.objectDefender.attack_power);
                $("#playerConsole3").text("“ In my experience there is no such thing as luck.” – Obi-Wan Kenobi.");
                player1.objectPlayer.counter_attack_power += player1.objectPlayer.attack_power;
                $("#" + phealth).text("Health: " + player1.objectPlayer.health_points);
                $("#" + dhealth).text("Health: " + defender.objectDefender.health_points);
            }
        }
        // condition for player defeated Game Over
        if (player1.objectPlayer.health_points <= 0) {
            gameOver = true;
            gameOverDisplay();
        }
        // condition for player won 
        if (player1.objectPlayer.health_points >= 0 && defendersDefeated === 3) {
            youWonDisplay();
        }
        // condition for defender defeated
        if (defender.objectDefender.health_points <= 0) {
            defenderSelected = false;
            defendersDefeated++;
            $(".attack").attr("disabled", true);
            if (player1.objectPlayer.health_points >= 0 && defendersDefeated === 3) {
                youWonDisplay();
            }
            // update console
            $("#playerConsole1").text("You defeated " + defender.objectDefender.name);
            $("#playerConsole3").text("You now have " + player1.objectPlayer.counter_attack_power + " damage.");
            //loop through players object find matching object, update keys & values 
            // went over with mentor correct method to loop through object using 'Object.keys(boject)
            var dname = defender.objectDefender.name.toLowerCase();
            Object.keys(players).forEach(function (item) {
                if (players[item].name === defender.objectDefender.name) {
                    //move this object back to enemies to attack 
                    $("#" + dname).appendTo("footer");
                    // tell player to click on another defender
                    $("#playerConsole2").text("The Force is strong with you select another enemy!");
                    $("#playerConsole3").text("You now have " + player1.objectPlayer.counter_attack_power + " damage.");
                }
            });
        }
        //--------------restart game --------------------//
        $("#restartBTN").on("click", function () {
            location.reload();
        });

    });
});