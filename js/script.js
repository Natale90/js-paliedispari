// L'utente sceglie pari o dispari e un numero
// da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto.


function BetGame(value1, value2){

  if ( value1 != 0 && value1 != 1){

    return alert("primo paramentro non valido")
  } else if (value2 > 5 || value2 < 1){

    return alert("secondo paramentro non valido");
  } else{

    var rnd = getRnd(1, 5); // Math.floor(Math.random() * 5) + 1;
    var somma = value2 + rnd;

    if (somma % 2 == 0 && value1 == 0){

      return "Hai vinto il numero sorteggiato è il " + somma + " (pari)";
    } else if ( somma % 2 != 0 && value1 == 1){

      return "Hai vinto il numero sorteggiato è il " + somma + "  (dispari)";
    } else {

      return "hai persso " + somma;
    }
  }

}


function getRnd(minValue, maxValue){

  var min = minValue;
  var max = maxValue - min + 1;

  var random = Math.floor(Math.random() * max) + min;

  return random;
}

function es1(){
  var pairOrOdd = prompt("inserisci zero per scelgiere pari e uno per scegliere dispari");
  var userNum = parseInt(prompt("inserisci un numero compreso tra 1 e 5"));
  var whoWins = BetGame(pairOrOdd, userNum);
  BetGame(pairOrOdd, userNum);
  console.log(whoWins);
}

// es1();


//------------------------------------------------------------------------

// Una funzione per capire se la parola è palindroma

function splitTheString(x){
  var low = x.toLowerCase();
  var array = low.split("");
  return array;
}

function reverseTheString(x){
  var low = x.toLowerCase();
  var array = low.split("");
  var invertedArray = array.reverse();
  return invertedArray;
}

function isPalindrom(value){

  var parola = splitTheString(value);
  var parolaReverse = reverseTheString(value);

  for (i = 0; i < parola.length; i++){

    if (parola[i] != parolaReverse[i]){

      return ("la parola inserita non è palindroma");
      break;
    } else {

      return ("la parola inserita è palindroma");

    }
  }

}

function es2(){
  var inputWord = prompt("Inserisci una parola per scoprire se è una prola palindroma");
  isPalindrom(inputWord);
  console.log(isPalindrom(inputWord));
}


es2();
