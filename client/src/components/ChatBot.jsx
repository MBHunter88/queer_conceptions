import React, { useState } from 'react';
import { Input, Button, Card, Spin, Space } from 'antd';


const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {

    //prevent empty messages from being sent
    if (!userInput.trim()) return; 

    const updatedMessages = [...messages, { role: 'user', content: userInput }];
    setMessages(updatedMessages);
    setLoading(true);
    setUserInput('');

    try {
      //send full conversation history to backend
      const response = await fetch(`${import.meta.env.VITE_URL}/plans/chatbot`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userMessages: updatedMessages }),
      });

      const data = await response.json();
      //add ai response to message state
      setMessages([...updatedMessages, { role: 'assistant', content: data.message }]);
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
      //display error message to user
      setMessages([...updatedMessages, { role: 'assistant', content: 'Oops! Something went wrong. Please try again later.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="chatbot-container" style={{ maxWidth: '80%', margin: '20px auto', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
    <div className="chatbot-messages" style={{ maxHeight: '35vw', overflowY: 'auto', marginBottom: '20px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
      {messages.map((msg, index) => (
        <div key={index} className={msg.role === 'user' ? 'user-message' : 'assistant-message'} style={{ marginBottom: '10px' }}>
          <p style={{ fontSize: '1.2rem', padding: '10px', backgroundColor: msg.role === 'user' ? '#007000' : '#ffffff', color: msg.role === 'user' ? '#ffffff' : '#000000', borderRadius: '8px', maxWidth: '80%', margin: msg.role === 'user' ? '0 auto 0 0' : '0 0 0 auto' }}>
            {msg.content}
          </p>
        </div>
      ))}
      {loading && (
        <div className="loading-message" style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <Spin size="small" /> <span style={{ marginLeft: '10px' }}>Your virtual doula is typing...</span>
        </div>
      )}
    </div>
    <Space style={{ width: '100%' }}>
      <Input
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Ask me anything..."
        onPressEnter={sendMessage}
        style={{ flex: 1, padding: '10px', fontSize: '1.2rem', borderRadius: '8px',  minWidth: '50vw',  margin: '20px auto' }}
      />
      <Button type="primary" onClick={sendMessage} disabled={loading} style={{ padding: '10px 20px', fontSize: '1.2rem' }}>
        Send
      </Button>
    </Space>
  </Card>
  );
};

export default Chatbot;
