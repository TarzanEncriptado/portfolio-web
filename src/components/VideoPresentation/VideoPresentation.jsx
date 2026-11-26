import React from 'react';
import './VideoPresentation.css';

const VideoPresentation = ({ videoUrl, title, description }) => {
  return (
    <div className="video-presentation">
      <div className="video-container">
        <video 
          controls
          autoPlay
          muted
          loop
          className="presentation-video"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {(title || description) && (
        <div className="video-info">
          {title && <h2 className="video-title">{title}</h2>}
          {description && <p className="video-description">{description}</p>}
        </div>
      )}
    </div>
  );
};

export default VideoPresentation;
