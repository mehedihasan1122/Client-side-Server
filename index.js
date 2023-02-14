const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/Category.json");

const news = require("./data/news.json");

app.get("/", (req, res) => {
  res.send("News ApI running");
});

app.get("/news", (req, res) => {
  res.send(news);

});

app.get("/news/:id", (req, res) => {
  //   console.log(req.params);
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;

  if (id === "08") {
    res.send(news);
  } else {
    const categoryId = news.filter((n) => n.category_id === id);
    res.send(categoryId);
  }
});

app.get("/news-categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
