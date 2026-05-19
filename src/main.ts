import './style.css'

// Genera la password come stringa per poter confrontare le singole cifre
let psw = Math.floor(Math.random() * 90000 + 10000).toString(); 

const divApp = document.getElementById("app");

createUserInputPassword();

function createUserInputPassword() {
  const inputPassword = document.createElement("input");
  inputPassword.type = "text"; 
  inputPassword.id = "password";
  inputPassword.maxLength = 5;
  inputPassword.placeholder = "es. 12345";
  
  inputPassword.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement;
    target.value = target.value.replace(/\D/g, ''); // Accetta solo numeri
    verifyPswCorrect(target.value);
  });

  const dots = document.getElementById("dots");
  if (divApp && dots) {
    divApp.insertBefore(inputPassword, dots);
  }
}

function verifyPswCorrect(PswUtente: string) {
  let counter = 0;
  for (let i = 0; i < 5; i++) {
    const dot = document.getElementById("dot" + i);
    if (!dot) continue;

    if (PswUtente[i] === undefined) {
      dot.style.backgroundColor = "gray";
    } else if (PswUtente[i] === psw[i]) {
      dot.style.backgroundColor = "green"; // Posto giusto
      counter++;
    } else if (psw.includes(PswUtente[i])) {
      dot.style.backgroundColor = "orange"; // Numero presente ma posto sbagliato
    } else {
      dot.style.backgroundColor = "red"; // Numero non presente
    }
  }

  if (PswUtente.length === 5) {
    showMessage(counter);
  } else {
    document.getElementById("messaggio")!.innerHTML = "";
  }
}

function showMessage(correctCount: number) {
  const messaggio = document.getElementById("messaggio")!;
  if (correctCount === 5) {
    messaggio.innerHTML = `<img class="icona" src="./public/unlock.png"/><strong>Password corretta!</strong>`;
  } else {
    messaggio.innerHTML = `<img class="icona" src="./public/locked-computer.png"/><strong>Password errata!</strong>`;
  }
}

// Bottone reset che rigenera anche la password per il nuovo tentativo
document.getElementById("resetBtn")!.addEventListener("click", () => {
  psw = Math.floor(Math.random() * 90000 + 10000).toString();
  console.log("Nuova password:", psw);
  
  const input = document.getElementById("password") as HTMLInputElement;
  if (input) input.value = "";
  
  for (let i = 0; i < 5; i++) {
    const dot = document.getElementById("dot" + i);
    if (dot) dot.style.backgroundColor = "gray";
  }
  document.getElementById("messaggio")!.innerHTML = "";
});