import React from "react";
import classes from './modal.module.css';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Modal({ url, setOpenModal }) {
  return (
    <div className={classes.modalContainer}>
      {/*  <div className={classes.titleCloseBtn}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
          </div> */}

        <ReactPlayer
          url={url}
          playing={true}
          className={classes.reactPlayer}
          muted={true}
          width='100%'
          height='100%'
          loop={true}
          controls={true}
          vimeoConfig={{ iframeParams: { fullscreen: 0 } }}
          config={{
              vimeo: {
                  playerOptions: { 
                      title: true,
                      responsive: true
                  }
              }
            }}

        // allowfullscreen={false}
        // playIcon={<button>Play</button>}
        // vimeoConfig={{ iframeParams: { fullscreen: 0 } }}
        /*  config={{
           vimeo: {
             playerOptions: {
               title: true,
               responsive: true
             }
           }
         }} */
        />
      <div className={classes.titleCloseBtn}>
        <button

          onClick={() => {
            setOpenModal(false);
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
}

export default Modal;