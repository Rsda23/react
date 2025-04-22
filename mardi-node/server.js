import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
const app = express();
import todoRoutes from './routes/todos.js';
app.use('/todos', todoRoutes);

dotenv.config();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API OK');
});

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(PORT, () => console.log(`Connexion reussi : http://localhost:${PORT}`)))
  .catch(err => console.error('Echec de la connexion :', err));
