namespace SpriteKind {
    export const cpu = SpriteKind.create()
    export const npc = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (you.overlapsWith(door)) {
        door_2 = sprites.create(assets.image`door2`, SpriteKind.Player)
        door_2.setPosition(160, 61)
        tiles.setTilemap(tilemap`level2`)
        game.showLongText("go to the door  and pressed B button.", DialogLayout.Bottom)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (you.overlapsWith(door_2)) {
        door_3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . d d d d d d d d d d d d . . . 
            . d e e e e d d e e e e d . . . 
            . d e e e e d d e e e e d . . . 
            . d e e e e d d e e e e d . . . 
            . d e e e e d d e e e e d . . . 
            . d e e e e d d e e e e d . . . 
            . d d d d d d d d d d d d . . . 
            . d d d d d d d d d d d d . . . 
            . d d 5 5 d d d d d d d d . . . 
            . d d d d d d d d d d d d . . . 
            . d e e e e d d e e e e d . . . 
            . d e e e e d d e e e e d . . . 
            . d e e e e d d e e e e d . . . 
            . d e e e e d d e e e e d . . . 
            `, SpriteKind.Player)
        door_3.setPosition(31, 6)
        tiles.setTilemap(tilemap`level4`)
        game.splash("it looks like mr. mime has made maze")
        mr_mime = sprites.create(img`
            . . . . . . . . . . . . . . 8 8 
            . . . . . . . . . . . . . 8 8 8 
            8 8 8 . . . . . . . . . 8 8 8 8 
            . 8 8 8 8 3 3 3 3 3 3 8 8 8 8 8 
            . 8 8 8 8 3 1 f 3 1 f 8 8 8 . . 
            . 8 8 8 8 3 f f 3 f f 8 8 8 . . 
            . . . 8 8 3 3 3 3 3 3 8 8 . . . 
            . . . . 2 3 f f f f 3 2 . . . . 
            . 1 . . 3 3 3 3 3 3 3 3 . . 1 . 
            1 1 1 . 1 1 1 1 1 1 1 1 . 1 1 1 
            . 3 . 1 1 2 2 2 2 2 1 1 1 . 3 . 
            . 3 3 1 1 2 2 2 2 2 1 1 1 3 3 . 
            . . 1 1 1 2 2 2 2 2 1 1 1 1 . . 
            . . 1 1 1 2 2 2 2 2 1 1 1 1 . . 
            f . 1 1 1 1 1 1 1 1 1 1 1 1 . f 
            f f 2 2 1 1 1 1 1 1 1 1 2 2 f f 
            `, SpriteKind.Player)
        mr_mime.setPosition(58, 3)
        game.showLongText("go to  mr. mime ", DialogLayout.Bottom)
    }
    if (you.overlapsWith(mr_mime)) {
        mr_mime.follow(you)
        game.showLongText("go to the door", DialogLayout.Bottom)
    }
    if (you.overlapsWith(door_3)) {
        tiles.setTilemap(tilemap`level6`)
        door_2.destroy()
        door_3.destroy()
        door.destroy()
        mySprite = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 8 8 8 8 8 8 8 9 9 9 9 9 9 9 
            9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 
            9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 
            9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 
            9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 
            9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 
            9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 
            9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 
            9 9 8 8 8 8 8 8 8 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.Player)
        mySprite.setPosition(2, 76)
        mySprite2 = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 8 8 8 9 9 9 9 9 9 9 9 9 9 9 9 
            9 8 9 8 9 9 9 9 9 9 9 9 9 9 9 9 
            9 8 8 8 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 8 8 8 8 8 9 9 9 9 9 9 9 9 
            9 9 8 9 9 9 9 9 8 9 9 9 9 9 9 9 
            9 9 8 9 9 9 9 9 8 9 9 9 9 9 9 9 
            9 9 8 9 9 9 9 9 8 9 9 9 9 9 9 9 
            9 9 8 9 9 9 9 9 8 9 9 9 9 9 9 9 
            9 9 8 9 9 9 9 9 8 9 9 9 9 9 9 9 
            9 9 9 8 8 8 8 8 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.Player)
        mySprite.setPosition(42, 97)
        mySprite3 = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 8 8 8 8 8 9 9 9 8 8 8 9 9 9 
            9 9 8 9 9 9 8 9 9 9 8 9 8 9 9 9 
            9 9 8 9 9 9 8 9 8 9 8 8 8 9 9 9 
            9 9 8 9 9 9 8 9 9 9 9 9 9 9 9 9 
            9 9 8 8 8 8 8 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 8 8 8 9 9 9 9 9 9 9 9 
            9 9 9 9 9 8 9 8 9 8 8 8 9 9 9 9 
            9 9 9 9 9 8 8 8 9 8 9 8 9 9 9 9 
            9 9 9 9 9 9 9 9 9 8 8 8 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 8 8 8 9 9 
            9 9 9 9 9 9 9 9 9 9 9 8 9 8 9 9 
            9 9 9 9 9 9 9 9 9 9 9 8 8 8 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.Player)
        mySprite.setPosition(0, 0)
        mySprite4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        mySprite.setPosition(0, 0)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (you.overlapsWith(Professor_Oak)) {
        game.splash("thank goodness ", "you're  here")
        game.splash("i need you to", " help me find my pokemon")
        game.showLongText("go to the  Door and in find Professor Oak's 5 Pokemon", DialogLayout.Bottom)
    }
})
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let mr_mime: Sprite = null
let door_3: Sprite = null
let door_2: Sprite = null
let door: Sprite = null
let Professor_Oak: Sprite = null
let you: Sprite = null
you = sprites.create(img`
    . . . . . . . . . . . . . . 
    . . . . . c c c c . . . . . 
    . . . . b c c c c b . . . . 
    . . . c 3 c c c c 3 . . . . 
    . . 3 3 c c c c c c 3 3 . . 
    . . c c c c 4 4 c c c c . . 
    . . . c c 4 4 4 4 c c . . . 
    . . . 4 b f 4 4 f b 4 . . . 
    . . . 4 1 f d d f 1 4 . . . 
    . . . 4 d d d d d d 4 . . . 
    . . 3 3 e 4 4 4 4 e 3 3 . . 
    . . e f b 3 3 3 3 b f e . . 
    . . e f 3 3 3 3 3 3 c e . . 
    . . . f 6 6 6 6 6 6 f . . . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(you)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(you)
Professor_Oak = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    . f f f f f c c f f f c . 
    . f f c f f f f f f f c . 
    . c c f f f e e f f c c . 
    . f f f f e e f f c c f . 
    . f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . 1 f f e e e e f 1 f . . 
    . 1 1 1 1 1 1 1 1 1 . . . 
    . e 1 1 1 1 1 1 1 e . . . 
    . e 1 1 1 1 1 1 1 e . . . 
    . . 1 1 1 1 1 1 1 . . . . 
    . . 1 1 1 1 1 1 1 . . . . 
    `, SpriteKind.npc)
Professor_Oak.setPosition(6, 77)
game.splash("good you ", "are here")
game.showLongText("walk over to Professor Oak and press a", DialogLayout.Bottom)
door = sprites.create(assets.image`door`, SpriteKind.cpu)
door.setPosition(22, 123)
forever(function () {
    music.playMelody("C5 B B C5 A A B C5 ", 120)
})
forever(function () {
	
})
