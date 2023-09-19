import React,{useState, useRef, useEffect} from 'react';

export default function Section3Component() {
    const [cnt, setCnt] = useState(0);
    const slideRef = useRef();

    const onClickPageNation=(e, n)=>{
        e.preventDefault();
        setCnt(n);
    }

    useEffect(()=>{
        slideRef.current.style.left = `${-(100*cnt)}%`;
        // console.log(cnt);
    },[cnt]);


    return (
        <section id='section3'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>New&Fresh</h2>
                    </div>
                    <div className="content">
                        <div className="slide-container">
                            <div className="slide-view">
                                <div ref={slideRef} className="slide-wrap">
                                    <div className={`slide slide1${cnt===0?' on':''}`}>
                                        <div className="top-box">
                                            <div className="video-box">
                                                <video loop muted autoPlay src={process.env.PUBLIC_URL + "/CYS/video/intro_sec3_1.mp4"}></video>
                                            </div>
                                            <div className="img-box">
                                                <div className="box box1">
                                                    <img src={process.env.PUBLIC_URL+"/CYS/img/intro/thehyundai_intro_sec3_1.jpg"} alt="" />
                                                    <span>[제이에스티나] ETER 14K 목걸이 (JJERNQ3BS650R4420)</span>
                                                </div>
                                                <div className="box box1">
                                                    <img src={process.env.PUBLIC_URL+"/CYS/img/intro/thehyundai_intro_sec3_2.jpg"} alt="" />
                                                    <span>[제이에스티나] ETER 14K 귀걸이 (JJEREQ3BS660R4000)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`bottom-box${cnt===0?' on':''}`}>
                                            <span>제이에스티나 ETERNAL LOVE</span>
                                            <p>2023 SUMMER COLLECTION</p>
                                        </div>
                                    </div>
                                    <div className={`slide slide2${cnt===1?' on':''}`}>
                                        <div className="top-box">
                                            <div className="video-box">
                                                <video loop muted autoPlay src={process.env.PUBLIC_URL + "/CYS/video/intro_sec3_2.mp4"}></video>
                                            </div>
                                            <div className="img-box">
                                                <div className="box box1">
                                                    <img src={process.env.PUBLIC_URL+"/CYS/img/intro/thehyundai_intro_sec3_3.jpg"} alt="" />
                                                    <span>[게스진]MN2K1409 남성 스트라이프 반팔티셔츠</span>
                                                </div>
                                                <div className="box box1">
                                                    <img src={process.env.PUBLIC_URL+"/CYS/img/intro/thehyundai_intro_sec3_4.jpg"} alt="" />
                                                    <span>[게스진]MN2K2493 남성 스트라이프 반팔 카라티셔츠</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`bottom-box${cnt===1?' on':''}`}>
                                            <span>GUESS X SONGKANG</span>
                                            <p>Summer Splash 여름 컬렉션</p>
                                        </div>
                                    </div>
                                    <div className={`slide slide3${cnt===2?' on':''}`}>
                                        <div className="top-box">
                                            <div className="video-box">
                                                <video loop muted autoPlay src={process.env.PUBLIC_URL + "/CYS/video/intro_sec3_1.mp4"}></video>
                                            </div>
                                            <div className="img-box">
                                                <div className="box box1">
                                                    <img src={process.env.PUBLIC_URL+"/CYS/img/intro/thehyundai_intro_sec3_5.jpg"} alt="" />
                                                    <span>[프레쉬] [5천원 상품권(G)][6월더현대단 독] 로즈 딥 하이드레이션 밸런싱 에멀전 100ml 세트</span>
                                                </div>
                                                <div className="box box1">
                                                    <img src={process.env.PUBLIC_URL+"/CYS/img/intro/thehyundai_intro_sec3_6.jpg"} alt="" />
                                                    <span>[프레쉬] [5천원 상품권(G)][6월더현대단 독] 로즈 페이스 마스크 100ml 세트</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`bottom-box${cnt===2?' on':''}`}>
                                            <span>로즈 딥 하이드레이션 에멀전</span>
                                            <p>다마스크 로즈로 산뜻하게 채우는 수분</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="page-nation-box">
                                <button onClick={(e)=>onClickPageNation(e, 0)} className={`btn1${cnt===0?' on':''}`}>1</button>
                                <button onClick={(e)=>onClickPageNation(e, 1)} className={`btn2${cnt===1?' on':''}`}>2</button>
                                <button onClick={(e)=>onClickPageNation(e, 2)} className={`btn3${cnt===2?' on':''}`}>3</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}