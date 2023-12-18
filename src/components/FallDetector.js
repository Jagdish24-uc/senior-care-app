import React, { useState, useEffect } from 'react';
import './FallDetector.css';

const FallDetector = () => {
  // Simulated fall detection state (replace with actual fall detection logic)
  const [fallDetected, setFallDetected] = useState(false);

  // Simulated emergency contact information (replace with actual data)
  const emergencyContact = {
    name: 'John Doe',
    phoneNumber: '123-456-7890',
  };

  // Simulate fall detection logic with a timer
  useEffect(() => {
    const fallDetectionTimer = setTimeout(() => {
      // Replace this with actual fall detection logic based on sensor data
      // For simulation purposes, it toggles between fall detected and not detected every 10 seconds
      setFallDetected((prevFallDetected) => !prevFallDetected);
    }, 10000);

    // Clean up the timer on component unmount
    return () => clearTimeout(fallDetectionTimer);
  }, []);

  return (
    <div className="fall-detector">
      <h2>Fall Detection</h2>
      <p>Status: {fallDetected ? 'Fall Detected' : 'No Fall Detected'}</p>

      {fallDetected && (
        <div>
          <p>Contact Emergency Services</p>
          <p>Emergency Contact: {emergencyContact.name}</p>
          <p>Contact Number: {emergencyContact.phoneNumber}</p>
        </div>
      )}
    </div>
  );
};

export default FallDetector;
