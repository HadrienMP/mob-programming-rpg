# MOB PROGRAMMING: THE ROLE PLAYING GAME
## by Willem Larsen CC-BY-SA-NC 2016
## Powered by the Apocalypse - thanks to BigBadCon 2016 for inspiration

# Pour le maître du jeu
Tout d'abord, merci d'aider à tester ce jeu !

Votre premier devoir est que tout les joueurs se traitent avec Gentillesse, Considération et Respect.  
 
Votre première partie sera étrange, suivez le mouvement ! 
Mais ne négligez pas les règes de base: Gentillesse, Considération et Respect à tout moment.

# Prérequis

Rassemblez au moins 3 joueurs pour faire un mob, le nombre maximum est inconnu. Willem Larsen (le designer)
a facilité ce jeu avec 15 joueurs.

__Aucune expérience du mob n'est nécessaire__

* Vérifiez qu'au moins une personne dans le mob connait les bases du TDD (développement guidé par les tests). C'est à dire sait faire avancer le code à travers les étapes, rouge, vert et refactor avec le minimum de code nécessaire.

* Ayez une bonne connexion, la fibre si possible.
* Jouez avec vos caméras allumées si possible, une grande partie de la communication se fait en non verbal.
* Si vous avez des problèmes de performance, coupez les vidéos des participants.
* Utilisez un outil en ligne comme Cyber Dojo ou préparez un répertoire git sur lequel tous les joueurs peuvent contribuer à l'avance.
* Un système à double écran est idéal. Un écran peut servir pour le code, l'autre pour les fiches de rôle.

# Avant le début du jeu

* Mettez en place un IDE avec un fichier de test dans un langage qu'au moins un des mobbers connait.
* Codez un test qui ne passe pas.
* Utilisez un chronomètre pour effectuer les rotations (Driver, Navigator, Mobber). Vous pouvez utiliser (https://mob-time-server.herokuapp.com/)[Mob Time], c'est un chronomètre partagé qui joue un son au hasard à la fin de chaque tour.

* Changez de rôle toutes les 3 minutes.
* Le driver devient le nouveau navigateur. Le navigateur devient un mobber.
* Définissez à l'avance un ordre pour les rotations et respectez le.

* L'exercice de code est le kata FizzBuzz. Il faut code un programme qui génère “1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16....” jusqu'à un nombre donné (par exemple 100).

__TODO__
* Create and label a Mob Squad zone, a mob badge parking lot, by setting aside a piece of blank wall or whiteboard that will be covered in mob badges that individuals players complete. This becomes the group’s achievement, the total number of rolesheets the members have completed.

# Démarrage du jeu

Lisez à voix haute:

"Bienvenue à tous. Vous êtes ici pour jouer au jeu de rôle du mob. La règle la plus importante et que nous devons nous traiter avec Gentillesse, Considération et Respect, à tout moment. Pouvez-vous m'aider à m'en rappeler quand ça deviendra compliqué ? Le mob est une pratique de développement utilisée pour augmenter la qualité de code et outrepasser les obstacles. En pratique, le mob ressemble plus à un bulldozer qu'à une voiture de course, il est inarrêtable, et méticuleux.  

Nous allons tous commencer avec les fiches de rôle de niveau 1. Chaque fiche de rôle possède un badge. Si vous avez tous les points d'expérience d'un rôle vous faites gagner son badge au mob.
* Si vous partagez votre écran, vous êtes au clavier, vous êtes donc le pilote (Driver).
* Si vous êtes le navigateur (Navigator), vous donnez les instructions au pilote.
* Sinon vous êtes un mobber

Ce jeu a deux buts:
1. Devenir un super mob en incarnant les rôles aussi précisément que possible.
2. Construire votre mob en vous entraidant pour gagner autant de badges que possible dans cette session.

Si vous le faite avec Gentillesse, Considération et Respect, félicitations ! Vous pouvez rejoindre les annales des meilleurs mobs de l'histoire."

# Une fois les premiers pilotes et navigateurs sélectionnés

"Maintenant regardez vos fiches de rôle. Vous pouvez remarquer qu'il y a des actions qui font gagner des points d'expérience. À coté du nom du rôle vous trouverez des cases à cocher. À chaque fois que vous estimez avoir montré un comportement qui vous donne de l'expérience, annoncez le au mob et cochez une case d'éxpérience.

Quand toutes les cases d'une fiche sont cochées, vous gagnez son badge.

__TODO on fait quoi dans ce cas là ?__
“When you check all the boxes you can switch rolesheets, but we’ll talk more about that once it happens.”

# Avant de démarrer le premier tout

"Comme vous pouvez le voir sur les fiches de rôles, le travail du pilote est de taper ce que lui dit le navigateur. Le navigateur fait le tri dans les idées du mob et donne les instructions au pilote.

Ce jeu peut devenir dingue et vous faire oublier vos rôles et les badges à gagner. La personne qui sera navigateur au tour suivant doit aider le navigateur à se souvenir de cocher les cases quand il montre les bons comportements.

Rappelez vous que notre but est de gagner autant de badges que possible et de battre le record précédent (39 badges en mai 2018).

Posez moi 3 questions !"

Si on fait exception des questions auquelles ont ne sait pas répondre. Quand la musique signale la fin du tour, le navigateur devient le pilote, le pilote devient mobber et le prochain mobber devient navigateur. 

Une fois le jeu démarré, surveillez la présence de la gentillesse, considération et respect. Si vous remarquez qu'une de ces caractéristiques n'est pas présente, prenez la parole et dites "Plus de Gentillesse s'il vous plait" ou "Plus de considération s'il vous plaît" ou "Plus de respect s'il vous plaît".

# À la fin de chaque tour
Posez les questions suivantes :
- Est-ce qu'il y a quelque chose qui ressort pour vous ?
- Avez-vous remarqué quelque chose par rapport à l'exercice ou au gameplay ?
- Il y a-t-il quelque chose qui vous donne du mal ?

Ne passez pas plus de 5 minutes sur cette discussion. Soyez brefs, prenez des notes.

Vous pouvez gagner des points d'expérience sur tous les rôles à tout moment. Sauf pilote et navigateur. Vous ne pouvez marquer des points pour ceux-ci que quand vous êtes dans ce rôle.

# Quand un joueur a marqué tous les points d'un rôle
Il gagne un badge. 
__TODO on fait quoi en remote quand quelqu'un gagne un badge ?__

Il peut garder la fiche du rôle, car il peut toujours gagner des points d'expérience en montrant des comportements de ce rôle.


# Après une heure de rotations
Le jeu s'arrête. On compte les badges. Le nombre de badges est le score du jeu.

Démarrez une discussion de 10-15 minutes pour répondre aux questions suivantes :
- Quel était le meilleur moment pour vous ?
- Quel était le pire moment pour vous ?
- Pour un badge que vous avez gagnés, qu'avez-vous aimé dans le rôle ?
- Que ferez-vous différement à votre prochaine partie ?

# FIN

Merci d'avoir joué avec nous ! J'espère que vous vous êtes amusés !