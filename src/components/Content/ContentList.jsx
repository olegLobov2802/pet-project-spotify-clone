import React from "react";
import { NewReleases } from "./NewReleases";
import { PlaylistCategory } from "./PlaylistCategory";

export const ContentList = ({
  category,
  getPlaylistCategory,
  playlistNewReleases,
}) => {
  return (
    <>
      <NewReleases playlistNewReleases={playlistNewReleases} />
      {/*<div style={{ display: "flex", flexDirection: "column" }}>*/}
      {/*  {category.map((item) => (*/}
      {/*    <div key={item.id}>*/}
      {/*      {item.name} => {item.id}*/}
      {/*      <button*/}
      {/*        onClick={() => {*/}
      {/*          getPlaylistCategory(item.id);*/}
      {/*        }}*/}
      {/*      >*/}
      {/*        click*/}
      {/*      </button>*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </>
  );
};
