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
        gutter = 50,
        $hint = $('.hint img', $g);

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
            setTimeout(game2, 500);
        } else {
            end = false;
        }
    }

    $hint.on('click', function () {
        $gameHint = $('.game-hint', $g);
        TweenMax.fromTo($gameHint, .5, {
            x: 0,
            opacity: .5
        }, {
            x: 200,
            ease: Power2.easeInOut,
            onComplete: function () {
                setTimeout(function () {
                    TweenLite.to($gameHint, .5, {
                        opacity: 0
                    });
                }, 500)
            }
        });

        TweenMax.fromTo($gameHint, .7, {
            y: 0,
        }, {
            y: -170,
            ease: Power2.easeInOut
        });
    });
}


/*--------------------------------------------------
Doc Ready
--------------------------------------------------*/
$(function () {
    if ($('#game-1').length) {
        gameInit1();
    }
});
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
            setTimeout(game3, 500);
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


/*--------------------------------------------------
Doc Ready
--------------------------------------------------*/
$(function () {
    gameInit2();
});
/*--------------------------------------------------
Game init 3
--------------------------------------------------*/
function tangram(drag, drop) {
    var $g = $('#game-3'),
        $drag = drag,
        $drop = drop,
        startX = $drag.offset().left,
        startY = $drag.offset().top,
        endX = $drop.offset().left,
        endY = $drop.offset().top,
        $main = $('main', $g),
        scale = $main[0].getBoundingClientRect().width / $main[0].offsetWidth,
        diffX = (endX - startX) / scale,
        diffY = (endY - startY) / scale;

    Draggable.create($drag, {
        bounds: $g,
        onPress: function () {
            var $t = $(this.target);
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
        },
        onDragEnd: function () {
            var $t = $(this.target);
            $t.removeClass('dragging');
            if (this.hitTest($drop)) {
                TweenLite.to($t, 0.5, {
                    x: diffX,
                    y: diffY,
                    rotation: 0,
                    scale: 1,
                    opacity: 1,
                    overwrite: 'all',
                    ease: Power2.easeInOut
                });
                $t.addClass('dropped');
            } else {
                TweenLite.to($t, 0.5, {
                    x: 0,
                    y: 0,
                    rotation: 0,
                    scale: 1,
                    opacity: 1,
                    overwrite: 'all',
                    ease: Power2.easeInOut
                });
                $t.removeClass('dropped');
            }
            checkSolutionGame3();
        }
    })
}


$('#game-3').on('click', '.hint img', function () {
    TweenMax.staggerTo('#game-3 .droppable', .7, {
        opacity: .3,
        ease: Power3.easeInOut,
        onComplete: function () {
            setTimeout(function () {
                TweenLite.to('#game-3 .droppable', .5, {
                    opacity: 0
                });
            }, 1000)
        }
    }, .08);

});

var endGame3 = false;

function checkSolutionGame3() {
    $g = $('#game-3');
    if ($('.tangram .dropped').length == 8) {
        endGame3 = true;
        setTimeout(game4, 500);
    } else {
        endGame3 = false;
    }
}
blob2 = new Blob();
blob2.radius = 200;
blob2.strokeStyle = '#141414';
var end = document.getElementById('end');

init2 = function init2() {
    canvas = document.createElement('canvas');
    canvas.setAttribute('touch-action', 'none');

    end.appendChild(canvas);
    canvas.setAttribute('id', 'end-canvas');

    var resize = function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    var oldMousePoint = {
        x: 0,
        y: 0
    };
    var hover = false;
    var mouseMove = function mouseMove(e) {

        var pos = blob2.center;
        var diff = {
            x: e.clientX - pos.x,
            y: e.clientY - pos.y
        };
        var dist = Math.sqrt(diff.x * diff.x + diff.y * diff.y);
        var angle = null;

        blob2.mousePos = {
            x: pos.x - e.clientX,
            y: pos.y - e.clientY
        };

        blob2.color = '#fff';


        if (dist < blob2.radius && hover === false) {
            var vector = {
                x: e.clientX - pos.x,
                y: e.clientY - pos.y
            };
            angle = Math.atan2(vector.y, vector.x);
            hover = true;

        } else if (dist > blob2.radius && hover === true) {
            var _vector = {
                x: e.clientX - pos.x,
                y: e.clientY - pos.y
            };
            angle = Math.atan2(_vector.y, _vector.x);
            hover = false;
            blob2.color = null;
        }

        if (typeof angle == 'number') {

            var nearestPoint = null;
            var distanceFromPoint = 100;

            blob2.points.forEach(function (point) {
                if (Math.abs(angle - point.azimuth) < distanceFromPoint) {
                    // console.log(point.azimuth, angle, distanceFromPoint);
                    nearestPoint = point;
                    distanceFromPoint = Math.abs(angle - point.azimuth);
                }
            });

            if (nearestPoint) {
                var strength = {
                    x: oldMousePoint.x - e.clientX,
                    y: oldMousePoint.y - e.clientY
                };
                strength = Math.sqrt(strength.x * strength.x + strength.y * strength.y) * 10;
                if (strength > 100) strength = 100;
                nearestPoint.acceleration = strength / 100 * (hover ? -1 : 1);
            }
        }

        oldMousePoint.x = e.clientX;
        oldMousePoint.y = e.clientY;
    };
    // window.addEventListener('mousemove', mouseMove);
    window.addEventListener('pointermove', mouseMove);

    blob2.canvas = canvas;
    blob2.init();
    blob2.render();
};