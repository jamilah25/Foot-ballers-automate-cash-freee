import express from "express";
const router = express.Router();
router.get("/users", async (req, res) => {
  // Fetch users from DB
  res.json([{ id: "u1", username: "alice", balance: 1000 }]); // Replace with DB
});
export default router;