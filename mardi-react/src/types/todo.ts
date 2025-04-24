export interface Todo {
  _id: string;
  title: string;
  description?: string;
  completed?: boolean;
  priority?: string;
  dueDate?: string;
  category?: string;
  tags?: string[];
}
