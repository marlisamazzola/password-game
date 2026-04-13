// Quali sono i 2 modi di dichiarare una variabile?
// I due modi di dichiarare una variabile sono let nome = valore (quando il valore può cambiare) e 
// const nome = valore (quando il valore non cambia). Esiste anche var, ma non viene più utilizzato.


// Scrivi 3 modi di dichiarare variabili (codice)

let A = false;
let B; //undefined
const C = '123';

// Come viene chiamato typescript e cosa aggiunge al classico js vanilla?
// Typescript è un superset di JS, che consente di aggiungere funzionalità e riempire i
//"buchi logici" presenti in JavaScript, il quale fu sviluppato nel 1995 in soli dieci giorni.
//Consente ad esempio la tipizzazione, ovvero il poter dire esplicitamente quale tipo
//di valore contiene una variabile (number, string, boolean...). Ciò permette di 
//essere avvisati qualora si commette un errore. Tuttavia, al browser arriva senza tipizzazione:
//viene infatti transpilato in JS, ovvero tradotto in altro codice.


// Scrivere delle variabili con tutti i type appresi a lezione (codice)

let D: number = 3;
let E: string = '456';
let F: boolean = false;
let G: number[] = [10, 5, 653, 6, 7]

// Come posso accedere ad uno specifico elemento di un array?
//Tramite il suo indice indicato tra parentesi quadre dopo il nome dell'array, che parte da 0.

// Crea un array di length 20 con numeri misti chiamato "myNumbers" 
// e stampa dei console.log con il quarto, e il decimo valore (codice)

const myNumbers: number[] = [5, 7, 2, 65, 875, 23, 6, 234, 6, 7, 234, 65, 23, 87, 4, 23, 1, 6544, 8, 4];

console.log(myNumbers[3]);
console.log(myNumbers[9])


// Quanti tipi di loop conosci?
// 6 tipi: While, Do while, For-index, forEach, For of, For in


// Scrivi ogni loop che conosci
// - While: esegue finchè una condizione è vera;
// - Do while: simile, ma il codice viene eseguito almeno una volta prima di controllare la condizione;
// - For: ciclo con indice, condizione e operazione di incremento, si usa quando si sa quante iterazioni fare;
// - forEach: metodo degli array, scorre tutti gli elementi;
// - For of: scorre tutti i valori di un array;
// - For in: scorre tutte le proprietà di un oggetto


// Utilizzando "myNumbers":
// crea un nuovo array che contenga solo i numeri pari facendo attenzione di non creare referenza, 
// ma di creare effettivamente un nuovo array indipendente dall'originale. Cercare differenza tra referenza e valore
// crea un nuovo array che contenga il primo elemento che rispetta una condizione specifica di tua scelta
// per ogni elemento di "myNumbers" fai un ciclo che raddopia i valori. Se hai fatto bene, i due array creati prima non si modificheranno.


const myNumbersPari = myNumbers.filter(number => number % 2 == 0);
console.log(myNumbersPari);


//referenza: il passaggio per referenza avviene per variabili di tipo complesso (come array e object): 
//viene utilizzato l'indirizzo della stessa cella di memoria, quindi ogni modifica impatta il dato originale.
//valore: : il passaggio per valore avviene per variabili di tipo primitivo (es. string, number, boolean). 
//Viene creata una copia indipendente del dato in una nuova cella di memoria.

const myNumbersFind = myNumbers.find(number => number == 65);

const myNumbersRaddoppiati = myNumbers.map(number => number * 2);;

console.log(myNumbers);
console.log(myNumbersPari);
console.log(myNumbersFind);


