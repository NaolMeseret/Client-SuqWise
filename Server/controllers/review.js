const db = require("../models/db");
const createReview = async (req, res) => {
  const { user_id, product_id, store_id, rating, comment } = req.body;
  try {
    const sql =
      "INSERT INTO reviews (user_id, product_id, store_id, rating, comment) VALUES (?, ?, ?, ?, ?)";
    const [result] = await db.execute(sql, [
      user_id,
      product_id,
      store_id,
      rating,       
        comment,

    ]);
    res.status(201).json({ id: result.insertId, user_id, product_id, store_id, rating, comment });
  } catch (error) {
    console.error("Error creating review:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getReviewsByProductId = async (req, res) => {
  const { productId } = req.params;
  try {
    const sql = "SELECT * FROM reviews WHERE product_id = ?";
    const [rows] = await db.execute(sql, [productId]);
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteReview = async (req, res) => {
    const { reviewId } = req.params;
    try {
        const sql = "DELETE FROM reviews WHERE id = ?";
        await db.execute(sql, [reviewId]);
        res.status(200).json({ message: "Review deleted successfully" });
        }
    catch (error) {
        console.error("Error deleting review:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const editReview = async (req, res) => {
    const { reviewId } = req.params;
    const { rating, comment } = req.body;
    try {
        const sql = "UPDATE reviews SET rating = ?, comment = ? WHERE id = ?";
        await db.execute(sql, [rating, comment, reviewId]);
        res.status(200).json({ message: "Review updated successfully" });
    }
    catch (error) {
        console.error("Error updating review:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    createReview,
  deleteReview,
  editReview,
  getReviewsByProductId,
};