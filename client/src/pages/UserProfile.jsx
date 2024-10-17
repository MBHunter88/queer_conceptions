import React from 'react';
import NavBar from '../components/NavBar';


const UserProfile = () => {
 
//TODO: Add user information from fetched requests to db

    return (
        <div className={'user-profile'}>
            <NavBar />
            <h1>Welcome User!</h1>

        </div>
    );
};

export default UserProfile;