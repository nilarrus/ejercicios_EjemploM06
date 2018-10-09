function readNumber(){
	var input = document.getElementsByName("num")[0];
	var numero = input.value;

	var validado = validation(numero);

	print(validation(numero));

}
function validation(num){
	var val = true;
	var aux = 2;
	do{
		if(num%aux == 0){
			val= false;
		}
		aux++;

	}while(aux<num);

	return val;
}
function print(data){
	var valorP = document.getElementById("res");
	if (data) {
		valorP.innerText = "Es primo"; 
	}else{
		valorP.innerText = "No es primo"; 
	}
}