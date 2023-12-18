// MedicationReminder.js

import React, { useState, useEffect } from 'react';
import './MedicationReminder.css';

const MedicationReminder = () => {
  const [medicationName, setMedicationName] = useState('');
  const [schedule, setSchedule] = useState('');
  const [reminders, setReminders] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Load reminders from local storage
    const savedReminders = JSON.parse(localStorage.getItem('reminders')) || [];
    setReminders(savedReminders);
  }, []);

  const startListening = () => {
    setIsListening(true);
    
  };

  const stopListening = () => {
    setIsListening(false);
  };

  const addMedication = () => {
    if (medicationName.trim() !== '' && schedule.trim() !== '') {
      const newReminder = {
        id: Date.now(),
        medicationName,
        schedule,
      };

      // Save reminder to local storage
      localStorage.setItem('reminders', JSON.stringify([...reminders, newReminder]));

      // Update the local state
      setReminders([...reminders, newReminder]);
      setMedicationName('');
      setSchedule('');

      // Provide audio cue for successful addition using speech synthesis
      const msg = new SpeechSynthesisUtterance(`Medication ${newReminder.medicationName} added successfully.`);
      window.speechSynthesis.speak(msg);
    } else {
      setErrorMessage('Please enter both medication name and schedule.');
    }
  };

  return (
    <div className="medication-reminder">
      {/* Medication input */}
      <div>
        <label htmlFor="medicationName">Medication Name:</label>
        <input
          type="text"
          id="medicationName"
          value={medicationName}
          onChange={(e) => setMedicationName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="schedule">Schedule:</label>
        <input
          type="text"
          id="schedule"
          value={schedule}
          onChange={(e) => setSchedule(e.target.value)}
        />
      </div>

      <button onClick={addMedication}>Add Medication</button>

      {/* Voice activation button */}
      <button onClick={isListening ? stopListening : startListening}>
        {isListening ? 'Stop Listening' : 'Start Listening'}
      </button>

      {/* Error message */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      {/* Display reminders */}
      <div>
        <h2>Reminders</h2>
        <ul>
          {reminders.map((reminder) => (
            <li key={reminder.id}>
              {reminder.medicationName} - {reminder.schedule}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MedicationReminder;
