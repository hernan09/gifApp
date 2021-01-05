import React from 'react';
import useFetchhGif from '../hooks/useFetchGif';
import { WhatsappIcon, FacebookIcon, TwitterIcon } from 'react-share';

import './__index.css';

const GiffGridd = ({ categoria }) => {
  const { loading, data: images } = useFetchhGif(categoria);

  return (
    <>
      {loading && <div className="loading__">Loading..</div>}

      {images.map((img) => {
        return (
          <div className="containerr">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img src={img.url} />
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>{img.title}</p>
                  <a href="#">
                    <FacebookIcon size={32} url={img.url}></FacebookIcon>
                    <WhatsappIcon size={32} url={img.url}></WhatsappIcon>
                    <TwitterIcon size={32} url={img.url}></TwitterIcon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GiffGridd;
