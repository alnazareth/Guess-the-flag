/*
   Name: BanderasQUIZ.
  Copyright: A121.
  Author: Alfredo S.
  fecha: 12-10-16 Hora: 03:32am
  Description: Indie
  contacto: alfredgt682@gmail.com
*/
var i=0;
var j=0;
var k=0;
var usuario;
var audio1;
var color1=0;
var color2=0;
var color3=0;
var nivel = 1;
var time =0;
var nombreUsuario;
var initialize=0;
var sound;
var cambio=1;
var score=0;
var timer=4;
var timerminutos=59; 
var seg =300; //300
var tiempoInicio = 30;
sound = $(document);
sound.click(clicksound);


function minutos(){
	if ((timer>-1) && (seg>2) ){
		seg--;
	timerminutos = timerminutos-1;
	if (timerminutos==0){
		timerminutos=59;
		timer= timer-1;
	}if (timerminutos<10){
		timerminutos = '0'+ timerminutos;
	};
	var temp = timer + ':' + timerminutos;
	var m;
	m=$('#time');
	m.val(temp);
	setTimeout('minutos()',1500);
}else{
	 audio1.src = './sonido/Marimba_usic.mp3';
	var audio = document.createElement('audio');
  audio.style.display = "none";
  audio.src = './sonido/electronics001.wav';
  audio.autoplay = true;
  audio.loop = false;
   setTimeout('go()',1500);
	
}
}


function clicksound() {
	var audio = document.createElement('audio');
  audio.style.display = "none";
  audio.src = './sonido/cartoon008.wav';
  audio.autoplay = true;
  audio.loop = false;
}

function cambio_fondo(){
	if (cambio==25) {
		cambio=1;
	};
	var color, next, pais, alert;
	color =$('#contenedor');
	next = $('#next');
	pais =$('#pais');
	alert= $('.alert');
	switch(cambio){
	case 1:
		color.css('background','#000033');
		next.css('background','#000066');
	
		cambio++;
	break;
	case 2:
		color.css('background','#000066');
		next.css('background','#000099');
		cambio++;
	break;
	case 3:
		color.css('background','#000099');
		next.css('background','#0000cc');
		cambio++;
	break;
	case 4:
		color.css('background','#0000cc');
		next.css('background','#0000ff');
		cambio++;
	break;
	case 5:
		color.css('background','#0000ff');
		next.css('background','#0033ff');
		cambio++;
	break;
	case 6:
		color.css('background','#0033ff');
		next.css('background','#0066ff');
		cambio++;
	break;
	case 7:
		color.css('background','#0066ff');
		next.css('background','#0099ff');
		cambio++;
	break;
	case 8:
		color.css('background','#0099ff');
		next.css('background','#00ccff');
		cambio++;
	break;
	case 9:
		color.css('background','#00ccff');
		next.css('background','#00cccc');
		cambio++;
	break;
	case 10:
		color.css('background','#00cccc');
		next.css('background','#00ffcc');
		cambio++;
	break;
	case 11:
		color.css('background','#00ffcc');
		next.css('background','#00ff99');
		cambio++;
	break;
	case 12:
		color.css('background','#00ff99');
		next.css('background','#00cc99');
		cambio++;
	break;
	case 13:
		color.css('background','#00cc99');
		next.css('background','#00ff99');
		cambio++;
	break;
	case 14:
		color.css('background','#00ff99');
		next.css('background','#00ff66');
		cambio++;
	break;
	case 15:
		color.css('background','#00ff66');
		next.css('background','#00ff33');
		cambio++;
	break;
	case 16:
		color.css('background','#00ff33');
		next.css('background','#00cc00');
		cambio++;
	break;
	case 17:
		color.css('background','#00cc00');
		next.css('background','#00cc33');
		cambio++;
	break;
	case 18:
		color.css('background','#00cc33');
		next.css('background','#00cc66');
		cambio++;
	break;
	case 19:
		color.css('background','#00cc66');
		next.css('background','#99ccff');
		cambio++;
	break;
	case 20:
		color.css('background','#99ccff');
		next.css('background','#99cccc');
		cambio++;
	break;
	case 21:
		color.css('background','#99cccc');
		next.css('background','#cc00cc');
		cambio++;
	break;
	case 22:
		color.css('background','#cc00cc');
		next.css('background','#cc0099');
		cambio++;
	break;
	case 23:
		color.css('background','#cc0099');
		next.css('background','#cc0066');
		cambio++;
	break;
	case 24:
		color.css('background','#cc0066');
		next.css('background','#000066');
		cambio++;
	break;
	case 25:
		color.css('background','#000066');
		next.css('background','#000033');
		cambio++;
	break;



	}
	// setTimeout('cambio_fondo()',1500);
}

