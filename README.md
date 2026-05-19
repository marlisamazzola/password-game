# 🔐 Indovina la Password

Un mini-gioco nel browser in cui devi indovinare una combinazione numerica segreta da 5 cifre, con feedback visivo in tempo reale ad ogni cifra inserita.

## Come si gioca

Inserisci una combinazione di 5 numeri nel campo di testo. I pallini colorati ti danno un indizio istantaneo su ogni cifra:

| Colore | Significato |
|--------|-------------|
| 🟢 Verde | Cifra corretta nella posizione giusta |
| 🟠 Arancione | Cifra presente ma nella posizione sbagliata |
| 🔴 Rosso | Cifra non presente nella password |

Indovina tutte e 5 le cifre nella posizione giusta per vincere. Premi **Riprova** per generare una nuova password e ricominciare.

## Tecnologie utilizzate

- **Vite** — bundler e dev server
- **TypeScript** — logica di gioco
- **HTML5** + **CSS3** — struttura e stile
- **Google Fonts** — Nunito

## Struttura del progetto

```
/
├── index.html
├── src/
│   ├── main.ts       # Logica del gioco
│   └── style.css     # Stile e responsive
└── public/
    ├── background.svg
    ├── unlock.png     # Icona vittoria
    └── locked-computer.png  # Icona sconfitta
```

## Caratteristiche

- **Feedback in tempo reale** — i pallini si aggiornano a ogni cifra digitata, senza bisogno di confermare
- **Validazione input** — accetta solo numeri, ignora lettere e caratteri speciali
- **Password casuale** — ogni partita genera una nuova combinazione a 5 cifre
- **Animazione** — icona di vittoria/sconfitta con animazione CSS
- **Responsive** — layout adattivo per mobile e desktop

## Come avviarlo in locale

```bash
# Clona il repository
git clone https://github.com/marlisamazzola/password-game.git
cd password-game

# Installa le dipendenze
npm install

# Avvia il dev server
npm run dev
```

Apri il browser su `http://localhost:5173`.

## Autrice

Marlisa Mazzola — esercizio di frontend development con TypeScript e Vite
