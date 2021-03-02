
var wwwof ='word wide web of fish';
document.write('<center><p style="font-size:40px">wwwof </p><b><h2>',wwwof,'</h2><b></center>') ;
let canvas;
let textside1,textside2,textside3,shape;
let side1,side3,side2;
let cubic,rectangular_prism;
let paragraph;
let Select,selected,select;
let l,r,R,w,h;
let liters ,acuarium;
let angle;
let y,x;
let half_torus,torusVOL,radius1,radius2,fishtank_classic,cylinder;
let miliseconds=100;

function sumitliters() {
canvas=createCanvas(350, 350, WEBGL);
//x=650
x = (windowWidth - width) / 2;
//y = (windowHeight - height ) / 2;
y=215;
canvas.position(x, y);

shape=document.getElementById("shape");
textside1=document.getElementById("side01");
textside2=document.getElementById("side02");
textside3=document.getElementById("side03");

side1=document.getElementById("side1");
side2=document.getElementById("side2");
side3=document.getElementById("side3");
cubic=document.getElementById("cubic");
paragraph=document.getElementById('paragraph');
rectangular_prism=document.getElementById("rectangular_prism");
Select = document.From2.Select2;
Select=document.getElementById('Select1');
selected = Select.options[Select.selectedIndex].value;
if (selected=='rectangular prism') {
	l=parseFloat(side1.value)
	w=parseFloat(side2.value)
	h=parseFloat(side3.value)
	liters=(l*h*w)/1000;
	console.log(liters)

	paragraph.innerHTML=liters
	shape.innerHTML='rectangular prism'
	textside1.innerHTML='large'
	textside2.innerHTML='height'
	textside3.innerHTML='width'
	acuarium=setInterval(drawcube(l,w,h,0,0),miliseconds);
}
	
if (selected=='cubic'){
	l=parseFloat(side1.value)
	liters=(l**3)/1000;

	console.log(liters);
	shape.innerHTML='cubic'
	textside1.innerHTML='large (only) '
	textside2.innerHTML='not needed'
	textside3.innerHTML='not needed'
	paragraph.innerHTML=liters
	acuarium=setInterval(drawcube(l),miliseconds);
}
if (selected=='fishtank_classic'){
	radius1=parseFloat(side1.value);
	R=radius1;
	radius2=parseFloat(side2.value);
	r=radius2;
	h=parseFloat(side3.value);
	
	torusVOL=PI*R*(r**2);
	half_torus=torusVOL/2;
	cylinder=R*(PI**2)*h;
	fishtank_classic=cylinder+half_torus
	liters=fishtank_classic/1000
	print(torusVOL)
	print(half_torus)
	print(cylinder)
	print(fishtank_classic)
	print(liters)
	
	//volumen_sphere=(4/3)*PI*(R**3)
	//healment_sphere=((1/3)*PI*(h**2))*((3*r)-h)

	//total_healments=healment_sphere*2
	shape.innerHTML='fishtank_classic'
	textside1.innerHTML='big radio R'
	textside2.innerHTML='small radio r -big radio R'
	textside3.innerHTML='height'
	paragraph.innerHTML=liters
	draw_fishtank_clasic(R,r,h);
}
if (selected=='triangular prism'){
	H=parseFloat(side1.value)
	b=parseFloat(side2.value)
	h=parseFloat(side3.value)
	liters=((h*b)/2)*H
	shape.innerHTML='triangular prism'
	textside1.innerHTML='height touch the floor'
	textside2.innerHTML='base touch the floor'
	textside3.innerHTML='height in air '
	paragraph.innerHTML=liters+"<h1>no image</h1>"

}
if (selected=='cylinder'){
	R=parseFloat(side1.value)
	h=parseFloat(side2.value)
	liters=PI*(R**2)*h
	textside1.innerHTML='radio'
	textside2.innerHTML='height'
	textside3.innerHTML='not needed'
	paragraph.innerHTML=liters+"<h1>no image</h1>"

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
function draw_fishtank_clasic(R,r,h){
	frameCount;
	background(200);
	/*
	rotateX(frameCount * 0.01);
  	rotateY(frameCount * 0.01);
	translate(0, 0);*/

	rotateX(frameCount * 0.01);
  	rotateY(frameCount * 0.01);
	ellipsoid(R,h,R);
}
setInterval(sumitliters,miliseconds);
