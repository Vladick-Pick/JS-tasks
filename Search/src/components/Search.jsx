import React from 'react';

const Search = ({ value, onChange}) => {
  const handleSearchInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <form>
      <input type="text" value={value} onChange={handleSearchInputChange} />
    </form>
  );
};

export default Search;