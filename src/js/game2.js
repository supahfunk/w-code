/*--------------------------------------------------
Game init 2
--------------------------------------------------*/
function gameInit2() {
    var $g = $('#game-2'),
        tiles = $('.tile', $g),
        pool = $('#pool', $g),
        drop = $('#drop', $g),
        width = 110,
        margin = 0,
        gutter = 50,
        $main = $('main', $g),
        scale = $main[0].getBoundingClientRect().width / $main[0].offsetWidth,
        $hint = $('.hint img', $g);

    tiles.each(function (i, tile) {
        tile = $(tile);
        tile.data({
            index: i,
            zone: pool
        });

        TweenLite.set(tile, {
            y: margin,
            x: margin + i * gutter + (i * width)
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
            scale: 1.1
        });
        TweenMax.to(this.target, 0.2, {
            transformOrigin: "50%",
            rotation: 4,
            ease: Power1.easeInOut,
            onComplete: function () {
                TweenMax.fromTo(
                    this.target,
                    0.4, {
                        transformOrigin: "50%",
                        rotation: 4,
                        ease: Power1.easeInOut
                    }, {
                        transformOrigin: "50%",
                        rotation: -4,
                        repeat: -1,
                        ease: Power1.easeInOut,
                        yoyo: true
                    }
                );
            }
        });
    }

    function onRelease() {
        hitTest(this.target);
        reorderTiles();
        TweenLite.to(this.target, 0.3, {
            overwrite: 'all',
            opacity: 1,
            scale: 1,
            rotation: 0
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
            x: (rect1.left - rect2.left) / scale,
            y: (rect1.top - rect2.top) / scale
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

        if (dragging) {
            $('.dragging').addClass('hitted');
        }

        pool.children(query).each(moveTile);
        drop.children(query).each(moveTile);
    }

    function moveTile(index, tile, tween) {

        tile = $(tile);
        tile.data("index", index);

        if (tile.hasClass("dragging")) return;
        tile.addClass("moving");

        TweenLite.to(tile, 0.25, {
            y: 0,
            x: margin + index * gutter + (index * width),
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

    var Solution = [
        'circle',
        'square',
        'triangle',
        'diamond'
    ];

    var end = false;

    function checkSolution() {
        $('#drop img', $g).each(function (i) {

            var $class = $(this).attr('class');
            if (i == $.inArray($class, Solution)) {
                $('.dot', $g).eq(i).addClass('active');
            } else {
                $('.dot', $g).eq(i).removeClass('active');
            }
        });

        if ($('.dot.active', $g).length == 4) {
            end = true;
            drawBlob('well-done-2', 600, 600, 200, '#141414');
            setTimeout(function () {
                $('#item-2 .well-done').addClass('active');
            }, 500);
            setTimeout(game3, 3500);
        } else {
            end = false;
        }
    }

    $hint.on('click', function () {

        $gameHint = $('.game-hint', $g);
        TweenMax.fromTo($gameHint, .5, {
            y: 0,
            opacity: .5
        }, {
            y: -239,
            ease: Power2.easeInOut,
            onComplete: function () {
                setTimeout(function () {
                    TweenLite.to($gameHint, .5, {
                        opacity: 0
                    });
                }, 500)
            }
        });

        TweenMax.fromTo($gameHint, .6, {
            x: 0,
        }, {
            x: -340,
            ease: Power2.easeInOut
        });
    });
}