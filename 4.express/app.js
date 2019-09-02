const express = require("express");
const superagent = require("superagent");
const cheerio = require("cheerio");
const eventproxy = require("eventproxy");
const Entities = require("html-entities").XmlEntities;

const entities = new Entities();

let app = express();
let items = [];
let ep = new eventproxy();

app.get("/", (req, res, next) => {
  superagent.get("https://www.jianshu.com/").end((err, sres) => {
    if (err) {
      return next(err);
    }

    let $ = cheerio.load(sres.text);
    $("#list-container .title").each(function(idx, element) {
      let $element = $(element);
      items.push({
        title: entities.decode($element.html()),
        href: `https://www.jianshu.com` + $element.attr("href")
      });
    });

    ep.after("get_href", items.length, function(href_list) {
      let topics = href_list.map(function(topicPair) {
        var topicUrl = topicPair[0];
        var topicHtml = topicPair[1];
        var $ = cheerio.load(topicHtml);
        return {
          title: $("._1RuRku")
            .text()
            .trim(),
          href: topicUrl,
          comment1: $("._2rhmJa p")
            .eq(0)
            .text()
            .trim()
        };
      });

      console.log("final:");
      console.log(topics);
    });

    items.forEach(function(url) {
      superagent.get(url.href).end(function(err, res) {
        ep.emit("get_href", [url.href, res.text]);
      });
    });
  });
});

app.listen(8080);
