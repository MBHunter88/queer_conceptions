import React from 'react';
import NavBar from '../components/NavBar';
import PlanForm from '../components/forms/ConceptionPlanForm';

const ConceptionPlanner = () => {
 

    return (
        <div className={'user-profile'}>
            <NavBar />
            <h1>Fill out form below!</h1>
            <PlanForm />
        </div>
    );
};

export default ConceptionPlanner;