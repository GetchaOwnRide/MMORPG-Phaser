const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        // init: init,
        preload: preload,
        create: create,
        update: update,
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                y: 0
            },
        },
    },
};
const game = new Phaser.Game(config);

function preload() {    //cuts image for item
    this.load.image('button1', 'assets/images/ui/blue_button01.png');
    this.load.spritesheet('characters', 'assets/images/characters.png', { frameWidth: 32, frameHeight: 32});

}

function create() {
    var button = this.add.image(100, 100, 'button1');
    button.setOrigin(0.5, 0.5); //sets position of button 1

    this.add.sprite(300, 100, 'button1');   //sets 

    this.chest = this.physics.add.image(300, 300, 'items', 0);  //sets the position of the item

    this.wall = this.physics.add.image(500,100, 'button1');
    this.wall.setImmovable();   //sets wall immovable

    this.player = this.physics.add.image(32, 32, 'characters', 0);
    this.player.setScale(2);
    this.player.body.collideWorldBounds = true;     //this sets boundaries

    this.physics.add.collider(this.player, this.wall); //sets collision for player and wall
    this.physics.add.overlap(this.player, this.chest, function() { console.log ('overlap') ;}); //sets overlap for player and chests

    this.cursors = this.input.keyboard.createCursorKeys();  //adds keyboard inputs
    
}

function update() {     //sets player movement
this.player.setVelocity(0);

    if (this.cursors.left.isDown) {
        this.player.setVelocityX(-160);
    } else if (this.cursors.right.isDown) {
        this.player.setVelocityX(160);
    } else {
    }
    
    if (this.cursors.up.isDown) {
        this.player.setVelocityY(-160);
    } else if (this.cursors.down.isDown) {
        this.player.setVelocityY(160);
    } else {
    }
}