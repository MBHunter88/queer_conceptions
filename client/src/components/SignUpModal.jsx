import React, { useState, useEffect } from 'react';
import { useUser } from '../context/UserContext';
import { Button, Modal, Form, Input, Radio, Select, InputNumber, Space } from 'antd';

const SignUpModal = ({ isEditMode = false, initialValues = {}, isSignUpModalOpen, closeSignUpModal }) => {
  // State management
  const [hasPartner, setHasPartner] = useState(false);
  const [isCustomPronoun, setIsCustomPronoun] = useState(false);
  const [customPronoun, setCustomPronoun] = useState('');
  const { login, setUser, user } = useUser();
  const [form] = Form.useForm(); // Create form instance

  // Set initial values in the form if in edit mode
  useEffect(() => {
    if (isEditMode && initialValues) {
      form.setFieldsValue(initialValues);
      setHasPartner(initialValues.has_partner);
      if (initialValues.pronouns === 'other') {
        setIsCustomPronoun(true);
        setCustomPronoun(initialValues.customPronoun || '');
      }
    }
  }, [isEditMode, initialValues, form]);

  // Log user in or update based on input
  const handleSubmit = async (values) => {
    if (isCustomPronoun) {
      values.pronouns = customPronoun;
    }

    const token = localStorage.getItem('token');
  if (!token) {
    alert('Session expired, please log in again.');
    return;
  }

    try {
      let response;
      
      if (isEditMode) {
        // PATCH request for editing the profile
        response = await fetch(`${import.meta.env.VITE_URL}/users/update/${initialValues.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(values),
        });
      } else {
        // POST request for signing up
        response = await fetch(`${import.meta.env.VITE_URL}/users/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
      }

      if (response.ok) {
        const updatedUser = await response.json();
        console.log('Updated User:', updatedUser);
      
        if (isEditMode) {
          setUser((prevUser) => ({
            ...prevUser, 
            ...updatedUser.user,  
          }));
        //TODO: replace with modal to keep consistency
          alert('Profile updated successfully!');
        } else {
          login(updatedUser);
        }
        closeSignUpModal();
      } else {
        console.error('Operation failed', response.statusText);
      }
    } catch (error) {
      console.error('Error processing request:', error);
    }
  };


  // Pronoun options
  const pronounOptions = [
    { value: 'she/her/hers', label: <span>she/her/hers</span> },
    { value: 'he/him/his', label: <span>he/him/his</span> },
    { value: 'they/them/theirs', label: <span>they/them/theirs</span> },
    { value: 'xe/xir/xirs', label: <span>xe/xir/xirs</span> },
    { value: 'other', label: <span>Other</span> },
  ];

  // Handle custom pronoun change
  const handlePronounChange = (value) => {
    setIsCustomPronoun(value === 'other');
  };

  const handlePartnerChange = (e) => {
    setHasPartner(e.target.value);
  };

  const familyPlanOptions = hasPartner
    ? [
      {
        value: 'Both partners are willing and/or able to be gestational carrier',
        label: <span>We are both able and willing to be gestational carriers</span>,
      },
      {
        value: 'Couple (one partner is willing and/or able to be gestational carrier)',
        label: <span>One of us is able and willing to be a gestational carrier</span>,
      },
      {
        value: 'Couple (neither partner willing nor able to be gestational carrier)',
        label: <span>Neither of us are able or willing to be gestational carriers</span>,
      },
      {
        value: 'unsure of family planning options',
        label: <span>We are not sure</span>,
      },
    ]
    : [
      {
        value: 'Single, planning to be gestational carrier',
        label: <span>Single, planning to be the gestational carrier</span>,
      },
      {
        value: 'Single, not willing/able to be gestational carrier',
        label: <span>Single, planning to use a donor or surrogate</span>,
      },
      {
        value: 'unsure of family planning options',
        label: <span>I am not sure</span>,
      },
    ];

  return (
    <Modal
      title={isEditMode ? "Edit Profile" : "Sign Up"}
      open={isSignUpModalOpen}
      onCancel={closeSignUpModal}
      footer={null}
      width={800}
    >
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item>

        {!isEditMode && (
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
        )}

        <Form.Item
          label="First Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your first name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Location"
          name="location"
          rules={[
            {
              required: true,
              message: 'Please input your location!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Pronouns"
          name="pronouns"
          rules={[
            {
              required: true,
              message: 'Please select your pronouns!',
            },
          ]}
        >
          <Select
            placeholder="Select your pronouns"
            onChange={handlePronounChange}
            options={pronounOptions}
            dropdownStyle={{ maxWidth: '100%', whiteSpace: 'normal' }}
          />
        </Form.Item>

        {isCustomPronoun && (
          <Form.Item
            label="Custom Pronouns"
            rules={[
              {
                required: true,
                message: 'Please input your pronouns!',
              },
            ]}
          >
            <Input
              value={customPronoun}
              onChange={(e) => setCustomPronoun(e.target.value)}
              placeholder="Enter your pronouns"
            />
          </Form.Item>
        )}

        <Form.Item
          label="Age"
          name="age"
          rules={[
            {
              required: true,
              message: 'Please input your age!',
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Partner?"
          name="has_partner"
          rules={[
            {
              required: true,
              message: 'Please indicate if you have a partner!',
            },
          ]}
        >
          <Radio.Group onChange={handlePartnerChange}>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>

        {hasPartner && (
          <>
            <Form.Item
              label="Partner's First Name"
              name="partner_name"
              rules={[
                {
                  required: true,
                  message: `Please input your partner's first name!`,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Partner's Pronouns"
              name="partner_pronouns"
              rules={[
                {
                  required: true,
                  message: `Please select your partner's pronouns!`,
                },
              ]}
            >
              <Select
                placeholder="Select your partner's pronouns"
                options={pronounOptions}
                dropdownStyle={{ maxWidth: '100%', whiteSpace: 'normal' }}
              />
            </Form.Item>

            <Form.Item
              label="Partner's Age"
              name="partner_age"
              rules={[
                {
                  required: true,
                  message: `Please input your partner's age!`,
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
          </>
        )}

        <Form.Item
          label="Family Plan"
          name="family_structure"
          rules={[
            {
              required: true,
              message: 'Please select your family-building plan!',
            },
          ]}
        >
          <Select
            placeholder="Select your family-building plan"
            options={familyPlanOptions}
            dropdownStyle={{ maxWidth: '100%', whiteSpace: 'normal' }}
          />
        </Form.Item>

        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              {isEditMode ? "Update Profile" : "Sign Up"}
            </Button>

            <Button  onClick={closeSignUpModal}>
              Cancel
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SignUpModal;
