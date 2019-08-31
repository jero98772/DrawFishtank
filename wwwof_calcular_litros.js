var cadena_de_texto='calular volumen de un acuario en litros';
document.write('<center><p style="font-size:40px">wwwof </p><b><h1>'+"wwwof una parte de un gran proyeto"+'</h1><b></center>') ;

function calculo() {
canvas=createCanvas(1000, 1000, WEBGL);
x = (windowWidth - width) / 2;
//y = (windowHeight - height) / 2;
y=250;
canvas.position(x, y);
largo=document.getElementById("largo");
ancho=document.getElementById("ancho");
alto=document.getElementById("alto");

cubico=document.getElementById("cubico");
rectangulo=document.getElementById("rectangulo");

Selecion=document.From2.Selecion2;
Selecion=document.getElementById('Selecion1');
selecionado=Selecion.options[Selecion.selectedIndex].value;
if (selecionado=='rectangulo') {
	l=largo.value;
	a=ancho.value;
	al=alto.value;
	litros=(l*a*al)/1000;
	ancho.disabled=false;
	alto.disabled=false;
	console.log(litros);
	dibujar_el_cubo(l,a,al,0,0);
	parrafo=document.getElementById('parrafo');
	parrafo.innerHTML=litros;
}
	
else {
	l=largo.value
	litros=(l**3)/1000;
	ancho.disabled= true;
	alto.disabled = true;
	alto.value=0;
	ancho.value=0;
	console.log(litros);
	parrafo=document.getElementById('parrafo');
	parrafo.innerHTML=litros;
	acuario=dibujar_el_cubo(l);
}
}

function dibujar_el_cubo(l,a,al,x,y) {
	frameCount= 1.5;
	background(200);
	rotateX(frameCount * 0.01);
  	rotateY(frameCount * 0.01);
	acuario=box(l,a,al,x,y);
//	draw=document.getElementById('draw');
//	draw.innerHTML=acuarium;
}