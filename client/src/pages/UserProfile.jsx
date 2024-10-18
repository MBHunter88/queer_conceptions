import React from 'react';
import NavBar from '../components/NavBar';
import { useUser } from '../context/UserContext'


const UserProfile = () => {
 
    const { user } = useUser();

    if (!user) {
      return <p>Please log in to view your profile.</p>;
    }

    return (
        <div className={'user-profile'}>
            <NavBar />
            <h1>Welcome User!</h1>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserProfile;