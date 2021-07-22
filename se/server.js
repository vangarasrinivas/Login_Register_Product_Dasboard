import express from "express";

import cors from "cors";

import mongodb from "mongodb";

var mongoclnt = mongodb.MongoClient;

var url = "mongodb://127.0.0.1:27017";

var app = express();

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/", function (req, res) {
  res.send(`
    <h2>Shopping API</h2>
    <a href="http://127.0.0.1:3030/getproducts">http://127.0.0.1:3030/getproducts</a> <br>
    <a href="http://127.0.0.1:3030/getproducts/2">http://127.0.0.1:3030/getproducts/2</a>
    `);
});

app.get("/getproducts", function (req, res) {
  mongoclnt.connect(url, function (err, clientObj) {
    if (!err) {
      var dbo = clientObj.db("myshoping");
      dbo
        .collection("productDetails")
        .find()
        .toArray(function (err, documents) {
          if (!err) {
            res.send(documents);
          }
        });
    }
  });
});

app.get("/getproducts/:id", function (req, res) {
  var id = parseInt(req.params.id);

  mongoclnt.connect(url, function (err, clientObj) {
    var dbo = clientObj.db("myshoping");
    dbo
      .collection("productDetails")
      .find({ pId: id })
      .toArray(function (err, documents) {
        if (!err) {
          res.send(documents);
        }
      });
  });
});

app.post("/addproduct", function (req, res) {
  mongoclnt.connect(url, function (err, clientObj) {
    if (!err) {
      var dbo = clientObj.db("myshoping");

      var data = {
        pId: req.body.pId,
        pName: req.body.pName,
        pType: req.body.pType,
        InStock: req.body.InStock,
        mfd: req.body.mfd,
        ShippedTo: req.body.ShippedTo,
        pPrice: req.body.pPrice,
      };

      dbo.collection("productDetails").insertOne(data, function (err, result) {
        if (!err) {
          console.log("Record Inserted");
        }
      });
    }
  });
});

app.listen(3030);
console.log("Server Started at http://127.0.0.1:3030");
