//Hello World of Phaser = Basic Game = Single scene in Spin and Win game
//How to create a basic skeleton for the game -> Game loop.
//creating a config object .



let prizes_config = {
    count : 12,
    prize_names : ["3000 credits","35% off","Hard Luck","70% off","swagpack","100% off","netflix","50% off","Amazon Voucher","2 extra spin","CB tshirt","CB book"] 
}


let config = {
    type : Phaser.CANVAS,
    width : 800,
    height : 600,
    backgroundColor : 0xffcc00,
    
    scene : {
        preload : preload,
        create : create,
        update : update,
    }
};

//creating a game object using phaser game class

let game = new Phaser.Game(config);

function preload(){
    console.log("preload");
    
    //Using a load object we load a image
     this.load.image('background','../Assets/back.png');
    //console.log(this);
    
    this.load.image('wheel','../Assets/wheel.png');
    this.load.image('pin','../Assets/pin.png');
    this.load.image('stand','../Assets/stand.png');
}
