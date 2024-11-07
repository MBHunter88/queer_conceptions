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
    <Card className="chatbot-container" style={{ maxWidth: '80%', margin: '20px auto', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)', backgroundColor: '#fafafa', }}>
    <div className="chatbot-messages" 
    style={{ 
      maxHeight: '35vw', 
      overflowY: 'auto', 
      marginBottom: '20px', 
      padding: '15px', 
      backgroundColor: '#f7f7f7', 
      borderRadius: '10px', 
      boxShadow: 'inset 0 2px 6px rgba(0, 0, 0, 0.1)', }}>
      {messages.map((msg, index) => (
        <div key={index} className={msg.role === 'user' ? 'user-message' : 'assistant-message'} 
        style={{ display: 'flex', 
          justifyContent: msg.role === 'user' ? 'flex-start' : 'flex-end', 
          marginBottom: '12px', }}>
          <p 
          style={{ 
            fontSize: '1.1rem', 
            padding: '12px 16px', 
            backgroundColor: msg.role === 'user' ? '#007000' : '#ffffff', 
            color: msg.role === 'user' ? '#ffffff' : '#333333', 
            borderRadius: msg.role === 'user' ? '12px 12px 12px 0px' : '12px 12px 0px 12px',
            maxWidth: '75%', 
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',}}>
            {msg.content}
          </p>
        </div>
      ))}
      {loading && (
        <div className="loading-message" 
        style={{ 
          marginBottom: '12px', 
          display: 'flex', 
          alignItems: 'center', 
          color: '#888888', 
          justifyContent: 'flex-end' }}>
          <Spin size="small" /> <span style={{ marginLeft: '8px', fontSize: '1rem'}}>Your virtual doula is typing...</span>
        </div>
      )}
    </div>
    <Space style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '10px'  }}>
      <Input
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Ask me anything..."
        onPressEnter={sendMessage}
        style={{ 
          flex: 1, 
        padding: '12px', 
        fontSize: '1.1rem', 
        borderRadius: '8px', 
        minWidth: '50vw', 
        border: '1px solid #d9d9d9', }}
      />
      <Button type="primary" onClick={sendMessage} disabled={loading} 
      style={{ 
        padding: '10px 24px', 
        fontSize: '1.1rem', 
        backgroundColor: '#007000', 
        borderColor: '#007000', 
        borderRadius: '8px'  }}>
        Send
      </Button>
    </Space>
  </Card>
  );
};

export default Chatbot;
