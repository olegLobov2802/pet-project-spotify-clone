import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Search } from "./components/Search/Search";
import { MyLibrary } from "./components/My-library/MyLibrary";
import { connect } from "react-redux";
import {
  getCategory,
  getPlaylistCategory,
  getPlaylistNewReleas,
  getTrack,
  getTrackList,
} from "./redux/categoryReducer";
import { ContentList } from "./components/Content/ContentList";
import { Category } from "./components/Content/Category";
import { PlaylistCategory } from "./components/Content/PlaylistCategory";
import { TrackList } from "./components/Content/TrackList";

class App extends React.Component {
  componentDidMount() {
    this.props.getCategory();
    this.props.getPlaylistNewReleas();
  }

  render() {
    return (
      <div className="app">
        <div className="wrapper">
          <Navbar />
          <div className="content">
            <div className="content__wrapper">
              <Switch>
                <Route
                  path="/home"
                  render={() => (
                    <ContentList
                      playlistNewReleases={this.props.playlistNewReleases}
                      category={this.props.category}
                      getPlaylistCategory={this.props.getPlaylistCategory}
                    />
                  )}
                />
                <Route
                  path="/Category"
                  render={() => (
                    <Category
                      category={this.props.category}
                      getPlaylistCategory={this.props.getPlaylistCategory}
                    />
                  )}
                />
                <Route path="/search" render={() => <Search />} />
                <Route path="/MyLibrary" render={() => <MyLibrary />} />
                <Route
                  path="/playlist"
                  render={() => (
                    <PlaylistCategory
                      playlist={this.props.playlist}
                      getTrackList={this.props.getTrackList}
                    />
                  )}
                />
                <Route
                  path="/track"
                  render={() => (
                    <TrackList
                      getTrack={this.props.getTrack}
                      trackList={this.props.trackList}
                    />
                  )}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.categoryPage.category,
    playlist: state.categoryPage.playlist,
    playlistNewReleases: state.categoryPage.playlistNewReleases,
    playlistsCategory: state.categoryPage.playlistsCategory,
    categoryId: state.categoryPage.categoryId,
    playlistTest: state.categoryPage.playlistTest,
    trackList: state.categoryPage.trackList,
  };
};

export const AppContainer = connect(mapStateToProps, {
  getCategory,
  getPlaylistCategory,
  getPlaylistNewReleas,
  getTrackList,
  getTrack,
})(App);
