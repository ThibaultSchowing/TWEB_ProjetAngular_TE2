# TWEB Travail pratique avec AngularJS

## Lien Heroku

Lien de l'application déployée sur Heroku:
> https://tweb-te2-githubapi.herokuapp.com/


## Objectifs du travail

Développer une application AngularJS pour afficher du contenu obtenu via l'API GitHub
+	étudier l'API offerte par GitHub
+	choisir et spécifier la fonctionnalité, en étant créatif et original
+	intégrer une visualisation de données dans votre UI (choisissez une librairie de visualisation à votre convenance)
+	soigner la présentation (IHM)
+	déployer l'application sur heroku
+	écrire un rapport pour expliquer comment l'application a été réalisée
+	publier l'ensemble dans un repo GitHub



# Fonctionnalités de l'application

+ S'authentifier sur Github
+ Obtenir des informations sur un utilisateur
+ Obtenir la liste des dépots publiques de l'utilisateur
+ Obtenir différentes statistiques sur ces dépots
  * Nombre d'additions et de suppressions en fonction du temps
  * Nombre de commits par semaine
  * Nombre de commits pour la semaine en cour


# Technologies utilisées

+ AngularJS
+ Node.js
+ Chart.js
+ Bower
+ Grunt
+ Express
+ Yeoman
+ Twitter Bootstrap

# Structure du projet

A la racine, le fichier web.js contient le minimum reques par Heroku niveau serveur.
Les autres fichiers intéressants sont situés dans /app.

/app
 index.html: contient la base du html

### Vues

/app/views
 main.html: contient tout le HTML qui sera modifié par AngularJS (user, repos et stats)
/app/scripts
  app.js: routeProvider, Modules et ajout d'entête HTTP

### Ressources

/app/scripts/services
  repofactory.js
  statscommitactivityfactory.js
  statsparticipationfactory.js
  userfactory.js

### Controleur principal

/app/scripts/controllers
  main.js: script Angular principal, execute les appels sur l'API et formate les données avant de les envoyéer au Scope.

# Appel sur l'API de Github

## Récupération des données de l'utilisateur

Lorsqu'on entre le nom d'un utilisateur Github, un premier appel est effectué sur *https://api.github.com/users/:userId*.
Nous obtenons les informations visibles sur l'image ci-dessous:

![Profile informations](./reportIMG/user2.PNG)

## Récupération des dépots de l'utilisateur

L'appel suivant est effectué sur *https://api.github.com/users/:userId/repos* afin de récupérer les dépots publiques de
l'utilisateur qui seront affichés en dessous de ses informations personnelles.

![Repos informations](./reportIMG/repos.PNG)

## Récupérations des données d'un dépot et génération des graphiques

En cliquant sur le bouton "stats" à côté du dépot correspondant, les statistiques sont générées et les graphiques
s'affichent comme ci-dessous.

### Nombre d'additions et de suppressions au cours du temps

![Graph 1](./reportIMG/graph1.PNG)

### Nombre de commits par semaine

![Graph 2](./reportIMG/graph2.PNG)

### Nombre de commits pour la semaine courante

![Graph 3](./reportIMG/graph3.PNG)


# Problèmes connus

## Status 202

Parfois, l'API de Github retourne un status 202 - Authorized mais ne donne aucune données.
L'application génère plusieurs erreurs et les données sont manquantes. Pour palier à ce problèmes,
il faut cliquer plusieurs fois (généralement un maximum de 4 ou 5) afin que les données soient retournées correctement.
La raison est que github dois générer les données et renvoi un code 202 pour dire que les données seront bientôt disponibles pendant leur génération.
Pour réussir à faire fonctionner l'application sans devoir cliquer à plusieurs reprises sur les boutons de génération des stats, il faudrait changer les ressources en http et effectuer la requête jusqu'à ce que la réponse aie le contenu demandé.

## Liens "unsafe"

Les liens des repos d'un utilisateur sont préfixés par un "unsafe:git" et sont donc inutilisables.

# Sources
Source: https://github.com/yeoman/generator-angular
Source: http://pierrebaron.fr/blog/deploy-yeoman-angular-app-heroku/

Merci à Michaël Berthouzoz pour l'aide dans la prise en main d'IntelliJ IDEA

# Auto-génèré par Yeoman
Laissé à titre informatif:

# tweb-tsch

Ce projet a été généré avec [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
