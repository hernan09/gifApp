import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';
import './__index.css';

const AddCategory = ({ setCategorias }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategorias(() => [inputValue]);
    }
  };
  return (
    <div className="container__search__header">
      <Particles
        width="100%"
        height="100vh"
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: '#3CA9D1',
                blur: 5,
              },
            },
          },
        }}
      />
      <form onSubmit={handleSubmit}>
        <div class="searchBox">
          <input
            class="searchInput"
            value={inputValue}
            onChange={handleInputChange}
            type="text"
            name=""
            placeholder="Search"
          />
          <button class="searchButton" href="#">
            <i class="material-icons">search</i>
          </button>
        </div>
      </form>
    </div>
  );
};
AddCategory.propTypes = {
  setCategorias: PropTypes.func.isRequired,
};

export default AddCategory;