function inicio(){
	 audio1 = document.createElement('audio');
  audio1.style.display = "none";
  audio1.src = './sonido/Marimba_music.mp3';
  audio1.autoplay = true;
  audio1.loop = true;
  
	swal({
  title: "Bienvenido(a) a <span style='color:#FFFF00'>B</span><span style='color:#FF0000'>a</span><span style='color:#00ff00'>n</span><span style='color:#0000CC'>d</span><span style='color:#00BB00'>e</span><span style='color:#FFDD00'>r</span><span style='color:#00BB00'>a</span><span style='color:#0000EE'>s</span><span style='color:#660066'>Quiz</span>",
  text: "",
  type: "input",
  showCancelButton: false,
  confirmButtonColor: "",
  closeOnConfirm: false,
  allowEscapeKey: false,
  html: true,
  animation: "slide-from-top",
  inputPlaceholder: "Nombre del jugador"
},function(inputValue){
  if (inputValue === false) return false;
  if (inputValue === " ") return false;
  if (inputValue === "  ") return false;
  if (inputValue === "   ") return false;
  if (inputValue === "    ") return false;
  if (inputValue === "     ") return false;
  if (inputValue === "      ") return false;
  if (inputValue === "       ") return false;
  if (inputValue === "        ") return false;
  if (inputValue === "         ") return false;
  if (inputValue === "          ") return false;
  if (inputValue === "           ") return false;
  if (inputValue === "            ") return false;
  if (inputValue === "             ") return false;
  if (inputValue === "              ") return false;
  if (inputValue === "               ") return false;
  if (inputValue === "                ") return false;
  if (inputValue === "                 ") return false;
  if (inputValue === "                  ") return false;
  if (inputValue === "                   ") return false;
  if (inputValue === "                    ") return false;
  if (inputValue === "                     ") return false;
  if (inputValue === "                      ") return false;
  if (inputValue === "                       ") return false;
  if (inputValue === "                        ") return false;
  if (inputValue === "                         ") return false;
  if (inputValue === "                          ") return false;
  if (inputValue === "                           ") return false;
  if (inputValue === "                            ") return false;
  if (inputValue === "                             ") return false;
  if (inputValue === "                              ") return false;
  if (inputValue === "                               ") return false;
  if (inputValue === "                                ") return false;
  if (inputValue === "                                 ") return false;
  if (inputValue === "                                  ") return false;
  if (inputValue === "                                   ") return false;
  if (inputValue === "                                    ") return false;
  if (inputValue === "                                     ") return false;
  if (inputValue === "                                      ") return false;
  if (inputValue === "                                       ") return false;
  if (inputValue === "                                        ") return false;
  if (inputValue === "                                         ") return false;
  if (inputValue === "                                          ") return false;
  if (inputValue === "                                           ") return false;
  if (inputValue === "                                            ") return false;
  if (inputValue === "                                             ") return false;
  if (inputValue === "                                              ") return false;
  if (inputValue === "                                               ") return false;
  if (inputValue === "                                                ") return false;
  if (inputValue === "                                                 ") return false;
  if (inputValue === "                                                  ") return false;
  if (inputValue === "                                                   ") return false;
  if (inputValue === "                                                    ") return false;
  if (inputValue === "                                                     ") return false;
  if (inputValue === "                                                      ") return false;

  if (inputValue === null) return false;
  if (inputValue === undefined) return false;
  if (inputValue === "") {
    swal.showInputError("Debes tener un nombre para poder jugar!");
    return false
  }

    nombreUsuario=inputValue;
  swal("Bien!", "Jugador(a): " + inputValue, "success");
instrucciones();

});
}

