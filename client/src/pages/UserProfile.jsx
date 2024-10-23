import React from 'react';
import NavBar from '../components/NavBar';
import { useUser } from '../context/UserContext'
import { Card } from 'antd';
import GeneratedPlan from '../components/GeneratedPlan';


const UserProfile = () => {
 
    const { user } = useUser();

    if (!user) {
      return <p>Please log in to view your profile.</p>;
    }

    return (
        <div className={'user-profile'}>
            <Card
            title="Profile">
            <h2>Welcome {user.name} ({user.pronouns})</h2>
            <Card type='inner' 
            title='User Details'>
            <p>Email: {user.email}</p>
            <p>Location: {user.location}</p>
            <p>Family Building Plan: {user.family_structure}</p>
            <p>Age: {user.age}</p>
            </Card>
            <Card type='inner' title="Partner Details">
            <p>Partner Name: {user.partner_name} ({user.partner_pronouns})</p>
            <p>Partner Identifies As: {user.partner_identifies_as}</p>
            <p>Partner Age: {user.partner_age}</p>
            </Card>
           {user.plan && (
            <GeneratedPlan/>
           )}
             
            
            </Card>
        </div>
    );
};

export default UserProfile;