import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useModal } from '../context/ModalContext';
import { Button, Modal, Form, Input, Radio, Select, InputNumber } from 'antd';


const SignUpModal = () => {
 //State to manage if the user has a partner
 const [hasPartner, setHasPartner] = useState(false);
 const [isCustomPronoun, setIsCustomPronoun] = useState(false);
  const [customPronoun, setCustomPronoun] = useState('');
  const { login } = useUser();
  const { isSignUpModalOpen, closeSignUpModal} = useModal()
  
  // Log user in based on input
  const handleSignup = async (values) => {
    if (isCustomPronoun) {
      values.pronouns = customPronoun;
    }
    try {
      const response = await fetch(`${import.meta.env.VITE_URL}/users/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const newUser = await response.json();
        login(newUser.user);
        closeSignUpModal();
      } else {
        console.error('Signup failed', response.statusText)
      }
    } catch (error) {
      console.error('Error adding new user:', error);
    }
  };

  const pronounOptions = [
    {
      value: 'she/her/hers',
      lable: <span>she/her/hers</span>
    },
    {
      value: 'he/him/his',
      lable: <span>he/him/his</span>
    },
    {
      value: 'they/them/theirs',
      lable: <span>they/them/theirs</span>
    },
    {
      value: 'xe/xir/xirs',
      lable: <span>xe/xir/xirs</span>
    },
    {
      value: 'other',
      lable: <span>Other</span>
    }
  ]

//function to handle custome pronoun change
  const handlePronounChange = (value) => {
    if (value === 'other') {
      setIsCustomPronoun(true);
    } else {
      setIsCustomPronoun(false);
    }
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
      title="Sign Up"
      open={isSignUpModalOpen}
      onCancel={closeSignUpModal}
      footer={null}
      width={800}
    >
      <Form onFinish={handleSignup}>
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
          <Select placeholder="Select your pronouns"
          onChange={handlePronounChange}
          options={pronounOptions} 
          dropdownStyle={{ maxWidth: '100%', whiteSpace: 'normal' }}>
          </Select>
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
              <Select placeholder="Select your partner's pronouns"
               options={pronounOptions} 
               dropdownStyle={{ maxWidth: '100%', whiteSpace: 'normal' }}>
              </Select>
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
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SignUpModal;
