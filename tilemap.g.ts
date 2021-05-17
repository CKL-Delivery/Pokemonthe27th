// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202040404040404040404010101010101020705050505050505050202020101010607050505050505050703030201010102070505050505050507030302010101020705050505050505070303020101010202020505050505050703030301010101010202050505020707030303010101010101080808080808020303020202020202020208080808080203030303020208020208080808080802030303030202080808080808080808020303020202020808080808080808080202020209090202020202020208020202020a0a0a0a090909090a0a090a0a0a0202090a090a0a0a0a0a0a0a0a0a090a0202020202020202020202020202020202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . 2 2 . . . . . . . 2 
2 2 2 . . . 2 2 . . . . . . . 2 
. . 2 . . . 2 2 . . . . . . . 2 
. . 2 . . . 2 2 . . . . . . . 2 
. . 2 . . . 2 2 2 . . . . . . 2 
. . . . . . . . 2 2 . . . 2 2 2 
. . . . . . . . . . . . . . . 2 
. . 2 2 2 2 2 2 2 2 . . . . . 2 
. . . . 2 2 . 2 2 . . . . . . 2 
. . . . 2 2 . . . . . . . . . 2 
. . 2 2 2 2 . . . . . . . . . 2 
2 2 2 . . 2 2 2 2 2 2 2 . 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.swamp.swampTile3,sprites.builtin.forestTiles7,sprites.builtin.forestTiles10,sprites.builtin.forestTiles16,sprites.builtin.forestTiles8,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,sprites.castle.tileGrass2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
