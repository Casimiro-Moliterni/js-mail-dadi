// ESERCIZIO N°2
// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Per la soluzione di questo esercizio NON è consentito utilizzare .includes di js!

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

// Mail

// Chiedi all’utente la sua email,
const userMail = prompt('Scrivi la tua email')


// lista mail 


const listMail = ['marcolandi@gmail.com','andrearossi@libero.it','massimolitre@hotmail.it','moliternicasimiro@hotmail.it','giulioCartes@gmail.com','cosimo@gmail.com','lucasaper@gmail.com'];

let: mailFound = false ;


// lista mail,
for (let i = 0; i < listMail.length; i++) {
    const thisMail = listMail[i];
    console.log(thisMail)


//controlla mail per trovare quella giusta
if(thisMail === userMail){
    mailFound = true ;
}
// stampa un messaggio appropriato sull’esito del controllo.

}

// stampa un messaggio appropriato sull’esito del controllo.
if(mailFound === true){
    console.log('"puoi accedere"')
}else{
    console.log('"non puoi accedere"')
}