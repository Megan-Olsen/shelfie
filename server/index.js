require("dotenv").config();
const express = require("express");
const ctrl = require("./controller");
const massive = require("massive");

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
});
// .then(dbInstance => {
//     app.set('db', dbInstance);
// }).catch(err => console.log(err));

app.use(express.json());

app.get("/api/inventory", ctrl.getInventory);
// app.post("api/product", ctrl.addProduct);

app.listen(SERVER_PORT, () =>
  console.log(`Shhhh.... the Dwarves are working on port ${SERVER_PORT}`)
);
