import { useState, useRef, useEffect } from "react";
import HolyRaviolyBar from "../components/layout/HolyRaviolyBar";
import HolyRaviolySliderVideo from '../components/layout/HolyRaviolySliderVideo';
import classes from '../components/layout/HolyRaviolyBar.module.css';
import backgrounds from '../components/layout/Background.module.css';
import { CarouselProvider, Slider, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import carouselclasses from '../components/layout/CarouselProvider.module.css';
import Modal from '../components/ui/Modal/Modal';
import MainNavigation from '../components/layout/MainNavigation';

function HomePage() {
    const [overlayLeftIsOpen, setOverlayLeftIsOpen] = useState(false);
    const [overlayRightIsOpen, setOverlayRightIsOpen] = useState(false);
    const [offset, setOffset] = useState(0);
    const [showModal, setShowModal] = useState(false)
    const [videoUrl, setVideoUrl] = useState('')
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

    function handleVideoUrl(value) {
        setVideoUrl(value)
        handleModel(true);
    }
    console.log('video URL', videoUrl)
    return (
        <div>
            
            {showModal ? <Modal url={videoUrl} setOpenModal={handleModel} /> :
            <>
            <MainNavigation />
            <div className={backgrounds.home}></div>
            <div className={classes.videoFrame}>
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
                        <HolyRaviolySliderVideo sliderIndex={1} setUrl={handleVideoUrl} showAllOverlays={showOverlays} hideAllOverlays={hideOverlays} hrVideoUrl={'https://vimeo.com/649570454'} hrVideoTitle={'Title 1'} hrVideoDirector={'MARC LOUIS SUTTON'} hrVideoCopy={'HOLY RAVIOLI 2021 ©'} directorLink={'/directors'} />
                        <HolyRaviolySliderVideo sliderIndex={2} setUrl={handleVideoUrl} showAllOverlays={showOverlays} hideAllOverlays={hideOverlays} hrVideoUrl={'https://vimeo.com/649498884'} hrVideoTitle={'GO FURTHER for FORD'} hrVideoDirector={'KRISTIAN BOYSEN'} hrVideoCopy={'HOLY RAVIOLI 2021 ©'} directorLink={'/directors'} />
                        <HolyRaviolySliderVideo sliderIndex={3} setUrl={handleVideoUrl} showAllOverlays={showOverlays} hideAllOverlays={hideOverlays} hrVideoUrl={'https://vimeo.com/650560792'} hrVideoTitle={'Title 3'} hrVideoDirector={'KASPER KIERTZNER'} hrVideoCopy={'HOLY RAVIOLI 2021 ©'} directorLink={'/directors'} />
                        <HolyRaviolySliderVideo sliderIndex={4} setUrl={handleVideoUrl} showAllOverlays={showOverlays} hideAllOverlays={hideOverlays} hrVideoUrl={'https://vimeo.com/649570393'} hrVideoTitle={'Title 4'} hrVideoDirector={'JUDITH VEENEDAAL'} hrVideoCopy={'HOLY RAVIOLI 2021 ©'} directorLink={'/directors'} />
                        <HolyRaviolySliderVideo sliderIndex={5} setUrl={handleVideoUrl} showAllOverlays={showOverlays} hideAllOverlays={hideOverlays} hrVideoUrl={'https://vimeo.com/649569641'} hrVideoTitle={'Title 5'} hrVideoDirector={'METTE CARLA ALBRECHTSEN'} hrVideoCopy={'HOLY RAVIOLI 2021 ©'} directorLink={'/directors'} />
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
            <HolyRaviolyBar hrclass={classes.footerbar} />
            </>
                }
        </div>
    );
}

export default HomePage;

/* 
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/638846086?h=4461e69082&autoplay=1&loop=1&color=fbfbfb&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
*/