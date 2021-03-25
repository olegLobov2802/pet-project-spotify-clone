import React from "react";
import { connect } from "react-redux";

export const Playlist = ({ playlists }) => {
  return (
    <>
      {playlists.map((item) => (
        <li className="playlist__wrap">
          <div className="playlist__item">
            <div className="playlist__cover">
              <img className="cover__img" src={item.images[0].url} alt="" />
            </div>
            <div className="playlist__name">{item.name}</div>
            <div className="playlist__descr">{item.playlistDescr}</div>
          </div>
        </li>
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  playlists: state.playlistPage.playlist,
});

export const PlaylistContainer = connect(mapStateToProps)(Playlist);
