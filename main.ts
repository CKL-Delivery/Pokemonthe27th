namespace SpriteKind {
    export const cpu = SpriteKind.create()
    export const npc = SpriteKind.create()
}
let you = sprites.create(img`
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
let Professor_Oak = sprites.create(img`
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
Professor_Oak.setPosition(55, 40)
let trainer_ella = sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Player)
