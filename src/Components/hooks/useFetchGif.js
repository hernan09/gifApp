import { useState, useEffect } from 'react';
import getGiff from '../helper';

const useFetchhGif = (categoria) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getGiff(categoria).then((imgs) => {
      setTimeout(() => {
        setState({
          data: imgs,
          loading: false,
        });
      }, 2000);
    });
  }, [categoria]);

  return state;
};
export default useFetchhGif;
