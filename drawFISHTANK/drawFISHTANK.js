let dft ;

function setup() {
	canvas = createCanvas(350, 350, WEBGL) ;
	dft = new fishtank();
}
function draw() {
	background(150);
	x = (windowWidth - width) / 2;
	y = 215;
	canvas.position(x, y);
	Select = document.From1.Selecion;
	Select=document.getElementById('Selecion1');
	seleccion = Select.options[Select.selectedIndex].value;
	console.log(seleccion)
	if (seleccion == 'prisma_rectangular') {
		dft.rectangle()
	}
	else if (seleccion == 'cubica') {
		dft.cubic()
	}
	else if (seleccion == 'prisma_triangular'){
		dft.triangularpris()
	}
	else if (seleccion == 'cilindro') {
		dft.cilinder()
	}

}
//setInterval(draw,500)
