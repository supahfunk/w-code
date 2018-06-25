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
var appHeight = function () {
    var doc = document.documentElement
    doc.style.setProperty('--app-height', $(window).height() + 'px');
}
window.addEventListener('resize', appHeight);
appHeight();


/*--------------------------------------------------
Scrollbar Listener
--------------------------------------------------*/
var config = {
    originalScroll: false,
}
var scrollbar,
    offsetY = 0,
    speed;

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

            console.log(status);

            // splitText
            /* $('.splitted-phrase').each(function () {
                var offset = $(this).attr('data-offset') || 200,
                    trigger = ($(window).height() - offset) > 200 ? $(window).height() - offset : 200;

                if ($(this).offset().top <= trigger) {
                    $(this).addClass('pop');
                } else {
                    // $(this).removeClass('pop');
                }
            }); */
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
Get Speed
--------------------------------------------------*/
var $skewers = $('.intro, .rules, .rules-resume');

function getSpeed() {
    if (typeof scrollbar != 'undefined') {
        speed = scrollbar.offset.y - offsetY;
        offsetY = scrollbar.offset.y;
        $skewers.css({
            transform: 'skewY(' + speed * 0.1 + 'deg)'
        });
        window.requestAnimationFrame(getSpeed);
    }
}



/*--------------------------------------------------
Games
--------------------------------------------------*/
function goUp() {
    if (typeof scrollbar != 'undefined') {
        scrollbar.scrollTo(0, 0, 0);
    } else {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1);
    }
}

function scrollbarUpdate() {
    if (typeof scrollbar != 'undefined') {
        scrollbar.update();
    }
}

function game2() {
    $("#item-1").fadeOut(500, function () {
        goUp();
        $("#item-2").fadeIn(800, function () {
            scrollbarUpdate();
        });
    });
}

function game3() {
    $("#item-2").fadeOut(500, function () {
        goUp();
        $("#item-3").fadeIn(800, function () {
            scrollbarUpdate();
        });

        for (i = 1; i < 9; i++) {
            tangram($('.draggable-' + i), $('.droppable-' + i));
        }
    });

}

function game4() {
    $("#item-3").fadeOut(500, function () {
        goUp();
        $("#item-4").fadeIn(800, function () {
            scrollbarUpdate();
        });
    });
}


/*--------------------------------------------------
Split Text
--------------------------------------------------*/
function splitText() {
    $('.rules li span').each(function () {
        var $t = $(this),
            text = $t.text(),
            word = text.split(' ');

        $t.text('').addClass('splitted-phrase');

        $.each(word, function (i, val) {
            $('<span class="splitted-word"></span>').appendTo($t);
            letter = val.split('');
            $.each(letter, function (j, v) {
                $('<span class="splitted-letter">' + v + '</span>').appendTo($('.splitted-word:last'), $t);
            });
            $('<span class="splitted-word"><span class="splitted-letter">&nbsp;</span></span>').appendTo($t);
        });
    });
}


/*--------------------------------------------------
Doc Ready
--------------------------------------------------*/
$(function () {
    scrollbarInit();
    getSpeed();

    // splitText();
});


/*--------------------------------------------------
Win Load
--------------------------------------------------*/
$(window).on('load', function () {})