import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { Card, Button, Modal } from 'antd';
import GeneratedPlan from '../components/GeneratedPlan';
import SignUpModal from '../components/SignUpModal';

const UserProfile = () => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [showPlan, setShowPlan] = useState(false)
    const { user, setUser } = useUser();

    if (!user) {
        return <p>Please log in to view your profile.</p>;
    }

    // Handler to open the edit profile modal
    const handleEditProfile = () => {
        setIsEditModalOpen(true);
    };

    // Handler to close the edit profile modal
    const handleCloseModal = () => {
        setIsEditModalOpen(false);
    };

    // Handler to DELETE user 
    const handleDeleteUser = () => {
        Modal.confirm({
            title: 'Warning',
            content: "Are you sure you want to delete your account?",
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk: async () => {
                try {
                    const token = localStorage.getItem('token')
                    const response = await fetch(`${import.meta.env.VITE_URL}/users/delete/${user.id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    });

                    if (response.ok) {
                        setUser(null);
                        alert('Account deleted successfully!');
                    } else {
                        alert('Failed to delete account');
                    }
                } catch (error) {
                    console.error('Error deleting user account:', error);
                }
            },
            onCancel() {
                console.log('Deletion cancelled');
            },
        });
    };

    return (
        <div className={'user-profile'} style={{ padding: '30px', maxWidth: '100%', margin: '0 auto', backgroundColor: '#EEE0CB',borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
  <Card title={<span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Profile</span>} style={{ marginBottom: '20px', maxWidth: '80%',  margin: '0 auto' }}>
    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>Welcome {user.name} ({user.pronouns})</h2>
    <Card type="inner" title={<span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>User Details</span>} style={{ marginBottom: '20px' }}>
      <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Email: {user.email}</p>
      <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Location: {user.location}</p>
      <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Family Building Plan: {user.family_structure}</p>
      <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Age: {user.age}</p>
    </Card>
    {user.has_partner && (
      <Card type="inner" title={<span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Partner Details</span>} style={{ marginBottom: '20px' }}>
        <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Partner Name: {user.partner_name} ({user.partner_pronouns})</p>
        <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Partner Identifies As: {user.partner_identifies_as}</p>
        <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Partner Age: {user.partner_age}</p>
      </Card>
    )}
    {user.plan && (
                    <div style={{ marginTop: '20px' }}>
                        <p></p>
                        <Button type="primary" onClick={() => setShowPlan(!showPlan)} style={{ marginBottom: '20px', fontSize: '1rem',  backgroundColor: '#007000',
            borderColor: '#007000', }}>
                            {showPlan ? 'Collapse Plan' : 'Show Plan'}
                        </Button>
                        {showPlan && <GeneratedPlan />}
                    </div>
                )}
  </Card>
  <div style={{ textAlign: 'center', padding: '10px 20px'  }}>
    <Button type="primary" onClick={handleEditProfile} style={{ marginRight: '10px', padding: '10px 20px', fontSize: '1rem',  backgroundColor: '#007000',
            borderColor: '#007000', }}>
      Edit Profile
    </Button>
    <Button htmlType="submit" onClick={handleDeleteUser} danger style={{ padding: '10px 20px', fontSize: '1rem' }}>
      Delete Account
    </Button>
  </div>
  {/* Edit Profile Modal (Reusing SignUpModal) */}
  <SignUpModal
    isEditMode={true}
    initialValues={user}
    isSignUpModalOpen={isEditModalOpen}
    closeSignUpModal={handleCloseModal}
  />
</div>

    );
};

export default UserProfile;
