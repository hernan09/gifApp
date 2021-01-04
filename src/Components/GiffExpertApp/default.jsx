import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddCategory from '../AddCategory/default';
import GiiffGridd from '../GiffGreed/default';
import './__index.css';

const GiffExpertApp = (props) => {
  const [categorias, setCategorias] = useState(['']);

  return (
    <>
      <AddCategory setCategorias={setCategorias}></AddCategory>
      <ul>
        {categorias.map((element) => {
          return (
            <div className="content-cards">
              <GiiffGridd key={element} categoria={element}></GiiffGridd>
            </div>
          );
        })}
      </ul>
    </>
  );
};

GiffExpertApp.propTypes = {};

export default GiffExpertApp;
