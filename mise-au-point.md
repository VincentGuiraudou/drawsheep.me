# Stockage dessins

Tableau d'objets de taille N\*N

var dessin = {
word: "mot demandé",
asker: "celui qui a demandé",
draw: [dessin fait],
drawer: "celui qui a dessiné",
guess: "mot trouvé",
guesser: "celui qui a trouvé"
};

function object(word, asker, draw, drawer, guess, guesser) {
this.word = word; //mot demandé
this.asker = asker; //clui qui a demandé
this.draw = draw; //dessin fait
this.drawer = drawer; //celui qui a dessiné
this.guess = guess; //mot trouvé
this.guesser = guesser; //celui qui a trouvé
}