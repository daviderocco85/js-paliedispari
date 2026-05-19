//ES Palindromi-----------------------------------------/

const inputWord = prompt('Inserisci una parola');


/** Funzione di validazionen input solo stringhe senza spazi e caratteri speciali*/ 
function isValidString(input) {
  const onlyLetters = /^[A-Za-z]+$/;   // accetta solo lettere
  return input && isNaN(input) && onlyLetters.test(input);
}

 /** Funzione che controlla se una parola è palindroma usando il ciclo for */ 
function isPalindrome(word) {
 const cleaned = word.trim().toLowerCase().split(' ').join('');
      // Confronto i caratteri da inizio e fine
      for (let i = 0; i < cleaned.length / 2; i++) {
          if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) {
            return false; // appena trovo una differenza, non è palindroma
          }
        }

        return true; // se il ciclo finisce senza differenze, è palindroma
      }

 
/** Funzione alternativa che controlla se una parola è palindroma */   
function isPalindromeAlternative (word){
  
  const cleaned = word.trim().toLowerCase().split(' ').join(''); // normalizzo
  const reversed = cleaned.split("").reverse().join(""); // la inverto
  return cleaned === reversed;                 // confronto


}


 // Controllo validità input: deve essere una stringa non vuota e non numerica
if (!isValidString(inputWord)) {
  alert("Errore: devi inserire una parola valida (solo lettere, senza spazi e caratteri speciali).");
} else {

      // Verifica e stampa il risultato
      if (isPalindrome(inputWord)) {
        alert(`La parola ${inputWord} è palindroma`);
      } else {
        alert(`La parola ${inputWord} NON è palindroma`);
      }

}