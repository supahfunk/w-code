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
        setTimeout(function () {
            $('#item-3 .well-done').addClass('active');
        }, 500);
        setTimeout(game4, 2500);
    } else {
        endGame3 = false;
    }
}