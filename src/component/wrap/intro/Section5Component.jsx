import React from 'react';

function Section5Component(props) {
    return (
        <section id="section5">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>Style H</h2>
                        <a href="!#">매거진 전체보기</a>
                    </div>
                    <div className="content">
                        <div className="left-box">
                            <div className="text-box1">
                                <p>
                                    JUNE 2023<br/>
                                    ISSUE NO.221
                                </p>
                            </div>
                            <div className="img-box">
                                <figure>
                                    <img src={process.env.PUBLIC_URL+"/PJH/img/intro/section5_left.jpg"} alt="" />
                                </figure>
                            </div>
                            <div className="text-box2">
                                <p className='text1'>For Refreshing Skin</p>
                                <p className='text2'>끈적이는 여름을 지켜줄 뷰티 아이템</p>
                            </div>
                        </div>
                        <div className="right-box">
                            <div className="img-box">
                                <img src={process.env.PUBLIC_URL+"/PJH/img/intro/section5_right.jpg"} alt="" />
                            </div>
                        </div>
                     
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section5Component;