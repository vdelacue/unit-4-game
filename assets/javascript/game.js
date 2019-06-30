// create an object of characters: with each character as another object :
//4 characters: darth, princess, yoda, emperor
//Each character has 3 attributes: 'Health Points`, `Attack Power` and `Counter Attack Power`.

$(document).ready(function () {
    var players = {

        "Darth Vadar": {
            name: "Vadar",
            health_points: 100,
            attack_power: 5,
            counter_attack_power: 5,
            image: "/Users/vanessa/Rutgers/HOMEWORK_ASSIGNMENTS/hw-4-jquery/unit-4-game/assets/images/darth2.jpg"

        },

        "Emperor": {
            name: "Emperor",
            health_points: 120,
            attack_power: 8,
            counter_attack_power: 8,
            image: "/Users/vanessa/Rutgers/HOMEWORK_ASSIGNMENTS/hw-4-jquery/unit-4-game/assets/images/emperor2.jpg"

        },

        "Yoda": {
            name: "Yoda",
            health_points: 180,
            attack_power: 25,
            counter_attack_power: 25,
            image: "/Users/vanessa/Rutgers/HOMEWORK_ASSIGNMENTS/hw-4-jquery/unit-4-game/assets/images/yoda2.jpg"

        },

        "Princess": {
            name: "Princess",
            health_points: 150,
            attack_power: 20,
            counter_attack_power: 20,
            image: "/Users/vanessa/Rutgers/HOMEWORK_ASSIGNMENTS/hw-4-jquery/unit-4-game/assets/images/princess2.jpg"

        },

    };
    // var playerImg = $("<img alt='image' class='character-image'>").attr("src", characters["Darth Vadar"].image);
    // $("#player").append(playerImg)

    // ------Global Variables --------- //


    // did player select their character 
    var playerSelected = false;

    // did player select the enemy
    var defenderSelected = false;

    // Variable to store the user's chosen character
    var player = {};

    // Variable to store the chosen enemy
    var defender = {};

    // Number of enemies defeated
    var defendersDefeated = 0;

    // is the game over
    var gameOver = false;


    //-----initializer functions------ 
    // function will set the player selected values
    function initializePlayer(playerSelected) {
        player.name = playerSelected.name;
        player.health_points = playerSelected.health_points;
        player.attack_power = playerSelected.attack_power;
        player.counter_attack_power = playerSelected.counter_attack_power;
    }
    // function will set the defender selected values
    function initializeDefender(defenderSelected) {
        defender.name = defender.name;
        defender.health_points = defender.health_points;
        defender.attack_power = defender.attack_power;
        defender.counter_attack_power = defender.counter_attack_power;
    }
    // function will take players not selected and move them into defender selection section 
    // and remove the selected defender into a non displayed class
    function initializeDefenderRow {
        $(".playerSelection").removeClass( "playerSelection" ).addClass("defenderSelection");
        $("#defender").appendTo(".defendersFought");
    }

    function reset {
        var playerSelected = false;
        var defenderSelected = false;
        player = {};
        defender {};
        var defendersDefeated = 0;
        var gameOver = false;
    }
});