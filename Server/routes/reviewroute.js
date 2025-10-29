const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/review');

// POST /reviews - create a new review
router.post('/', reviewController.createReview);

// GET /reviews/product/:productId - get reviews for a specific product
router.get('/product/:productId', reviewController.getReviewsByProductId);

// DELETE /reviews/:reviewId - delete a review
router.delete('/:reviewId', reviewController.deleteReview);

// PUT /reviews/:reviewId - edit a review
router.put('/:reviewId', reviewController.editReview);

module.exports = router;