
var wwwof ='word wide web of fish';
document.write('<center><p style="font-size:40px">wwwof </p><b><h1>',wwwof,'</h1><b></center>') ;

function sumitliters() {
canvas=createCanvas(500, 500, WEBGL);
x = (windowWidth - width) / 2;
//y = (windowHeight - height) / 2;
y=250;
canvas.position(x, y);
large=document.getElementById("large");
width=document.getElementById("width");
heigh=document.getElementById("heigh");
cubic=document.getElementById("cubic");
rectangle=document.getElementById("rectangle");
Select = document.From2.Select2;
Select=document.getElementById('Select1');
selected = Select.options[Select.selectedIndex].value;
if (selected=='rectangle') {
	l=large.value
	w=width.value
	h=heigh.value
	liters=(l*h*w)/1000;
	width.disabled=false;
	heigh.disabled=false;
	console.log(liters)
	parrafo=document.getElementById('parrafo');
	parrafo.innerHTML=liters
	acuarium=setInterval(drawcube(l,w,h,0,0),100);
}
	
if (selected=='cubic'){
	l=large.value
	liters=(l**3)/1000;
	width.disabled= true;
	heigh.disabled = true;
	heigh.value=0
	width.value=0
	console.log(liters);
	parrafo=document.getElementById('parrafo');
	parrafo.innerHTML=liters
	acuarium=setInterval(drawcube(l),100);
}
}

function drawcube(l,w,h,x,y) {
	frameCount;
	background(200);
	rotateX(frameCount * 0.01);
  	rotateY(frameCount * 0.01);
	acuarium=box(l,w,h,x,y);
//	draw=document.getElementById('draw');
//	draw.innerHTML=acuarium;
}
setInterval(sumitliters,100);