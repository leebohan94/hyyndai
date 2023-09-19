import React from 'react';
import $ from 'jquery';
function Section4Component(props) {
    React.useEffect(()=>{
        let cnt=0;
        let setId=0;
        const slideWrap=$('#section4 .slide-wrap');
        function mainSlide(){
            slideWrap.stop().animate({left: `${-1305*cnt}px`}, 1000, function(){
                if(cnt>2) cnt=0;
                if(cnt<0) cnt=2;
                slideWrap.stop().animate({left: `${-1305*cnt}px` }, 0);
            }
            );
        }

        function nextCount(){
            cnt++;
            mainSlide();
        }
        // 2-2. 이전카운트함수
        function prevCount(){
            cnt--;
            mainSlide();
        }

        // 3. 자동타이머함수
        function autoTimer(){
            // nextCount(); //즉시실행
            setId = setInterval(nextCount, 4000);  // 다음카운트함수 3초간격으로 호출하기
        }
        autoTimer();




        //드래그 구현
        let mouseStart=0;
        let mouseEnd=0;
        slideWrap.on({
            mousedown(e){},
            mouseup(e){},
            mousemover(e){}
        })


        
    },[]);


    return (
        <section id="section4">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>Exclusives</h2>
                    </div>
                    <div className="content">
                        <div className="slide-container">
                            <div className="slide-view">
                               <ul className="slide-wrap">
                                    <li className="slide slide7">
                                        <img src={process.env.PUBLIC_URL+"/PJH/img/intro/section4_slide7.jpg"} alt="" />
                                    </li>
                                    <li className="slide slide8">
                                        <img src={process.env.PUBLIC_URL+"/PJH/img/intro/section4_slide8.jpg"} alt="" />
                                    </li>
                                    <li className="slide slide9">
                                        <img src={process.env.PUBLIC_URL+"/PJH/img/intro/section4_slide9.jpg"} alt="" />
                                    </li>
                                    <li className="slide slide1">
                                        <img src={process.env.PUBLIC_URL+"/PJH/img/intro/section4_slide1.jpg"} alt="" />
                                    </li>
                                    <li className="slide slide2">
                                        <img src={process.env.PUBLIC_URL+"/PJH/img/intro/section4_slide2.jpg"} alt="" />
                                    </li>
                                    <li className="slide slide3">
                                        <img src={process.env.PUBLIC_URL+"/PJH/img/intro/section4_slide3.jpg"} alt="" />
                                    </li>
                                    <li className="slide slide4">
                                        <img src={process.env.PUBLIC_URL+"/PJH/img/intro/section4_slide4.jpg"} alt="" />
                                    </li>
                                    <li className="slide slide5">
                                        <img src={process.env.PUBLIC_URL+"/PJH/img/intro/section4_slide5.jpg"} alt="" />
                                    </li>
                                    <li className="slide slide6">
                                        <img src={process.env.PUBLIC_URL+"/PJH/img/intro/section4_slide6.jpg"} alt="" />
                                    </li>
                                    <li className="slide slide7">
                                        <img src={process.env.PUBLIC_URL+"/PJH/img/intro/section4_slide7.jpg"} alt="" />
                                    </li>
                                    <li className="slide slide8">
                                        <img src={process.env.PUBLIC_URL+"/PJH/img/intro/section4_slide8.jpg"} alt="" />
                                    </li>
                                    <li className="slide slide9">
                                        <img src={process.env.PUBLIC_URL+"/PJH/img/intro/section4_slide9.jpg"} alt="" />
                                    </li>
                                    <li className="slide slide1">
                                        <img src={process.env.PUBLIC_URL+"/PJH/img/intro/section4_slide1.jpg"} alt="" />
                                    </li>
                                    <li className="slide slide2">
                                        <img src={process.env.PUBLIC_URL+"/PJH/img/intro/section4_slide2.jpg"} alt="" />
                                    </li>
                                    <li className="slide slide3">
                                        <img src={process.env.PUBLIC_URL+"/PJH/img/intro/section4_slide3.jpg"} alt="" />
                                    </li>
                               </ul>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section4Component;