import React from "react";
import VideoItem from "./VideoItem";
// import VideoItem f

const ListVideo = ({ videos, getSelectedVideo }) => {
  const unselectedVideos = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        getSelectedVideo={getSelectedVideo}
      />
    );
  });

  return <div className="ui relaxed divided list">{unselectedVideos}</div>;
};

export default ListVideo;
