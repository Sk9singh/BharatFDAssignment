const express = require('express');
const router = express.Router();
const { createFAQ, getFAQs } = require('../controllers/faqController');

// POST /api/faqs - Create FAQ
router.post('/faqs', createFAQ);

// GET /api/faqs - Fetch FAQs with optional language query parameter
router.get('/faqs', getFAQs);

module.exports = router;