import { useState, useRef, useEffect } from "react";
import MainNavigation from '../components/layout/MainNavigation';
import HolyRaviolyBar from "../components/layout/HolyRaviolyBar";
import HolyRaviolySliderVideo from '../components/layout/HolyRaviolySliderVideo';
import classes from '../components/layout/HolyRaviolyBar.module.css';
import backgrounds from '../components/layout/Background.module.css';

import { CarouselProvider, Slider, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import carouselclasses from '../components/layout/CarouselProvider.module.css';
import Modal from '../components/ui/Modal/Modal';
import ReactPlayer from 'react-player'


function NewHomePage() {
    const [overlayLeftIsOpen, setOverlayLeftIsOpen] = useState(false);
    const [overlayRightIsOpen, setOverlayRightIsOpen] = useState(false);
    const [offset, setOffset] = useState(0);
    const [showModal, setShowModal] = useState(false)
    const [videoUrl, setVideoUrl] = useState('')
    const [overLayerVideoData, setOverLayerVideoData] = useState({})
    const slideRef = useRef(null);

    function showOverlays() {
        setOverlayLeftIsOpen(true);
        setOverlayRightIsOpen(true);
    }

    function hideOverlays() {
        setOverlayLeftIsOpen(false);
        setOverlayRightIsOpen(false);
    }

    function changeSlideOnScroll(e) {

        const element = document.querySelector("#slider");
        element.addEventListener('wheel', (e) => {
            e.preventDefault();
            // console.log(e.deltaY, "EEEEEEEEEEEEEEEEEEEEEE")
            element.scrollBy({
                left: e.deltaY < 0 ? -30 : 30,
            });
        });
    }

    function handleModel(value) {
        console.log('tres')
        setShowModal(value);
    }

    function handleVideoData(value, hrVideoTitle, hrVideoDirector, hrVideoCopy) {
        setVideoUrl(value)
        handleModel(true);
        setOverLayerVideoData({ 'hrVideoTitle': hrVideoTitle, 'hrVideoDirector': hrVideoDirector, 'hrVideoCopy': hrVideoCopy })
    }
    return (
        <div>
            {showModal ?
                <Modal overLayerData={overLayerVideoData} url={videoUrl} setOpenModal={handleModel} />
                :
                <div className={backgrounds.home}>
                    {/*  <div className={backgrounds.home}></div> */}
                    <MainNavigation />
                    <div className="hidden lg:block">
                        <div style={{ position: 'absolute', backgroundColor: 'inherit' }} className={classes.videoFrame}>
                            <CarouselProvider
                                className={carouselclasses.carouselProvider}
                                naturalSlideWidth={100}
                                naturalSlideHeight={55}
                                hasMasterSpinner={false}
                                totalSlides={7}
                                touchEnabled={true}
                                infinite={true}
                                ref={slideRef}
                                lockOnWindowScroll={false}
                                step={1}
                                dragStep={1}
                                dragEnabled={true}
                                visibleSlides={3}
                                currentSlide={0}
                                orientation="horizontal"
                            >
                                <Slider id="slider" onWheel={(e) => changeSlideOnScroll(e)} className={classes.videoDiv}>
                                    <HolyRaviolySliderVideo sliderIndex={0} />
                                    <HolyRaviolySliderVideo sliderIndex={1} setVideoData={handleVideoData} showAllOverlays={showOverlays} hideAllOverlays={hideOverlays} hrVideoUrl={'https://vimeo.com/649570454'} hrVideoTitle={'Title 1'} hrVideoDirector={'MARC LOUIS SUTTON'} hrVideoCopy={'HOLY RAVIOLI 2021 ©'} directorLink={'/directors'} />
                                    <HolyRaviolySliderVideo sliderIndex={2} setVideoData={handleVideoData} showAllOverlays={showOverlays} hideAllOverlays={hideOverlays} hrVideoUrl={'https://vimeo.com/649498884'} hrVideoTitle={'GO FURTHER for FORD'} hrVideoDirector={'KRISTIAN BOYSEN'} hrVideoCopy={'HOLY RAVIOLI 2021 ©'} directorLink={'/directors'} />
                                    <HolyRaviolySliderVideo sliderIndex={3} setVideoData={handleVideoData} showAllOverlays={showOverlays} hideAllOverlays={hideOverlays} hrVideoUrl={'https://vimeo.com/650560792'} hrVideoTitle={'Title 3'} hrVideoDirector={'KASPER KIERTZNER'} hrVideoCopy={'HOLY RAVIOLI 2021 ©'} directorLink={'/directors'} />
                                    <HolyRaviolySliderVideo sliderIndex={4} setVideoData={handleVideoData} showAllOverlays={showOverlays} hideAllOverlays={hideOverlays} hrVideoUrl={'https://vimeo.com/649570393'} hrVideoTitle={'Title 4'} hrVideoDirector={'JUDITH VEENEDAAL'} hrVideoCopy={'HOLY RAVIOLI 2021 ©'} directorLink={'/directors'} />
                                    <HolyRaviolySliderVideo sliderIndex={5} setVideoData={handleVideoData} showAllOverlays={showOverlays} hideAllOverlays={hideOverlays} hrVideoUrl={'https://vimeo.com/649569641'} hrVideoTitle={'Title 5'} hrVideoDirector={'METTE CARLA ALBRECHTSEN'} hrVideoCopy={'HOLY RAVIOLI 2021 ©'} directorLink={'/directors'} />
                                    <HolyRaviolySliderVideo sliderIndex={6} />
                                </Slider>


                                <div><ButtonBack className={carouselclasses.carouselOverlayBack}></ButtonBack></div>
                                <div><ButtonNext className={carouselclasses.carouselOverlayNext}></ButtonNext></div>
                                {
                                    overlayLeftIsOpen && <div className={carouselclasses.overlayLeft}></div>
                                }
                                {
                                    overlayRightIsOpen && <div className={carouselclasses.overlayRight}></div>
                                }

                            </CarouselProvider>
                        </div>

                    </div>
                    <br />
                    <div style={{ backgroundColor: '#edece7', }} className="block lg:hidden">
                        <div className={`bg-inherit ${classes.marginTop}`}>
                            <div className="mb-5">
                                <ReactPlayer
                                    //id={'hrplayer' + props.sliderIndex }
                                    //ref={ref}
                                    url='https://vimeo.com/649570393'
                                    loop={true}
                                    light={false}
                                    playing={true}
                                    muted={true}
                                    width='100%'
                                    height='100%'
                                    controls={false}
                                    className='px-6'
                                    //fallback={props.hrVideoImage}
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
                            <div className="mb-5">
                                <ReactPlayer
                                    //id={'hrplayer' + props.sliderIndex }
                                    //ref={ref}
                                    url='https://vimeo.com/649570393'
                                    loop={true}
                                    light={false}
                                    playing={true}
                                    muted={true}
                                    width='100%'
                                    height='100%'
                                    controls={false}
                                    className='px-6'
                                    //fallback={props.hrVideoImage}
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
                            <div className="mb-5">
                                <ReactPlayer
                                    //id={'hrplayer' + props.sliderIndex }
                                    //ref={ref}
                                    url='https://vimeo.com/649570393'
                                    loop={true}
                                    light={false}
                                    playing={true}
                                    muted={true}
                                    width='100%'
                                    height='100%'
                                    controls={false}
                                    className='px-6'
                                    //fallback={props.hrVideoImage}
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
                            <div className="mb-5">
                                <ReactPlayer
                                    //id={'hrplayer' + props.sliderIndex }
                                    //ref={ref}
                                    url='https://vimeo.com/649570393'
                                    loop={true}
                                    light={false}
                                    playing={true}
                                    muted={true}
                                    width='100%'
                                    height='100%'
                                    controls={false}
                                    className='px-6'
                                    //fallback={props.hrVideoImage}
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
                        </div>
                        {/* <ReactPlayer
                            //id={'hrplayer' + props.sliderIndex }
                            //ref={ref}
                            url='https://vimeo.com/649570393'
                            loop={true}
                            light={false}
                            playing={true}
                            muted={true}
                            width='95%'
                            height='100%'
                            controls={false}
                            //fallback={props.hrVideoImage}
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
                        /> */}
                    </div>
                    <HolyRaviolyBar hrclass={classes.footerbar} />
                </div>
            }
        </div>
    )
}
export default NewHomePage;