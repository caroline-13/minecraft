// Crea la variable de referncia del lienzo usando fabric.Canvas()
var Canvas = new fabric.Canvas("myCanvas");

//Define el ancho inicial y el alto del cloque de imágenes 
ancho = 30;
alto = 30;

//Define el inicio de las coordenadas  y Y del jugador 
X = 10;
Y = 10;


// Define una variable llamada player_object para almacenar la imagen del jugador
var player_object = "";

// Agrega una función llamada player_update() para agregar la imagen del jugador 

function player_update() {
    fabric.Image.fromURL("player.png", function (img) {
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: Y,
            left: X
        })
        Canvas.add(player_object);
    });
}
window.addEventListener("keydown", teclaPulsada);
function teclaPulsada(e) {
    tecla = e.keyCode;
    console.log(tecla);
    if (tecla == "37" && X > 0) {
        X = X - ancho;
        Canvas.remove(player_object);
        player_update();
    }
    if (tecla == "38" && Y > 0) {
        Y = Y - alto;
        Canvas.remove(player_object);
        player_update();
    }
    if (tecla == "39" && X < 850) {
        X = X + ancho;
        Canvas.remove(player_object);
        player_update();
    }
    if (tecla == "40" && Y < 500) {
        Y = Y + alto;
        Canvas.remove(player_object);
        player_update();
    }
    if (tecla == "78") {//n
        new_image("cloud.jpg");
    }
    if (tecla == "82") {//r
        new_image("dark_green.png");
    }
    if (tecla == "77") {//m
        new_image("ground.png");
    }
    if (tecla == "80") {//p
        new_image("light_green.png");
    }
    if (tecla == "86") {//v
        new_image(trunk.jpg);
    }
    if (tecla == "84") {//t
        new_image("roof.jpg");
    }
    if (tecla == "85") {//u
        new_image("unique.png");
    }
    if (tecla == "76") {//l
        new_image("wall.jpg");
    }
    if (tecla == "65") {//a
        new_image("yellow_wall.png");
    }
    if(e.shiftKey&&tecla=="187"){
        ancho=ancho + 10 ;
        alto=alto + 10 ;
    }
    if(e.shiftKey&&tecla=="189"){
        ancho=ancho - 10 ;
        alto=alto - 10 ;
    }
    document.getElementById("Alto").innerHTML=alto;
    document.getElementById("Ancho").innerHTML=ancho;
}
function new_image(imagen) {
    fabric.Image.fromURL(imagen, function (img) {
        block_object = img;
        block_object.scaleToWidth(ancho);
        block_object.scaleToHeight(alto);
        block_object.set({
            top: Y,
            left: X
        });
        Canvas.add(block_object);
    }
    )
}







// Agrega una función llamada new_image() para agregar las diferentes imágene al presionar teclas específicas.

