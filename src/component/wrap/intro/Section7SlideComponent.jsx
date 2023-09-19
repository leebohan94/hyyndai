import React from 'react';

export function Section7SlideComponent() {
    const [cnt, setCnt] = React.useState(0);
    const slideRef = React.useRef();

    const mainSlide=()=>{
        slideRef.current.style.transition = 'all .3s ease-in-out';
        slideRef.current.style.left = `${ -(100 * cnt)}%`;
        if(cnt >= 4){
            slideRef.current.style.left =`0`;
            slideRef.current.style.transition = `none`; 
            setCnt(1);
        }
        else if(cnt <= -1){
            slideRef.current.style.left =`-${100 * 3}%`;
            slideRef.current.style.transition = 'none';
            setCnt(2);
        }
        
    };
    React.useEffect(()=>{
        mainSlide();
        console.log(cnt);
    },[cnt]);
    const onClickPrev=(e)=>{
        e.preventDefault();

            setCnt(cnt-1);
       
    }
    const onClickNext=(e)=>{
        e.preventDefault();
            setCnt(cnt+1);
    }
    return (
        <div className='slide-box'>
            <div className='arrow'>
                <img onClick={onClickNext} className='next-btn' src={process.env.PUBLIC_URL + "/img/KHB/icon_arrow_R.png" } alt="" />
                <img onClick={onClickPrev} className='prev-btn' src={process.env.PUBLIC_URL + "/img/KHB/icon_arrow_L.png" } alt="" />
            </div>
            {/* 작은 슬라이드 이미지 */}
            <div className="slide-container">
                <div className="slide-view">
                    <ul ref={slideRef}  className="slide-wrap">
                        <li className="slide">
                            <a href="!#">
                                <img src={process.env.PUBLIC_URL+"/img/KHB/moooi_slide03.jpg"} alt="" />
                            </a>
                        </li>
                        <li className="slide">
                            <a href="!#">
                                <img src={process.env.PUBLIC_URL+"/img/KHB/moooi_slide01.jpg"} alt="" />
                            </a>
                        </li>
                        <li className="slide">
                            <a href="!#">
                                <img src={process.env.PUBLIC_URL+"/img/KHB/moooi_slide02.jpg"} alt="" />
                            </a>
                        </li>
                        <li className="slide">
                            <a href="!#">
                                <img src={process.env.PUBLIC_URL+"/img/KHB/moooi_slide03.jpg"} alt="" />
                            </a>
                        </li>
                        <li className="slide">
                            <a href="!#">
                                <img src={process.env.PUBLIC_URL+"/img/KHB/moooi_slide01.jpg"} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='page-nation'>
                    <span className='static-bar'></span>
                    <span style={{width:`${(cnt < 3?cnt+1:1) * (100 / 3)}%`}} className='dynamic-bar'></span>
                </div>
            </div>
        </div>
    );
}
export function Section7Slide2Component() {
    const [cnt, setCnt] = React.useState(0)
    const [num1, setNum1] = React.useState(0);
    const slideRef = React.useRef();

    const mainSlide=()=>{
        slideRef.current.style.transition = 'all .3s ease-in-out';
        slideRef.current.style.left = `${ -(100 * cnt)}%`;
        if(cnt >= 4){

            slideRef.current.style.left =`0`;
            slideRef.current.style.transition = `none`; 
            setCnt(1);
        }
        else if(cnt <= -1){
            slideRef.current.style.left =`-${100 * 3}%`;
            slideRef.current.style.transition = 'none';
            setCnt(2);
        }
        
    };
    React.useEffect(()=>{
        mainSlide();
        console.log(cnt);
    },[cnt]);
    const onClickPrev=(e)=>{
        e.preventDefault();
        // if(cnt <= 0){
        //     setCnt(2);
        // }
        // else {
            setCnt(cnt-1);
        // }
    }
    const onClickNext=(e)=>{
        e.preventDefault();
        // if(cnt >= 3){
        //     setCnt(0);
        // }
        // else {
            setCnt(cnt+1);
        // }
    }
    return (
        <div className='slide-box'>
            <div className='arrow'>
                <img onClick={onClickNext} className='next-btn' src={process.env.PUBLIC_URL+"/img/KHB/icon_arrow_R.png"} alt="" />
                <img onClick={onClickPrev} className='prev-btn' src={process.env.PUBLIC_URL+"/img/KHB/icon_arrow_L.png"} alt="" />
            </div>
            {/* 작은 슬라이드 이미지 */}
            <div className="slide-container">
                <div className="slide-view">
                    <ul ref={slideRef} /* style={{left:`-${cnt * 100}%`}} */ className="slide-wrap">
                        <li className="slide">
                            <a href="!#">
                                <img src={process.env.PUBLIC_URL+"/img/KHB/poliform_slide03.jpg"} alt="" />
                            </a>
                        </li>
                        <li className="slide">
                            <a href="!#">
                                <img src={process.env.PUBLIC_URL+"/img/KHB/poliform_slide01.jpg"} alt="" />
                            </a>
                        </li>
                        <li className="slide">
                            <a href="!#">
                                <img src={process.env.PUBLIC_URL+"/img/KHB/poliform_slide02.jpg"} alt="" />
                            </a>
                        </li>
                        <li className="slide">
                            <a href="!#">
                                <img src={process.env.PUBLIC_URL+"/img/KHB/poliform_slide03.jpg"} alt="" />
                            </a>
                        </li>
                        <li className="slide">
                            <a href="!#">
                                <img src={process.env.PUBLIC_URL+"/img/KHB/poliform_slide01.jpg"} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='page-nation'>
                    <span className='static-bar'></span>
                    <span style={{width:`${(cnt < 3?cnt+1:1) * (100 / 3)}%`}} className='dynamic-bar'></span>
                </div>
            </div>
        </div>
    );
}
export function Section7Slide3Component() {
    const [cnt, setCnt] = React.useState(0)
    const [num1, setNum1] = React.useState(0);
    const slideRef = React.useRef();

    const mainSlide=()=>{
        slideRef.current.style.transition = 'all .3s ease-in-out';
        slideRef.current.style.left = `${ -(100 * cnt)}%`;
        if(cnt >= 4){

            slideRef.current.style.left =`0`;
            slideRef.current.style.transition = `none`; 
            setCnt(1);
        }
        else if(cnt <= -1){
            slideRef.current.style.left =`-${100 * 3}%`;
            slideRef.current.style.transition = 'none';
            setCnt(2);
        }
        
    };
    React.useEffect(()=>{
        mainSlide();
        console.log(cnt);
    },[cnt]);
    const onClickPrev=(e)=>{
        e.preventDefault();
        // if(cnt <= 0){
        //     setCnt(2);
        // }
        // else {
            setCnt(cnt-1);
        // }
    }
    const onClickNext=(e)=>{
        e.preventDefault();
        // if(cnt >= 3){
        //     setCnt(0);
        // }
        // else {
            setCnt(cnt+1);
        // }
    }
    return (
        <div className='slide-box'>
            <div className='arrow'>
                <img onClick={onClickNext} className='next-btn' src={process.env.PUBLIC_URL+"/img/KHB/icon_arrow_R.png"} alt="" />
                <img onClick={onClickPrev} className='prev-btn' src={process.env.PUBLIC_URL+"/img/KHB/icon_arrow_L.png"} alt="" />
            </div>
            {/* 작은 슬라이드 이미지 */}
            <div className="slide-container">
                <div className="slide-view">
                    <ul ref={slideRef} /* style={{left:`-${cnt * 100}%`}} */ className="slide-wrap">
                        <li className="slide">
                            <a href="!#">
                                <img src={process.env.PUBLIC_URL+"/img/KHB/nespresso_slide03.jpg"} alt="" />
                            </a>
                        </li>
                        <li className="slide">
                            <a href="!#">
                                <img src={process.env.PUBLIC_URL+"/img/KHB/nespresso_slide01.jfif"} alt="" />
                            </a>
                        </li>
                        <li className="slide">
                            <a href="!#">
                                <img src={process.env.PUBLIC_URL+"/img/KHB/nespresso_slide02.jfif"} alt="" />
                            </a>
                        </li>
                        <li className="slide">
                            <a href="!#">
                                <img src={process.env.PUBLIC_URL+"/img/KHB/nespresso_slide03.jpg"} alt="" />
                            </a>
                        </li>
                        <li className="slide">
                            <a href="!#">
                                <img src={process.env.PUBLIC_URL+"/img/KHB/nespresso_slide01.jfif"} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='page-nation'>
                    <span className='static-bar'></span>
                    <span style={{width:`${(cnt < 3?cnt+1:1) * (100 / 3)}%`}} className='dynamic-bar'></span>
                </div>
            </div>
        </div>
    );
}