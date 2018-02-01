function Player(_x, _y, _width, _height) {
    this.sprite = createSprite(_x, _y, _width, _height)
    this.sprite.mass = 1

    this.update = function(){
    }

    this.setVel = function(x, y){
        this.sprite.setVelocity(x, y)
    }
}