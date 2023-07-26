import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = () => (
  <div className="video-responsive text-center">
    <iframe width="1300" height="500" src="https://www.youtube.com/embed/bqnlpDEmFUU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;