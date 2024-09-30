import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
// import Markdown from 'markdown-to-jsx';

const Job = ({
  data: {
    name, position, url, startDate, endDate, summary, highlights,
  },
}) => {
  const [open, setOpen] = useState(false);

  return (
    <article className="jobs-container">
      <header>
        {name
          ? (
            <h3>
              <a href={url}>{name} {position ? ` - ${position}` : ''}</a>
            </h3>
          )
          : <></>}
        <p className="daterange">
          {' '}
          {dayjs(startDate).format('MMMM YYYY')} -{' '}
          {endDate ? dayjs(endDate).format('MMMM YYYY') : 'PRESENT'}
        </p>
      </header>
      {summary ? (
        <p className="summary">
          {summary}
        </p>
      ) : null}
      {open && highlights ? (
        <ul className="points">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      ) : null}
      <button type="button" onClick={() => setOpen(!open)}>
        {open ? 'Show less' : 'Learn more'}
      </button>
    </article>
  );
};

Job.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
};

export default Job;
