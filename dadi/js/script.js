
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





// generare un numero casuale per il computer compreso tra 1 e 6
const userNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber , 'Numero Giocatore');

const computerNumber = Math.floor(Math.random() * 6) + 1 ;
console.log(computerNumber,'Numero Computer');

let gameResult;
if(computerNumber === userNumber){
    gameResult = 'Pareggio';
}else if (userNumber > computerNumber){
    gameResult = 'Hai vinto , complimenti!';
}else if (computerNumber > userNumber){
    gameResult = 'Hai vinto il Computer!';
}

console.log(gameResult)