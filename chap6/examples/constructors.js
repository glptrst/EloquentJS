function Rabbit(type) {
    this.type = type;
}

var killerRabbit = new Rabbit('killer');
var blackRabbit = new Rabbit('black');

console.log(blackRabbit.type);
//-> black

Rabbit.prototype.speak = function(line) {
    console.log('The ' + this.type + ' rabbit says ' + line + '.');
}

killerRabbit.speak("'I kill you'");
//-> The killer rabbit says 'I kill you'.
