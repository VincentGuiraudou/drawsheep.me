# Déroulement du jeu

## Initialisation

1. L'hôte choisit son pseudo et crée la partie
2. Les joueurs choisissent leur pseudo et rejoignent la partie
3. Quand tous les joueurs sont présents, l'hôte lance la partie

## Début de partie

1. Mélange des joueurs
2. Choisir un mot
3. Appuyer sur "Envoyer"
4. Attendre que tout le monde ait appuyé
5. Récupérer le mot du joueur précédent
6. Dessiner ce mot
7. Appuyer sur "Envoyer"
8. Attendre que tout le monde ait appuyé
9. Récupérer le dessin du joueur précédent
10. Ecrire le mot qui a été dessiné
11. Appuyer sur "Envoyer"
12. Attendre que tout le monde ait appuyé
13. Recommencer à partir du point 4 jusqu'a qu'on retombe sur son mot
14. Affichage pour tout le monde de chaque mot avec le dessin qui a été fait et ce qui a été trouvé avec le nom des joueurs dans l'ordre

## Fin de Partie

# Autre

N joueurs >= 3

## Stockage dessins

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
