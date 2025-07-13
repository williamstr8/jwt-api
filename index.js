import express from "express";
import jwt from "jsonwebtoken";

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || "tajnytajnytajny";

app.use(express.json());

app.post("/", (req, res) => {
  const { user_id } = req.body;
  if (!user_id) return res.status(400).json({ error: "Missing user_id" });

  const token = jwt.sign({ user_id }, JWT_SECRET, { expiresIn: "1h" });
  res.status(200).json({ token });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
