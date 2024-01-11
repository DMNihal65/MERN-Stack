const express = require('express');
const app = express();
const cors = require('cors');

// Apply CORS globally with specific options
app.use(cors());
app.use(express.json())

app.options('/sum', cors()); // Enable preflight requests for the /sum route

app.get('/sum', (req, res) => {
  const a = req.query.a;
  const b = req.query.b;
  const sum = parseInt(a) + parseInt(b);
  res.send(sum.toString());
});

app.get('/intrest', (req, res) => {
  const principle = req.query.principle;
  const year = req.query.years;
  const rate = req.query.rate;
  const intrests = (parseInt(principle) * parseInt(year) * parseInt(rate))/100;
  const final = parseInt(intrests)+parseInt(principle) 
  console.log(intrests)
  console.log(principle)
  console.log(year)
  console.log(rate)
  res.send(final.toString());
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
