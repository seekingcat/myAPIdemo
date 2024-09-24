const express = require('express');
const app = express();

const PORT = 8000;

const actors = {
  'alicia keys': {
    age: 43,
    birthName: 'Alicia Augello Cook',
    birthPlace: 'New York City, U.S',
  },
  'gigi hadid': {
    age: 29,
    birthName: 'Jelena Noura Hadid',
    birthPlace: 'Los Angeles, California, U.S.',
  },
  'brad pitt': {
    age: 'Brad Pitt',
    birthName: 'Brad Pitt',
    birthPlace: 'Brad Pitt',
  },
};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api/:actorName', (req, res) => {
  const actorName = req.params.actorName.toLowerCase();
  if (actors[actorName]) {
    res.json(actors[actorName]);
  } else {
    res.json(actors['brad pitt']);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
