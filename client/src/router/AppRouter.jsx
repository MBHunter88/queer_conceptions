import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import UserProfile from '../pages/UserProfile'
import ResourceLibrary from '../pages/ResourceLibrary';
import ConceptionPlanner from '../pages/ConceptionPlanner';
import NavBar from '../components/NavBar';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import ChatPage from '../pages/ChatPage';

const AppRouter = () => {
  return (
    <Router>
       <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/planner" element={<ConceptionPlanner />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/resources" element={<ResourceLibrary />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/chatbot" element={<ChatPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