function  instrucciones(){
	
	 var todo = "Score: 0 ";
	usuario=$('#score').val(todo);
	swal({
  title: "<span style='color:#FFFF00'>INST</span><span style='color:#0000FF'>RU</span><span style='color:#cccccc'>CC</span><span style='color:#0000FF'>I</span><span style='color:#ff0000'>ONES</span>",
  text: "<span style='color:#ff0000'> 1. El tiempo es tu enemigo </span><br><span style='color:#0000ff'> <b>2.Haz click para descubrir las banderas.</b></span><br><span style='color:#66ff66'>3.Presiona Ok cuando est&eacute;s listo(a).</span>",
  imageUrl: "./flats/i1.png",
  imageSize: "400x300",
  allowEscapeKey: false,
    confirmButtonColor: "",
  showLoaderOnConfirm: true,
  html: true
});
	
minutos();
	
}


function levels(){
		i = j = k=0;
	if (initialize==0) {
	
	inicio();
	
	initialize=1;	

	};

	cambio_fondo();
	var x, y, z;
	x= $('#primero');
	x.css('background','url(./flats/cover.png)');
	y= $('#segundo');
	y.css('background','url(./flats/cover.png)');
	z= $('#tercero');
	z.css('background','url(./flats/cover.png)');
	var input;
	var levelname;
	if (nivel==1){
	input =$('#pais').val('COLOMBIA');
	levelname = $('#level').val('Nivel 1');
}if(nivel==2){
	input =$('#pais').val('ALEMANIA');
	levelname = $('#level').val('Nivel 2');
}if(nivel==3){
	input =$('#pais').val('PER\u00DA');
	levelname = $('#level').val('Nivel 3');
}if(nivel==4){
	input =$('#pais').val('ARGENTINA');
	levelname = $('#level').val('Nivel 4');
}if(nivel==5){
	input =$('#pais').val('VENEZUELA');
	levelname = $('#level').val('Nivel 5');
}if(nivel==6){
	input =$('#pais').val('ECUADOR');
	levelname = $('#level').val('Nivel 6');
}if(nivel==7){
	input =$('#pais').val('FRANCIA');
	levelname = $('#level').val('Nivel 7');
}if(nivel==8){
	input =$('#pais').val('PARAGUAY');
	levelname = $('#level').val('Nivel 8');
}if(nivel==9){
	input =$('#pais').val('URUGUAY');
	levelname = $('#level').val('Nivel 9');
}if(nivel==10){
	input =$('#pais').val('CHILE');
	levelname = $('#level').val('Nivel 10');
}if(nivel==11){
	input =$('#pais').val('ESTADOS UNIDOS');
	levelname = $('#level').val('Nivel 11');
}if(nivel==12){
	input =$('#pais').val('JAP\u00D3N');
	levelname = $('#level').val('Nivel 12');
}if(nivel==13){
	input =$('#pais').val('ESPA\u00D1A');
	levelname = $('#level').val('Nivel 13');
}if(nivel==14){
	input =$('#pais').val('IRLANDA');
	levelname = $('#level').val('Nivel 14');
}if(nivel==15){
	input =$('#pais').val('SUECIA');
	levelname = $('#level').val('Nivel 15');
}if(nivel==16){
	javascript:location='librerias/set.html';	
}

}


