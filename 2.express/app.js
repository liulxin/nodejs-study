const express = require("express");
const utility = require("utility");

let app = express();

app.get("/", (req, res) => {
  let q = req.query.q;
  let md5value;
  if (q) {
    md5value = utility.md5(q);
  }

  res.send(md5value);
});

app.listen(8080, console.log(`app listening at port 3000`));
