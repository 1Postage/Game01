var player = null
var ball = null
var speed = 10
var keypressed = false

function setup() {
    createCanvas(window.innerWidth, window.innerHeight - 4)
    this.player = new Player(
        (window.innerWidth / 2) - 100,
        window.innerHeight - 100, 200, 20)
    this.player.sprite.shapeColor = color(255)
    this.ball = new Ball(300, 100, 10)
    console.log(windowWidth)
    console.log(windowHeight)
}
function draw() {
    background(50)
    if(this.speed > 10 && !keypressed) this.speed -= 1
    this.ball.update()
    this.player.update()
    this.ball.sprite.bounce(this.player.sprite, collidePlayer)
    drawSprites()
}
function collidePlayer(){
    console.log("hola")
}

function keyPressed() {
    this.keypressed == true
    if (!(keyIsDown(83))) {
        this.player.sprite.friction = 1
        if (keyCode === 37) {
            this.player.setVel(-speed, 0)
            speed += 1
            
        } else if (keyCode === 39) {
            this.player.setVel(speed, 0)
            speed += 1
        }
        else if (keyCode === 83){
            this.player.setVel(0, 0)
        }
            
        if(speed > 20)
            speed = 20
    } else {
        this.player.sprite.friction = 0
        
    }
}

function keyReleased() {
    keypressed == false
    this.player.sprite.friction = 0.92
}