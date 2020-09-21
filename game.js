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

function create(){
    console.log("create");
    
    //create the background image
    let W = game.config.width ;
    let H = game.config.height ;
    
    let background=this.add.sprite(0,0,'background');
    background.setPosition(W/2,H/2);
    background.setScale(3.5);
    
    
    //let's create a stand
    let stand=this.add.sprite(0,0,'stand');
    stand.setPosition(W/2,H/2 +100);
    stand.setScale(0.8);
    
    //let's create a wheel
    this.wheel=this.add.sprite(0,0,'wheel');
    this.wheel.setPosition(W/2,H/2);
    this.wheel.setScale(0.6);
    
    //let's create a pin
    let pin=this.add.sprite(0,0,'pin');
    pin.setPosition(W/2,H/3.2);
    pin.setScale(0.8);
    
    //event listener for mouse click
    this.input.on("pointerdown",spinwheel,this);
    
    //lets create a text object
    
    font_style = {
        font :"bold 30px Arial",
        align: "center",
        color:"red",
    }
    this.game_text = this.add.text(10,10,"Welcome to spin and win game",font_style)
}
