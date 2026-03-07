import express from "express";
import pg from "pg";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const pool = new pg.Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get("/api/menu", async (req, res) => {
  const result = await pool.query("SELECT * FROM menu");
  res.json(result.rows);
});

app.post("/api/order", async (req, res) => {
  const { items, total } = req.body;
  const result = await pool.query(
    "INSERT INTO orders(items, total) VALUES($1,$2) RETURNING id",
    [JSON.stringify(items), total]
  );
  res.json({ order_id: result.rows[0].id });
});

app.listen(3000, () => console.log("Server running on port 3000"));