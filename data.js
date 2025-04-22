const todos = [
    {
      id: 1,
      title: "Répondre aux emails urgents",
      description: "Traiter les emails prioritaires de la journée",
      completed: false,
      priority: "high",
      dueDate: "2025-04-23",
      category: "travail",
      tags: ["email", "urgent", "communication"]
    },
    {
      id: 2,
      title: "Préparer la présentation client",
      description: "Finaliser les slides pour la réunion de demain",
      completed: false,
      priority: "high",
      dueDate: "2025-04-24",
      category: "travail",
      tags: ["présentation", "client", "réunion"]
    },
    {
      id: 3,
      title: "Faire les courses",
      description: "Acheter les ingrédients pour le dîner de ce soir",
      completed: true,
      priority: "medium",
      dueDate: "2025-04-22",
      category: "personnel",
      tags: ["courses", "alimentation", "maison"]
    },
    {
      id: 4,
      title: "Réserver restaurant pour anniversaire",
      description: "Trouver un restaurant pour l'anniversaire de Marie",
      completed: false,
      priority: "medium",
      dueDate: "2025-04-25",
      category: "personnel",
      tags: ["anniversaire", "réservation", "social"]
    },
    {
      id: 5,
      title: "Payer les factures",
      description: "Régler les factures d'électricité et d'internet",
      completed: false,
      priority: "high",
      dueDate: "2025-04-30",
      category: "finances",
      tags: ["factures", "paiement", "mensuel"]
    },
    {
      id: 6,
      title: "Rendez-vous médecin",
      description: "Consultation annuelle",
      completed: false,
      priority: "medium",
      dueDate: "2025-05-05",
      category: "santé",
      tags: ["médecin", "santé", "rendez-vous"]
    },
    {
      id: 7,
      title: "Terminer le rapport trimestriel",
      description: "Finaliser les chiffres et les graphiques",
      completed: false,
      priority: "high",
      dueDate: "2025-04-28",
      category: "travail",
      tags: ["rapport", "deadline", "trimestriel"]
    },
    {
      id: 8,
      title: "Réviser pour l'examen",
      description: "Revoir les chapitres 5 à 8 du manuel",
      completed: false,
      priority: "high",
      dueDate: "2025-05-10",
      category: "éducation",
      tags: ["étude", "examen", "révision"]
    },
    {
      id: 9,
      title: "Nettoyer l'appartement",
      description: "Faire le ménage complet avant la visite des amis",
      completed: false,
      priority: "low",
      dueDate: "2025-04-26",
      category: "maison",
      tags: ["ménage", "nettoyage", "maison"]
    },
    {
      id: 10,
      title: "Appeler maman",
      description: "Prendre des nouvelles et discuter du week-end prochain",
      completed: true,
      priority: "medium",
      dueDate: "2025-04-21",
      category: "personnel",
      tags: ["famille", "appel", "communication"]
    },
    {
      id: 11,
      title: "Installer la nouvelle application",
      description: "Configurer l'environnement de développement",
      completed: false,
      priority: "medium",
      dueDate: "2025-04-24",
      category: "technique",
      tags: ["dev", "installation", "logiciel"]
    },
    {
      id: 12,
      title: "Courir 5km",
      description: "Séance de jogging au parc",
      completed: false,
      priority: "low",
      dueDate: "2025-04-23",
      category: "santé",
      tags: ["sport", "jogging", "exercice"]
    },
    {
      id: 13,
      title: "Renouveler l'assurance auto",
      description: "Comparer les offres et choisir la meilleure option",
      completed: false,
      priority: "high",
      dueDate: "2025-05-15",
      category: "administratif",
      tags: ["assurance", "voiture", "contrat"]
    },
    {
      id: 14,
      title: "Acheter un cadeau d'anniversaire",
      description: "Trouver un cadeau pour l'anniversaire de Paul",
      completed: false,
      priority: "medium",
      dueDate: "2025-04-29",
      category: "personnel",
      tags: ["cadeau", "anniversaire", "shopping"]
    },
    {
      id: 15,
      title: "Planifier les vacances d'été",
      description: "Rechercher des destinations et comparer les prix",
      completed: false,
      priority: "low",
      dueDate: "2025-05-30",
      category: "loisirs",
      tags: ["vacances", "planification", "voyage"]
    },
    {
      id: 16,
      title: "Réviser le code du projet",
      description: "Faire une revue de code du dernier module",
      completed: true,
      priority: "high",
      dueDate: "2025-04-20",
      category: "travail",
      tags: ["code", "revue", "projet"]
    },
    {
      id: 17,
      title: "Arroser les plantes",
      description: "Ne pas oublier les orchidées",
      completed: false,
      priority: "low",
      dueDate: "2025-04-24",
      category: "maison",
      tags: ["plantes", "entretien", "routine"]
    },
    {
      id: 18,
      title: "Mettre à jour le CV",
      description: "Ajouter les dernières expériences professionnelles",
      completed: false,
      priority: "medium",
      dueDate: "2025-05-15",
      category: "carrière",
      tags: ["cv", "emploi", "professionnel"]
    },
    {
      id: 19,
      title: "Réparer la fuite du robinet",
      description: "Remplacer le joint défectueux",
      completed: false,
      priority: "medium",
      dueDate: "2025-04-27",
      category: "maison",
      tags: ["réparation", "plomberie", "bricolage"]
    },
    {
      id: 20,
      title: "Assister au webinaire",
      description: "Webinaire sur les nouvelles technologies React",
      completed: false,
      priority: "medium",
      dueDate: "2025-04-25",
      category: "formation",
      tags: ["webinaire", "react", "apprentissage"]
    },
    {
      id: 21,
      title: "Commander de nouveaux livres",
      description: "Acheter les romans recommandés par Julien",
      completed: false,
      priority: "low",
      dueDate: "2025-05-01",
      category: "loisirs",
      tags: ["livres", "lecture", "achat"]
    },
    {
      id: 22,
      title: "Prendre rendez-vous chez le dentiste",
      description: "Contrôle annuel",
      completed: false,
      priority: "medium",
      dueDate: "2025-05-10",
      category: "santé",
      tags: ["dentiste", "santé", "rendez-vous"]
    },
    {
      id: 23,
      title: "Envoyer les invitations",
      description: "Invitations pour la fête d'anniversaire",
      completed: true,
      priority: "high",
      dueDate: "2025-04-18",
      category: "social",
      tags: ["invitation", "fête", "organisation"]
    },
    {
      id: 24,
      title: "Trier les photos de vacances",
      description: "Organiser les albums et supprimer les doublons",
      completed: false,
      priority: "low",
      dueDate: "2025-05-20",
      category: "personnel",
      tags: ["photos", "organisation", "souvenirs"]
    },
    {
      id: 25,
      title: "Vérifier le budget mensuel",
      description: "Analyser les dépenses et ajuster le budget",
      completed: false,
      priority: "high",
      dueDate: "2025-04-30",
      category: "finances",
      tags: ["budget", "finances", "planning"]
    },
    {
      id: 26,
      title: "Résoudre le bug d'authentification",
      description: "Corriger l'erreur 404 lors de la connexion",
      completed: false,
      priority: "high",
      dueDate: "2025-04-23",
      category: "travail",
      tags: ["bug", "développement", "correction"]
    },
    {
      id: 27,
      title: "Renouveler l'abonnement gym",
      description: "Payer l'abonnement pour le prochain trimestre",
      completed: false,
      priority: "medium",
      dueDate: "2025-05-01",
      category: "santé",
      tags: ["gym", "abonnement", "sport"]
    },
    {
      id: 28,
      title: "Organiser l'espace de travail",
      description: "Ranger le bureau et archiver les dossiers",
      completed: false,
      priority: "low",
      dueDate: "2025-04-28",
      category: "organisation",
      tags: ["bureau", "rangement", "productivité"]
    },
    {
      id: 29,
      title: "Participer à la réunion hebdomadaire",
      description: "Réunion d'équipe avec présentation des avancées",
      completed: true,
      priority: "high",
      dueDate: "2025-04-22",
      category: "travail",
      tags: ["réunion", "équipe", "hebdomadaire"]
    },
    {
      id: 30,
      title: "Déclarer les impôts",
      description: "Remplir la déclaration de revenus annuelle",
      completed: false,
      priority: "high",
      dueDate: "2025-05-20",
      category: "finances",
      tags: ["impôts", "déclaration", "finances"]
    },
    {
      id: 31,
      title: "Acheter un nouveau smartphone",
      description: "Comparer les modèles et les offres",
      completed: false,
      priority: "medium",
      dueDate: "2025-05-15",
      category: "technologie",
      tags: ["smartphone", "achat", "technologie"]
    },
    {
      id: 32,
      title: "Regarder le nouveau film Marvel",
      description: "Sortie cinéma avec des amis",
      completed: false,
      priority: "low",
      dueDate: "2025-04-26",
      category: "loisirs",
      tags: ["cinéma", "film", "sortie"]
    },
    {
      id: 33,
      title: "Préparer le rapport de stage",
      description: "Rédiger l'introduction et la conclusion",
      completed: false,
      priority: "high",
      dueDate: "2025-05-10",
      category: "éducation",
      tags: ["rapport", "stage", "rédaction"]
    },
    {
      id: 34,
      title: "Faire une sauvegarde du disque dur",
      description: "Sauvegarder tous les documents importants",
      completed: false,
      priority: "medium",
      dueDate: "2025-04-25",
      category: "technique",
      tags: ["sauvegarde", "données", "sécurité"]
    },
    {
      id: 35,
      title: "Appeler le plombier",
      description: "Prise de rendez-vous pour inspection de la chaudière",
      completed: false,
      priority: "medium",
      dueDate: "2025-04-24",
      category: "maison",
      tags: ["plombier", "chaudière", "entretien"]
    },
    {
      id: 36,
      title: "Acheter de nouvelles chaussures de sport",
      description: "Trouver des chaussures pour le running",
      completed: false,
      priority: "low",
      dueDate: "2025-05-05",
      category: "shopping",
      tags: ["chaussures", "sport", "achat"]
    },
    {
      id: 37,
      title: "Écrire l'article de blog",
      description: "Rédiger l'article sur les tendances React 2025",
      completed: false,
      priority: "medium",
      dueDate: "2025-04-29",
      category: "travail",
      tags: ["blog", "rédaction", "react"]
    },
    {
      id: 38,
      title: "Préparer le dossier pour la banque",
      description: "Rassembler les documents pour le prêt immobilier",
      completed: false,
      priority: "high",
      dueDate: "2025-05-02",
      category: "finances",
      tags: ["prêt", "banque", "immobilier"]
    },
    {
      id: 39,
      title: "Renouveler le passeport",
      description: "Faire la demande de renouvellement en ligne",
      completed: false,
      priority: "medium",
      dueDate: "2025-06-15",
      category: "administratif",
      tags: ["passeport", "voyage", "document"]
    },
    {
      id: 40,
      title: "Planifier la réunion d'équipe",
      description: "Organiser l'agenda et réserver la salle",
      completed: true,
      priority: "high",
      dueDate: "2025-04-19",
      category: "travail",
      tags: ["réunion", "planning", "équipe"]
    },
    {
      id: 41,
      title: "Changer l'ampoule du salon",
      description: "Remplacer par une ampoule LED",
      completed: false,
      priority: "low",
      dueDate: "2025-04-24",
      category: "maison",
      tags: ["bricolage", "éclairage", "maintenance"]
    },
    {
      id: 42,
      title: "Finir le livre en cours",
      description: "Terminer les 100 dernières pages",
      completed: false,
      priority: "low",
      dueDate: "2025-04-30",
      category: "loisirs",
      tags: ["lecture", "livre", "détente"]
    },
    {
      id: 43,
      title: "Mettre à jour le portfolio",
      description: "Ajouter les derniers projets réalisés",
      completed: false,
      priority: "medium",
      dueDate: "2025-05-15",
      category: "carrière",
      tags: ["portfolio", "projets", "professionnel"]
    },
    {
      id: 44,
      title: "Faire réviser la voiture",
      description: "Entretien annuel et changement des pneus",
      completed: false,
      priority: "high",
      dueDate: "2025-05-05",
      category: "véhicule",
      tags: ["voiture", "entretien", "révision"]
    },
    {
      id: 45,
      title: "Méditer 20 minutes",
      description: "Session de méditation matinale",
      completed: true,
      priority: "low",
      dueDate: "2025-04-22",
      category: "bien-être",
      tags: ["méditation", "détente", "routine"]
    },
    {
      id: 46,
      title: "Installer la mise à jour Windows",
      description: "Effectuer la mise à jour de sécurité",
      completed: false,
      priority: "medium",
      dueDate: "2025-04-23",
      category: "technique",
      tags: ["windows", "mise à jour", "sécurité"]
    },
    {
      id: 47,
      title: "Réserver les billets d'avion",
      description: "Acheter les billets pour le voyage d'août",
      completed: false,
      priority: "high",
      dueDate: "2025-05-10",
      category: "voyage",
      tags: ["billets", "avion", "réservation"]
    },
    {
      id: 48,
      title: "Créer une playlist pour la fête",
      description: "Sélectionner les morceaux pour samedi",
      completed: false,
      priority: "low",
      dueDate: "2025-04-26",
      category: "loisirs",
      tags: ["musique", "playlist", "fête"]
    },
    {
      id: 49,
      title: "Apprendre la nouvelle fonctionnalité React",
      description: "Suivre le tutoriel sur les hooks avancés",
      completed: false,
      priority: "medium",
      dueDate: "2025-05-01",
      category: "formation",
      tags: ["react", "développement", "apprentissage"]
    },
    {
      id: 50,
      title: "Terminer le projet client",
      description: "Livrer la version finale de l'application",
      completed: false,
      priority: "high",
      dueDate: "2025-04-30",
      category: "travail",
      tags: ["projet", "client", "deadline"]
    }
  ];
  
  export default todos;