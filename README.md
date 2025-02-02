**BharatFD :**
This project is developed as part of an evaluation for **BHARATFD**. It is a basic FAQ management system implemented using **Node.js, Express.js, and the Google Translate API**, with data stored in a local JSON file. The system enables users to create, retrieve, and access translated FAQs in Hindi and Bengali.  

---

## **📌 Features**  
 Create new FAQs with automatic translations to Hindi and Bengali  
 Fetch all FAQs in a specific language (English, Hindi, or Bengali)  
 Store FAQs locally in a JSON file  
 Uses **Google Translate API** for translations  
 Docker support for easy deployment  

---

## ** Installation Steps**  

### ** Clone the Repository**  
```bash
git clone https://github.com/Sk9singh/BharatFDAssignment.git
cd BharatFDASSIGNMENT

 Install Dependencies

npm install

 Set Up Environment Variables

Create a .env file in the root directory and add the following:

MONGO_URI=mongodb://localhost:27017/faqdb
REDIS_HOST=localhost
REDIS_PORT=6379
GOOGLE_TRANSLATE_API_KEY=your-google-api-key

Replace your-google-api-key with your actual Google Translate API Key.

 Start the Server

npm run dev

The server will start at: http://localhost:3000

 API Usage Examples

 Create an FAQ

 Endpoint: POST /faqs
 Description: Adds a new FAQ with translations
 Body (JSON):

{
  "question": "What is BharatFD?",
  "answer": "BharatFD is a financial service company."
}

 Response:

{
  "question": "What is Node.js?",
  "answer": "Node.js is a runtime environment for executing JavaScript code.",
  "question_hi": "Node.js क्या है?",
  "answer_hi": "Node.js एक रनटाइम वातावरण है जो जावास्क्रिप्ट कोड निष्पादित करता है.",
  "question_bn": "Node.js কি?",
  "answer_bn": "Node.js জাভাস্ক্রিপ্টের জন্য একটি রানটাইম পরিবেশ।"
}

 Get FAQs

 Endpoint: GET /faqs?lang={language}
 Description: Fetches FAQs in the requested language (en, hi, or bn)
 Example Request:

GET /faqs?lang=hi


 Docker Setup

If you want to run this project in a Docker container, follow these steps:

 Build the Docker Image

docker build -t bharatfd-faq .

 Run the Docker Container

docker run -p 3000:3000 --env-file .env bharatfd-faq

Now, the app will be available at http://localhost:3000 

 Additional Notes
	•	Make sure you have Node.js and MongoDB installed if you’re not using Docker.
	•	You need a Google Cloud Translate API Key for translation to work.
	•	If any issue occurs, check the logs using:

docker logs <container_id>

 Author

Saksham Singh
 Email: sakshamsingh8278@gmail.com
 GitHub: https://github.com/Sk9singh

