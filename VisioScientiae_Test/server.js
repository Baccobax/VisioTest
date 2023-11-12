const express = require('express');
const path = require('path');
const db = require('./db.json');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json(db.articles)
});

app.get('/:id', (req, res) => {
  const found = db.articles.some(article => article.id === parseInt(req.params.id))
  if (found) {
    res.json(db.articles.find(article => article.id === parseInt(req.params.id)))
  } else {
    res.status(400).json({ msg: `No article with the id of ${req.params.id}` })
  }

});

app.post('/NewArticle', (req, res) => {
  const newArticle = {
    id: db.articles.length + 1,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    date: new Date()
  }
  if (!newArticle.title || !newArticle.content || !newArticle.author || !newArticle.date) {
    return res.status(400).json({ msg: 'Please include a title, content, author and date' })
  }
  db.articles.push(newArticle);

  fs.writeFile('./db.json', JSON.stringify(db), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
});


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})