import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Search } from "./components/Search/Search";
import { MyLibrary } from "./components/My-library/MyLibrary";
import { connect } from "react-redux";
import { getCategory } from "./redux/categoryReducer";
import { Playlist } from "./components/Content/Playlist";
import { Category } from "./components/Content/Category";
import {
  getPlaylistCategory, getPlaylistNewReleas
} from "./redux/playlistReducer";

class App extends React.Component {
  componentDidMount() {
    this.props.getCategory();

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.category !== this.props.category) {
      // this.props.category.map((item) => {
      //   this.props.getPlaylistCategory(item.id);
      // });
      this.props.getPlaylistNewReleas()
    }
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
                  render={() => <Playlist playlist={this.props.playlist} />}
                />
                <Route
                  path="/Category"
                  render={() => <Category category={this.props.category} />}
                />
                <Route path="/search" render={() => <Search />} />
                <Route path="/MyLibrary" render={() => <MyLibrary />} />
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
    playlist: state.playlistPage.playlist,
    playlistsCategory: state.playlistPage.playlistsCategory,
  };
};

export const AppContainer = connect(mapStateToProps, {
  getCategory,
  getPlaylistCategory,
  getPlaylistNewReleas
})(App);
