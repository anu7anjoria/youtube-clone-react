import React from 'react';
import './VideoRow.css';

function VideoRow({
  image,
  title,
  channel,
  subs,
  views,
  timestamp,
  description,
}) {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow_text">
        <h3> {title} </h3>
        <p className="videoRow_headline">
          {channel}•
          <span className="videoSubs">
            <span className="videoRow_subsNumber"> {subs} </span> Subscribers
          </span>
          •{views} • {timestamp}
        </p>
        <p className="videoRow_description"> {description} </p>
      </div>
    </div>
  );
}

export default VideoRow;
