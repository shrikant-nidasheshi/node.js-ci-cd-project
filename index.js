const express = require('express');
const app = express();

const PORT = 3000; // or use 8080 if you prefer

// Route
app.get('/', (req, res) => {
  res.send('Hello World from Express! shrikant amaresh nidasheshi');
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});