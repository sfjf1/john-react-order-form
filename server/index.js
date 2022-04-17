const express = require("express");
const app = express();
const port = 3000;

// static files
app.use(express.static("./client/dist"));

// express use json!
app.use(express.json());

app.listen(process.env.PORT || port, () => {
  console.log(`Server app listening at port:${port}`);
});
