var btnElement = document.querySelector('#btn');
        btnElement.setAttribute('onclick', 'newBox()');

        var newBox = function () {

            var boxElement = document.createElement('div');
            boxElement.style.width = '100px';
            boxElement.style.height = '100px';
            boxElement.style.backgroundColor = '#000';
            boxElement.setAttribute('onmouseover', 'style.backgroundColor=newColor()');


            var containerApp = document.querySelector('#app');
            containerApp.appendChild(boxElement);

        }

        var newColor = function getRandomColor() {
            var letters = "0123456789ABCDEF";
            var color = "#";
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }