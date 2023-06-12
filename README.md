# Tutoriel- JFTL 2023: Initiation à l'automatisation avec Playwright

Ce dépôt contient le code source de l'exercice du tutoriel. Il s'agit d'un parcours utilisateur sur un site de e-commerce: https://www.saucedemo.com/
Pour se connecter au site, utiliser ces identifiants:

```bash
USERNAME: standard_user
PASSWORD: secret_sauce
```

## Informations sur le Tuto

### Objectif

Se familiariser avec la librairie Playwright. PW est un outil Open Source de Microsoft qui permet d'automatiser des tests IHM et API de façon simple, rapide et stable grâce à ses nombreuses fonctionalités natives et à sa grande flexibilité.

### Compétences à acquérir

- Installer et configurer un projet Playwright
- Créer un test dans Playwight
- Améliorer le script de test
- Implémenter les bonnes pratiques de dev
- Rajouter un test visuel
- Intégrer le test dans une chaîne CI

### Prérequis

- Connaissances basiques d'un langage de programmation orienté objet
- Node 16 ou plus installé sur votre PC
- VS Code
- Capacité d'installer des packages NPM

## Commandes utiles

Si vous souhaitez utiliser le code source de ce projet en local, cloner le dépôt ensuite Installer les dépendances du projet

```bash
git clone  https://github.com/mgharsallah79/tuto-playwright-jftl.git
```

```bash
npm install
```

Installer les navigateurs

```bash
npm playwright install
```

Exécuter les tests

```bash
npm playwright test
```

Si vous voulez initier un nouveau projet:

```bash
npm init playwright@latest
```

Pour lancer les tests depuis VS code, installer l'extension PW
[Playwright Extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

## Ressources et liens utiles

- [Playwright.dev](https://playwright.dev/) - Documentation officielle
- [Playwright Discord](https://aka.ms/playwright/discord) - forum discord d'entraide sur des problèmatiques PW
- [Playwright Youtube](https://www.youtube.com/@Playwrightdev) - Chaine youtube officielle de PW.
- [Pourquoi choisir Playwright](https://marcusfelling.com/blog/2022/25-reasons-to-choose-playwright-as-your-next-web-testing-framework/) - 25 raisons pour choisir PW pour votre prochain projet d'automatisation (en Anglais)
- [Playwright API Assertions](https://jestjs.io/docs/expect) - Documentation sur l'API des assertions JEST
