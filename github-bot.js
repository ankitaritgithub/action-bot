const express = require('express');
const app = express();

app.use(express.json());

app.post('/github-bot', (req, res) => {
  const message = req.body.message;
  // TO DO: Implement the bot's response logic here
  const botResponse = `Hello! You said: ${message}`;
  res.json(botResponse);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
