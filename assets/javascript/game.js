// create an object of characters: with each character as another object :
//4 characters: darth, princess, yoda, emperor
//Each character has 3 attributes: 'Health Points`, `Attack Power` and `Counter Attack Power`.

$(document).ready(function () {

    var players = {
        "Darth Vadar": {
            name: "Darth",
            health_points: 100,
            attack_power: 5,
            counter_attack_power: 5,
            image: "/Users/vanessa/Rutgers/HOMEWORK_ASSIGNMENTS/hw-4-jquery/unit-4-game/assets/images/darth2.jpg",
            defeated: false
        },

        "Emperor": {
            name: "Emperor",
            health_points: 120,
            attack_power: 8,
            counter_attack_power: 8,
            image: "/Users/vanessa/Rutgers/HOMEWORK_ASSIGNMENTS/hw-4-jquery/unit-4-game/assets/images/emperor2.jpg",
            defeated: false
        },

        "Yoda": {
            name: "Yoda",
            health_points: 180,
            attack_power: 25,
            counter_attack_power: 25,
            image: "/Users/vanessa/Rutgers/HOMEWORK_ASSIGNMENTS/hw-4-jquery/unit-4-game/assets/images/yoda2.jpg",
            defeated: false
        },

        "Princess": {
            name: "Princess",
            health_points: 150,
            attack_power: 20,
            counter_attack_power: 20,
            image: "/Users/vanessa/Rutgers/HOMEWORK_ASSIGNMENTS/hw-4-jquery/unit-4-game/assets/images/princess2.jpg",
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
    var attMP3 = new Audio("/Users/vanessa/Rutgers/HOMEWORK_ASSIGNMENTS/hw-4-jquery/unit-4-game/assets/sounds/coolsaber.mp3");
    attMP3.volume = 0.2;
    // 
   
    var themeMP3 = document.getElementById("themeMusic").play();
    themeMP3.volume = 0.2;
    if(themeMP3 !== undefined) {
        themeMP3.then(_=> {

        }).catch(error=> {

        });
    }

    themeMP3.volume = 0.2;

    // HTML variables



    //-----initializer functions------ 


    // function will set the player selected values
    function initializePlayer(playerSelected) {
        console.log(playerSelected);
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
        console.log(defenderSelected);
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
        $("header").append('<img src="/Users/vanessa/Rutgers/HOMEWORK_ASSIGNMENTS/hw-4-jquery/unit-4-game/assets/images/game_over_samuel.gif">');
        $("header").append('<p class="gameOver">You have no more health points</p>');
        $("header").append('<p class="gameOver">Game 0ver! Press Restart to try again!</p>');
        $("header").append('<button class="btn-outline-success rounded gameOver" id="restartBTN">Restart</button>');
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
        } else if (playerSelected === true && defenderSelected === false && player1.objectPlayer.name !== "Emperor") {
            defender = initializeDefender(players.Emperor);
            $("#emperor").appendTo("#defender");
            $("#dHealth").text("Health: " + defender.objectDefender.health_points);
            defenderSelected = true;
        }
        console.log("this is defender" + defender.name);
        console.log("this is player" + player1.name);
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
            initializeDefender();
        } else if (playerSelected === true && defenderSelected === false && player1.objectPlayer.name !== "Yoda") {
            defender = initializeDefender(players.Yoda);
            $("#yoda").appendTo("#defender");
            $("#dHealth").text("Health: " + defender.objectDefender.health_points);

            defenderSelected = true;
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
            $("#dHealth").text("Health: " + defender.objectDefender.health_points);
            defenderSelected = true;
        }
    });


    //-------------on click function and logic for attack button----------------------//

    $(".attack").on("click", function () {
        attMP3.play();
        //created variable to target correct characters health caption, 
        //since id's are unique to the first letter of the players name + health targeted that with these variables
        var phealth = player1.objectPlayer.name.charAt(0).toLowerCase() + "Health";
        var dhealth = defender.objectDefender.name.charAt(0).toLowerCase() + "Health";
        var newDHealth = 0;
        var newPHealth = 0;
        var newCounterAttack = player1.objectPlayer.counter_attack_power;
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
                player1.objectPlayer.counter_attack_power += player1.objectPlayer.counter_attack_power;
            }
        }
        // condition for player defeated 
        if (player1.objectPlayer.health_points <= 0) {
            gameOver = true;
            gameOverDisplay();
        }
        // condition for defender defeated
        if (defender.objectDefender.health_points <= 0) {
            defenderSelected = false
            // update console
            $("#playerConsole1").text("You defeated " + defender.objectDefender.name);
            //loop through players object find matching object, update keys & values 
            var dname = defender.objectDefender.name.toLowerCase();
            Object.keys(players).forEach(function (item) {
                console.log(players[item].name);
                if (players[item].name === defender.objectDefender.name) {
                    console.log("condition hit");
                    //move this object back to enemies to attack 
                    $("#" + dname).appendTo("footer");
                    //add defeated attr and disable click
                    
                    // tell player to click on another defender
                    $("#playerConsole2").text("The Force is strong with you select another enemy!");
                }
                
            });
           
        }

        $("#restartBTN").on("click", function () {
            location.reload();
        });


    });
});