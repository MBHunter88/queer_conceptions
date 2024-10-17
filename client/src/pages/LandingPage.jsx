import React from 'react';
import NavBar from '../components/NavBar';
import FeatureSection from '../components/FeatureSection';

const LandingPage = () => {


    return (
        <div className={'landing-page'}>
            <NavBar />
            <h1>Hello World!</h1>
            <FeatureSection
                title="Conception Planner"
                description="Start here to get a personalized plan for your family today."
            />
            <FeatureSection
                title="Resource Library"
                description="Resources tailored to help LGBTQ+ families navigate family planning."
            />
            <FeatureSection
                title="Virtual Doula"
                description="Coming Soon."
            />
        </div>
    );
};

export default LandingPage;