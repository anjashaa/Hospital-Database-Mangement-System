import React, { useEffect, useState } from 'react';
import './Notification.css';

const Notification = ({ message, duration }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    visible && (
      <div className="notification">
        {message}
      </div>
    )
  );
};

export default Notification;