function lanzarDados(){
	var resultado = [];
	var suma10 = 0;
	for (var i = 0; i < 100; i++) {
		var dado1 = dadoR();
		var dado2 = dadoR();
		var suma = dado1 +dado2;
		resultado[i] = suma;

		if(suma==10){
			suma10++;
		}
	}
	printarTabla(resultado,suma10);
/*	do{

	}while();*/
}
function dadoR(){
return Math.floor(Math.random()+)+; //random del 1 al 6 .
}

function printarTabla(array, data){
	
}