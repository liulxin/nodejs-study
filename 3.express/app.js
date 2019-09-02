const express = require("express");
const superagent = require("superagent");
const cheerio = require("cheerio");
const Entities = require('html-entities').XmlEntities;

const entities = new Entities();

let app = express();

app.get("/", (req, res, next) => {
  superagent.get("https://www.jianshu.com/").end((err, sres) => {
    if (err) {
      return next(err);
    }

    let $ = cheerio.load(sres.text);
    let items = [];
    $("#list-container .title").each(function(idx, element) {
      let $element = $(element);
      items.push({
        title: entities.decode($element.html()),
        href: $element.attr("href")
      });
    });

    res.send(items);
  });
});

app.listen(8080);
