let teapot;
var wwwof ='word wide web of fish';
document.write('<center><p style="font-size:40px">wwwof </p><b><h1>',wwwof,'</h1><b></center>') ;

function sumitliters() {
canvas=createCanvas(1000, 1000, WEBGL);
x = (windowWidth - width) / 2;
//y = (windowHeight - height) / 2;
y=250;
canvas.position(x, y);
large=document.getElementById("large");
width=document.getElementById("width");
deep=document.getElementById("deep");
cubic=document.getElementById("cubic");
rectangle=document.getElementById("rectangle");
Select = document.From2.Select2;
Select=document.getElementById('Select1');
selected = Select.options[Select.selectedIndex].value;
if (selected=='rectangle') {
	l=large.value
	w=width.value
	d=deep.value
	liters=(l*d*w)/1000;
	width.disabled=false;
	deep.disabled=false;
	console.log(liters)
	parrafo=document.getElementById('parrafo');
	parrafo.innerHTML=liters
	drawcube(l,w,d,0,0);
}
	
else {
	l=large.value
	liters=(l**3)/1000;
	width.disabled= true;
	deep.disabled = true;
	deep.value=0
	width.value=0
	console.log(liters);
	parrafo=document.getElementById('parrafo');
	parrafo.innerHTML=liters
	acuarium=drawcube(l);
	draw=document.getElementById('draw');
	draw.innerHTML=acuarium;
}
}

function drawcube(l,d,w,x,y) {
	frameCount;
	background(200);
	rotateX(frameCount * 0.01);
  	rotateY(frameCount * 0.01);
	acuarium=box(l,d,w,x,y);
//	draw=document.getElementById('draw');
//	draw.innerHTML=acuarium;
}