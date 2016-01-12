# TWEB Travail pratique avec AngularJS

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

# Utilisation de l'API de Github

Lorsqu'on entre le nom d'un utilisateur Github, un premier appel est effectué sur *https://api.github.com/users/:userId*. Nous obtenons les informations visibles sur l'image ci-dessous:

![Profile informations](reportIMG/user2.png)





# tweb-tsch

Ce projet a été généré avec [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

# Sources
Source: https://github.com/yeoman/generator-angular
Source: http://pierrebaron.fr/blog/deploy-yeoman-angular-app-heroku/
