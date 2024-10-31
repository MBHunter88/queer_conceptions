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
    <Card className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.role === 'user' ? 'user-message' : 'assistant-message'}>
            <p>{msg.content}</p>
          </div>
        ))}
        {loading && (
          <div className="loading-message">
            <Spin size="small" /> <span> Your virtual doula is typing...</span>
          </div>
        )}
      </div>
      <Space>
      <Input
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Ask me anything..."
        onPressEnter={sendMessage}
      />
      <Button type="primary" onClick={sendMessage} disabled={loading}>
        Send
      </Button>
      </Space>
    </Card>
  );
};

export default Chatbot;
