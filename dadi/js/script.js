
// ESERCIZIO N°1

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.



// HELPS

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


// ESERCIZIO N°1

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// geneare numero randaom da 1 a 6 

// genararlo sia per giocatore che per computer

// stabilire il vincitore , in base al punteggio più alto 

const userEvenOrOdd = prompt('Scegli pari o dispari');
console.log(userEvenOrOdd);

const userNumber = parseInt(prompt('Dammi un numero tra 1 e 9'));
console.log(userNumber);

// generare un numero casuale per il computer compreso tra 1 e 9
const computerNumber = Math.floor(Math.random() * 9) + 1;
console.log(computerNumber);

// sommare i 2 numeri
const sum = userNumber + computerNumber;
console.log(sum);

// stabilire se il numero è pari o dispari
let gameResult;
if(sum % 2 === 0) {
    gameResult = 'pari';
} else {
    gameResult = 'dispari';
}
console.log(gameResult);

// confrontiamo la scelta dell'utente pari e dispari
let userMessage;
if(userEvenOrOdd === gameResult) {
    userMessage = 'Hai vinto';
    // alert('Hai vinto');
} else {
    userMessage = 'Hai perso';
    // alert('Hai perso');
}

// comunichiamo se ha vinto o ha perso
alert(userMessage);