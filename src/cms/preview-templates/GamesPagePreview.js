import React from "react";
import PropTypes from "prop-types";
import { GamesPageTemplate } from "../../templates/games-page";

const GamesPagePreview = ({ entry, widgetFor }) => (
  <GamesPageTemplate content={widgetFor("body")} />
);

GamesPageTemplate.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default GamesPagePreview;
