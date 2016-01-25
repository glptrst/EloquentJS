var string = ""; 

for (var i = 0; i < 7; i++) {
	string += "#";
	console.log(string);
}	

//ALTERNATIVELY:
var string = "";

while (string.length < 7) {
	string += "#";
	console.log(string);
}
