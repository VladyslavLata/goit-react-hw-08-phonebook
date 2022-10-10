import PropTypes from 'prop-types';
import * as SC from './Filter.styled';

export const Filter = ({ filterHeader, value, onChange }) => {
  return (
    <>
      <label htmlFor="filter">
        <SC.FilterHeader>{filterHeader}</SC.FilterHeader>
        <SC.Input type="text" name="filter" value={value} onChange={onChange} />
      </label>
    </>
  );
};

Filter.propTypes = {
  filterHeader: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
