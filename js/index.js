var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  }
};
var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () {
    console.log("Estoy encantado de conocerle.");
  }
};
var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  }
};

// esto es arreglo, donde cree la variable de los nombres de los pinguinos y luego imprimí en la consola lo que ell profe solicitó

var nombres= [gunter,ramon,fred];
console.log(nombres);

// Aquí se tiene que iterar, que significa crear el ciclo for y que cada pinguino se encuentre la propiedades y length lo utilicé para que cada objeto tenga su propiedad
// y se muestre el nombre correspodiente de los 3 pinguinos. 
for(var l=0; l< nombres.length; l++){
  console.log("Nombre: " + nombres[l].name);
};

// Imprimir la longitud de la matriz, con el console, la variable nombres, que guardan a los 3 pinguinos dentro del arreglo y su length. 
//Lo cual se van a dar una longitud de 3, porque es la cantidad guardada, o sea los tres pinguinos. 
console.log("La longitud solicitada de la matriz es: "+ nombres.length);

// Aquí se hace un for para iterar en el ciclo for y ver el numberOfFeet
// Busqué en internet el como hacer una computadora y sale de esa manera como math. 
for (var l = 0; l < nombres.length; l++) {
  nombres[l].numberOfFeet = Math.floor(Math.random()*5) +1; 
  console.log("Los pies son: " + nombres[l].numberOfFeet);
};

//Aquí colocaremos un if dentro del for donde indique el pinguino que puede volar. 
for (var l = 0; l < nombres.length; l++) {
  var estado = nombres[l].canFly
  if(estado== true){
      
    console.log(nombres[l].name + " felicidades puede volar");
  }
}

// los pinguinos que tienen 2 pies, se hace un arreglo con el numeroffeet

for (var l = 0; l < nombres.length; l++) {
  if (nombres[l].numberOfFeet > 2) {
    console.log(nombres[l].name + " El pinguino tiene más de dos pies");
  }
}

//Aí se agrega una nueva propiedad, su nueva propiedad llamada favoritefoods y entre los [] coloco las ideas. 
nombres.favoriteFoods=["Carne", "Pescado", "frutas"]


console.log(nombres.favoriteFoods[1]);


nombres.favoriteFoods[2]='piñas';


for (var i= 0; i<nombres.length; i++) {
    console.log(nombres.favoriteFoods);
}