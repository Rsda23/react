// src/utils/mockData.ts
import { Todo } from '../types/todo';

const todos: Todo[] = [
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
  }
];

// LocalStorage key
const TODOS_STORAGE_KEY = 'todos';

// Fonction pour initialiser les todos ou récupérer ceux existants
export const getTodos = (): Todo[] => {
  const storedTodos = localStorage.getItem(TODOS_STORAGE_KEY);
  if (storedTodos) {
    return JSON.parse(storedTodos);
  }
  
  // Si aucun todo n'existe, initialiser avec notre liste de mock
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
  return todos;
};

// Fonction pour sauvegarder les todos
export const saveTodos = (todos: Todo[]): void => {
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
};

// Fonction pour ajouter un todo
export const addTodo = (todo: Omit<Todo, 'id'>): Todo => {
  const currentTodos = getTodos();
  const newTodo: Todo = {
    ...todo,
    id: currentTodos.length > 0 
      ? Math.max(...currentTodos.map(t => t.id)) + 1 
      : 1
  };
  
  const updatedTodos = [...currentTodos, newTodo];
  saveTodos(updatedTodos);
  
  return newTodo;
};

// Fonction pour mettre à jour un todo
export const updateTodo = (todo: Todo): Todo => {
  const currentTodos = getTodos();
  const updatedTodos = currentTodos.map(t => 
    t.id === todo.id ? todo : t
  );
  
  saveTodos(updatedTodos);
  return todo;
};

// Fonction pour supprimer un todo
export const deleteTodo = (id: number): void => {
  const currentTodos = getTodos();
  const updatedTodos = currentTodos.filter(todo => todo.id !== id);
  
  saveTodos(updatedTodos);
};

// Fonction pour basculer l'état terminé d'un todo
export const toggleTodoCompleted = (id: number): Todo | undefined => {
  const currentTodos = getTodos();
  let updatedTodo: Todo | undefined;
  
  const updatedTodos = currentTodos.map(todo => {
    if (todo.id === id) {
      updatedTodo = { ...todo, completed: !todo.completed };
      return updatedTodo;
    }
    return todo;
  });
  
  saveTodos(updatedTodos);
  return updatedTodo;
};