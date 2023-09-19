import React from 'react';

export default function Section9Component() {

    const [cnt, setCnt] = React.useState(0);

        const onClickPage=(e, n)=>{
            e.preventDefault();
            setCnt(n);
        }
        



    return (
        <section id='section9'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h1>Club Beauty</h1>
                    </div>
                    {/* 배너이미지 */}
                    <div className="content">
                        <div className="banner-img">
                            <a href="!#">
                                <img src={process.env.PUBLIC_URL+"/img/KHB/clubBeauty.jpeg"} alt="" />
                                <span>클럽뷰티 가입하러가기</span>
                            </a>
                        </div>
                        {/* 슬라이드 */}
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul style={{left:`-${100 * cnt}%`}} className="slide-wrap">
                                    <li className={`slide slide1 ${cnt===0?' on':''}`}>
                                        <div className="left-box">
                                            <a href="!#"><img src={process.env.PUBLIC_URL+"/img/KHB/slide01.jpg"} alt="" /></a>
                                            <div className="text">
                                                <span>여름의 향기</span>
                                            </div>
                                        </div>
                                        <div className="right-box">
                                            <a href="!#"><img src={process.env.PUBLIC_URL+"/img/KHB/slide02.jpg"} alt="" /></a>
                                            <div className="text">
                                                <span>카너 바르셀로나</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={`slide slide2 ${cnt===1?' on':''}`}>
                                        <div className="left-box">
                                            <a href="!#"><img src={process.env.PUBLIC_URL+"/img/KHB/slide03.jpg"} alt="" /></a>
                                            <div className="text">
                                                <span>올여름 제모 홈케어</span>
                                            </div>
                                        </div>
                                        <div className="right-box">
                                            <a href="!#"><img src={process.env.PUBLIC_URL+"/img/KHB/slide04.jpg"} alt="" /></a>
                                            <div className="text">
                                                <span>비오템 NEW UV톤업</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        {/* 페이지버튼 */}
                        <div className="page">
                            <a href="!#" onClick={(e)=>onClickPage(e, 0)} className='one'>1</a>
                            <a href="!#" onClick={(e)=>onClickPage(e, 1)} className='two'>2</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
