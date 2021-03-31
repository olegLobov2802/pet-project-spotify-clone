import React from "react";

export const TrackList = ({ trackList }) => {
  return (
    <div>
      {trackList.map((item) => (
        <div
          key={item.track.id}
          style={{ color: "#fff" }}
        >
          <img src={item.track.album.images[2].url} alt="#" />
          {item.track.name}
        </div>
      ))}
    </div>
  );
};
