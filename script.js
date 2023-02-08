const FPS = 60;
var cnv, ctx, document;
var cursorX, cursorY, CursorRadius = 8;
var clickX = 0, clickY = 0, strHip, strCir, strAng, textPlace = 30;
var hip, sin, cos, cir, ang, nx, ny;

window.onload = function() {
    cnv = document.getElementById("canvas");
    ctx = cnv.getContext("2d");
    setInterval(main, 1000 / FPS);
}

function main() {
    cnv.width = window.innerWidth;
    cnv.height = window.innerHeight;
    window.addEventListener("mousemove", (e) => {cursorX = e.clientX; cursorY = e.clientY;});
    window.addEventListener("click", (e) => {clickX = e.clientX; clickY = e.clientY;});
    draw();
}

function draw() {
    ctx.fillStyle="black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    ctx.font="30px Comic Sans MS";
    line();
    
    ctx.strokeStyle="cyan";
    ctx.fillStyle="cyan";
    ctx.beginPath();
    ctx.ellipse(cursorX, cursorY, CursorRadius, CursorRadius, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

function line() {
    hip = Math.sqrt((cursorX - clickX) * (cursorX - clickX)  + (cursorY - clickY) * (cursorY - clickY));

    sin = cursorY - clickY;
    if (cursorY - clickY > 0) {ny = 1;} else {ny = -1;}

    cos = cursorX - clickX;
    if (cursorX - clickX > 0) {nx = 1;} else {nx = -1}

    cir = 2 * Math.PI * hip;

    if (cos > 0) {
    ang = Math.acos(cos / hip) * 180 / Math.PI;
    } else {
    ang = Math.acos(-cos / hip) * 180 / Math.PI;
    }
    
    strHip = hip.toString();
    strCir = cir.toString();
    strAng = ang.toString();
    strHip = strHip.slice(0, strHip.indexOf(".") + 4);
    strCir = strCir.slice(0, strCir.indexOf(".") + 4);
    strAng = strAng.slice(0, strAng.indexOf(".") + 4);


    ctx.fillStyle="lime";
    ctx.fillText("y-o:  " + (cursorY - clickY) * ny, 0, textPlace);

    ctx.strokeStyle="lime";
    ctx.beginPath();
    ctx.moveTo(cursorX, clickY);
    ctx.lineTo(cursorX, cursorY);
    ctx.stroke();


    ctx.fillStyle="red";
    ctx.fillText("x-o:  " + (cursorX - clickX) * nx, 0, textPlace * 2);

    ctx.strokeStyle="red";
    ctx.beginPath();
    ctx.moveTo(clickX, clickY);
    ctx.lineTo(cursorX, clickY);
    ctx.stroke();


    ctx.fillStyle="blue";
    ctx.fillText("rad:  " + strHip, 0, textPlace * 3);

    ctx.strokeStyle="blue";
    ctx.beginPath();
    ctx.moveTo(clickX, clickY);
    ctx.lineTo(cursorX, cursorY);
    ctx.stroke();


    ctx.fillStyle="yellow";
    ctx.fillText("cir:   " + strCir, 0, textPlace * 4);

    ctx.strokeStyle="yellow";
    ctx.beginPath();
    ctx.ellipse(clickX, clickY, hip, hip, 0, 0, 2 * Math.PI);
    ctx.stroke();


    ctx.fillStyle="magenta";
    ctx.fillText("ang:  " + strAng, 0, textPlace * 5);

    ctx.strokeStyle="magenta"
    ctx.beginPath();
    if (sin < 0 && cos > 0) {
    ctx.ellipse(clickX, clickY, cos / 2, cos / 2, 0, 0, -Math.acos(cos / hip), true);
    }
    if (sin < 0 && cos < 0) {
    ctx.ellipse(clickX, clickY, -cos / 2, -cos / 2, 0, Math.PI, -Math.acos(cos / hip));
    }
    if (sin > 0 && cos < 0) {
    ctx.ellipse(clickX, clickY, -cos / 2, -cos / 2, 0, Math.PI, Math.acos(cos / hip), true);
    }
    if (sin > 0 && cos > 0) {
    ctx.ellipse(clickX, clickY, cos / 2, cos / 2, 0, 0, Math.acos(cos / hip));
    }
    ctx.stroke();


    ctx.fillStyle="cyan";
    ctx.fillText("ori:   " + clickX + ", "+ clickY, 0, textPlace * 6);

    ctx.strokeStyle="cyan";
    ctx.beginPath();
    ctx.ellipse(clickX, clickY, CursorRadius, CursorRadius, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}
