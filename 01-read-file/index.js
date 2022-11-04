const fs = require("fs");
const path = require("path");
const way = path.join(__dirname, "text.txt");
fs.readFile(way, { flag: "r+", encoding: "utf8" }, function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
