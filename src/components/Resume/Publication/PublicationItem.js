import React from 'react';
import PropTypes from 'prop-types';

const PublicationItem = ({ data }) => (
  <article className="publication-container">
    <p className="publication-id">
      [{data.id}]
    </p>
    <p className="publication-content">
      <p>
        {data.author.split(',').map((word, index, arr) => {
          const isLast = index === arr.length - 1;
          return word === ' Che-Ming Chang'
            ? <strong key={word}>{word}{isLast ? '.' : ','} </strong>
            : `${word}${isLast ? '.' : ','} `;
        })}
      </p>
      <strong className="publication-title">
        {data.title}.
      </strong>
      <p>
        {data.conference}.
      </p>
    </p>
  </article>
);

PublicationItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    conference: PropTypes.string,
  }).isRequired,
};

export default PublicationItem;
