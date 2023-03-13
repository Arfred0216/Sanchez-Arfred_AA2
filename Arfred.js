// for (var x = 0; x<5; x++){
// 	document.getElementById("footer").innerHTML += "loop number: " + (x+1) + "<br>";
// }


var x = 1;
while(x<=51){
	if(x<51){
		document.getElementById("first").innerHTML += x + ", ";
		x = x + 2;
	}else{
		document.getElementById("first").innerHTML += x + " ";
		x = x + 2;

	}

}

var y=2;
do{
	if (y<50) {
		document.getElementById("second").innerHTML += y + ", ";
	y = y + 2;
	}else{
		document.getElementById("second").innerHTML += y + " ";
	y = y + 2;

	}

}while(y<=50)


for (var z = 1; z <=4096; z= z*2) {
	if(z<4096){
		document.getElementById("third").innerHTML += z + ", ";
	}else{
		document.getElementById("third").innerHTML += z + " ";
	}
}


