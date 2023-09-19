import React from 'react';
import $ from 'jquery';

function Section6Component(props) {

    React.useEffect(()=>{
        let cnt=0;
        let setId=0;
        const slideWrap=$('#section6 .slide-wrap');
        // 1. 메인슬라이드함수 
        function mainSlide(){
            slideWrap.stop().animate({left: `${-100*cnt}%` }, 1000, function(){
                if(cnt > 1) cnt=0;  // 슬라이드 3개 0 1 2 
                if(cnt < 0) cnt=1;  // 첫번째 왼쪽으로 이동하면 마지막 슬라이드 
                slideWrap.stop().animate({left: `${-100*cnt}%` }, 0); // 처음으로 리턴
            });

            // 슬라이드박스 좌표 구하기
            // console.log(cnt, $('.slide-wrap').offset().left );
            pageNation();

        }

        // 2-1. 다음카운트함수
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


        function pageNation(){
            $('#section6 .page-btn').removeClass('on');//모든 페이지의 on 클래스 제거하고 
            $('#section6 .page-btn').eq(cnt >1 ? 0 : cnt/* nth child와 같은 역할 */).addClass('on');//대신 현재 슬라이드 번호에만 클래스 생성
        }

        
    },[]);
    return (
        <section id="section6">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>Trending NOW</h2>
                    </div>
                    <div className="content">
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                        <li className='slide slide2'>
                                            <ul className="slide-box">
                                                <li>
                                                    <a href="!#">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/intro/section6_slide4.jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <h3>Kids Water Wonderland</h3>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="!#">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/intro/section6_slide5.jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <h3>라코스테 시즌오프</h3>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="!#">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/intro/section6_slide6.jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <h3>써머 하드웨어 컬렉션</h3>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='slide slide1'>
                                            <ul className="slide-box">
                                                <li>
                                                    <a href="!#">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/intro/section6_slide1.jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <h3>울랄라 x 빨간머리앤</h3>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="!#">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/intro/section6_slide2.jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <h3>메종마르지엘라 SEASON OFF</h3>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="!#">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/intro/section6_slide3.jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <h3>ABC마트 여름슈즈 대전</h3>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='slide slide2'>
                                            <ul className="slide-box">
                                                <li>
                                                    <a href="!#">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/intro/section6_slide4.jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <h3>Kids Water Wonderland</h3>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="!#">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/intro/section6_slide5.jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <h3>라코스테 시즌오프</h3>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="!#">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/intro/section6_slide6.jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <h3>써머 하드웨어 컬렉션</h3>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='slide slide1'>
                                            <ul className="slide-box">
                                                <li>
                                                    <a href="!#">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/intro/section6_slide1.jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <h3>울랄라 x 빨간머리앤</h3>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="!#">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/intro/section6_slide2.jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <h3>메종마르지엘라 SEASON OFF</h3>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="!#">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/intro/section6_slide3.jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <h3>ABC마트 여름슈즈 대전</h3>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                </ul>
                            </div>
                        </div>
                        <div className="page-btn-box">
                            <button className='page-btn on'>1</button>
                            <button className='page-btn'>2</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section6Component;