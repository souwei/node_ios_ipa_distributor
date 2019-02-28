var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
express.static.mime.define({'application/octet-stream': ['ipa']});

app.use(express.static("public"));

app.listen(3000, () => console.log(`Example app listening on port 3000!`));
