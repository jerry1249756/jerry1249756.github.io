import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Awards = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="awards" />
    <div className="title">
      <h3>Awards</h3>
    </div>
    <ul className="awards">
      {data.map((award) => (
        <li key={award.title}>
          <strong>{award.title}</strong>
          <p>
            {award.issued}, {dayjs(award.startDate).format('MMMM YYYY')} {award.endDate && ` - ${dayjs(award.endDate).format('MMMM YYYY')}`}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

Awards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      issued: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string,
    }),
  ),
};

Awards.defaultProps = {
  data: [],
};

export default Awards;
