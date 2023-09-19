import React from 'react';

export default function Section11Component(){
    return (
        <section id="section11">
            <div className="container">
                <div className="title-box">
                    <h2>Plus Life</h2>
                    <a href="!#">플러스라이프 전체보기</a>
                </div>
                <div className="content">
                    <div className="left-box">
                        <a href="!#">
                            <img src={process.env.PUBLIC_URL+"/img/intro/team110.jpg"} alt="" />
                            <div className="text-box">
                                <p className='p1'>프리미엄 방문세차, 인스타워시</p>
                                <p className='p2'>세차서비스 20% 할인코드 선착순 100명</p>
                            </div>
                        </a>
                    </div>
                    <div className="right-box">
                        <div className='right-left'>
                            <img src={process.env.PUBLIC_URL+"/img/intro/team111.png"} alt="" />
                            <a href="!#"><img src={process.env.PUBLIC_URL+"/img/intro/team112.jpg"} alt="" /></a>
                        </div>
                        <div className='right-right'>
                            <a href="!#"><img src={process.env.PUBLIC_URL+"/img/intro/team113.jpg"} alt="" /></a>
                            <div className="text-box">
                                <p>생활편의 서비스부터 여행까지<br/>더 나은 삶을 위한 플러스</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

