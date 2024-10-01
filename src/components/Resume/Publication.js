import React from 'react';
import PropTypes from 'prop-types';

import PublicationItem from './Publication/PublicationItem';

const Publications = ({ data = [] }) => (
  <div className="publication">
    <div className="link-to" id="publication" />
    <div className="title">
      <h3>Publications</h3>
    </div>
    {data.map((item) => (
      <PublicationItem data={item} key={item.title} />
    ))}
  </div>
);

Publications.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
    }),
  ).isRequired,
};

export default Publications;
