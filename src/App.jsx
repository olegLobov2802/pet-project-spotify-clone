import React from "react";
import "./App.scss";
import { ContentContainer } from "./components/Content/Content";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import {Search} from "./components/Search/Search";
import {MyLibrary} from "./components/My-library/MyLibrary";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="wrapper">
          <Navbar />
          <div className="content">
            <div className="content__wrapper">
              <Switch>
                <Route path="/home" render={() => <ContentContainer />} />
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

export default App;
