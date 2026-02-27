import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 8080;
const staticRootUrl = new URL('../dist/', import.meta.url).pathname;

const apiDataMOCK = {
  result: [
    { name: "Одын" },
    { name: "Два" },
  ],
}

app.use(cors());
app.use(express.static(staticRootUrl))

app.get('/api/data', (req, res) => {
  res.json(apiDataMOCK);
});

app.use((req, res) => {
  res.status(404).send('404 — Not Found');
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
