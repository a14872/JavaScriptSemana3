///Funções Pré-Definidas

var arredondar = Math.round(4.7);    // retorna 5

var elevado = Math.pow(8, 2); // calcula base 8 elevado a 2 = 64

var raiz = Math.sqrt(64);      // Raiz quadrada de 64 = 8

var array = [1, 5, 25, 3, 33, 8];

var tangente = Math.tan(45); //calcula a tangente de 45


function arredonda(){
	alert(arredondar);
}

function numElevado(){
	alert(elevado);
}

function numRaiz(){
	alert(raiz);
}

function minArray(){
	var numMin = Math.min(...array); // valor minimo de um array. Colocar 3 pontos porque é um array.
	alert(numMin);

	//ou var numMin = Math.min(1, 3, 20, 15);
}

function maxArray(){
	var numMax = Math.max(...array); // valor maximo de um array
	alert(numMax);
}

function calcTangente(){
	alert(tangente);
}



///Manipulação de Strings

function delSubstring(){
  var string = "Hello world!";
  string = string.substring(2, 8);
  alert(string);
}

function insSubstring(){
	var str1 = "Hell World!";
	var str2 = "o";
	var position = 4;
	var newStr = [str1.slice(0, position), str2, str1.slice(position)].join('');

	alert(newStr);
	
}

function paraString(){
	var num = 7;
	alert(num.toString());
}

function paraInteiro(){
	var str3 = "3";
	alert(parseInt(str3));
}


function returnSubstring(){
	str4 = "Hello World!";
	alert(str4.slice(0, 5));
}

function comprimentoString(){
	var str5 = "Hello World!";
	alert(str5.length);
}

function concatenar(){
	var str6 = "Hello ";
	var str7 = "World";
	var str8 = str6+str7+"!";
	alert(str8);
}

function posSubstring(){
	var str9 = "Hello World!";
	alert(str9.indexOf("World"));
}

function upperCase(){
	var str10 = "hello";
	alert(str10.toUpperCase());
}

function lowerCase(){
	var str11 = "HELLO";
	alert(str11.toLowerCase());
}

function gerarNum(){
	var numGerado = Math.random();
	alert(numGerado);
}

function gerarNumInt(){
	var numGeradoInt = Math.floor((Math.random() * 10) + 1);
	alert(numGeradoInt);
}

