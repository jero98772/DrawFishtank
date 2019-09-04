
var wwwof ='word wide web of fish';
document.write('<center><p style="font-size:40px">wwwof </p><b><h2>',wwwof,'</h2><b></center>') ;

function sumitliters() {
canvas=createCanvas(350, 350, WEBGL);
x=650
//x = (windowWidth - width) / 2;
//y = (windowHeight - height) / 2;
y=10;
canvas.position(x, y);
large=document.getElementById("large");
width=document.getElementById("width");
heigh=document.getElementById("heigh");
cubic=document.getElementById("cubic");
paragraph=document.getElementById('paragraph');
rectangle=document.getElementById("rectangle");
Select = document.From2.Select2;
Select=document.getElementById('Select1');
selected = Select.options[Select.selectedIndex].value;
if (selected=='rectangle') {
	l=parseFloat(large.value)
	w=parseFloat(width.value)
	h=parseFloat(heigh.value)
	liters=(l*h*w)/1000;
	console.log(liters)

	paragraph.innerHTML=liters
	acuarium=setInterval(drawcube(l,w,h,0,0),100);
}
	
if (selected=='cubic'){
	h=parseFloat(heigh.value)
	liters=(h**3)/1000;

	console.log(liters);

	paragraph.innerHTML=liters
	acuarium=setInterval(drawcube(h),100);
}
if (selected=='fishtank_classic'){
	radius1=parseFloat(large.value);
	R=radius1;
	radius2=parseFloat(width.value);
	r=radius2;
	h=parseFloat(heigh.value);
	torusVOL=2*PI*R*(r**2);
	half_torus=torusVOL/2;
	cylinder=PI*(R**2)*h;
	fishtank_classic=cylinder+half_torus
	liters=fishtank_classic/1000
	print(torusVOL)
	print(half_torus)
	print(cylinder)
	print(fishtank_classic)
	print(liters)
	paragraph.innerHTML=liters
	draw_fishtank_clasic(R,r,h);
	
}
}

function drawcube(l,w,h,x,y) {
	actuator_figure();
	acuarium=box(l,w,h,x,y);
//	draw=document.getElementById('draw');
//	draw.innerHTML=acuarium;
}
//this is for create aanothe convination  of figures 
function draw_fishtank_clasic(R,r,h){
 	actuator_figure();
	ellipsoid(R,h,R);
	
}
function actuator_figure(){
	angle;
	background(200);
	rotateX(angle * 0.02);
  	rotateY(angle * 0.01);
}
setInterval(sumitliters,100);