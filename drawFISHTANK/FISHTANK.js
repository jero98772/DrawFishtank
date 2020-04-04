
class fishtank{
	constructor() {
		this.figura=document.getElementById("figura");
		this.texto_lado1=document.getElementById("lado01");
		this.texto_lado2=document.getElementById("lado02");
		this.texto_lado3=document.getElementById("lado03");
		this.entrada_lado_1=document.getElementById("entrada_lado_1");
		this.entrada_lado_2=document.getElementById("entrada_lado_2");
		this.entrada_lado_3=document.getElementById("entrada_lado_3");
		this.parrafo=document.getElementById('parrafo');
		this.vel =0.01
		this.lados = new createVector(this.texto_lado1,this.texto_lado2,this.texto_lado3)
		this.frameCount = 0;
		this.parrafo;
	}
rectangle(){

	this.l = parseFloat(this.entrada_lado_1.value);
	this.w = parseFloat(this.entrada_lado_2.value);
	this.h = parseFloat(this.entrada_lado_3.value);
	this.litros=(this.l*this.h*this.w)/1000;
	console.log(this.litros);
	//this.entrada = String(this.entrada)
	//this.litros = String(this.litros)
	this.parrafo.innerHTML=this.litros+"  litros";
	this.figura.innerHTML='prisma_rectangular';
	this.lados.x.innerHTML='largo cm';
	this.lados.y.innerHTML='alto cm';
	this.lados.z.innerHTML='ancho cm';
	this.frameCount = this.frameCount+ this.vel;
	rotateX(this.frameCount);
  	rotateY(this.frameCount);
	this.fishtank = box(this.l,this.w,this.h,0,0);
	//return this.fishtank
	}	
cubic(){
	this.l=parseFloat(this.entrada_lado_1.value)
	this.litros=(this.l**3)/1000;

	console.log(this.litros);
	//this.entrada = String(this.entrada)
	//this.litros = String(this.litros)
	this.parrafo.innerHTML=this.litros+" litros"
	this.figura.innerHTML='cubica'
	this.lados.x.innerHTML='largo (solamente) cm '
	this.lados.y.innerHTML='no es neseario'
	this.lados.z.innerHTML='no es neseario'
	this.frameCount = this.frameCount+ this.vel;
	rotateX(this.frameCount + 1 );
	rotateY(this.frameCount + 1 );
	this.fishtank = box(this.l);
	//return this.fishtank
}

triangularpris(){
	this.b=parseFloat(this.entrada_lado_1.value)
	this.Hbase=parseFloat(this.entrada_lado_2.value)
	this.h=parseFloat(this.entrada_lado_3.value)

	this.litros=((this.b*this.Hbase)/2)*this.h
	this.litros=	this.litros/1000
	//this.entrada = String(this.entrada)
	//this.litros = String(this.litros)
	this.figura.innerHTML='prisma_triangular'
	this.parrafo.innerHTML=this.litros+"litros"
	this.lados.x.innerHTML='largo base cm'
	this.lados.y.innerHTML='altura de la base cm'
	this.lados.z.innerHTML='altura 3 cm'
	console.log(this.litros);
	this.frameCount = this.frameCount+ this.vel;

	rotateX(this.frameCount + 1 );
  	rotateY(this.frameCount + 1 );	
	this.fishtank =  cylinder(this.b,this.h,3)
	//return this.fishtank
}
cilinder(){
	this.R=parseFloat(this.entrada_lado_1.value)
	this.h=parseFloat(this.entrada_lado_2.value)
	this.litros=PI*(this.R**2)*this.h
	this.litros=	this.litros/1000
	//this.entrada = String(this.entrada)
	//this.litros = String(this.litros)
	this.lados.x.innerHTML='radio cm'
	this.lados.y.innerHTML='alto cm'
	this.lados.z.innerHTML='no es neseario'
	this.parrafo.innerHTML=this.litros+" litros"
	this.frameCount = this.frameCount+ this.vel;

	console.log(this.litros);
	rotateX(this.frameCount  );
  	rotateY(this.frameCount );
	this.fishtank =  cylinder(this.R,this.h,24)
	//return this.fishtank
}


}
