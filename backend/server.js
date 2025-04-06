import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pass@123",
  database: "your_database_name",
});

// Make sure connection works
db.connect((err) => {
  if (err) throw err;
  console.log("✅ Connected to MySQL database");
});

// Route to handle POST
app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const sql = "INSERT INTO contact_form (name, email, message) VALUES (?, ?, ?)";
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error("❌ DB Error:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json({ message: "Message saved successfully" });
  });
});

app.listen(5000, () => {
  console.log("✅ Server is running on port 5000");
});
