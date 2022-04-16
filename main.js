var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;
radi = 50;
var width = screen.width;
newWidth = screen.width - 70;
newHeight = screen.height - 300;

if (width < 992) {
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radi = document.getElementById("radius").value;

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {

    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radi, 0, 2 * Math.PI);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    console.log(e);
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radi = document.getElementById("radius").value;
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    console.log(e);
    current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath()
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log(last_position_of_x + " " + last_position_of_y);
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radi, 0, 2 * Math.PI);
    ctx.stroke();

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

function clearArea() {
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(108, 0.0);
    ctx.lineTo(141, 70);
    ctx.lineTo(218, 78.3);
    ctx.lineTo(162, 131);
    ctx.lineTo(175, 205);
    ctx.lineTo(108, 170);
    ctx.lineTo(41.2, 205);
    ctx.lineTo(55, 131);
    ctx.lineTo(1, 78);
    ctx.lineTo(75, 68);
    ctx.lineTo(108, 0);
    ctx.closePath();
    ctx.fill();
}

ctx.fillStyle = "blue";
ctx.beginPath();
ctx.moveTo(108, 0.0);
ctx.lineTo(141, 70);
ctx.lineTo(218, 78.3);
ctx.lineTo(162, 131);
ctx.lineTo(175, 205);
ctx.lineTo(108, 170);
ctx.lineTo(41.2, 205);
ctx.lineTo(55, 131);
ctx.lineTo(1, 78);
ctx.lineTo(75, 68);
ctx.lineTo(108, 0);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(600, 0);
ctx.lineTo(600, 200);
ctx.lineTo(800, 200);
ctx.lineWidth = 1;
ctx.fillStyle = "#FFCC00";
ctx.fill();
ctx.stroke();

function clear_star() {
    ctx.clearRect(0, 0, 800, 600);
}

function fill_clear() {
    colour = document.getElementById("clr").value;
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillStyle = colour;
    ctx.fillRect(0, 0, 800, 600);
}