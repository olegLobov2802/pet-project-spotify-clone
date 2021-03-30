import React from "react";

export const PlaylistCategory = ({ playlist }) => {
  return (
    <>
      {playlist.map((item, index) => (
        <div
          style={{
            color: "#fff",
            padding: "15px",
          }}
        >
          <div>{index}</div>
          <div>{item.images[0].url}</div>
          <div>{item.name}</div>
          <div>{item.description}</div>
          <div>time</div>
        </div>
      ))}
    </>
  );
};
