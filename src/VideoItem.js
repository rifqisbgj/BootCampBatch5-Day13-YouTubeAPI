import React from "react";

const VideoItem = ({ video, getSelectedVideo }) => {
  return (
    <div onClick={() => getSelectedVideo(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <>{video.snippet.title}</>
    </div>
  );
};

export default VideoItem;
