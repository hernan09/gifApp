import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';
import './__index.css';

const AddCategory = ({ setCategorias }) => {
  const [inputValue, setInputValue] = useState('');
  const [displayParticles, setdisplayParticles] = useState('none');

  useEffect(() => {
    console.log('probando');
    if (window.innerWidth >= 450) {
      console.log('menor a 450', displayParticles);
      setdisplayParticles(displayParticles == 'block');
    }
  }, []);

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
      <div className={`visibility__${displayParticles}`}>
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
      </div>

      <form onSubmit={handleSubmit}>
        <div className="searchBox">
          <input
            className="searchInput"
            value={inputValue}
            onChange={handleInputChange}
            type="text"
            name=""
            placeholder="Search"
          />
          <button className="searchButton" href="#">
            <i className="material-icons">search</i>
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
