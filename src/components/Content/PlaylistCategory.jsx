import React from "react";
import { NavLink } from "react-router-dom";

export const PlaylistCategory = ({ playlist, getTrackList }) => {
  return (
    <>
      {playlist.map((item, index) => (
        <NavLink key={item.id} to="/track" onClick={() => getTrackList(item.id)}>
          <div
            style={{
              color: "#fff",
              padding: "15px",
            }}
          >
            <img src={item.images[0].url} alt="#" />
            <div>{index}</div>
            <div>{item.name}</div>
            <div>{item.description}</div>
            <div>time</div>
          </div>
        </NavLink>
      ))}
    </>
  );
};
