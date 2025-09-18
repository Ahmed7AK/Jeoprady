import pool from "../db.js";


// Queries the database through a pool
export const getClue = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM clues LIMIT 1");
    res.status(200).json({success: true, data: result.rows});
  } catch (error) {
    console.error("error in getClue", error);
    res.status(500).json({success: false, message: "Database query failed"});
  }
}
