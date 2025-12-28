const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connecté à MongoDB"))
  .catch(err => console.error(err));

// Modèle de donnée pour les objectifs des clients
const Goal = mongoose.model('Goal', {
  userId: String,
  title: String,
  isCompleted: Boolean,
  dailyQuote: String
});

// Route : Récupérer la dose de motivation du jour
app.get('/api/motivation', (req, res) => {
  const quotes = [
    "Le succès n'est pas final, l'échec n'est pas fatal.",
    "La discipline est le pont entre les objectifs et l'accomplissement.",
    "N'attendez pas l'opportunité, créez-la."
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: randomQuote });
});

app.listen(3000, () => console.log('Serveur API lancé sur le port 3000'));