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

//without global variable:
for (var i = 0; i < 7; i++) {
  	var string = "";
  	for (var j = 0; j < i; j++)
    		string += "#";
  	console.log(string);
}
