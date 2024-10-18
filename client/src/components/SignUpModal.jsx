import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useModal } from '../context/ModalContext';

//TODO: refine form input options

const SignUpModal = () => {
  //state management
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [familyStructure, setFamilyStructure] = useState('');
  const [hasChildren, setHasChildren] = useState(false)
  const { login } = useUser();
  const { openSignUpModal, isSignUpModalOpen, closeSignUpModal} = useModal()
  
  // Log user in based on input
  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/users/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            email,
            password,
            name,
            location,
            pronouns,
            family_structure: familyStructure,
            has_children: hasChildren,
        }),
      });

      if (response.ok) {
        const newUser = await response.json();
        login(newUser.user)
      }
    } catch (error) {
      console.error('Error adding new user:', error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Sign-Up</h3>
        <form onSubmit={handleSignup}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // required
          />
            <label>First Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
            <label>Location:</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
            <label>Pronouns:</label>
          <div>
            <label>
              <input
                type="radio"
                name="pronouns"
                value="she/they"
                checked={pronouns === "she/they"}
                onChange={(e) => setPronouns(e.target.value)}
                required
              />
              she/they
            </label>
            <label>
              <input
                type="radio"
                name="pronouns"
                value="he/him"
                checked={pronouns === "he/him"}
                onChange={(e) => setPronouns(e.target.value)}
                required
              />
              he/him
            </label>
            <label>
              <input
                type="radio"
                name="pronouns"
                value="they/them"
                checked={pronouns === "they/them"}
                onChange={(e) => setPronouns(e.target.value)}
                required
              />
              they/them
            </label>
          </div>
          <label>Family Structure:</label>
          <div>
            <label>
              <input
                type="radio"
                name="family_structure"
                value="Queer Couple, 1 Gestational Carrier"
                checked={familyStructure === "Queer Couple, 1 Gestational Carrier"}
                onChange={(e) => setFamilyStructure(e.target.value)}
                required
              />
              Queer Couple, 1 Gestational Carrier
            </label>
            <label>
              <input
                type="radio"
                name="family_structure"
                value="Gay Couple, 0 Gestational Carrier"
                checked={familyStructure === "Gay Couple, 0 Gestational Carrier"}
                onChange={(e) => setFamilyStructure(e.target.value)}
                required
              />
              Gay Couple, 0 Gestational Carrier
            </label>
            <label>
              <input
                type="radio"
                name="family_structure"
                value="Single, 1 Gestational Carrier"
                checked={familyStructure === "Single, 1 Gestational Carrier"}
                onChange={(e) => setFamilyStructure(e.target.value)}
                required
              />
             Single, 1 Gestational Carrier
            </label>
          </div>
            <label>Has Children:</label>
            <div>
                <label>
          <input
            type="radio"
            name="has_children"
            value={"true"}
            checked={hasChildren === 'true'}
            onChange={(e) => setHasChildren(e.target.value)}
            required
          />Yes
          </label>
          <label>
          <input
            type="radio"
            name="has_children"
            value={"false"}
            checked={hasChildren === "false"}
            onChange={(e) => setHasChildren(e.target.value)}
            required
          />No
          </label>
          </div>
          <button type="submit">SignUp</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
