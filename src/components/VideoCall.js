import React from 'react';

const VideoCall = ({ contact, onEndCall, onStartCall }) => {
  return (
    <div className="video-call">
      <h2>Video Call</h2>
      <p>Contact: {contact.name}</p>
      {/* Implement actual video call UI or integrate with a third-party service */}
      <p>Video Call UI Goes Here</p>

      {/* Button to start the call */}
      <button onClick={onStartCall}>Start Call</button>

      {/* Button to end the call */}
      <button onClick={onEndCall}>End Call</button>
    </div>
  );
};

export default VideoCall;
