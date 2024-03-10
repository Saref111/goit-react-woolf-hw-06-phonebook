import React from 'react';

import css from './Filter.module.scss';

const Filter = ({ filterValue, setFilter }) => {
  const onFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <label className={css.label}>
      Find contacts by name:{' '}
      <input
        type="text"
        onChange={onFilterChange}
        value={filterValue}
      />
    </label>
  );
};

export default React.memo(Filter);
