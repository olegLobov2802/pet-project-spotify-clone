import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getGenre, setPlaylistId } from "../../redux/categoryReducer";

class Genre extends React.Component {
  componentDidMount() {
    this.props.getGenre(this.props.genreId);
  }

  render() {
    return (
      <div className="cover">
        <div className="cover__wrapper">
          {this.props.genre.map((item, index) => (
            <NavLink
              key={item.id}
              to="/playlist"
              onClick={() => this.props.setPlaylistId(item.id)}
              className="cover__link"
            >
              <div className="cover__item" key={index}>
                <div className="cover__img">
                  <img src={item.images[0].url} alt="#" />
                </div>
                <div className="cover__name">{item.name}</div>
                <div className="cover__descr">{item.description}</div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    genre: state.contentPage.genre,
    genreId: state.contentPage.genreId,
  };
};

export default connect(mapStateToProps, { getGenre, setPlaylistId })(Genre);
