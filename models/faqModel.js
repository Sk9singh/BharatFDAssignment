const mongoose = require('mongoose');

// FAQ Schema
const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  question_hi: { type: String },
  question_bn: { type: String },
  answer_hi: { type: String },
  answer_bn: { type: String },
});

// Model Method to retrieve translated text
faqSchema.methods.getTranslatedText = function(lang = 'en') {
  if (lang === 'hi' && this.question_hi) {
    return { question: this.question_hi, answer: this.answer_hi };
  } else if (lang === 'bn' && this.question_bn) {
    return { question: this.question_bn, answer: this.answer_bn };
  }
  return { question: this.question, answer: this.answer };
};

module.exports = mongoose.model('FAQ', faqSchema);