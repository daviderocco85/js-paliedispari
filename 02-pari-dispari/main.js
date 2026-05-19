//ES Pari e dispari-----------------------------------------------
const even = 'pari';
const odd = 'dispari';
const minNumber = 1;
const maxNumber = 5;

/** Funzione che fa partire il gioco */
function playGame() {

/** Funzione che controlla che la scelta sia solo "pari" o "dispari" */
function isValidChoice(choice) {
  return choice === even || choice === odd;
}

/** Funzione che controlla che il numero sia tra 1 e 5 */
function isValidNumber(num) {
  return Number.isInteger(num) && num >= minNumber && num <= maxNumber;
}



/** Funzione che genera il numero tra 1 e 5 da parte del computer */
function numberRandomComputer() {
    return Math.floor(Math.random() * maxNumber) + minNumber;
}

 
/** Funzione che verifica se il numero è pari */
function isEven(number) {
    return number % 2 === 0;
}



// --- Input 1: pari/dispari ---

const inputChoice = prompt('Scegli: pari o dispari?').toLowerCase();

// --- Validazione 1 ---
  if (!isValidChoice(inputChoice)) {
      alert("Errore: devi scegliere solo 'pari' o 'dispari'.");
      return; 
  }
// --- Input 2: numero ---

const inputNumber = Number(prompt('Inserisci un numero tra 1 e 5'));


// --- Validazione 2 ---
 if (!isValidNumber(inputNumber)) {
    alert("Errore: devi inserire un numero valido tra 1 e 5.");
    return;
} 
  
 const computerNumber = numberRandomComputer();
 const sum = inputNumber + computerNumber;
  


// Verifico se il numero è pari o dispari  
let result = odd;

if (isEven(sum)) {
  result = even;
}



  // --- Risultato ---
  if (result === inputChoice) {
    alert(`Hai vinto! Hai scelto ${inputChoice}. Somma = ${sum} (${result})`);
  } else {
    alert(`Hai perso! Hai scelto ${inputChoice}. Somma = ${sum} (${result})`);
  }

}

playGame();