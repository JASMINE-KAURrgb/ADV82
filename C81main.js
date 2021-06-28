var mouseevent="empty";
var lastpositionofx,lastpositionofy;

canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color="blue";
var widthofline=1;


canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    widthofline=document.getElementById("linewidth").value;
    mouseevent="mousedown";
    
    color=document.getElementById("colorinput").value;

}
canvas.addEventListener("mousemove",mymousemove);

function mymousemove(e){
    currentpostionofmousex=e.clientX-canvas.offsetLeft;
    currentpostionofmousey=e.clientY-canvas.offsetTop;
    if(mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthofline;
        console.log("last position of x and y coordinates=");
        console.log("x="+lastpositionofx+"y="+lastpositionofy);
        ctx.moveTo(lastpositionofx,lastpositionofy);
        console.log("current position of x and y=");
        console.log("x="+currentpostionofmousex+"y="+currentpostionofmousey);
        ctx.lineTo(currentpostionofmousex,currentpostionofmousey);
        ctx.stroke();

    }
    lastpositionofx=currentpostionofmousex;
    lastpositionofy=currentpostionofmousey;
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseevent="mouseup";

}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseevent="mouseleave";

}

function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}