// create an object of characters: with each character as another object :
//4 characters: darth, princess, yoda, emperor
//Each character has 3 attributes: 'Health Points`, `Attack Power` and `Counter Attack Power`.

$(document).ready(function() {
var characters = {

    "Darth Vadar" :  {
        health_points: 100,
        attack_power: 5,
        counter_attack_power: 5,
        image: "/Users/vanessa/Rutgers/HOMEWORK ASSIGNMENTS/hw-4-jquery/unit-4-game/assets/images/darth2.jpg",
        name: "Darth Vadar"
    },

    "Emperor" :  {
        health_points: 120,
        attack_power: 8,
        counter_attack_power: 8,
        image: "/Users/vanessa/Rutgers/HOMEWORK ASSIGNMENTS/hw-4-jquery/unit-4-game/assets/images/emperor2.jpg",
        name: "Darth Vadar"
    },

    "Yoda" :  {
        health_points: 180,
        attack_power: 25,
        counter_attack_power: 25,
        image: "/Users/vanessa/Rutgers/HOMEWORK ASSIGNMENTS/hw-4-jquery/unit-4-game/assets/images/yoda2.jpg",
        name: "Darth Vadar"
    },

    "Princess" :  {
        health_points: 150,
        attack_power: 20,
        counter_attack_power: 20,
        image: "/Users/vanessa/Rutgers/HOMEWORK ASSIGNMENTS/hw-4-jquery/unit-4-game/assets/images/princess2.jpg",
        name: "Darth Vadar"
    },

};


var playerImg = $("<img alt='image' class='character-image'>").attr("src", characters["Darth Vadar"].image);
$("#player").append(playerImg)


});