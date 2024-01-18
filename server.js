
const express = require('express');
const cors = require('cors');
const  connectDB  = require('./config/db.js');
const KeywordRoutes = require('./routes/keywordRoute.js')
require('dotenv').config();

const app = express();

app.use(cors(
  {
    origin: "https://keysearchbackend.vercel.app/",
    methods: ["POST","GET","PUT"],
    credentials: true
  }
));
app.use(express.json());

connectDB();

app.use('/searchVolume',KeywordRoutes)
app.use('/',(req,res)=>{
  res.json("hello")
})


const PORT =  8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
