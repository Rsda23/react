import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import todoRoutes from './routes/todos.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/todos', todoRoutes);

app.get('/', (req, res) => {
  res.send('API OK');
});

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(PORT, () => console.log(`Connexion reussi : http://localhost:${PORT}`)))
  .catch(err => console.error('Echec de la connexion :', err));
