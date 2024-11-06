import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { Layout, Card, Button, Modal, Typography, Row, Col } from 'antd';
import GeneratedPlan from '../components/GeneratedPlan';
import SignUpModal from '../components/SignUpModal';

const { Content, Footer } = Layout;
const { Title, Text } = Typography;

const UserProfile = () => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [showPlan, setShowPlan] = useState(false);
    const { user, setUser } = useUser();

    if (!user) {
        return <p style={{ fontSize: '1.2rem', color: '#333', textAlign: 'center' }}>Please log in to view your profile.</p>;
    }

    const handleEditProfile = () => {
        setIsEditModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsEditModalOpen(false);
    };

    const handleDeleteUser = () => {
        Modal.confirm({
            title: 'Warning',
            content: "Are you sure you want to delete your account?",
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk: async () => {
                try {
                    const token = localStorage.getItem('token');
                    const response = await fetch(`${import.meta.env.VITE_URL}/users/delete/${user.id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    });

                    if (response.ok) {
                        setUser(null);
                        Modal.success({ content: 'Account deleted successfully!' });
                    } else {
                        Modal.error({ content: 'Failed to delete account' });
                    }
                } catch (error) {
                    console.error('Error deleting user account:', error);
                    Modal.error({ content: 'An error occurred while deleting the account.' });
                }
            },
            onCancel() {
                console.log('Deletion cancelled');
            },
        });
    };

    return (
        <Layout style={{ backgroundColor: '#EEE0CB', padding: '50px 20px' }}>
            <Content style={{  padding: '0 20px',   }}>
                <Row justify="center" style={{marginBottom: '200px'}}>
                    <Col span={24}>
                        <Card
                            title={<Title level={2} style={{ color: '#333'}}>Profile</Title>}
                            style={{
                                padding: '20px',
                                backgroundColor: '#FFF4E0',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                
                            }}
                        >
                            <Title level={3} style={{ color: '#007000' }}>
                                Welcome, {user.name} ({user.pronouns})
                            </Title>
                            <Card
                                type="inner"
                                title={<Text strong style={{ fontSize: '1.25rem', color: '#333' }}>Account Details</Text>}
                                style={{ marginBottom: '20px' }}
                            >
                                <Text>Email: {user.email}</Text><br />
                                <Text>Location: {user.location}</Text><br />
                                <Text>Family Building Plan: {user.family_structure}</Text><br />
                                <Text>Age: {user.age}</Text>
                            </Card>

                            {user.has_partner && (
                                <Card
                                    type="inner"
                                    title={<Text strong style={{ fontSize: '1.25rem', color: '#333' }}>Partner Details</Text>}
                                    style={{ marginBottom: '20px' }}
                                >
                                    <Text>Partner Name: {user.partner_name} ({user.partner_pronouns})</Text><br />
                                    <Text>Partner Identifies As: {user.partner_identifies_as}</Text><br />
                                    <Text>Partner Age: {user.partner_age}</Text>
                                </Card>
                            )}

                            {user.plan && (
                                <div style={{  textAlign: 'center', marginTop: '20px' }}>
                                    <Button
                                        type="primary"
                                        onClick={() => setShowPlan(!showPlan)}
                                        style={{
                                            marginBottom: '20px',
                                            fontSize: '1rem',
                                            backgroundColor: '#007000',
                                            borderColor: '#007000',
                                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                        }}
                                    >
                                        {showPlan ? 'Collapse Plan' : 'Show Plan'}
                                    </Button>
                                    {showPlan && <GeneratedPlan />}
                                </div>
                            )}

                            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                <Button
                                    type="primary"
                                    onClick={handleEditProfile}
                                    style={{
                                        marginRight: '10px',
                                        padding: '10px 20px',
                                        fontSize: '1rem',
                                        backgroundColor: '#007000',
                                        borderColor: '#007000',
                                    }}
                                >
                                    Edit Profile
                                </Button>
                                <Button
                                    danger
                                    onClick={handleDeleteUser}
                                    style={{
                                        padding: '10px 20px',
                                        fontSize: '1rem',
                                        backgroundColor: '#ffff',
                                        borderColor: '#007000',
                                    }}
                                >
                                    Delete Account
                                </Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
           

            {/* Edit Profile Modal (Reusing SignUpModal) */}
            <SignUpModal
                isEditMode={true}
                initialValues={user}
                isSignUpModalOpen={isEditModalOpen}
                closeSignUpModal={handleCloseModal}
            />
             <Footer style={{ textAlign: 'center', padding: '30px 50px', backgroundColor: '#EEE0CB' }}>
        BHBH Design ©{new Date().getFullYear()} Created by MJBH
      </Footer>
      </Content>
        </Layout>
    );
};

export default UserProfile;
