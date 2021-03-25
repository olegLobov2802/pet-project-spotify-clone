import React from "react";

export const Playlist = ({ playlist }) => {
  return (
    <>
      {playlist.map((item) => (
        <div className="playlist__wrap">
          <div className="playlist__item">
            <div className="playlist__cover">
              <img className="cover__img" src={item.images[0].url} alt="" />
            </div>
            <div className="playlist__name">{item.name}</div>
            <div className="playlist__descr">{item.description}</div>
          </div>
        </div>
      ))}
    </>
  );
};
