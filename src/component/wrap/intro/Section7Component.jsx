import React from 'react';
import { Section7SlideComponent, Section7Slide2Component, Section7Slide3Component } from './Section7SlideComponent';
export default function Section7Component(){

    
    const [imgBox1,setImgBox1] = React.useState([]); 
    const [imgBox2,setImgBox2] = React.useState([]); 
    const [imgBox3,setImgBox3] = React.useState([]); 
    const [cnt, setCnt] = React.useState(0)
    const [num1, setNum1] = React.useState(0);
    const slideRef = React.useRef();

  
    const onClickTap=(e, n)=>{
        e.preventDefault();
        setNum1(n);
    }
  



    const onClickPrev=(e)=>{
        e.preventDefault();

            setCnt(cnt-1);
      
    }
    const onClickNext=(e)=>{
        e.preventDefault();
 
            setCnt(cnt+1);

    }


    return (
        <section id="section7">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h1>Premium Showroom</h1>
                        <a href="!#">프리미엄쇼룸 전체보기</a>
                    </div>
                    <div className="content">
                        <div className="premiumShowroom-wrap">
                            {/* premiumShowroom tab */}
                            <ul className='MOOOI-tab'>
                                <li>
                                    <button onClick={(e)=>onClickTap(e,0)} className={num1===0?'on':''}><span>MOOOI</span></button>
                                </li>
                                <li>
                                    <button onClick={(e)=>onClickTap(e,1)} className={num1===1?'on':''}><span>POLIFORM</span></button>
                                </li>
                                <li>
                                    <button onClick={(e)=>onClickTap(e,2)} className={num1===2?'on':''}><span>NESPRESSO</span></button>
                                </li>
                            </ul>
                            {/* 큰 슬라이드 박스 */}
                            <div className="middle">
                                <div className={`img-box1 fadeinout${num1===0?' on':''}`}>
                                    <div className="left-img">
                                        <a href="!#">
                                            <img src={process.env.PUBLIC_URL+"/img/KHB/moooi_left.jpg"} alt="" />
                                            <div className="bottom-box">
                                                <p>브랜드관 바로가기</p>
                                            </div>
                                        </a>
                                        

                                        </div>
                                    
                                    <div className="right-box">
                                        <div className='logo'>
                                            <img src={process.env.PUBLIC_URL+"/img/KHB/moooi_right.jpg"} alt="" />
                                        </div>
                                        <div className='text'>
                                            <p>참신함과 독창적인 가구 디자인</p>
                                        </div>
                                        <Section7SlideComponent/>
                                    </div>
                                </div>
                                
                                <div className={`img-box2 fadeinout${num1===1?' on':''}`}>
                                <div className="left-img">
                                    <a href="!#">
                                        <img src={process.env.PUBLIC_URL+"/img/KHB/poliform_left.jpg"} alt="" />
                                        <div className="bottom-box">
                                            <p>브랜드관 바로가기</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="right-box">
                                    <div className='logo'>
                                        <img src={process.env.PUBLIC_URL+"/img/KHB/poliform_right.jpg"} alt="" />
                                    </div>
                                    <div className='text'>
                                        <p>이탈리아 럭셔리 가구 브랜드</p>
                                    </div>
                                    <Section7Slide2Component/>
                                </div>
                                </div>
                                
                                <div className={`img-box3 fadeinout${num1===2?' on':''}`}>
                                <div className="left-img">
                                    <a href="!#">
                                        <img src={process.env.PUBLIC_URL+"/img/KHB/nespresso_left.jpg"} alt="" />
                                        <div className="bottom-box">
                                            <p>브랜드관 바로가기</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="right-box">
                                    <div className='logo'>
                                        <img src={process.env.PUBLIC_URL+"/img/KHB/nespresso_right.jpg"} alt="" />
                                    </div>
                                    <div className='text'>
                                        <p>뛰어난 맛과 향의 프리미엄 커피</p>
                                    </div> 
                                    <Section7Slide3Component/>
                                </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};