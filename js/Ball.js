function Ball(_x, _y, _r) {
    this.x = _x
    this.y = _y
    this.r = _r
    this.sprite = createSprite(this.x, this.y, this.r * 2, this.r * 2)
    this.sprite.setSpeed(10, random(360))
    this.sprite.shapeColor = color(255)
    this.sprite.mass = 0

    console.log(window.innerWidth)
    console.log(window.innerHeight)
    this.left = createSprite(-1, 1000, 1, 9999)
    this.left.mass = 1
    this.right = createSprite(window.innerWidth +1, 1000, 1, 9999)
    this.right.mass = 1
    this.top = createSprite(900 ,-1, 9999, 1)
    this.top.mass = 1
    this.bot = createSprite(900 , window.innerHeight, 9999, 1)
    this.bot.mass = 1

    this.update = function(){
        //this.advancedCollide()
        this.bounce()
    }

    this.bounce = function(){
        this.sprite.bounce(this.left, this.colliding)
        this.sprite.bounce(this.right, this.colliding)
        this.sprite.bounce(this.top, this.colliding)
        this.sprite.bounce(this.bot, this.colliding)
    }
    this.colliding = function(){
        console.log("border")
    }

    this.collideBounds = function(){
        var vector = this.sprite.position
        if(vector.x < 0 || vector.x > window.innerWidth || vector.y < 0 || vector.y > window.innerHeight)
            this.advancedCollide()
    }

    this.advancedCollide = function(){
        var vector = this.sprite.position
        var left = vector.x < 0
        var right = vector.x > window.innerWidth
        var bottom = vector.y > window.innerHeight
        var top = vector.y < 0
        if(left){
            this.sprite.setSpeed(random(20), random(-60, 60))
        }
        if(right){
            this.sprite.setSpeed(random(20), random(120, 240))
        }
        if(bottom){
            this.sprite.setSpeed(random(20), random(210, 330))
        }
        if(top){
            this.sprite.setSpeed(random(20), random(160, 30))
        }
    }

    this.collidePlayer = function(a, b){
        console.log("hola")
    }
    

    this.setVel = function (x, y) {
        this.sprite.setVelocity(x, y)
    }
}