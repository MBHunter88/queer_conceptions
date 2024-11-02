import React from 'react';

//TODO: link real email, style

const PrivacyPolicy = () => {
    return (
        <div style={{ padding: '40px', maxWidth: '80%', margin: '0 auto', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>Privacy Policy</h1>
            <div style={{ lineHeight: '1.75', fontSize: '1.2rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '20px' }}>Privacy Policy for Conception Plan Data</h3>
                <p>
                    At Queer Conceptions, we take your privacy seriously. This privacy policy outlines how we collect, use, and share your personal information, especially concerning the conception plan generation feature.
                </p>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '20px' }}>Information We Collect</h3>
                <p>
                    To create a personalized conception plan, we collect specific information from you, such as your name, location, age, family planning details, and more. This data helps us provide the best possible guidance and tailored plan for your journey. We ensure that your data is only used for its intended purpose, and we do not store or share your personal information beyond what is necessary for the conception plan process.
                </p>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '20px' }}>Data Sharing with Third-Party Services</h3>
                <p>
                    In order to generate your personalized conception plan, we use a third-party service provided by OpenAI, a leading artificial intelligence platform. Your information may be processed by OpenAI to help us provide you with accurate and insightful recommendations.
                </p>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '20px' }}>Why We Share Your Data</h3>
                <p>
                    The data you provide is shared with OpenAI so that we can leverage their advanced language models to assist in generating your conception plan. We do not share data beyond what is necessary for this purpose, and we ensure that your information is handled securely.
                </p>
                <p>
                    OpenAI takes data privacy seriously. For more details on how your data is handled by OpenAI, please visit their
                    <a
                        href="https://openai.com/policies/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#007000', marginLeft: '5px' }}
                    >
                        Privacy Policy
                    </a>.
                </p>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '20px' }}>Your Consent</h3>
                <p>
                    By using the conception plan feature, you agree to the sharing of your information with OpenAI as described above. We value your trust and make every effort to protect your privacy.
                </p>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '20px' }}>Medical & Legal Disclaimer</h3>
                <p>
                    The information provided by Queer Conceptions is intended to support your family-building journey but does not substitute for professional medical or legal advice. Please consult a healthcare provider for medical or health-related advice. For questions regarding legal aspects of family planning, please seek professional legal counsel.
                </p>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '20px' }}>Questions or Concerns?</h3>
                <p>
                    If you have any questions about how your data is used or wish to learn more, please do not hesitate to contact us at <a href="mailto:chellhunt88@gmail.com" style={{ color: '#007000' }}>queer_conceptions@gmail.com</a>. We are here to provide you with complete transparency and confidence in our data practices.
                </p>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '20px' }}>Your Privacy Choices</h3>
                <p>
                    You have the right to opt out of sharing your information with OpenAI by choosing not to use the conception plan feature. We will continue to offer other features that do not require third-party data sharing.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
