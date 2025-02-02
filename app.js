const express = require('express');
const bodyParser = require('body-parser');
const faqRoutes = require('./routes/faqRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(faqRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});