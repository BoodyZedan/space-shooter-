namespace SpriteKind {
    export const building = SpriteKind.create()
    export const bareay = SpriteKind.create()
    export const barrier = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, hero, 200, 0)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.barrier, function (sprite, otherSprite) {
    hero.destroy()
    enemy1.destroy()
    game.over(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    enemy1.destroy()
    projectile.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    hero.destroy()
    enemy1.destroy()
    game.over(false)
})
let enemy1: Sprite = null
let projectile: Sprite = null
let hero: Sprite = null
effects.starField.startScreenEffect()
hero = sprites.create(img`
    2 2 2 2 . . . . . . 
    2 2 2 2 2 . . . . . 
    2 2 2 2 2 . . . . . 
    2 2 2 2 2 2 2 . . . 
    . . 2 5 5 2 2 2 . . 
    . . 2 5 5 2 2 2 . . 
    2 2 2 2 2 2 2 . . . 
    2 2 2 2 2 . . . . . 
    2 2 2 2 2 . . . . . 
    2 2 2 2 . . . . . . 
    `, SpriteKind.Player)
let barier = sprites.create(assets.image`barrier`, SpriteKind.barrier)
barier.setPosition(-25, 60)
hero.setPosition(0, 60)
controller.moveSprite(hero, 0, 100)
hero.setStayInScreen(true)
game.onUpdateInterval(5000, function () {
    enemy1 = sprites.create(assets.image`alien`, SpriteKind.Enemy)
    enemy1.setPosition(170, randint(0, 120))
})
forever(function () {
    enemy1.x += -1
})
