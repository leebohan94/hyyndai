import React from 'react';
// import { CSSProperties, useRef, useState } from 'react';


export default function Section10Component(){

    // const [animation, setAnimation] = useState(true);
    // const areaRef = useRef<HTMLParagraphElement>();

    // const handleScrollAnimation = () => {
    //     const elementTop = areaRef?.current?.getBoundingClientRect().top;
    //     setAnimation(checkIsInViewport(elementTop));
    //   };
    
    //   useWindowScrollEvent(handleScrollAnimation);


    return (
      <section id='section10'>
        <div className="container">
            <div className="title-box">
                {/*   ref={areaRef} animation={animation} */}
               <h2>Culture H</h2>
               <a href="!#">Culture H 전체보기</a>
            </div>
            <div className="content">
                <div className="colture">
                    <div className="left-box">
                        <p>문화예술적 가치와 <br />결합한 온라인 문화공간</p>
                    </div>

                    <div className="center-box">
                        <div className="center-box-zoom">
                            <a href="!#">
                                <img src={process.env.PUBLIC_URL+"/img/intro/team107.jpg"} alt="" />
                            <   div className="center-box-text">
                                    <p className='p1'>NATURAL & LOVE</p>
                                    <p className='p2'>시원한 작품을 통한 시각적인 바캉스로 초대</p>
                        </div>
                        </a>
                    </div>

                    </div>

                    <div className="right-box">
                        <div className="right-box-top-img">
                            <div className="right-box-top-zoom">
                                <a href="!#">
                                    <img src={process.env.PUBLIC_URL+"/img/intro/team108.jpg"} alt="" />
                                </a>
                            </div>
                            <div className="bgCol">

                            </div>
                            <div className="right-top-text-box">
                                <h1>BAVARIA YACHTS C42</h1>
                            </div>
                        </div>
                        <div className="right-box-bottom-img">
                            <div className="right-box-bottom-zoom">
                                <a href="!#">
                                    <img src={process.env.PUBLIC_URL+"/img/intro/team109.jpg"} alt="" />
                                </a>
                            </div>
                            <div className="bgCol">

                            </div>
                            <div className="right-bottom-text-box">
                                <h1>[컬처H 3번] Sail to Ocean</h1>
                            </div>
                        </div>      
                    </div>
                </div>
            </div>

        </div>
      </section>
    );
};

