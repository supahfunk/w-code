/*--------------------------------------------------
Game init 1
--------------------------------------------------*/
function gameInit1() {
    var $g = $('#game-1'),
        tiles = $('.tile', $g),
        pool = $('#pool', $g),
        drop = $('#drop', $g),
        height = 110,
        margin = 0,
        gutter = 50;

    tiles.each(function (i, tile) {

        // Setup tiles with some data
        tile = $(tile);
        tile.data({
            index: i,
            zone: pool
        });

        TweenLite.set(tile, {
            x: margin,
            y: margin + i * gutter + (i * height)
        });
    });

    // Make tiles draggable
    Draggable.create(tiles, {
        bounds: $g,
        onDrag: onDrag,
        onDragEnd: onDragEnd,
        onDragStart: onDragStart,
        onPress: onPress,
        onRelease: onRelease
    });

    function onDrag(event) {

        var tile = $(this.target);
        var zone = getZone(tile);

        // Tile is not in the zone it started from
        if (zone && zone !== tile.data("zone")) {

            // Stop the draggable so the position doesn't
            // get messed up when appeneding tile to new zone
            this.endDrag(event);
            changeZone(tile, zone);
            this.startDrag(event);
        }

        // Reorder tiles. True parameter tells it to ignore 
        // tiles that are being dragged
        if (!zone) reorderTiles(true);
        if (hitTest(tile)) reorderTiles();
    }

    function onDragStart() {
        $(this.target).addClass("dragging");
    }

    function onDragEnd() {

        var tile = $(this.target);
        var zone = getZone(tile);

        if (zone && zone !== tile.data("zone")) {
            changeZone(tile, zone);
        }

        $(this.target).removeClass("dragging");
        hitTest(this.target);
        reorderTiles();
    }

    function onPress() {
        TweenLite.to(this.target, 0.3, {
            opacity: 0.75,
            scale: 0.9
        });
    }

    function onRelease() {
        hitTest(this.target);
        reorderTiles();
        TweenLite.to(this.target, 0.3, {
            opacity: 1,
            scale: 1
        });

        checkSolution();
    }

    function changeZone(tile, zone) {

        // Change tile's data for zone
        tile.data("zone", zone);

        // Find position of tile and zone
        var rect1 = tile[0].getBoundingClientRect();
        var rect2 = zone[0].getBoundingClientRect();

        zone.append(tile);

        // Update tile with new coords
        TweenLite.set(tile, {
            x: rect1.left - rect2.left,
            y: rect1.top - rect2.top
        });
    }

    function getZone(tile) {

        // Returns the zone the tile is in
        var zone = Draggable.hitTest(tile, pool) ?
            pool : Draggable.hitTest(tile, drop) ?
            drop : null;
        return zone;
    }

    function hitTest(tile) {

        var target;

        // Hit test tiles that aren't moving or being dragged
        $(".tile:not(.dragging, .moving)").each(function (i, element) {

            if (Draggable.hitTest(tile, element)) {
                target = element;
                return false;
            }
        });

        if (target) changePosition(tile, target);
        return target;
    }

    function reorderTiles(dragging) {

        var query = dragging ? ".tile:not(.dragging)" : ".tile";
        pool.children(query).each(moveTile);
        drop.children(query).each(moveTile);
    }

    function moveTile(index, tile, tween) {

        tile = $(tile);
        tile.data("index", index);

        if (tile.hasClass("dragging")) return;
        tile.addClass("moving");

        TweenLite.to(tile, 0.25, {
            x: margin,
            y: margin + index * gutter + (index * height),
            onComplete: function () {
                tile.removeClass("moving");
            }
        });
    }

    function changePosition(tile1, tile2) {

        tile1 = $(tile1);
        tile2 = $(tile2);

        // Changes tiles position on the DOM which is used to 
        // index and find the position to move to
        tile1.data("index") > tile2.data("index") ?
            tile1.insertBefore(tile2) :
            tile1.insertAfter(tile2);
    }

    var end = false;

    function checkSolution() {
        if ($('#drop img', $g).length == 3) {
            end = true;
            game2();
        } else {
            end = false;
        }
    }
}


/*--------------------------------------------------
Doc Ready
--------------------------------------------------*/
$(function () {
    if ($('#game-1').length) {
        gameInit1();
    }
});