function cambiarp(){
	if (i==18){
		i=0;
	}
	i++;
	var x;
	x=$('#primero');
	switch(i){
		case 1:
			x.css('background', '#FCD116');
			color1=3;
		break;
		case 2:
			x.css('background', 'blue');
			color1=0;
		break;
		case 3:
			x.css('background', 'red');
			color1=5;
		break;
		case 4:
			x.css('background','black');
			color1=1;
		break;
		case 5:
			x.css('background','green');
			color1=4;
		break;
		case 6:
			x.css('background','url(./flats/peru13.png)');
			color1=2;
		break;
		case 7:
			x.css('background','#75AADB');
			color1=6;
		break; 
		case 8:
			x.css('background','url(./flats/venezuela12.png)');
			color1=7;
		break; 
		case 9:
			x.css('background','url(./flats/ecuador12.png)');
			color1=8;
		break; 
		case 10:
			x.css('background','url(./flats/francia.png)');
			color1=9;
		break;  
		case 11:
			x.css('background','#CE1126');
			color1=10;
		break; 
		case 12:
			x.css('background','url(./flats/uruguay13.png)');
			color1=11;
		break; 
		case 13:
			x.css('background','url(./flats/chile12.png)');
			color1=12;
		break; 
		case 14:
			x.css('background','url(./flats/eeuu13.png)');
			color1=13;
		break;
		case 15:
			x.css('background','white');
			color1=14;
		break;
		case 16:
			x.css('background','#CE1126');
			color1=10;
		break; 
		case 17:
			x.css('background','url(./flats/irlanda.png)');
			color1=16;
		break; 
		case 18:
			x.css('background','url(./flats/suecia13.png)');
			color1=17;
		break; 
	}
	
};


function cambiars(){
	if (j==18){
		j=0;
	}
	j++;
	var y;
	y=$('#segundo');
	switch(j){
		case 1:
			y.css('background', 'yellow');
			color2=78;
		break;
		case 2:
			y.css('background', 'white');
			color2=0;
		break;
		case 3:
			y.css('background', '#0038A8');
			color2=5;
		break;
		case 4:
			y.css('background', '#dd0000');
			color2=2;
		break;
		case 5:
			y.css('background','black');
			color2=1;
		break;
		case 6:
			y.css('background','url(./flats/peru23.png)');
			color2=3;
		break;
		case 7:
			y.css('background','url(./flats/argentina.png)');
			color2=4;
		break; 
		case 8:
			y.css('background','url(./flats/venezuela22.png)');
			color2=6;
		break; 
		case 9:
			y.css('background','url(./flats/ecuador22.png)');
			color2=7;
		break; 
		case 10:
			y.css('background','url(./flats/francia.png)');
			color2=8;
		break; 
		case 11:
			y.css('background','url(./flats/paraguay.png)');
			color2=9;
		break; 
		case 12:
			y.css('background','url(./flats/uruguay23.png)');
			color2=10;
		break; 
		case 13:
			y.css('background','url(./flats/chile22.png)');
			color2=11;
		break; //11
		case 14:
			y.css('background','url(./flats/eeuu23.png)');
			color2=12;
		break; 
		case 15:
			y.css('background','url(./flats/japon.png)');
			color2=13;
		break;
		case 16:
			y.css('background','url(./flats/espana.png)');
			color2=14;
		break;
		case 17:
			y.css('background','url(./flats/irlanda.png)');
			color2=15;
		break; 
		case 18:
			y.css('background','url(./flats/suecia23.png)');
			color2=16;
		break; 
		
	}

};


function cambiart(){

	if (k==17){
		k=0;
	}
	k++;
	var y;
	y=$('#tercero');
	switch(k){
		case 1:
			y.css('background', '#ffce00');
			color3=1;
		break;
		case 2:
			y.css('background', '#CE1126');
			color3=2;
		break;
		case 3:
			y.css('background', '#000099');
			color3=5;
		break;
		case 4:
			y.css('background', '#001100');
			color3=3;
		break;
		case 5:
			y.css('background','black');
			color3=4;
		break;
		case 6:
			y.css('background','url(./flats/peru33.png)');
			color3=6;
		break;
		case 7:
			y.css('background','#75AADB');
			color3=7;
		break;
		case 8:
			y.css('background','#CE1126');
			color3=2;
		break; 
		case 9:
			y.css('background','url(./flats/francia.png)');
			color3=9;
		break; 
		case 10:
			y.css('background', '#0038A8');
			color3=10;
		break;
		case 11:
			y.css('background','url(./flats/uruguay33.png)');
			color3=11;
		break; 
		case 12:
			y.css('background','#DC241F');
			color3=2;
		break; 
		case 13:
			y.css('background','url(./flats/eeuu33.png)');
			color3=13;
		break; 
		case 14:
			y.css('background','white');
			color3=14;
		break;
		case 15:
			y.css('background','#CE1126');
			color3=2;
		break;
		case 16:
			y.css('background','url(./flats/irlanda.png)');
			color3=16;
		break; 
		case 17:
			y.css('background','url(./flats/suecia33.png)');
			color3=17;
		break; 
		
	}

};


