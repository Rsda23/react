# Todo App - React Router v7

Une application de gestion de tâches construite avec React, TypeScript, React Router v7 et Tailwind CSS.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?logo=typescript)
![React Router](https://img.shields.io/badge/React_Router-7.0.0-CA4245?logo=react-router)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.5-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?logo=vite)

## Fonctionnalités

- 🔐 Authentification (simulée)
- 📋 Gestion complète des tâches (CRUD)
- 🔍 Filtrage des tâches par statut et catégorie
- 📱 Interface responsive avec Tailwind CSS
- 🧩 Architecture modulaire avec React Router v7
- 💾 Persistance des données via localStorage

## Captures d'écran

Screenshots de l'application en action. 

## Structure du projet

```
src/
├─ components/
│  ├─ layout/           # Composants de mise en page
│  │  ├─ AppLayout.tsx  # Layout principal avec navbar
│  │  ├─ Navbar.tsx     # Barre de navigation
│  ├─ todo/             # Composants liés aux todos
│  │  ├─ TodoList.tsx   # Liste des todos avec filtres
│  │  ├─ TodoForm.tsx   # Formulaire d'ajout/modification
│  │  ├─ TodoItem.tsx   # Élément todo individuel
├─ context/
│  ├─ AuthContext.tsx   # Contexte d'authentification
├─ hooks/
│  ├─ useAuth.ts        # Hook personnalisé pour l'auth
├─ pages/
│  ├─ Login.tsx         # Page de connexion
│  ├─ Home.tsx          # Page d'accueil (liste des todos)
│  ├─ AddTodo.tsx       # Page d'ajout de todo
│  ├─ EditTodo.tsx      # Page de modification de todo
├─ types/
│  ├─ todo.ts           # Types TypeScript pour les todos
├─ utils/
│  ├─ mockData.ts       # Gestion des données (mock)
├─ App.tsx              # Configuration des routes
├─ main.tsx             # Point d'entrée de l'application
```

## Installation

1. Clonez ce dépôt
   ```bash
   git clone https://github.com/username/todo-app-react-router.git
   cd todo-app-react-router
   ```

2. Installez les dépendances
   ```bash
   npm install
   ```

3. Lancez l'application en mode développement
   ```bash
   npm run dev
   ```

4. Ouvrez votre navigateur et accédez à `http://localhost:3000`

## Utilisation

### Connexion

Pour vous connecter à l'application, utilisez:
- **Nom d'utilisateur**: n'importe quel nom
- **Mot de passe**: 123456

### Gestion des todos

- **Afficher tous les todos**: Page d'accueil après connexion
- **Filtrer les todos**: Utilisez les boutons et le sélecteur de catégorie
- **Ajouter un todo**: Cliquez sur "Ajouter" dans la barre de navigation
- **Modifier un todo**: Cliquez sur le bouton "Modifier" d'un todo
- **Supprimer un todo**: Cliquez sur le bouton "Supprimer" d'un todo
- **Marquer comme terminé**: Cliquez sur le bouton "Terminer"

## Technologies utilisées

- **React**: Bibliothèque UI
- **TypeScript**: Système de typage statique
- **React Router v7**: Routage déclaratif
- **Tailwind CSS**: Framework CSS utility-first
- **Vite**: Outil de build ultrarapide
- **LocalStorage**: Persistance des données côté client

## Architecture

### Authentification

L'application utilise un contexte d'authentification (`AuthContext`) pour gérer l'état connecté de l'utilisateur. L'authentification est simulée, mais la structure est en place pour intégrer une véritable API backend.

### Routage

React Router v7 est utilisé pour gérer les routes de l'application:
- Routes publiques (`/login`)
- Routes protégées (`/app/*`) accessibles uniquement après connexion
- Redirection automatique vers la page de connexion pour les utilisateurs non authentifiés

### Gestion des données

Les données des todos sont gérées via des fonctions utilitaires dans `mockData.ts`, qui interagissent avec le localStorage pour simuler une persistance. Cette couche pourrait facilement être remplacée par des appels API réels.

## Evolutions possibles

- [ ] Intégration avec une API backend réelle
- [ ] Ajout de tests unitaires et d'intégration
- [ ] Thème clair/sombre
- [ ] Recherche de todos par nom/description
- [ ] Pagination pour un grand nombre de todos
- [ ] Fonctionnalité de tri des todos
- [ ] Notifications et rappels pour les todos
- [ ] Partage de todos entre utilisateurs

## Licence

MIT

## Auteur

mnbdpro