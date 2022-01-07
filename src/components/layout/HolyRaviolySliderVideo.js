import { useState, useRef, createRef } from 'react';
import {Link} from 'react-router-dom';

import classes from './HolyRaviolySliderVideo.module.css';
import { Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ReactPlayer from 'react-player'

import screenfull from 'screenfull';
import { findDOMNode } from 'react-dom';

function HolyRaviolySliderVideo(props) {
    const [overlayIsOpen, setOverlayIsOpen] = useState(false);
    const ref = createRef();

    function showOverlay() {
        setOverlayIsOpen(true);
        if(props.showAllOverlays){
        props.showAllOverlays();
        }
    }

    function hideOverlay(){
        setOverlayIsOpen(false);
        if(props.hideAllOverlays){
            props.hideAllOverlays();
            }
    }

    function customAlert(){
        alert(props.sliderIndex);
    }

    function handleClickFullscreen() {
        console.log('ref', ref.current.props, 'props', props)
        props.setVideoData(ref.current.props.url, props.hrVideoTitle, props.hrVideoDirector, props.hrVideoCopy)
        //screenfull.request(findDOMNode(ref.current));
    }

    return(
        <div onMouseOver={showOverlay}>
            <Slide index={props.sliderIndex}>
                <div>
                    <ReactPlayer
                        id={'hrplayer' + props.sliderIndex }
                        ref={ref}
                        url={props.hrVideoUrl} 
                        loop={true}
                        light={false}
                        playing={true}
                        muted={true}
                        width='95%'
                        height='100%'
                        controls={false}
                        fallback={props.hrVideoImage}
                        allowfullscreen={false}
                        playIcon={<button>Play</button>}
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
                </div>
                {
                    overlayIsOpen &&
                        <div onClick={handleClickFullscreen} className={classes.overlay} onMouseOut={hideOverlay}>
                            {/* <span>{props.sliderIndex}</span> */}
                            <span >{props.hrVideoTitle}</span>
                            <span>
                                <Link to={'/directors'}>
                                    {props.hrVideoDirector}
                                </Link>
                            </span>
                            <span className={classes.spanRight}>{props.hrVideoCopy}</span>
                        </div>
                }
                <div className={classes.HolyRaviolySliderVideoOverlay}></div>
            </Slide>
        </div>
    );
};

export default HolyRaviolySliderVideo;