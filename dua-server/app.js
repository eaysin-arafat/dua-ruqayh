const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Include CORS middleware
const sqlite3 = require("sqlite3").verbose();
const sqlite = require("sqlite");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(bodyParser.json());

const db = new sqlite3.Database(
  "./dua.sqlite",
  sqlite.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log("Connected to the SQLite database.");
  }
);

async function getTableDataWithId(tableName, subCategoryId) {
  try {
    const query = `SELECT * FROM ${tableName} WHERE subcat_id = ?`;
    const rows = await new Promise((resolve, reject) => {
      db.all(query, [subCategoryId], (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(data);
      });
    });
    return rows;
  } catch (error) {
    console.error(`Error retrieving data from table '${tableName}':`, error);
    throw error;
  }
}

async function getTableData(tableName) {
  try {
    const query = `SELECT * FROM ${tableName}`;
    const rows = await new Promise((resolve, reject) => {
      db.all(query, (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(data);
      });
    });
    return rows;
  } catch (error) {
    console.error(`Error retrieving data from table '${tableName}':`, error);
    throw error;
  }
}

app.get("/read-categories", async (req, res) => {
  try {
    const categories = await getTableData("category");
    res.json(categories);
  } catch (error) {
    console.error("Error retrieving categories:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/read-sub-categories/:categoryId", async (req, res) => {
  try {
    const categoryId = parseInt(req.params.categoryId);
    const tableName = "sub_category";
    const subCategories = await getTableDataWithId(tableName, categoryId);
    res.json(subCategories);
  } catch (error) {
    console.error("Error retrieving sub-categories:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/read-duas/:subCategoryId", async (req, res) => {
  try {
    const subCategoryId = parseInt(req.params.subCategoryId);
    const tableName = "dua";
    const duas = await getTableDataWithId(tableName, subCategoryId);
    res.json(duas);
  } catch (error) {
    console.error("Error retrieving duas:", error);
    res.status(500).send("Internal Server Error");
  }
});
// Start the server
app.listen(8000, () => {
  console.log("Server listening on port 8000");
});
