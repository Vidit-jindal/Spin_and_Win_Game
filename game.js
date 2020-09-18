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
