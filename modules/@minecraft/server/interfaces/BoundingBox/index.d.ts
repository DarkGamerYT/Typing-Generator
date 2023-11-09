/**
 * @beta
 * A BoundingBox is an interface to an object which represents
 * an AABB aligned rectangle.
 * The BoundingBox assumes that it was created in a valid state
 * (min <= max) but cannot guarantee it (unless it was created
 * using the associated {@link
* @minecraft-server.BoundingBoxUtils} utility functions.
* The min/max coordinates represent the diametrically opposite
* corners of the rectangle.
* The BoundingBox is not a representation of blocks - it has
* no association with any type, it is just a mathematical
* construct - so a rectangle with
* ( 0,0,0 ) -> ( 0,0,0 )
* has a size of ( 0,0,0 ) (unlike the very similar {@link
* BlockVolume} object)
*/