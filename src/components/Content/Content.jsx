import React from "react";
import { Category } from "./Category";
import { connect } from "react-redux";
import { getCategory } from "../../redux/categoryReducer";

class Content extends React.Component {
  componentDidMount() {
    this.props.getCategory();
  }

  render() {
    return <Category />;
  }
}

const mapStateToProps = (state) => {
  return {}
}

export const ContentContainer = connect(mapStateToProps,{getCategory})(Content);
