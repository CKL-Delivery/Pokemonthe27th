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
        let you3: Sprite = null
        tiles.setTilemap(tilemap`level6`)
        door_2.destroy()
        door_3.destroy()
        door.destroy()
        mySprite2 = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 8 8 8 8 8 8 8 9 9 9 9 9 9 9 
            9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 
            8 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 
            8 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 
            9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 
            9 9 8 8 8 8 8 8 8 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.Player)
        mySprite2.setPosition(0, 0)
        mySprite = sprites.create(img`
            9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 
            8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 8 8 8 8 8 9 9 9 
            9 9 9 9 9 9 9 9 8 9 9 9 8 9 9 9 
            9 9 9 9 9 9 9 9 8 9 9 9 8 9 9 9 
            9 9 9 9 9 9 9 9 8 9 9 9 8 9 9 9 
            9 9 9 9 9 9 9 9 8 8 8 8 8 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.Player)
        mySprite.setPosition(92, 51)
        mysrite7 = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 8 8 8 8 8 8 8 9 9 9 9 
            9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 
            9 9 9 8 9 9 9 9 9 9 9 9 9 8 9 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 9 8 9 9 9 9 9 9 9 9 9 8 9 9 
            9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 
            9 9 9 9 9 8 8 8 8 8 8 8 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.Player)
        mysrite7.setPosition(160, 41)
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
        mySprite3.setPosition(8, 105)
        mySprite4 = sprites.create(img`
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
            9 9 9 9 9 9 9 9 9 9 8 8 8 9 9 9 
            9 9 9 9 9 9 9 9 9 9 8 9 8 9 9 9 
            9 9 9 9 9 9 9 9 9 9 8 8 8 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.Player)
        mySprite4.setPosition(143, 81)
        mySprite5 = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 8 8 8 8 8 8 8 9 9 9 9 
            9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 
            9 9 9 8 9 9 9 9 9 9 9 9 9 8 9 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 9 8 9 9 9 9 9 9 9 9 9 8 9 9 
            9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 
            9 9 9 9 9 8 8 8 8 8 8 8 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.Player)
        mySprite5.setPosition(160, 30)
        mySprite6 = sprites.create(img`
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
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.Player)
        mySprite6.setPosition(48, 106)
        mySprite8 = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 8 8 8 8 8 8 8 9 9 9 9 
            9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 
            9 9 9 8 9 9 9 9 9 9 9 9 9 8 9 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 9 8 9 9 9 9 9 9 9 9 9 8 9 9 
            9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 
            9 9 9 9 9 8 8 8 8 8 8 8 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.Player)
        mySprite8.setPosition(81, 43)
        mySprite9 = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 8 8 8 8 8 8 8 9 9 9 9 
            9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 
            9 9 9 8 9 9 9 9 9 9 9 9 9 8 9 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 9 8 9 9 9 9 9 9 9 9 9 8 9 9 
            9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 
            9 9 9 9 9 8 8 8 8 8 8 8 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.Player)
        mySprite9.setPosition(49, 69)
        mySprite10 = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 8 8 8 8 8 8 8 9 9 9 9 
            9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 
            9 9 9 8 9 9 9 9 9 9 9 9 9 8 9 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 
            9 9 9 8 9 9 9 9 9 9 9 9 9 8 9 9 
            9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 
            9 9 9 9 9 8 8 8 8 8 8 8 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.Player)
        mySprite10.setPosition(20, 120)
        mysprite11 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 8 8 8 8 8 . . . . . 
            . . . . 8 8 8 9 9 9 8 . . . . . 
            . . . 8 8 9 9 9 9 9 9 8 . . . . 
            . . . 8 9 1 8 9 1 8 9 8 . . . . 
            . . . 8 9 8 8 9 8 8 9 8 . . . . 
            . . . . 8 9 9 9 9 9 9 8 . . . . 
            . . . 8 8 9 8 8 9 e 8 . . . . . 
            . . . 8 8 9 9 9 9 d e e . . . . 
            . . . 8 9 9 9 9 9 d e d . . . . 
            . . . 8 9 9 9 9 9 d e d . . 8 8 
            . . . 8 9 9 9 9 9 d e d 8 8 9 9 
            . . . 8 9 9 9 9 9 d e e 9 9 8 8 
            . . . 8 8 8 8 8 8 e e 8 8 8 8 . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        mysprite11.setPosition(7, 120)
        if (you3.overlapsWith(mySprite4)) {
            you3.destroy()
            you4 = sprites.create(img`
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f 3 f f 
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
            you4.setPosition(31, 6)
        }
        if (you4.overlapsWith(mySprite5)) {
            you4.destroy()
            you5 = sprites.create(img`
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f 3 f b c c c c b f 3 f f 
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
            you5.setPosition(31, 6)
        }
        if (you5.overlapsWith(mySprite6)) {
            you5.destroy()
            you6 = sprites.create(img`
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f 3 f c 3 c c c c 3 c f f f 
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
            you6.setPosition(31, 6)
        }
        if (you6.overlapsWith(mysrite7)) {
            you6.destroy()
            you7 = sprites.create(img`
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f 3 f 
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
            you7.setPosition(31, 6)
        }
        if (you7.overlapsWith(mySprite8)) {
            you7.destroy()
            you8 = sprites.create(img`
                . f f f . f f f f . f f f . 
                f f f f f c c c c f 3 f f f 
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
            you8.setPosition(31, 6)
        }
        if (you8.overlapsWith(mySprite9)) {
            you8.destroy()
            you9 = sprites.create(img`
                . f f f . f f f f . f f f . 
                f f f 3 f c c c c f f f f f 
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
            you9.setPosition(31, 6)
        }
        if (you9.overlapsWith(mySprite10)) {
            you9.destroy()
            you10 = sprites.create(img`
                . f f f . f f f f . f f f . 
                f f f 3 f c c c c f 3 f f f 
                f f f f b c c c c b f f f f 
                f 3 f c 3 c c c c 3 c f 3 f 
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
            you10.setPosition(31, 6)
        }
        if (you10.overlapsWith(mysprite11)) {
            you10.destroy()
            you11 = sprites.create(img`
                . f f f . f f f f . f f f . 
                f f f 3 f c c c c f 3 f f f 
                f f 3 f b c c c c b f 3 f f 
                f 3 f c 3 c c c c 3 c 3 f f 
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
            you11.setPosition(31, 6)
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (you.overlapsWith(Professor_Oak)) {
        game.splash("thank goodness ", "you're  here")
        game.splash("i need you to", " help me find my pokemon")
        game.showLongText("go to the  Door and in find Professor Oak's 5 Pokemon", DialogLayout.Bottom)
    }
})
let you11: Sprite = null
let you10: Sprite = null
let you9: Sprite = null
let you8: Sprite = null
let you7: Sprite = null
let you6: Sprite = null
let you5: Sprite = null
let you4: Sprite = null
let mysprite11: Sprite = null
let mySprite10: Sprite = null
let mySprite9: Sprite = null
let mySprite8: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mysrite7: Sprite = null
let mySprite: Sprite = null
let mySprite2: Sprite = null
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
