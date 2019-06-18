var nodes = document.getElementsByClassName('bad-rect');
nodes = [...nodes];

for(var i = 0; i < nodes.length; i++){
        nodes[i].remove();
    }

var elem = document.getElementById('circle1');
elem.remove();

var greens = document.querySelectorAll('.good-rect');
greens = [...greens];

for(var i = 0; i < greens.length; i++){
    greens[i].remove();
}

var red = document.getElementById('.circle2');
red.remove();
