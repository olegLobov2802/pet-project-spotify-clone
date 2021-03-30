import React from "react";

export const NewReleases = ({ playlistNewReleases }) => {
  return (
    <div className="NewReleases">
      <h2 className="NewReleases__title">Новые релизы</h2>
      <div className="playlist__wrap">
        {playlistNewReleases.map((item, index) => (
          <div className="playlist__item" key={index}>
            <div className="playlist__cover">
              <img className="cover__img" src={item.images[0].url} alt="" />
            </div>
            <div className="playlist__name">{item.name}</div>
            <div className="playlist__descr">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
