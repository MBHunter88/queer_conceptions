# queer_conceptions


### Overview
Queer Conceptions is part of a larger initiative designed to support LGBTQ+ families navigating their family planning journey. The app provides personalized support through a conception plan generator and tailored resources. It aims to simplify the complex and often overwhelming process of conception for LGBTQ+ individuals. The app guides users step by step, whether they are considering IVF, surrogacy, sperm/egg donation, or other family-building options.

### MVP Features
- **User Login/Signup:**
Users can create an account or log in securely, allowing them to save and track their personalized conception plans.
- **AI-Generated Conception Plan:**
Based on user input (e.g., method choice, legal/medical needs, timeline), an AI generates a personalized plan, helping users stay organized and progress through their conception journey.
- **Resource Library:**
Users can access a library of relevant resources, including LGBTQ+-inclusive medical and legal information.

### Stretch Goals
 FAQ Chatbot
 - Offer users curated answers to FAQs using ChatGPT.  
- Help to estimate conception related cost.

Search Bar functionality for external resources
- Using the MedlinePlus API to implement a search bar to provide resources based on user input. 

### Setup

To run this project locally, follow these steps:

Clone the repository:

`git clone git@github.com:MBHunter88/queer_conceptions.git
cd queer_conceptions`

Install backend dependencies:

`cd server
npm install`

Install frontend dependencies:

`cd ../client
npm install`

Set up environment variables:

Create a .env file in the root directory and add the following values:

`DATABASE_URI=your_postgres_database_url
OPENAI_API_KEY=your_openai_api_key
PORT=8080
SECRET="this is your secret"
JWT_SECRET=your_secret_key_here`

Run database migrations:

Ensure your PostgreSQL server is running and execute:

`npm run migrate`

Start the backend server:

`cd server
npm start`

Start the development server:

`cd ../client
npm run dev`

Open your browser and go to local host.
