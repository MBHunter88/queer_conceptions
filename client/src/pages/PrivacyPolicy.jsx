import React from 'react';


//TODO: link real email, style

const PrivacyPolicy = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Privacy Policy</h1>
            <p>
                <h3>Privacy Policy for Conception Plan Data</h3>

                At Queer Conceptions, we take your privacy seriously.
                This privacy policy outlines how we collect, use, and share your personal information,
                especially concerning the conception plan generation feature.

                Information We Collect

                To create a personalized conception plan, we collect specific information from you,
                such as your name, location, age, family planning details, and more.
                This data helps us provide the best possible guidance and tailored plan for your journey.
                We ensure that your data is only used for its intended purpose, and we do not store or share your personal information
                beyond what is necessary for the conception plan process.
            </p>

            <p>
                <h3>Data Sharing with Third-Party Services</h3>

                In order to generate your personalized conception plan, we use a third-party service provided by OpenAI,
                a leading artificial intelligence platform. Your information may be processed by OpenAI to help us provide
                you with accurate and insightful recommendations.

                <h3>Why We Share Your Data</h3>

                The data you provide is shared with OpenAI so that we can leverage their advanced language models to
                assist in generating your conception plan. We do not share data beyond what is necessary for this purpose,
                and we ensure that your information is handled securely.
            </p>
            <p>
                OpenAI takes data privacy seriously. For more details on how your data is handled by OpenAI, please visit their
                <a
                    href="https://openai.com/policies/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#1890ff', marginLeft: '5px' }}
                >
                    Privacy Policy
                </a>.
            </p>
            <p>
                <h3>Your Consent:</h3>

                By using the conception plan feature, you agree to the sharing of your information with OpenAI as described above.
                We value your trust and make every effort to protect your privacy.
            </p>
            <p>
               <h3>Questions or Concerns?</h3> 

                If you have any questions about how your data is used or wish to learn more, please do not hesitate to contact us at
                email.exaple.com. We are here to provide you with complete transparency and confidence in our data practices.

                Your Privacy Choices

                You have the right to opt out of sharing your information with OpenAI by choosing not to use the conception plan feature. We will continue to offer other features that do not require third-party data sharing.

            </p>
           
        </div>
    );
};

export default PrivacyPolicy;
