import '../style.css'

const psw = "16598"; //definisco password da indovinare
const divApp = document.getElementById("app");

//creo input e pallini

createUserInputPassword();

//funzione che crea e inserisce il campo password

function createUserInputPassword() {
  const inputPassword = document.createElement("input");
  inputPassword.type = "password";
  inputPassword.id = "password";
  inputPassword.maxLength = 5; //così l'utente non può inserire più di 5 caratteri
  inputPassword.placeholder = "es. 12345";
  inputPassword.addEventListener("input", (e) => {
    const inputValue = (e.target as HTMLInputElement).value;
    verifyPswCorrect(inputValue); //passa il testo digitato alla funzione di verifica che colora i pallini
  });
  const dots = document.getElementById("dots");
  divApp!.insertBefore(inputPassword, dots); //mette input prima dei pallini nella pagina
}

//verifico se i caratteri inseriti corrispondono a quelli della psw preimpostata
//facendo colorare i pallini in modo diverso tramite un contatore

function verifyPswCorrect(PswUtente: string) {
  let counter = 0;
  for (let i = 0; i < 5; i++) {
    const dot = document.getElementById("dot" + i);
    if (PswUtente[i] === undefined) {
      dot!.style.backgroundColor = "gray";
    } else if (PswUtente[i] === psw[i]) {
      dot!.style.backgroundColor = "green";
      counter++;
    } else {
      dot!.style.backgroundColor = "red";
    }
  } if (PswUtente.length === 5) {
    showMessage(counter);   //solo quando utente ha inserito 5 cifre, appare un messaggio
  } else {
    document.getElementById("messaggio")!.innerHTML = "";
  }
}

//messaggio di esito

function showMessage(correctCount: number) {
  const messaggio = document.getElementById("messaggio")!;
  if (correctCount === 5) {
    messaggio.innerHTML = `<img class="icona" src="./public/unlock.png"/><strong>Password corretta!</strong>`;
  } else {
    messaggio.innerHTML = `<img class="icona" src="./public/locked-computer.png"/><strong>Password errata!</strong>`;
  }
}

//bottone per resettare il gioco al click

document.getElementById("resetBtn")!.addEventListener("click", () => {
  const input = document.getElementById("password") as HTMLInputElement;
  input.value = "";
  for (let i = 0; i < 5; i++) {
    document.getElementById("dot" + i)!.style.backgroundColor = "gray";
  }
  document.getElementById("messaggio")!.innerHTML = "";
});