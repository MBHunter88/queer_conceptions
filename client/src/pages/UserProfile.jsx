import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { Card, Button, Modal } from 'antd';
import GeneratedPlan from '../components/GeneratedPlan';
import SignUpModal from '../components/SignUpModal';

const UserProfile = () => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
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
        <div className={'user-profile'}>
            <Card title="Profile">
                <h2>Welcome {user.name} ({user.pronouns})</h2>
                <Card type="inner" title="User Details">
                    <p>Email: {user.email}</p>
                    <p>Location: {user.location}</p>
                    <p>Family Building Plan: {user.family_structure}</p>
                    <p>Age: {user.age}</p>
                </Card>
                {user.has_partner && (
                    <Card type="inner" title="Partner Details">
                        <p>Partner Name: {user.partner_name} ({user.partner_pronouns})</p>
                        <p>Partner Identifies As: {user.partner_identifies_as}</p>
                        <p>Partner Age: {user.partner_age}</p>
                    </Card>
                )}
                {user.plan && (
                    <GeneratedPlan />
                )}
            </Card>
            <Button type="primary" onClick={handleEditProfile} style={{ marginRight: '10px' }}>
                Edit Profile
            </Button>
            <Button htmlType="submit" onClick={handleDeleteUser} danger>
                Delete Account
            </Button>
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
