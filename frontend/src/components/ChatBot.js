import React, { useState, useEffect } from 'react';
import './ChatBot.css';
import Notification from './Notification';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  const handleSend = () => {
    if (userInput.trim() === '') return;

    setMessages([...messages, { sender: 'user', text: userInput }]);
    setUserInput('');

    const botResponse = getBotResponse(userInput);
    setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botResponse }]);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  const getBotResponse = (input) => {
    const responses = {
      'what is ccl hospital': 'CCL Hospital is part of Central Coalfields Limited, a Category-I Mini-Ratna Company since October 2007. The hospital provides comprehensive medical services to its patients and is located in Ranchi, Jharkhand.',
      'where is ccl hospital located': 'CCL Hospital is located at Gandhi Nagar, Kanke Road, Ranchi-834008, Jharkhand.',
      'what specialties are available at ccl hospital': 'CCL Hospital offers a variety of specialties including General Surgery, Neurology, Child Care, and more.',
      'how can i book an appointment with a doctor': 'To book an appointment, you need to log in to your account, go to the "Book Appointment" section, and select the desired doctor and available time slot.',
      'who are the doctors available at ccl hospital': 'Some of the doctors available at CCL Hospital include Dr. Harshil Patel (Child Care Consultant), Dr. Sahil Achhava (Neurology), and Dr. Dhruv Shah (General Surgery).',
      'how can i view the profiles of the doctors at ccl hospital': 'You can view the profiles of the doctors by visiting the "Doctors" section on our website. Each doctor’s profile includes their qualifications and area of expertise.',
      'how do i register for a new account': 'To register a new account, go to the "Register" page, fill in your details including First Name, Last Name, Email Address, Password, and confirm your password. Accept the terms and conditions and click "Register".',
      'i forgot my password. how can i reset it': 'If you forgot your password, go to the "Login" page and click on the "click here" link to reset your password. Follow the instructions to set a new password.',
      'how can i contact ccl hospital': 'You can contact CCL Hospital via the following means: Toll-Free (Samadhan Cell): 18003456501, WhatsApp No.: 7250141999, Address: Gandhi Nagar, Kanke Road, Ranchi-834008, Jharkhand.',
      'what are the working hours of ccl hospital': 'CCL Hospital operates 24/7 to provide continuous medical care to patients.',
      'default': 'I am not sure how to respond to that. Can you please rephrase?'
    };

    const keywords = {
      'ccl hospital': [
        'what is ccl hospital',
        'what does ccl hospital do',
        'information about ccl hospital',
        'tell me about ccl hospital'
      ],
      'location': [
        'where is ccl hospital located',
        'address of ccl hospital',
        'location of ccl hospital',
        'ccl hospital address'
      ],
      'specialties': [
        'what specialties are available at ccl hospital',
        'specialties at ccl hospital',
        'services offered by ccl hospital',
        'what services are provided by ccl hospital'
      ],
      'appointment': [
        'how can i book an appointment with a doctor',
        'book appointment at ccl hospital',
        'appointment booking process at ccl hospital',
        'how to book a doctor appointment at ccl hospital'
      ],
      'doctors': [
        'who are the doctors available at ccl hospital',
        'doctors at ccl hospital',
        'list of doctors at ccl hospital',
        'available doctors at ccl hospital'
      ],
      'doctor profiles': [
        'how can i view the profiles of the doctors at ccl hospital',
        'doctor profiles at ccl hospital',
        'view doctor profiles at ccl hospital',
        'information about doctors at ccl hospital'
      ],
      'register': [
        'how do i register for a new account',
        'register at ccl hospital',
        'create account at ccl hospital',
        'how to register at ccl hospital'
      ],
      'password': [
        'i forgot my password. how can i reset it',
        'reset password at ccl hospital',
        'forgot password ccl hospital',
        'password recovery at ccl hospital'
      ],
      'contact': [
        'how can i contact ccl hospital',
        'contact details for ccl hospital',
        'contact information for ccl hospital',
        'how to contact ccl hospital'
      ],
      'hours': [
        'what are the working hours of ccl hospital',
        'working hours of ccl hospital',
        'visiting hours of ccl hospital',
        'ccl hospital working time'
      ]
    };

    const inputWords = input.toLowerCase().split(' ');
    for (let word of inputWords) {
      for (let key in keywords) {
        if (keywords[key].some(question => question.includes(word))) {
          return responses[keywords[key][0]];
        }
      }
    }
    return responses['default'];
  };

  const toggleChat = () => {
    if (!isOpen) {
      setMessages([{ sender: 'bot', text: 'Hi! I am CCL BOT. How can I help you today?' }]);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {showNotification && <Notification message="Hi! I am CCL BOT. How can I help you today?" duration={5000} />}
      <div className="chatbot-icon" onClick={toggleChat}>
        <img src="/images/chatbot.png" alt="Chat Icon" className="chatbot-image" />
      </div>
      {isOpen && (
        <div className="chatbot-container">
          <div className="chat-header">
            <h5>CCL BOT</h5>
          </div>
          <div className="chat-box">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input-container">
            <input
              type="text"
              className="form-control"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type a message..."
              onKeyPress={handleKeyPress}
            />
            <button className="btn btn-success" onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;