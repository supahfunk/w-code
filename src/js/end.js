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