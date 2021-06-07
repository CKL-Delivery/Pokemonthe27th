namespace SpriteKind {
    export const cpu = SpriteKind.create()
    export const npc = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (you13.overlapsWith(door)) {
        door_2 = sprites.create(assets.image`door2`, SpriteKind.Player)
        door_2.setPosition(160, 61)
        tiles.setTilemap(tilemap`level2`)
        game.showLongText("go to the door  and pressed B button.", DialogLayout.Bottom)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    let you6: Sprite = null
    let you4: Sprite = null
    if (you13.overlapsWith(door_2)) {
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
        game.showLongText("go to  mr. mime and press b", DialogLayout.Bottom)
    }
    if (you13.overlapsWith(mr_mime)) {
        mr_mime.follow(you13)
        game.showLongText(" go to the door and press b again", DialogLayout.Bottom)
    }
    if (you13.overlapsWith(door_3)) {
        tiles.setTilemap(tilemap`level6`)
        door_2.destroy()
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
        mySprite.setPosition(28, 24)
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
        mySprite2.setPosition(48, 109)
        mySprite3 = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 8 8 8 9 9 9 9 9 9 9 9 9 9 9 
            9 9 8 9 8 9 9 9 9 9 9 9 9 9 9 9 
            9 9 8 8 8 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 8 8 8 8 8 9 9 9 9 9 9 9 
            9 9 9 9 8 9 9 9 8 9 9 9 9 9 9 9 
            9 9 9 9 8 9 9 9 8 9 9 9 9 9 9 9 
            9 9 9 9 8 9 9 9 8 9 9 9 9 9 9 9 
            9 9 9 9 8 8 8 8 8 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.Player)
        mySprite3.setPosition(99, 27)
        mySprite4 = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            8 8 8 8 8 9 9 9 9 9 9 9 9 9 9 9 
            8 9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 
            8 9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 
            8 9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 
            8 8 8 8 8 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 8 8 8 9 9 9 9 9 9 9 9 9 
            9 9 9 9 8 9 8 9 9 9 9 9 9 9 9 9 
            9 9 9 9 8 8 8 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.Player)
        mySprite4.setPosition(49, 38)
        mySprite5 = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 8 8 8 8 8 9 9 9 9 9 9 9 9 9 9 
            8 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 
            8 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 
            8 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 
            8 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 
            8 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 
            9 8 8 8 8 8 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 8 8 8 9 9 9 9 
            9 9 9 9 9 9 9 9 9 8 9 8 9 9 9 9 
            9 9 9 9 9 9 9 9 9 8 8 8 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.Player)
        mySprite5.setPosition(117, 84)
        mySprite6 = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 8 8 8 9 9 9 9 9 9 9 9 9 9 9 
            9 9 8 9 8 9 9 9 9 9 9 9 9 9 9 9 
            9 9 8 8 8 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 8 8 8 8 8 9 9 9 9 9 9 
            9 9 9 9 9 8 9 9 9 8 9 9 9 9 9 9 
            9 9 9 9 9 8 9 9 9 8 9 9 9 9 9 9 
            9 9 9 9 9 8 9 9 9 8 9 9 9 9 9 9 
            9 9 9 9 9 8 8 8 8 8 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.Player)
        mySprite6.setPosition(141, 14)
        mySprite7 = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 8 8 8 8 8 9 9 9 9 9 9 9 9 9 9 
            9 8 9 9 9 8 9 9 9 9 9 9 9 9 9 9 
            9 8 9 9 9 8 9 9 9 8 8 8 8 8 9 9 
            9 8 9 9 9 8 9 9 8 9 9 9 9 9 8 9 
            9 8 8 8 8 8 9 9 8 9 9 9 9 9 8 9 
            9 9 9 9 9 9 9 9 8 9 9 9 9 9 8 9 
            9 9 9 9 9 9 9 9 8 9 9 9 9 9 8 9 
            9 9 9 9 9 9 9 9 8 9 9 9 9 9 8 9 
            9 9 9 9 9 9 9 9 9 8 8 8 8 8 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.Player)
        mySprite7.setPosition(23, 95)
        mySprite8 = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 8 8 8 8 8 9 9 9 9 9 9 9 9 9 
            9 9 8 9 9 9 8 9 9 9 9 9 9 9 9 9 
            9 9 8 9 9 9 8 9 9 9 9 9 9 9 9 9 
            9 9 8 9 9 9 8 9 9 9 9 9 9 9 9 9 
            9 9 8 8 8 8 8 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 8 8 8 9 9 9 
            9 9 9 9 9 9 9 9 9 9 8 9 8 9 9 9 
            9 9 9 9 9 9 9 9 9 9 8 8 8 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.Player)
        mySprite8.setPosition(147, 30)
        mySprite9 = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 8 8 8 8 8 9 9 9 9 9 9 9 9 9 
            9 8 9 9 9 9 9 8 9 9 9 9 9 9 9 9 
            9 8 9 9 9 9 9 8 9 9 9 9 9 9 9 9 
            9 8 9 9 9 9 9 8 9 9 9 9 9 9 9 9 
            9 8 9 9 9 9 9 8 9 9 9 9 9 9 9 9 
            9 8 9 9 9 9 9 8 9 9 9 9 9 9 9 9 
            9 9 8 8 8 8 8 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 8 8 8 9 9 9 9 
            9 9 9 9 9 9 9 9 9 8 9 8 9 9 9 9 
            9 9 9 9 9 9 9 9 9 8 8 8 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.Player)
        mySprite.setPosition(162, 34)
        mySprite10 = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            8 8 8 9 9 9 9 8 8 8 9 9 9 9 9 9 
            8 9 8 9 9 9 9 8 9 8 9 9 9 9 9 9 
            8 8 8 9 9 9 9 8 8 8 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 8 8 8 8 8 9 9 9 9 
            9 9 9 9 9 9 8 9 9 9 9 9 8 9 9 9 
            9 8 9 9 9 9 8 9 9 9 9 9 8 9 9 9 
            9 9 9 9 9 9 8 9 9 9 9 9 8 9 9 9 
            9 9 9 9 9 9 8 9 9 9 9 9 8 9 9 9 
            9 9 9 9 9 9 8 9 9 9 9 9 8 9 9 9 
            9 9 9 9 9 9 9 8 8 8 8 8 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.Player)
        mySprite10.setPosition(137, 75)
        mySprite11 = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            8 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9 
            8 9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 
            8 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 8 8 8 8 8 9 9 9 9 9 
            9 9 9 9 9 8 9 9 9 9 9 8 9 9 9 9 
            9 9 9 9 9 8 9 9 9 9 9 8 9 9 9 9 
            9 9 9 9 9 8 9 9 9 9 9 8 9 9 9 9 
            9 9 9 9 9 8 9 9 9 9 9 8 9 9 9 9 
            9 9 9 9 9 8 9 9 9 9 9 8 9 9 9 9 
            9 9 9 9 9 9 8 8 8 8 8 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.Player)
        mySprite11.setPosition(54, 15)
        mySprite12 = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 8 8 8 8 8 8 8 9 9 9 9 9 9 
            9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 
            9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 
            9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 
            9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 
            9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 
            9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 
            9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 
            9 9 9 8 8 8 8 8 8 8 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 8 8 8 9 9 
            9 9 9 9 9 9 9 9 9 9 9 8 9 8 9 9 
            9 9 9 9 9 9 9 9 9 9 9 8 8 8 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.Player)
        mySprite12.setPosition(147, 75)
        mySprite13 = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 8 8 8 8 8 8 8 9 9 9 9 
            9 9 9 8 8 9 9 9 9 9 9 9 8 8 9 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 8 
            9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 8 
            9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 8 
            9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 8 
            9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 8 
            9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 8 
            9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 8 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 9 8 8 9 9 9 9 9 9 9 8 8 9 9 
            9 9 9 9 9 8 8 8 8 8 8 8 9 9 9 9 
            `, SpriteKind.Player)
        mySprite13.setPosition(60, 75)
        Squirtle = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 8 8 8 8 8 . . . . . 
            . . . . . 8 9 9 9 9 8 . . . . . 
            . . . . 8 9 1 9 9 1 8 8 . . . . 
            . . . . 8 9 f 9 9 f 9 8 . . . . 
            . . . . 8 9 9 9 9 9 9 . . . . . 
            . . . . 8 9 f f f f 9 f f f f f 
            . . . . 8 8 9 3 3 9 f d e e f f 
            . . . . . 8 8 8 8 8 f d e e e f 
            . . 8 8 8 9 9 9 9 9 9 f e e e f 
            . . 8 9 9 9 9 9 9 9 9 f f 8 e f 
            . . 8 9 9 9 d d d 9 9 9 9 8 e f 
            . . 8 8 8 8 d d d 9 9 9 8 8 f f 
            . . . . . 8 d d d 9 8 8 f f f . 
            `, SpriteKind.Player)
        mySprite.setPosition(0, 90)
    }
    if (you13.overlapsWith(mySprite)) {
        you13.destroy()
        you2 = sprites.create(img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . . f f d d d d d d f f . . 
            . . e f e 4 4 4 4 e f e . . 
            . e 4 f b 3 3 3 3 b f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `, SpriteKind.Player)
        mySprite.setPosition(31, 6)
    }
    if (you2.overlapsWith(mySprite2)) {
        you2.destroy()
        you3 = sprites.create(img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . . f f d d d d d d f f . . 
            . . e f e 4 4 4 4 e f e . . 
            . e 4 f b 3 3 3 3 b f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `, SpriteKind.Player)
    }
    if (you13.overlapsWith(mySprite3)) {
        you4.destroy()
        you2 = sprites.create(img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . . f f d d d d d d f f . . 
            . . e f e 4 4 4 4 e f e . . 
            . e 4 f b 3 3 3 3 b f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `, SpriteKind.Player)
    }
    if (you13.overlapsWith(mySprite4)) {
        you4.destroy()
        you2 = sprites.create(img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . . f f d d d d d d f f . . 
            . . e f e 4 4 4 4 e f e . . 
            . e 4 f b 3 3 3 3 b f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `, SpriteKind.Player)
    }
    if (you13.overlapsWith(mySprite5)) {
        you6.destroy()
        you2 = sprites.create(img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . . f f d d d d d d f f . . 
            . . e f e 4 4 4 4 e f e . . 
            . e 4 f b 3 3 3 3 b f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `, SpriteKind.Player)
    }
    if (you13.overlapsWith(mySprite6)) {
        you6.destroy()
        you2 = sprites.create(img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . . f f d d d d d d f f . . 
            . . e f e 4 4 4 4 e f e . . 
            . e 4 f b 3 3 3 3 b f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `, SpriteKind.Player)
    }
    if (you13.overlapsWith(mySprite7)) {
        let you7: Sprite = null
        you7.destroy()
        you2 = sprites.create(img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . . f f d d d d d d f f . . 
            . . e f e 4 4 4 4 e f e . . 
            . e 4 f b 3 3 3 3 b f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `, SpriteKind.Player)
    }
    if (you13.overlapsWith(mySprite8)) {
        let you8: Sprite = null
        you8.destroy()
        you2 = sprites.create(img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . . f f d d d d d d f f . . 
            . . e f e 4 4 4 4 e f e . . 
            . e 4 f b 3 3 3 3 b f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `, SpriteKind.Player)
    }
    if (you13.overlapsWith(mySprite9)) {
        let you9: Sprite = null
        you9.destroy()
        you2 = sprites.create(img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . . f f d d d d d d f f . . 
            . . e f e 4 4 4 4 e f e . . 
            . e 4 f b 3 3 3 3 b f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `, SpriteKind.Player)
    }
    if (you13.overlapsWith(mySprite10)) {
        let you10: Sprite = null
        you10.destroy()
        you2 = sprites.create(img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . . f f d d d d d d f f . . 
            . . e f e 4 4 4 4 e f e . . 
            . e 4 f b 3 3 3 3 b f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `, SpriteKind.Player)
    }
    if (you13.overlapsWith(mySprite11)) {
        let you11: Sprite = null
        you11.destroy()
        you2 = sprites.create(img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . . f f d d d d d d f f . . 
            . . e f e 4 4 4 4 e f e . . 
            . e 4 f b 3 3 3 3 b f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `, SpriteKind.Player)
    }
    if (you13.overlapsWith(mySprite12)) {
        let you12: Sprite = null
        you12.destroy()
    }
    if (you13.overlapsWith(mySprite13)) {
        you13.destroy()
        you2 = sprites.create(img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . . f f d d d d d d f f . . 
            . . e f e 4 4 4 4 e f e . . 
            . e 4 f b 3 3 3 3 b f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `, SpriteKind.Player)
    }
    if (you13.overlapsWith(Squirtle)) {
    	
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (you13.overlapsWith(Professor_Oak)) {
        game.splash("thank goodness ", "you're  here")
        game.splash("i need you to", " help me find my pokemon")
        game.showLongText("go to the  Door and in find Professor Oak's 5 Pokemon", DialogLayout.Bottom)
    }
})
let you3: Sprite = null
let you2: Sprite = null
let Squirtle: Sprite = null
let mySprite13: Sprite = null
let mySprite12: Sprite = null
let mySprite11: Sprite = null
let mySprite10: Sprite = null
let mySprite9: Sprite = null
let mySprite8: Sprite = null
let mySprite7: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let mr_mime: Sprite = null
let door_3: Sprite = null
let door_2: Sprite = null
let door: Sprite = null
let Professor_Oak: Sprite = null
let you13: Sprite = null
you13 = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(you13)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(you13)
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
	
})
forever(function () {
	
})
