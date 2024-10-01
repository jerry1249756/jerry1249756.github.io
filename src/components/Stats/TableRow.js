import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({
  label, link = null, value = null, format = (x) => x,
}) => (
  <tr>
    <td width="70%">{label}</td>
    <td>{link ? <a href={link}>{format(value)}</a> : format(value)}</td>
  </tr>
);

TableRow.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  format: PropTypes.func.isRequired,
};

export default TableRow;
