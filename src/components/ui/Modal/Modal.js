import { useState, useRef, createRef } from 'react';
import { Link } from 'react-router-dom';
import classes from './modal.module.css';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Modal({ url, setOpenModal, overLayerData }) {
  const [overlayIsOpen, setOverlayIsOpen] = useState(false);

  function showOverlay() {
    setOverlayIsOpen(true);
  }

  function hideOverlay() {
    setOverlayIsOpen(false);
  } console.log('overLayerData', overLayerData)
  return (
    <div onMouseOver={showOverlay} onMouseOut={hideOverlay} className={classes.modalContainer}>
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
      {overlayIsOpen &&
        <div className={classes.overlay} >
          <span className={classes.hrvideoTitleClass}>{overLayerData.hrVideoTitle}</span>
          <span className={classes.hrVideoDirectorClass}>
            <Link to={'/directors'}>{overLayerData.hrVideoDirector}</Link>
          </span>
          <span className={classes.hrVideoCopyClass} >{overLayerData.hrVideoCopy}</span>
        </div>
      }
    </div>
  );
}

export default Modal;