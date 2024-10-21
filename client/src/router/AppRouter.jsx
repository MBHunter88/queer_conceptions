import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import UserProfile from '../pages/UserProfile'
import ResourceLibrary from '../pages/ResourceLibrary';
import ConceptionPlanner from '../pages/ConceptionPlanner';
import NavBar from '../components/NavBar';

const AppRouter = () => {
  return (
    <Router>
       <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/planner" element={<ConceptionPlanner />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/resources" element={<ResourceLibrary />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
