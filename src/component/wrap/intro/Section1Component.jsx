import React from 'react';
import axios from 'axios';
export default function Section1Component() {

    const [cnt, setCnt] = React.useState(0);
    const [isPause, setIsPause] = React.useState(false);
    const slideWrap = React.useRef();
    const [sec1slide, setSec1slide] = React.useState([]);
    React.useEffect(() => {
        axios({
            url: process.env.PUBLIC_URL + '/CYS/data/sec1slide.json',
            method: 'get'
        })
            .then((res) => {
                // console.log(res.data.slide);
                const slides = res.data.slide.map((slide, index) => {
                    return { ...slide, animationClass: index === 1 ? 'animate' : '' };
                });
                // setSec1slide(res.data.slide);
                setSec1slide(slides);
            })
            .catch((e) => {
                console.log(e);
            })
    }, [])


    const onClickPause = (e) => {
        e.preventDefault();
        setIsPause(!isPause);
    }

    const nextCnt = () => {
        setCnt(cnt + 1);
    }

    const onClickNext = (e) => {
        e.preventDefault();
        nextCnt();
    }
    const onClickPrev = (e) => {
        e.preventDefault();
        setCnt(cnt - 1);
    };

    React.useEffect(() => {
        slideWrap.current.style.transition = `all 0.3s ease-in-out`;
        slideWrap.current.style.left = `${-(100 * cnt)}%`;
        // 처음으로 리턴 : 계속 롤링하기 위해서
        if (cnt > 18) {
            slideWrap.current.style.transition = `none`; // 애니메이션 없다
            slideWrap.current.style.left = `0%`;
            setCnt(1);
        }
        // 마지막으로 리턴 : 계속 롤링하기 위해서
        else if (cnt < 0) {
            slideWrap.current.style.transition = `none`; // 애니메이션 없다
            slideWrap.current.style.left = `${-100 * 18}%`;
            setCnt(18 - 1);
        }

        // 텍스트 애니메이션 적용
        const updatedSlides = sec1slide.map((slide, index) => {
            if (index === cnt + 1) {
                return { ...slide, animationClass: 'animate' };
            } else {
                return { ...slide, animationClass: '' };
            }
        });
        setSec1slide(updatedSlides);
    }, [cnt]);

    return (
        <section id='section1'>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul ref={slideWrap} className="slide-wrap">
                                    {
                                        sec1slide.map((item, idx) => {
                                            return (<li key={idx} className={`slide slide${idx} ${item.animationClass}`}><img src={process.env.PUBLIC_URL + item.img} alt="" /><div className="slide-text"><span>{item.text1}</span><p>{item.text2}</p></div></li>);
                                        })
                                    }
                                </ul>
                                <div className="control-wrap">
                                    <div className="slide-control-box">
                                        <button onClick={onClickPrev} className='prev-btn'></button>
                                        <div className="page-nation-box">
                                            <span className='now-slide'>{cnt + 1 > 18 ? 1 : cnt + 1}</span>
                                            <i>/</i>
                                            <span className='total-slide'>18</span>
                                        </div>
                                        <button onClick={onClickNext} className='next-btn'></button>
                                        <button onClick={onClickPause} className={`control-btn${isPause ? ' on' : ''}`}></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}