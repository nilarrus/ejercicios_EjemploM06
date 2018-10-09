function obtenerNumInicial(){
	//Puede ir junto
	var element = document.getElementsByName("num")[0];
	var numInicial = element.value;
	var res= calcularFactorial(numInicial);
	pintarRes(res);
}
function calcularFactorial(numInicial){
	var res=1;
	for (var i = 1; i <= numInicial; i++) {
			res = res *i;
	}
	return res;
}
function pintarRes(res){
	var elementP = document.getElementById("resultado");
	elementP.innerText = res;
	//alert(res);
}