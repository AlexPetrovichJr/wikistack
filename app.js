const express = require('express')
const app = express()
const morgan = require("morgan");

app.use(express.urlencoded({ extended: false }));

app.use(morgan("dev"));

app.use(express.static(__dirname + "./public"));


// app.use('/posts', require('./routes/posts'));

// app.get("/", (req, res) => {
//   res.redirect("/posts");
// })

app.get("/", async (req, res, next) => {
  res.send("hello world!");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

