var balls = document.querySelectorAll('.ball');
let start, end

balls.forEach((ball) => {

    ball.addEventListener('mousedown', handleMouseDown)
    function handleMouseDown(e) {
        start = Date.now()
        if (ball.getAttribute('isDraggable') === 'true') {
            var coords = getCoords(ball);
            var shiftX = e.pageX - coords.left;
            var shiftY = e.pageY - coords.top;

            ball.style.position = 'absolute';

            moveAt(e);

            ball.style.zIndex = 1000; // над другими элементами

            document.addEventListener('mousemove', moveAt)
            
        }
        ball.addEventListener('mouseup', handleMouseUp)

        function moveAt(e) {
            ball.style.left = e.pageX - shiftX + 'px';
            ball.style.top = e.pageY - shiftY + 'px';
        }
        function handleMouseUp() {
            end = Date.now()
            
            if (end - start < 500) {
                console.log(123);
                switch(ball.getAttribute('isDraggable')) {
                    case 'true': ball.setAttribute('isDraggable', 'false')
                    break;
                    case 'false': ball.setAttribute('isDraggable', 'true')
                    break;
                    default: ball.setAttribute('isDraggable', 'true')   
                }
            }
            document.removeEventListener('mousemove', moveAt)
            ball.removeEventListener('mouseup', handleMouseUp)
            console.log(ball.getAttribute('isDraggable'))
        };
    }


    ball.ondragstart = function () {
        return false;
    };
    function getCoords(elem) {   // кроме IE8-
        var box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }
})

setInterval(() => balls.forEach(ball => {
    ball.getAttribute('isDraggable') === 'true'
        ?
            ball.style.border = 'gray dotted 3px'
        :
            ball.style.border = 'gray solid 3px'
}))