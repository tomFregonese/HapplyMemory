# HapplyMemory

## Déploiement

Pour déployer Happly Memory, il suffit de suivre les étapes ci-dessous :

1. Clonez le dépôt sur votre machine locale en utilisant `git clone https://github.com/tomFregonese/HapplyMemory.git`. 
2. Positionnez vous à la racine du projet et installez les dépendances avec `npm install`.
3. Lancez l'application en mode développement avec `npm run serve`.
4. Il est possible d'importer un jeu de données depuis la page `/settings` avec le bouton "Overwrite dataset". 


## Fonctionnalités

Fonctionnalités implémentées dans l'application :

1. Gestions des catégories, thèmes et cartes :
- **Catégories** : L'utilisateur peut créer, voir, supprimer des catégories ou enterer dedans.
- **Thèmes** : L'utilisateur peut créer, voir, supprimer des thèmes ou entrer dedans.
- **Cartes** : L'utilisateur peut créer, voir, modifier et supprimer des cartes.

2. Lancement d'une révision :
- Lorsque l'utilisateur lance une révision, l'application lui demande de choisir quelle catégorie il souhaite 
  réviser. Une fois qu'une catégorie à été choisie, l'application propose à l'utilisateur de lancer une révision sur 
  un thème particulier de la catégorie ou sur tous les thèmes de cette catégorie. De là, la révision commence.
- Une fois la révision commencée, l'utilisateur voit les questions apparaitre puis les réponses. Il peut alors 
  indiquer s'il a trouvé la réponse ou non. Si l'utilisateur quitte l'application en cours de révision, il pourra 
  récupérer sa révision en cours lorsqu'il reviendra durant les 15 minutes suivants le début de la révision. Une 
  fois que toutes les cartes ont étés révisées, l'utilisateur est informé et à la possibilité de revenir sur l'écran 
  d'acceuil. 


## Organisation du code

Le code est organisé en plusieurs composants pour faciliter la maintenance et la compréhension. Voici une brève 
description de l'organsation :

- **App** : Ce composant est le composant de base de l'application. Il contient le titre, le corps de l'application 
  et son pied de page. Toutes les pages de l'application sont affichées dans le corps de ce composant.
- **Home** : Ce composant représente l'écran d'accueil de l'application. Il permet à l'utilisateur de choisir s'il 
  veut gérer ses catégories, thèmes, cartes ou s'il souhaite lancer une révison. 

  1. L'utilisateur choisis de gérer ses catégories: 
  - **CategoriesView** : Ce composant représente la vue de gestion des catégories. Il permet à l'utilisateur de 
    créer une catégorie, de voir la liste de ses categories existantes, de les supprimer ou d'entrer dedans pour voir 
    les thèmes qu'elles contiennent.
    - **CategoryItem** : Ce composant représente une catégorie. Il est utilisé dans la vue `CategoriesView`.
    - **CreateCategory** : Ce composant permet à l'utilisateur de créer une catégorie.
    
  - **ThemesView** : Ce composant représente la vue de gestion des thèmes. Il permet à l'utilisateur de créer un thème, 
  - de voir la liste de ses thèmes existants, de les supprimer ou d'entrer dedans pour voir les cartes qu'ils contiennent.
    - **ThemeItem** : Ce composant représente un thème. Il est utilisé dans la vue `ThemesView`.
    - **CreateTheme** : Ce composant permet à l'utilisateur de créer un thème.
    
  - **CardsView** : Ce composant représente la vue de gestion des cartes. Il permet à l'utilisateur de créer, voir, 
    modifier et supprimer des cartes.
    - **CardItem** : Ce composant représente une carte. Il est utilisé dans la vue `CardsView`.
    - **CreateCard** : Ce composant permet à l'utilisateur de créer une carte (ou de l'éditer selon le mode).

  2. L'utilisateur choisis de lancer une révision:
  - **SelectCategoryRevisionView** : Ce composant permet à l'utilisateur de choisir une catégorie sur laquelle lancer 
    une révision.
    - **CategoryItem** (mode révision) : Ce composant représente une catégorie. Il est utilisé dans la vue 
      `SelectCategoryRevisionView`.
  - **SelectThemeRevisionView** : Ce composant permet à l'utilisateur de choisir un thème d'une catégorie ou tous 
    les thèmes de cette categorie sur le(s)quel(s) lancer une révision. 
    - **ThemeItem** (mode révision) : Ce composant représente un thème. Il est utilisé dans la vue 
      `SelectThemeRevisionView`.
  - **RevisionView** : Ce composant affiche les cartes à réviser. Il permet à l'utilisateur de voir les questions, 
    les réponses et de dire s'il a trouvé la réponse ou non. 
    - **CardItem** (mode révision) : Ce composant représente une carte à réviser. Il est utilisé dans la vue 
      `RevisionView`.


Chaque vue est organisée en deux parties : une div avec la classe `.content` qui contient le contenu principal de la vue, et une div avec la classe `.footer` qui contient les boutons d'action.


## Améliorations possibles
- Ajouter un avatar sympatoche (à la duolingo) pour présenter les interfaces et la navigation dans l'application. 
- À la fin d’une révision, afficher un petit récapitulatifs des questions qui ont étés justes (avec le niveau) et les 
  cartes qui ont étés fausses 
- Ajouter un système de score pour chaque révision.
- Ajouter la possibilité de modifier le nom et la description d'une catégorie ou d'un thème. 
- Ajouter une confirmation de suppression pour les catégories, thèmes et cartes.