function validar() {

	if( (nivel==1) && (color1==3) && (color2==5) && (color3==2) ){
		nivel++;
 		felicidades();
	
	}else if( (nivel==2) && (color1==1) && (color2==2) && (color3==1) ){
		nivel++;
 		felicidades();
	}else if( (nivel==3) && (color1==2) && (color2==3) && (color3==6) ){
		nivel++;
 		felicidades();
	}else if( (nivel==4) && (color1==6) && (color2==4) && (color3==7) ){

		nivel++;
 		felicidades();
	}else if( (nivel==5) && (color1==7) && (color2==6) && (color3==2) ){
		color1 = color2 = color3=0;
		nivel++;
 		felicidades();
	}else if( (nivel==6) && (color1==8) && (color2==7) && (color3==2) ){

		nivel++;
 		felicidades();
	}else if( (nivel==7) && (color1==9) && (color2==8) && (color3==9) ){

		nivel++;
 		felicidades();
	}else if( (nivel==8) && (color1==10) && (color2==9) && (color3==10) ){

		nivel++;
 		felicidades();
	}else if( (nivel==9) && (color1==11) && (color2==10) && (color3==11) ){

		nivel++;
 		felicidades();
	}else if( (nivel==10) && (color1==12) && (color2==11) && (color3==2) ){

		nivel++;
 		felicidades();
	}else if( (nivel==11) && (color1==13) && (color2==12) && (color3==13) ){

		nivel++;
 		felicidades();
	}else if( (nivel==12) && (color1==14) && (color2==13) && (color3==14) ){

		nivel++;
 		felicidades();
	}else if( (nivel==13) && (color1==10) && (color2==14) && (color3==2) ){

		nivel++;
 		felicidades();
	}else if( (nivel==14) && (color1==16) && (color2==15) && (color3==16) ){

		nivel++;
 		felicidades();
	}else if( (nivel==15) && (color1==17) && (color2==16) && (color3==17) ){

		nivel++;
 		felicidades();
	}else{
		error();
	}	

}

function go(){
     javascript:location='./librerias/seg.html';
}



function felicidades()
{
	var audio = document.createElement('audio');
  audio.style.display = "none";
  audio.src = './sonido/Right_Buzzer.mp3';
  audio.autoplay = true;
  audio.loop = false;	
 	score= score+5;
	exp= '+'+score;
	todo = "Score :  ";
	all = todo + exp;
	usuario=$('#score').val(all);
	document.getElementById("img1").style.visibility="visible"; 
	setTimeout('ocultar_img1()',1000);
} 
function error()
{
var audio = document.createElement('audio');
  audio.style.display = "none";
  audio.src = './sonido/Wrong_Buzzer.wav';
  audio.autoplay = true;
  audio.loop = false;
	 document.getElementById("img2").style.visibility="visible";

	 setTimeout('ocultar_img2()',1000);
} 

function ocultar_img1()
{

	 document.getElementById("img1").style.visibility="hidden";
	 setTimeout('levels()',200);
} 

function ocultar_img2()
{

	 document.getElementById("img2").style.visibility="hidden";
	 setTimeout('levels()',200);
} 

/*
   Name: BanderasQUIZ.
  Copyright: A121.
  Author: Alfredo S.
  fecha: 12-10-16 Hora: 03:32am
  Description: Indie
  contacto: alfredgt682@gmail.com
*/