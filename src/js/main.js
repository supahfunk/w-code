/*--------------------------------------------------
W-CODE
--------------------------------------------------*/


/*--------------------------------------------------
Old Browsers
--------------------------------------------------*/
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
    return p.toString() === "[object SafariRemoteNotification]";
})(!window['safari'] || safari.pushNotification);
var isIE11 = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);

if (isIE11 === true) {
    $('html').addClass('msie');
}
if (isSafari === true) {
    $('html').addClass('safari');
}


/*--------------------------------------------------
App Height
--------------------------------------------------*/
var appHeight = function(){
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight);
appHeight();


/*--------------------------------------------------
Scrollbar Listener
--------------------------------------------------*/
var config = {
    originalScroll: false,
}


function scrollbarInit() {
    parallax = document.querySelectorAll('[data-scroll]');
    backgrounds = document.querySelectorAll('[data-scroll-background]');

    if ($('html.no-touch').length && isSafari === false) {
        scrollbar = Scrollbar.init(document.getElementById('wrapper'), {
            speed: 0.7,
            overscrollEffect: 'bounce',
            syncCallbacks: true
        });

        scrollbar.addListener(function (status) {
            var offset = status.offset;

            // console.log(offset);
            var shadows = document.querySelectorAll('.shadow');

            [].forEach.call(shadows, function (shadow) {
                // do whatever
                shadow.style.top = offset.y + 'px';
                shadow.style.left = offset.x + 'px';
            });

        });

        if (config.originalScroll) {
            $('body').addClass('scroll');
            Scrollbar.destroyAll();
        }

        window.scrollbar = scrollbar;

    } else {
        $('body').addClass('scroll');
    }
}


/*--------------------------------------------------
Games
--------------------------------------------------*/
function game2() {
    $("#item-1").fadeOut(500);
    scrollbar.scrollTo(0, 0, 600);
    $("#item-2").fadeIn(500, function () {
        scrollbar.update();
    });
}

function game3() {
    $("#item-2").fadeOut(500);
    scrollbar.scrollTo(0, 0, 600);
    $("#item-3").fadeIn(500, function () {
        scrollbar.update();
    });

    for (i = 1; i < 9; i++) {
        tangram($('.draggable-' + i), $('.droppable-' + i));
    }
}

function game4() {
    $("#item-3").fadeOut(500);
    scrollbar.scrollTo(0, 0, 600);
    $("#item-4").fadeIn(500, function () {
        scrollbar.update();
    });
}


/*--------------------------------------------------
Tangram
--------------------------------------------------*/
function tangram(drag, drop) {
    var $drag = drag,
        $drop = drop,
        startX = $drag.offset().left,
        startY = $drag.offset().top,
        endX = $drop.offset().left,
        endY = $drop.offset().top,
        diffX = endX - startX,
        diffY = endY - startY;

    Draggable.create($drag, {
        bounds: '.tangram',
        onDragStart: function () {
            var $t = $(this.target);
            $t.addClass('dragging');
            TweenLite.to($t, 0.5, {
                scale: 1.2,
                ease: Power2.easeInOut
            });
        },
        onDragEnd: function () {
            var $t = $(this.target);
            $t.removeClass('dragging');
            if (this.hitTest($drop)) {
                TweenLite.to($t, 0.5, {
                    x: diffX,
                    y: diffY,
                    scale: 2,
                    ease: Power2.easeInOut
                });
            } else {
                TweenLite.to($t, 0.5, {
                    x: 0,
                    y: 0,
                    scale: 1,
                    ease: Power2.easeInOut
                });
            }
        },
    })
}


/*--------------------------------------------------
Doc Ready
--------------------------------------------------*/
$(function () {
    scrollbarInit();
});


/*--------------------------------------------------
Win Load
--------------------------------------------------*/
$(window).on('load', function () {
    /* tangram($('.draggable-1'), $('.droppable-1'));
    tangram($('.draggable-2'), $('.droppable-2'));
    tangram($('.draggable-3'), $('.droppable-3'));
    tangram($('.draggable-4'), $('.droppable-4')); */
})