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
          <div class="containerr">
            <div class="card">
              <div class="face face1">
                <div class="content">
                  <img src={img.url} />
                </div>
              </div>
              <div class="face face2">
                <div class="content">
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
