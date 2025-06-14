# Queer Conceptions 
![logo](client/public/logo_gc.png)

### Overview
**Queer Conceptions** is part of a larger initiative designed to support LGBTQ+ families navigating their family planning journey. The app provides personalized support through a conception plan generator, virtual doula, and tailored resources. It aims to simplify the complex and often overwhelming process of conception for LGBTQ+ individuals. The app guides users step by step, whether they are considering IVF, surrogacy, sperm/egg donation, or other family-building options.

### Features
- **User Login/Signup:**
Users can create an account or log in securely, allowing them to save and track their personalized conception plans.
- **AI-Generated Conception Plan:**
Based on user input (e.g., method choice, legal/medical needs, timeline), an AI generates a personalized plan, helping users stay organized and progress through their conception journey.
- **Resource Library:**
Users can access a library of relevant resources, including LGBTQ+-inclusive medical and legal information.
- **Virtual Doula Chatbot:**
A virtual doula chatbot provides users with real-time assistance for frequently asked questions regarding conception and family planning, using AI to ensure responses are tailored and informative. Users can ask questions about legal, medical, and emotional aspects of conception, and receive empathetic, comprehensive answers.

### Stretch Goals 
**User Dashboard:** Implement a dashboard for tracking progress over time.

**Community Forum:** Add a feature where users can interact, share experiences, and support each other.

**Expanded AI Capabilities:** Develop AI capabilities further to answer more specific legal and medical questions.

### Technologies
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Ant Design](https://img.shields.io/badge/Ant%20Design-0170FE?style=for-the-badge&logo=antdesign&logoColor=white)
![Supertest](https://img.shields.io/badge/Supertest-323330?style=for-the-badge&logo=testing-library&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![Render](https://img.shields.io/badge/Render-00979D?style=for-the-badge&logo=render&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)
![bcrypt](https://img.shields.io/badge/bcrypt-323330?style=for-the-badge&logo=auth0&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)


### Usage
Once users sign up or log in, they can generate a personalized conception plan by answering a few questions about their family-building preferences. The conception planner offers AI-driven guidance that is tailored to individual needs, providing users with step-by-step instructions and resources. The virtual doula chatbot can be accessed for real-time answers to common questions, offering support throughout the journey.

How to use Queer Conceptions:

1. Sign Up: Create an account to get started.

2. Generate a Plan: Fill out the conception form to receive a customized plan.

3. Chatbot Assistance: Access the virtual doula chatbot for guidance and information.

4. Resource Library: Explore resources tailored to LGBTQ+ individuals and families.

### Preview
![Demo Video](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTI0eXRjd2R6cXI4ZGMxZnYyN25mMXJwYzU5OG10b2RzazIxOGx4YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JkjmQ6NFXuVw4QcGKW/giphy.gif)

![chatbot demo](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXh3aGtnbHhqbmE4bmRibTFmZzZ3MTdvbmRodzV5NDM3cm80NTFjYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QLesSdzPZCVk2gzWbz/giphy.gif)

![plan form demo](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXBpOTM5dTlyMjBkZHBnaDU3aHRheWV4bnRobnY4dmNyNjltaGMxMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rY67cNva0F2ODnD4QX/giphy.gif)

### Setup

To run this project locally, follow these steps:

Clone the repository:

`git clone git@github.com:MBHunter88/queer_conceptions.git
cd queer_conceptions`

Run the setup script:

`./scripts/local_setup.sh`

This script installs dependencies, copies example environment files, and runs the initial database migration. After it completes, edit `server/.env` and `client/.env` with your real values.

Start the backend server:

`npm start --prefix server`

Start the development server:

`npm run dev --prefix client`

Open your browser and go to `localhost`.

### Acknowledgments
I want to thank the following individuals and organizations for their invaluable support and contributions to this project:

**The Techtonica Staff:** For providing the platform and resources to help me grow as a software developer.

**My Mentor:** For guiding me through complex technical challenges and providing invaluable insights.

**My Collaborators:** For their enthusiasm and efforts in making this project a success.

**My Wife:** For her unwavering support and encouragement throughout this journey.

Special thanks to the LGBTQ+ community for inspiring this project and guiding its development through invaluable feedback.