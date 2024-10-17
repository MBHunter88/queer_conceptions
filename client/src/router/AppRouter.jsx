import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import UserProfile from '../pages/UserProfile'
import ResourceLibrary from '../pages/ResourceLibrary';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/resources" element={<ResourceLibrary />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
