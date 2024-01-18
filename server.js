
const express = require('express');
const cors = require('cors');
const  connectDB  = require('./config/db.js');
const KeywordRoutes = require('./routes/keywordRoute.js')
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/searchVolume',KeywordRoutes)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
