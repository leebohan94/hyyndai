import React from 'react';
import $ from 'jquery';
import './scss/sub5.scss';
export default function Sub5Component() {
    React.useEffect(() => {
        const $middleSlideContainer = $('#Sub5Component .middle-slide-container');
        const $middleSlideWrap = $('#Sub5Component .middle-slide-wrap');
        const $middleSlide = $('#Sub5Component .middle-slide');
        const $slidea = $('#Sub5Component .slide a');

        let cnt = 0;
        let setId = 0;
        function mainSlide() {
            $('#Sub5Component .middle-slide-wrap').stop().animate({ left: `${-100 * cnt}%` }, 600, () => {
                if (cnt > 3) cnt = 0;
                if (cnt < 0) cnt = 3;
                $('#Sub5Component .middle-slide-wrap').stop().animate({ left: `${-100 * cnt}%` }, 0)
            });

            pageNation();
        }
        function nextCount() {
            cnt++;
            mainSlide();
        }
        function prevCount() {
            cnt--;
            mainSlide();
        }
        function autoTimer() {
            setId = setInterval(nextCount, 3000);
        }
        autoTimer();

        $middleSlideContainer.on({
            mouseenter() {
                clearInterval(setId);
            },
            mouseleave() {
                autoTimer();
            }
        })
        $slidea.on({
            click(e) {
                e.preventDefault();
            }
        })
        function pageNation() {
            $('#Sub5Component .middle-page-btn').removeClass('on');
            $('#Sub5Component .middle-page-btn').eq(cnt > 3 ? 0 : cnt).addClass('on');
        }

        $('#Sub5Component .middle-page-btn').each(function (idx) {
            $(this).on({
                click(e) {
                    e.preventDefault();
                    clearInterval(setId);
                    cnt = idx;
                    mainSlide();
                    autoTimer();
                }
            });
        });
    }, [])

    React.useEffect(() => {
        const $middle3SlideContainer = $('#Sub5Component .middle3-slide-container');
        const $middle3SlideWrap = $('#Sub5Component .middle3-slide-wrap');
        const $middle3Slide = $('#Sub5Component .middle3-slide');
        const $middle3Slidea = $('#Sub5Component .middle3-slide a');

        let cnt = 0;
        let setId = 0;
        function mainSlide() {
            $('#Sub5Component .middle3-slide-wrap').stop().animate({ top: `${-100 * cnt}%` }, 600, () => {
                if (cnt > 2) cnt = 0;
                if (cnt < 0) cnt = 2;
                $('#Sub5Component .middle3-slide-wrap').stop().animate({ top: `${-100 * cnt}%` }, 0)
            });

            pageNation();
        }
        function nextCount() {
            cnt++;
            mainSlide();
        }
        function prevCount() {
            cnt--;
            mainSlide();
        }
        function autoTimer() {
            setId = setInterval(nextCount, 3000);

        }
        autoTimer();

        $middle3SlideContainer.on({
            mouseenter() {
                clearInterval(setId);
            },
            mouseleave() {
                autoTimer();
            }
        })
        $middle3Slidea.on({
            click(e) {
                e.preventDefault();
            }
        })
        function pageNation() {
            $('#Sub5Component .middle3-page-btn').removeClass('on');
            $('#Sub5Component .middle3-page-btn').eq(cnt > 2 ? 0 : cnt).addClass('on');
        }

        $('#Sub5Component .middle3-page-btn').each(function (idx) {
            $(this).on({
                click(e) {
                    e.preventDefault();
                    clearInterval(setId);
                    cnt = idx;
                    mainSlide();
                    autoTimer();
                }
            });
        });
    }, [])

    React.useEffect(() => {
        const $bottomSlideContainer = $('#Sub5Component .bottom-slide-container');
        const $bottomSlideWrap = $('#bottom-slide-wrap');
        const $bottomSlide = $('#Sub5Component .bottom-slide');
        const $bottomSlidea = $('#Sub5Component .bottom-slide a');

        let cnt = 0;
        let setId = 0;
        function mainSlide() {
            $('#Sub5Component .bottom-slide-wrap').stop().animate({ left: `${-100 * cnt}%` }, 700, () => {
                if (cnt > 6) cnt = 0;
                if (cnt < 0) cnt = 6;
                $('#Sub5Component .bottom-slide-wrap').stop().animate({ left: `${-100 * cnt}%` }, 0)
            });

            pageNation();
        }
        function nextCount() {
            cnt++;
            mainSlide();
        }
        function prevCount() {
            cnt--;
            mainSlide();
        }
        function autoTimer() {
            setId = setInterval(nextCount, 3000);
        }
        autoTimer();

        $bottomSlideContainer.on({
            mouseenter() {
                clearInterval(setId);
            },
            mouseleave() {
                autoTimer();
            }
        })
        $bottomSlidea.on({
            click(e) {
                e.preventDefault();
            }
        })
        function pageNation() {
            $('#Sub5Component .bottom-left-page-btn-box').removeClass('on');
            $('#Sub5Component .bottom-left-page-btn-box').eq(cnt > 6 ? 0 : cnt).addClass('on');
        }

        $('#Sub5Component .bottom-left-page-btn-box').each(function (idx) {
            $(this).on({
                click(e) {
                    e.preventDefault();
                    clearInterval(setId);
                    cnt = idx;
                    mainSlide();
                    autoTimer();
                }
            });
        });
    }, [])

    return (
        <div id="Sub5Component">
            <div className="container">
                <div className="top-box">
                    <div className="title">
                        <div className="top-title">
                            <ul>
                                <li>
                                    <h1>Home</h1>
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/sub914.png"} alt="" />
                                </li>
                                <li>
                                    <h2>
                                        남성패션
                                        <div className="top-title-box">
                                            <ul>
                                                <li>
                                                    <h5>화장품</h5>
                                                    <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/sub937.png"} alt="" />
                                                </li>
                                                <li>
                                                    <h5>명품잡화</h5>
                                                    <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/sub937.png"} alt="" />
                                                </li>
                                                <li>
                                                    <h5>여성패션</h5>
                                                    <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/sub937.png"} alt="" />
                                                </li>
                                                <li>
                                                    <h5>영캐주얼</h5>
                                                    <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/sub937.png"} alt="" />
                                                </li>
                                                <li>
                                                    <h5>진/이지</h5>
                                                    <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/sub937.png"} alt="" />
                                                </li>
                                                <li>
                                                    <h5>남성패션</h5>
                                                    <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/sub937.png"} alt="" />
                                                </li>
                                                <li>
                                                    <h5>유아동/문화</h5>
                                                    <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/sub937.png"} alt="" />
                                                </li>
                                                <li>
                                                    <h5>스포츠/레저</h5>
                                                    <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/sub937.png"} alt="" />
                                                </li>
                                                <li>
                                                    <h5>리빙/가전</h5>
                                                    <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/sub937.png"} alt="" />
                                                </li>
                                                <li>
                                                    <h5>식품</h5>
                                                    <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/sub937.png"} alt="" />
                                                </li>
                                            </ul>
                                        </div>
                                    </h2>
                                </li>
                                <li>
                                    <a href="!#">
                                        <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/icon_down_new.png"} alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="bottom-title">
                            <h2>남성패션</h2>
                        </div>
                    </div>

                </div>
                <div className="middle-box1">
                    <div className="middle-left-box">
                        <div className="left-box-text">
                            <h1>남성패션</h1>
                        </div>
                        <div className="left-box-content">
                            <ul>
                                <li>
                                    <a href="!#">
                                        <h5>정장/수트</h5>
                                        <div className="left-box-content1">
                                            <ul>
                                                <li>
                                                    <a href="!#">정장</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <h5>재킷/점퍼/코트</h5>
                                        <div className="left-box-content2">
                                            <ul>
                                                <li>
                                                    <a href="!#">재킷</a>
                                                </li>
                                                <li>
                                                    <a href="!#">점퍼</a>
                                                </li>
                                                <li>
                                                    <a href="!#">코트</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <h5>티셔츠/셔츠/니트/가디건</h5>
                                        <div className="left-box-content3">
                                            <ul>
                                                <li>
                                                    <a href="!#">티셔츠</a>
                                                </li>
                                                <li>
                                                    <a href="!#">셔츠</a>
                                                </li>
                                                <li>
                                                    <a href="!#">니트</a>
                                                </li>
                                                <li>
                                                    <a href="!#">가디건</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <h5>팬츠</h5>
                                        <div className="left-box-content4">
                                            <ul>
                                                <li>
                                                    <a href="!#">정장 바지</a>
                                                </li>
                                                <li>
                                                    <a href="!#">캐주얼 바지</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <h5>패션소품</h5>
                                        <div className="left-box-content5">
                                            <ul>
                                                <li>
                                                    <a href="!#">넥타이</a>
                                                </li>
                                                <li>
                                                    <a href="!#">벨트</a>
                                                </li>
                                                <li>
                                                    <a href="!#">지갑</a>
                                                </li>
                                                <li>
                                                    <a href="!#">가방</a>
                                                </li>
                                                <li>
                                                    <a href="!#">모자</a>
                                                </li>
                                                <li>
                                                    <a href="!#">머플러/스카프</a>
                                                </li>
                                                <li>
                                                    <a href="!#">소품</a>
                                                </li>
                                                <li>
                                                    <a href="!#">슈즈</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <h5>캐쥬얼 의류</h5>
                                        <div className="left-box-content6">
                                            <ul>
                                                <li>
                                                    <a href="!#">셔츠/남방</a>
                                                </li>
                                                <li>
                                                    <a href="!#">티셔츠</a>
                                                </li>
                                                <li>
                                                    <a href="!#">니트/가디건/베스트</a>
                                                </li>
                                                <li>
                                                    <a href="!#">팬츠</a>
                                                </li>
                                                <li>
                                                    <a href="!#">자켓</a>
                                                </li>
                                                <li>
                                                    <a href="!#">점퍼</a>
                                                </li>
                                                <li>
                                                    <a href="!#">코드</a>
                                                </li>
                                                <li>
                                                    <a href="!#">정장/수트</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <h5>남성 언더웨어/이지웨어</h5>
                                        <div className="left-box-content7">
                                            <ul>
                                                <li>
                                                    <a href="!#">남성 런닝&팬티 세트</a>
                                                </li>
                                                <li>
                                                    <a href="!#">남성 내의&이지웨어</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="middle1-right-box">
                        <div className="middle-slide-container">
                            <div className="middle-slide-view">
                                <ul className="middle-slide-wrap">
                                    <li className="middle-slide slide5">
                                        <a href="!#">
                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/dispbnnr2005115020230322170208.jpg"} alt="" />
                                        </a>
                                    </li>
                                    <li className="middle-slide slide1">
                                        <a href="!#">
                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/dispbnnr2005111020230703113125.jpg"} alt="" />
                                        </a>
                                    </li>
                                    <li className="middle-slide slide2">
                                        <a href="!#">
                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/dispbnnr2005111020230623110327.jpg"} alt="" />
                                        </a>
                                    </li>
                                    <li className="middle-slide slide3">
                                        <a href="!#">
                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/dispbnnr2005112020230623125445.jpg"} alt="" />
                                        </a>
                                    </li>
                                    <li className="middle-slide slide4">
                                        <a href="!#">
                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/dispbnnr2005113020230623125418.jpg"} alt="" />
                                        </a>
                                    </li>
                                    <li className="middle-slide slide5">
                                        <a href="!#">
                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/dispbnnr2005115020230322170208.jpg"} alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="middle-page-btn-box">
                            <span>
                                <a href="!#" className="middle-page-btn on">
                                    무케렌시아 잡화점
                                </a>
                            </span>
                            <span>
                                <a href="!#" className="middle-page-btn">
                                    라코스테 시즌오프
                                </a>
                            </span>
                            <span>
                                <a href="!#" className="middle-page-btn">
                                    폴스미스 시즌오프
                                </a>
                            </span>
                            <span>
                                <a href="!#" className="middle-page-btn">
                                    TD브랜드 시즌오프
                                </a>
                            </span>
                            <span>
                                <a href="!#" className="middle-page-btn">
                                    맞춤 정장
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="middle-box2">
                    <div className="middle2-left">
                        <h1>전체브랜드보기</h1>
                        <a href="!#">
                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/sub914.png"} alt="" />
                        </a>
                    </div>
                    <div className="middle2-right">
                        <ul>
                            <li>
                                <label htmlFor="userSearch">
                                    <input
                                        type="text"
                                        name="user_search"
                                        id="userSearch"
                                        placeholder="브랜드검색"
                                    />
                                </label>
                            </li>
                            <li>
                                <h2>
                                    <a href="!#">

                                    </a>
                                </h2>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="middle-box3">
                    <span>
                        <h1>SPECIAL BRAND</h1>
                    </span>
                    <div className="middle3-slide-container">
                        <div className="middle3-slide-view">
                            <ul className="middle3-slide-wrap">
                                <li className="middle3-slide slide1">
                                    <a href="!#">
                                        <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/large202234.jpg"} alt="" />
                                    </a>
                                </li>
                                <li className="middle3-slide slide2">
                                    <a href="!#">
                                        <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/large173260.jpg"} alt="" />
                                    </a>
                                </li>
                                <li className="middle3-slide slide3">
                                    <a href="!#">
                                        <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/large173436.jpg"} alt="" />
                                    </a>
                                </li>
                                <li className="middle3-slide slide4">
                                    <a href="!#">
                                        <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/large177517.jpg"} alt="" />
                                    </a>
                                </li>
                                <li className="middle3-slide slide5">
                                    <a href="!#">
                                        <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/large178474.jpg"} alt="" />
                                    </a>
                                </li>
                                <li className="middle3-slide slide6">
                                    <a href="!#">
                                        <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/large173259.jpg"} alt="" />
                                    </a>
                                </li>
                                <li className="middle3-slide slide1">
                                    <a href="!#">
                                        <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/large202234.jpg"} alt="" />
                                    </a>
                                </li>
                                <li className="middle3-slide slide2">
                                    <a href="!#">
                                        <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/large173260.jpg"} alt="" />
                                    </a>
                                </li>
                                <li className="middle3-slide slide3">
                                    <a href="!#">
                                        <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/large173436.jpg"} alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="middle3-page-btn-box">
                        <ul>
                            <li className="middle3-page-btn on"></li>
                            <li className="middle3-page-btn "></li>
                            <li className="middle3-page-btn "></li>
                        </ul>
                    </div>
                </div>
                <div className="bottom">
                    <span>
                        <h1>New Arrivals</h1>
                    </span>
                    <div className="bottom-all">
                        <div className="bottom-left-page-btn">
                            <ul>
                                <li className="bottom-left-page-btn-box on">
                                    <h1>제냐</h1>
                                    {/* <img src=""} alt="" /> */}
                                </li>
                                <li className="bottom-left-page-btn-box">
                                    <h2>랄프로렌 퍼플라벨</h2>
                                    {/* <img src=""} alt="" /> */}
                                </li>
                                <li className="bottom-left-page-btn-box">
                                    <h3>RRL</h3>
                                    {/* <img src=""} alt="" /> */}
                                </li>
                                <li className="bottom-left-page-btn-box">
                                    <h4>프레드페리</h4>
                                    {/* <img src=""} alt="" /> */}
                                </li>
                                <li className="bottom-left-page-btn-box">
                                    <h5>빈폴멘</h5>
                                    {/* <img src=""} alt="" /> */}
                                </li>
                                <li className="bottom-left-page-btn-box">
                                    <h5>듀퐁셔츠</h5>
                                    {/* <img src=""} alt="" /> */}
                                </li>
                                <li className="bottom-left-page-btn-box">
                                    <h5>카운테스마라</h5>
                                    {/* <img src=""} alt="" /> */}
                                </li>
                            </ul>
                        </div>
                        <div className="bottom-right-box">
                            <div className="bottom-slide-container">
                                <div className="bottom-slide-view">
                                    <ul className="bottom-slide-wrap">
                                        <li className='bottom-slide slide1'>
                                            <ul>
                                                <li>
                                                    <div className="bottom-slide-img-box">
                                                        <a href="!#">
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/40A1707823_0_300.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>1,880,000</strong>
                                                            </h1>
                                                            <h3>[제냐]아쿠아 그린 코튼/실크 니트 폴로(UBD95A5C32251)</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d5'>현대백화점 5%</span>
                                                            <span className='c2'>스토어픽</span>
                                                            <span className='d2'>무 12</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='bottom-slide slide2'>
                                            <ul>
                                                <li>
                                                    <div className="bottom-slide-img-box">
                                                        <a href="!#">
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/40A1707820_0_300.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>1,880,000</strong>
                                                            </h1>
                                                            <h3>[제냐]라이트 브라운 코튼/실크 니트 폴로(UBD95A5C32250)</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d5'>현대백화점 5%</span>
                                                            <span className='c2'>스토어픽</span>
                                                            <span className='d2'>무 12</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='bottom-slide slide3'>
                                            <ul>
                                                <li>
                                                    <div className="bottom-slide-img-box">
                                                        <a href="!#">
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/40A1707783_0_300.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>595,000</strong>
                                                            </h1>
                                                            <h3>[제냐]블랙 UseTheExisting™ 반소매 티셔츠(E7364A777K09)</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d5'>현대백화점 5%</span>
                                                            <span className='c2'>스토어픽</span>
                                                            <span className='d3'>무료배송</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='bottom-slide slide4'>
                                            <ul>
                                                <li>
                                                    <div className="bottom-slide-img-box">
                                                        <a href="!#">
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/60A1700121_0_300.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>150,500</strong>
                                                            </h1>
                                                            <h3>Purple Label 폴카 도트 실크 풀라드 포켓 스퀘어 (MNPLNKW37U20102301)</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d3'>무료배송</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='bottom-slide slide5'>
                                            <ul>
                                                <li>
                                                    <div className="bottom-slide-img-box">
                                                        <a href="!#">
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/60A1700120_0_300.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>220,500</strong>
                                                            </h1>
                                                            <h3>Purple Label 리넨 보우 타이 (MNPLNKW37T20033200)</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d3'>무료배송</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='bottom-slide slide6'>
                                            <ul>
                                                <li>
                                                    <div className="bottom-slide-img-box">
                                                        <a href="!#">
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/60A1700119_0_300.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>220,500</strong>
                                                            </h1>
                                                            <h3>Purple Label 실크 개버딘 보우 타이 (MNPLNKW37T20031200)</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d3'>무료배송</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='bottom-slide slide7'>
                                            <ul>
                                                <li>
                                                    <div className="bottom-slide-img-box">
                                                        <a href="!#">
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/60A1712119_0_300.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>119,000</strong>
                                                            </h1>
                                                            <h3>RRL 코튼 저지 포켓 티셔츠(MNRRTSH1N820049001)</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d5'>현대백화점 5%</span>
                                                            <span className='d3'>무료배송</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='bottom-slide slide8'>
                                            <ul>
                                                <li>
                                                    <div className="bottom-slide-img-box">
                                                        <a href="!#">
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/60A1704070_0_300.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>439,000</strong>
                                                            </h1>
                                                            <h3>RRL 헤링본 필드 카고 팬츠(MNRRPNT14A20022301)</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d5'>현대백화점 5%</span>
                                                            <span className='d3'>무료배송</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='bottom-slide slide9'>
                                            <ul>
                                                <li>
                                                    <div className="bottom-slide-img-box">
                                                        <a href="!#">
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/40A1707783_0_300.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>289,000</strong>
                                                            </h1>
                                                            <h3>RRL 스웨이드 트림 데님 파우치(MARRSLG0H920012410)</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d5'>현대백화점 5%</span>
                                                            <span className='d3'>무료배송</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='bottom-slide slide10'>
                                            <ul>
                                                <li>
                                                    <div className="bottom-slide-img-box">
                                                        <a href="!#">
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/2151978195_0_300.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>358,000</strong>
                                                            </h1>
                                                            <h3>[프레드페리] FP 더비 레더 슈즈 (102) SFPU2315318</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d5'>현대백화점 5%</span>
                                                            <span className='c2'>스토어픽</span>
                                                            <span className='d3'>무료배송</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='bottom-slide slide11'>
                                            <ul>
                                                <li>
                                                    <div className="bottom-slide-img-box">
                                                        <a href="!#">
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/2151976802_0_300.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>103,600</strong>
                                                            </h1>
                                                            <h3>[프레드페리] 버니쉬드 레더 빌폴드 지갑 (102) CFPU2315322</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d5'>현대백화점 5%</span>
                                                            <span className='c2'>스토어픽</span>
                                                            <span className='d3'>무료배송</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='bottom-slide slide12'>
                                            <ul>
                                                <li>
                                                    <div className="bottom-slide-img-box">
                                                        <a href="!#">
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/2151976509_0_300.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>79,000</strong>
                                                            </h1>
                                                            <h3>[프레드페리] B722 남여공용 레더 스니커즈 (100) SFPU1917222</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d5'>현대백화점 5%</span>
                                                            <span className='c2'>스토어픽</span>
                                                            <span className='d3'>무료배송</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='bottom-slide slide13'>
                                            <ul>
                                                <li>
                                                    <div className="bottom-slide-img-box">
                                                        <a href="!#">
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/2151980620_0_300.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>159,000</strong>
                                                            </h1>
                                                            <h3>[빈폴남성] 모노피케 맨투맨 칼라 티셔츠 BC3642C524</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d5'>현대백화점 5%</span>
                                                            <span className='d3'>무료배송</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='bottom-slide slide14'>
                                            <ul>
                                                <li>
                                                    <div className="bottom-slide-img-box">
                                                        <a href="!#">
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/2151980611_0_300.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>159,000</strong>
                                                            </h1>
                                                            <h3>[빈폴남성] 모노피케 맨투맨 칼라 티셔츠 BC3642C525</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d5'>현대백화점 5%</span>
                                                            <span className='d3'>무료배송</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='bottom-slide slide15'>
                                            <ul>
                                                <li>
                                                    <div className="bottom-slide-img-box">
                                                        <a href="!#">
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/2152091807_0_300.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>1,880,000</strong>
                                                            </h1>
                                                            <h3>[듀퐁] 브로이어 소가죽 자동벨트 TE3FMBTAB109TBK S)</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d5'>현대백화점 5%</span>
                                                            <span className='d3'>무료배송</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='bottom-slide slide16'>
                                            <ul>
                                                <li>
                                                    <div className="bottom-slide-img-box">
                                                        <a href="!#">
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/2152091806_0_300.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>1,880,000</strong>
                                                            </h1>
                                                            <h3>[듀퐁] 브로이어 소가죽 자동벨트 TE3FMBTAB102TBKS</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d5'>현대백화점 5%</span>
                                                            <span className='d3'>무료배송</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='bottom-slide slide17'>
                                            <ul>
                                                <li>
                                                    <div className="bottom-slide-img-box">
                                                        <a href="!#">
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/2152091805_0_300.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>159,000</strong>
                                                            </h1>
                                                            <h3>[듀퐁] 브로이어 소가죽 자동벨트 TE3FMBTAB105TBKS</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d5'>현대백화점 5%</span>
                                                            <span className='d3'>무료배송</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='bottom-slide slide18'>
                                            <ul>
                                                <li>
                                                    <div className="bottom-slide-img-box">
                                                        <a href="!#">
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/2152091336_0_300.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>135,000</strong>
                                                            </h1>
                                                            <h3>[카운테스마라] 슬림핏 링클프리 긴팔셔츠 CDHW1B1360A0</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d5'>현대백화점 5%</span>
                                                            <span className='c2'>스토어픽</span>
                                                            <span className='d3'>무료배송</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='bottom-slide slide19'>
                                            <ul>
                                                <li>
                                                    <div className="bottom-slide-img-box">
                                                        <a href="!#">
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/2152091335_0_300.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>119,000</strong>
                                                            </h1>
                                                            <h3>[카운테스마라] 슬림핏 도비짜임 면혼방 화이트 반팔셔츠 SCDHW1B1168A0</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d5'>현대백화점 5%</span>
                                                            <span className='c2'>스토어픽</span>
                                                            <span className='d3'>무료배송</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='bottom-slide slide20'>
                                            <ul>
                                                <li>
                                                    <div className="bottom-slide-img-box">
                                                        <a href="!#">
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/2152091334_0_300.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>135,000</strong>
                                                            </h1>
                                                            <h3>[카운테스마라] 슬림핏 링클프리 화이트 긴팔셔츠 SCDHW1B1360A0</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d5'>현대백화점 5%</span>
                                                            <span className='c2'>스토어픽</span>
                                                            <span className='d3'>무료배송</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

