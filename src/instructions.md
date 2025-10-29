Étape 1 — Sélection de mood qui remonte à App

But : cliquer “Happy” met à jour l’état currentMood dans App.
	1.	Dans App.tsx
	•	Vérifie que tu as un state currentMood initialisé à null.
	•	Crée une fonction handleSelectMood(mood) qui appelle le setter de currentMood avec la valeur reçue.
	•	Passe ces props à <MoodSelector /> : moods, currentMood, onSelectMood={handleSelectMood}.
	•	(Ne passe rien d’autre pour l’instant.)
	2.	Dans MoodSelector.tsx
	•	Sur chaque bouton, ajoute un onClick qui appelle onSelectMood("Happy"), etc.
	•	Tu peux garder les 4 boutons écrits à la main pour l’instant.

Test : ouvre la console et loggue currentMood dans App (par exemple via un petit console.log ou un effet). Clique “Happy”, puis “Sad”… Tu dois voir la valeur changer.
→ Si ça ne bouge pas : c’est que les boutons n’appellent pas onSelectMood.

⸻

Étape 2 — Filtrer les chansons selon le mood

But : quand un mood est sélectionné, on ne voit que les chansons de cette catégorie.
	1.	Dans App.tsx
	•	Crée une variable dérivée visibleSongs.
	•	Règle simple : si currentMood est non nul, garde seulement les éléments de songs dont category égale currentMood. Sinon, montre tout.
	•	(C’est une variable calculée à chaque rendu, pas un state.)
	2.	Crée un composant minimal SongGrid.tsx
	•	Il reçoit une prop songs (un tableau).
	•	Il affiche juste une petite liste des titres (pas besoin de carte jolie pour l’instant).
	3.	Dans App.tsx
	•	Rends <SongGrid songs={visibleSongs} /> sous le MoodSelector.

Test : clique “Happy”, puis “Energetic”. La liste doit changer et ne montrer que les morceaux de ce mood.
→ Si la liste ne change pas : vérifie la comparaison entre song.category et currentMood, et que SongGrid lit bien sa prop.

⸻

Étape 3 — Créer une vraie carte de chanson

But : remplacer la liste basique par des cartes qui affichent info + lien.
	1.	Crée SongCard.tsx
	•	Il reçoit une prop song (un objet).
	•	Il affiche au minimum : l’image (cover), le titre, l’année, et un lien “Ouvrir” (vers song.link).
	2.	Dans SongGrid.tsx
	•	Au lieu de lister des titres, fais une boucle et rends une SongCard pour chaque élément, en lui passant song={song}.

Test : tu dois voir pour chaque chanson une carte simple avec son image, titre, année, et un lien cliquable.
→ Si rien ne s’affiche : vérifie que SongGrid reçoit visibleSongs et crée bien les SongCard.

⸻

Étape 4 — Ajouter le “Like”

But : pouvoir liker/déliker un morceau, sans sauvegarde pour l’instant.
	1.	Dans App.tsx
	•	Ajoute un state likedIds (un tableau d’IDs au début, c’est suffisant).
	•	Crée une fonction toggleLike(id) :
	•	si l’ID est présent → enlève-le ; sinon → ajoute-le.
	•	(Pas besoin d’autre logique pour le moment.)
	2.	Dans SongGrid.tsx
	•	Pour chaque song, calcule un booléen isLiked en regardant si likedIds contient l’ID.
	•	Passe à SongCard deux props en plus : isLiked (booléen) et onToggleLike (la fonction venue de App).
	3.	Dans SongCard.tsx
	•	Ajoute un bouton “Like”.
	•	Au clic, appelle onToggleLike(song.id).
	•	Change le texte du bouton selon isLiked (ex. “Like” / “Unlike”) pour voir l’état.

Test : clique “Like” sur une carte, puis reclique pour “Unlike”. Change de mood et reviens : l’état de like doit rester (tant que tu n’as pas rechargé la page).
→ Si ça ne change pas : vérifie que SongCard appelle bien la fonction et que SongGrid passe bien isLiked.

⸻

Étape 5 — Petits nettoyages (toujours sans CSS)

But : rendre les composants propres, sans sur-props.
	•	App.tsx : garde seulement currentMood, likedIds, et toggleLike comme “cerveau”.
	•	MoodSelector : ne reçoit que ce dont il a besoin (moods, currentMood, onSelectMood).
	•	SongGrid : reçoit songs filtrées + likedIds + onToggleLike.
	•	SongCard : reçoit song, isLiked, onToggleLike.
	•	Supprime ce que tu n’utilises pas encore (ex. hoverMood si tu ne fais pas d’aperçu).

Test : compile, et clique un peu partout. Tout doit marcher pareil.

⸻

Étape 6 — (Bonus simple) Sauvegarder dans le navigateur

But : garder le mood et les likes après refresh (sans rien de plus).
	1.	Dans App.tsx
	•	Au montage de l’app : lis localStorage pour remettre dans l’état currentMood (si présent) et likedIds (si présent).
	•	À chaque fois que currentMood ou likedIds changent : réécris-les dans localStorage.
	•	(Tu peux stocker likedIds en tableau d’IDs.)

Test : sélectionne un mood, like quelques morceaux, rafraîchis la page : ça doit rester.

⸻

Étape 7 — (Option) Survol de mood pour futur thème

But : préparer plus tard le fond dynamique (quand tu feras le CSS).
	1.	Dans App.tsx
	•	Ajoute hoverMood (state) et une fonction handleHoverMood(moodOrNull).
	2.	Dans MoodSelector.tsx
	•	Sur chaque bouton :
	•	à l’entrée du survol → appelle onHoverMood("Happy"), etc.
	•	à la sortie → onHoverMood(null).
	•	Rien d’autre.

Test : fais un log dans App pour voir hoverMood changer au survol.

⸻

Récap express (ordre minimal)
	1.	Clic de mood → met à jour currentMood.
	2.	visibleSongs = songs filtrées par currentMood → affichées via SongGrid.
	3.	SongCard pour chaque élément.
	4.	likedIds + toggleLike → bouton Like sur SongCard.
	5.	(Bonus) localStorage pour garder mood + likes.
	6.	(Option) hoverMood pour plus tard (fond dynamique).

Tu peux t’arrêter à l’étape 4 si tu veux un MVP qui marche.
Quand tu veux, on ajoute le CSS de thème par mood et les transitions.