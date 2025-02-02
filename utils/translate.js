require('dotenv').config();
const { Translate } = require('@google-cloud/translate').v2;

// Load API key from environment variables
const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;

// Initialize Google Translate client
const translate = new Translate({ key: apiKey });

const translateText = async (text, targetLang) => {
  try {
    const [translation] = await translate.translate(text, targetLang);
    return translation;
  } catch (error) {
    console.error('Translation error:', error);
    return null;
  }
};

module.exports = translateText;