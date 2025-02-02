require('dotenv').config();
const fs = require('fs');
const path = require('path');
const translateText = require('../utils/translate');

const faqDataPath = path.join(__dirname, '../data/faqs.json');

console.log("FAQ Controller Loaded");

// Load FAQs from local JSON file
const loadFAQs = () => {
  try {
    if (!fs.existsSync(faqDataPath)) {
      console.warn("⚠️ FAQs file not found, creating a new one.");
      fs.writeFileSync(faqDataPath, JSON.stringify([], null, 2));
    }

    const data = fs.readFileSync(faqDataPath, 'utf8');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("❌ Error loading FAQs:", error.message);
    return [];
  }
};

// Save FAQs to local JSON file
const saveFAQs = (faqs) => {
  try {
    fs.writeFileSync(faqDataPath, JSON.stringify(faqs, null, 2));
  } catch (error) {
    console.error("❌ Error saving FAQs:", error.message);
  }
};

// Create a new FAQ
const createFAQ = async (req, res) => {
  try {
    const { question, answer } = req.body;

    if (!question || !answer) {
      return res.status(400).json({ message: "Question and answer are required." });
    }

    const faqs = loadFAQs();
    const faq = { question, answer };

    // Translate text to Hindi and Bengali (Handle failures)
    faq.question_hi = await translateText(question, 'hi') || question;
    faq.answer_hi = await translateText(answer, 'hi') || answer;
    faq.question_bn = await translateText(question, 'bn') || question;
    faq.answer_bn = await translateText(answer, 'bn') || answer;

    faqs.push(faq);
    saveFAQs(faqs);

    res.status(201).json(faq);
  } catch (error) {
    console.error("❌ Error in createFAQ:", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};

// Fetch FAQs
const getFAQs = async (req, res) => {
  try {
    const { lang = 'en' } = req.query;
    const faqs = loadFAQs();

    const translatedFAQs = faqs.map(faq => ({
      question: lang === 'hi' ? faq.question_hi || faq.question :
                lang === 'bn' ? faq.question_bn || faq.question :
                faq.question,
      answer: lang === 'hi' ? faq.answer_hi || faq.answer :
              lang === 'bn' ? faq.answer_bn || faq.answer :
              faq.answer
    }));

    res.status(200).json(translatedFAQs);
  } catch (error) {
    console.error("❌ Error in getFAQs:", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};

// Debug: Log function exports
console.log("Exports:", { createFAQ, getFAQs });

module.exports = { createFAQ, getFAQs };