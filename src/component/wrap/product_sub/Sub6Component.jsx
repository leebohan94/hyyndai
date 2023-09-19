import React from 'react';
import $ from 'jquery';
import './scss/sub6.scss';

export default function Sub6Component() {

    React.useEffect(() => {
        const $middleSlideContainer = $('#Sub6Component .middle-slide-container');
        const $middleSlideWrap = $('#Sub6Component .middle-slide-wrap');
        const $middleSlide = $('#Sub6Component .middle-slide');
        const $slidea = $('#Sub6Component .slide a');

        let cnt = 0;
        let setId = 0;
        function mainSlide() {
            $('#Sub6Component .middle-slide-wrap').stop().animate({ left: `${-100 * cnt}%` }, 600, () => {
                if (cnt > 3) cnt = 0;
                if (cnt < 0) cnt = 3;
                $('#Sub6Component .middle-slide-wrap').stop().animate({ left: `${-100 * cnt}%` }, 0)
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
            $('#Sub6Component .middle-page-btn').removeClass('on');
            $('#Sub6Component .middle-page-btn').eq(cnt > 3 ? 0 : cnt).addClass('on');
        }

        $('#Sub6Component .middle-page-btn').each(function (idx) {
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

    //   React.useEffect(()=>{
    //     const $middle3SlideContainer     = $('#Sub6Component .middle3-slide-container');
    //     const $middle3SlideWrap          = $('#Sub6Component .middle3-slide-wrap');
    //     const $middle3Slide              = $('#Sub6Component .middle3-slide');
    //     const $middle3Slidea             = $('#Sub6Component .middle3-slide a');

    //     let cnt=0;
    //     let setId =0;
    //     // function mainSlide(){
    //     //   $('#Sub6Component .middle3-slide-wrap').stop().animate({top: `${-100*cnt}%`},600,()=>{
    //     //     if(cnt >2) cnt=0;
    //     //     if(cnt < 0) cnt=2;
    //     //     $('#Sub6Component .middle3-slide-wrap').stop().animate({top: `${-100*cnt}%`},0)
    //     //   });

    //     //   pageNation();
    //     // }
    //     function nextCount(){
    //       cnt++;
    //       mainSlide();
    //     }
    //     function prevCount(){
    //       cnt--;
    //       mainSlide();
    //     }
    //     function autoTimer(){
    //       setId = setInterval(nextCount, 3000);

    //     }
    //     autoTimer();

    //     $middle3SlideContainer.on({
    //       mouseenter(){
    //         clearInterval(setId);
    //       },
    //       mouseleave(){
    //         autoTimer();
    //       }
    //     })
    //     $middle3Slidea.on({
    //       click(e){
    //           e.preventDefault();
    //       }
    //   })  
    //     function pageNation(){
    //       $('#Sub6Component .middle3-page-btn').removeClass('on');
    //       $('#Sub6Component .middle3-page-btn').eq( cnt > 2 ? 0 : cnt).addClass('on');
    //     }

    //     $('#Sub6Component .middle3-page-btn').each(function(idx){
    //       $(this).on({
    //           click(e){
    //               e.preventDefault();
    //               clearInterval(setId);
    //               cnt = idx; 
    //               mainSlide();
    //               autoTimer();
    //           }
    //       });
    //   });
    //   },[])

    React.useEffect(() => {
        const $bottomSlideContainer = $('#Sub6Component .bottom-slide-container');
        const $bottomSlideWrap = $('#bottom-slide-wrap');
        const $bottomSlide = $('#Sub6Component .bottom-slide');
        const $bottomSlidea = $('#Sub6Component .bottom-slide a');

        let cnt = 0;
        let setId = 0;
        function mainSlide() {
            $('#Sub6Component .bottom-slide-wrap').stop().animate({ left: `${-100 * cnt}%` }, 700, () => {
                if (cnt > 6) cnt = 0;
                if (cnt < 0) cnt = 6;
                $('#Sub6Component .bottom-slide-wrap').stop().animate({ left: `${-100 * cnt}%` }, 0)
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
            $('#Sub6Component .bottom-left-page-btn-box').removeClass('on');
            $('#Sub6Component .bottom-left-page-btn-box').eq(cnt > 6 ? 0 : cnt).addClass('on');
        }

        $('#Sub6Component .bottom-left-page-btn-box').each(function (idx) {
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
        <div id='Sub6Component'>
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
                                        진/이지
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
                            <h2>진/이지</h2>
                        </div>
                    </div>

                </div>
                <div className="middle-box1">
                    <div className="middle-left-box">
                        <div className="left-box-text">
                            <h1>진/이지</h1>
                        </div>
                        <div className="left-box-content">
                            <ul>
                                <li>
                                    <a href="!#">
                                        <h5>티셔츠/셔츠/블라우스</h5>
                                        <div className="left-box-content1">
                                            <ul>
                                                <li>
                                                    <a href="!#">티셔츠</a>
                                                </li>
                                                <li>
                                                    <a href="!#">셔츠/블라우스</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <h5>원피스/니트/가디건</h5>
                                        <div className="left-box-content2">
                                            <ul>
                                                <li>
                                                    <a href="!#">가디건/베스트</a>
                                                </li>
                                                <li>
                                                    <a href="!#">원피스</a>
                                                </li>
                                                <li>
                                                    <a href="!#">니트/스웨터</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <h5>팬츠/스커트</h5>
                                        <div className="left-box-content3">
                                            <ul>
                                                <li>
                                                    <a href="!#">팬츠</a>
                                                </li>
                                                <li>
                                                    <a href="!#">스커트</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <h5>데님팬츠</h5>
                                        <div className="left-box-content4">
                                            <ul>
                                                <li>
                                                    <a href="!#">데님펜츠</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <h5>자켓/점퍼/코트</h5>
                                        <div className="left-box-content5">
                                            <ul>
                                                <li>
                                                    <a href="!#">자켓</a>
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
                            </ul>
                        </div>
                    </div>
                    <div className="middle1-right-box">
                        <div className="middle-slide-container">
                            <div className="middle-slide-view">
                                <ul className="middle-slide-wrap">
                                    <li className="middle-slide slide5">
                                        <a href="!#">
                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/dispbnnr2004111020230508160404.jpg"} alt="" />
                                        </a>
                                    </li>
                                    <li className="middle-slide slide1">
                                        <a href="!#">
                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/dispbnnr2004111020230531105201.jpg"} alt="" />
                                        </a>
                                    </li>
                                    <li className="middle-slide slide2">
                                        <a href="!#">
                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/dispbnnr2004111020230530152753.jpg"} alt="" />
                                        </a>
                                    </li>
                                    <li className="middle-slide slide3">
                                        <a href="!#">
                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/dispbnnr2004113020230613152348.jpg"} alt="" />
                                        </a>
                                    </li>
                                    <li className="middle-slide slide4">
                                        <a href="!#">
                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/dispbnnr2004115020230526112026.jpg"} alt="" />
                                        </a>
                                    </li>
                                    <li className="middle-slide slide5">
                                        <a href="!#">
                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/dispbnnr2004111020230508160404.jpg"} alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="middle-page-btn-box">
                            <span>
                                <a href="!#" className="middle-page-btn on">
                                    게스X송강
                                </a>
                            </span>
                            <span>
                                <a href="!#" className="middle-page-btn">
                                    캠핑&피크닉
                                </a>
                            </span>
                            <span>
                                <a href="!#" className="middle-page-btn">
                                    아웃도어프로덕츠
                                </a>
                            </span>
                            <span>
                                <a href="!#" className="middle-page-btn">
                                    지오다노
                                </a>
                            </span>
                            <span>
                                <a href="!#" className="middle-page-btn">
                                    커버낫
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
                                        <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/large201378.jpg"} alt="" />
                                    </a>
                                </li>
                                <li className="middle3-slide slide2">
                                    <a href="!#">
                                        <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/large173235.jpg"} alt="" />
                                    </a>
                                </li>
                                <li className="middle3-slide slide3">
                                    <a href="!#">
                                        <img src={process.env.PUBLIC_URL + "/lbh/img/sub5/large173242.jpg"} alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
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
                                    <h1>타미진</h1>
                                    {/* <img src=""} alt="" /> */}
                                </li>
                                <li className="bottom-left-page-btn-box">
                                    <h2>캘빈클라인진</h2>
                                    {/* <img src=""} alt="" /> */}
                                </li>
                                <li className="bottom-left-page-btn-box">
                                    <h3>아웃도어프로덕츠</h3>
                                    {/* <img src=""} alt="" /> */}
                                </li>
                                <li className="bottom-left-page-btn-box">
                                    <h4>지오다노</h4>
                                    {/* <img src=""} alt="" /> */}
                                </li>
                                <li className="bottom-left-page-btn-box">
                                    <h5>베루툼</h5>
                                    {/* <img src=""} alt="" /> */}
                                </li>
                                <li className="bottom-left-page-btn-box">
                                    <h5>널디</h5>
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
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub6/bottom1.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>238,000</strong>
                                                            </h1>
                                                            <h3>[타미진] T32D6NEW18TWT1 여성 클레어 하이라이즈 와이드 데님 팬츠 </h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d5'>현대백화점 5%</span>
                                                            <span className='d3'>무료배송</span>
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
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub6/bottom2.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>198,000</strong>
                                                            </h1>
                                                            <h3>[타미진] T32D6NEF01TWT2 여성 미드라이즈 플레어 데님 팬츠 </h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d5'>현대백화점 5%</span>
                                                            <span className='d3'>무료배송</span>
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
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub6/bottom3.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>188,000</strong>
                                                            </h1>
                                                            <h3>[타미진] T32D6WOP11TWT1 여성 오버사이즈 스트라이프 셔츠원피스</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d5'>현대백화점 5%</span>
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
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub6/bottom4.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>79,500</strong>
                                                            </h1>
                                                            <h3>[CKJ] 여성 트위스트 크롭 반팔티(J222128)</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d5'>현대백화점 5%</span>
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
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub6/bottom5.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>242,100</strong>
                                                            </h1>
                                                            <h3>[CKJ] 여성 하이라이즈 슬림 스트레이트핏 데님팬츠(J221696)</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d5'>현대백화점 5%</span>
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
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub6/bottom6.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>119,000</strong>
                                                            </h1>
                                                            <h3>[CKJ] 공용 커브드로고 후디(J400361)</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d5'>현대백화점 5%</span>
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
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub6/bottom7.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>59,900</strong>
                                                            </h1>
                                                            <h3>[아웃도어프로덕츠]WO136RDHPZ14   바시티 로고 쇼츠 VARSITY LOGO SHORTS</h3>
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
                                        <li className='bottom-slide slide8'>
                                            <ul>
                                                <li>
                                                    <div className="bottom-slide-img-box">
                                                        <a href="!#">
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub6/bottom8.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>59,900</strong>
                                                            </h1>
                                                            <h3>[아웃도어프로덕츠]WO136RDHPZ13  여성 테리 쇼츠 WOMENS TERRY SHORTS</h3>
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
                                        <li className='bottom-slide slide9'>
                                            <ul>
                                                <li>
                                                    <div className="bottom-slide-img-box">
                                                        <a href="!#">
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub6/bottom9.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>79,900</strong>
                                                            </h1>
                                                            <h3>[아웃도어프로덕츠]WO136RDHPZ12  데님 버뮤다 팬츠 DENIM BERMUDA PANTS</h3>
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
                                        <li className='bottom-slide slide10'>
                                            <ul>
                                                <li>
                                                    <div className="bottom-slide-img-box">
                                                        <a href="!#">
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub6/bottom10.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>16,830</strong>
                                                            </h1>
                                                            <h3>[지오다노] 05393507 여 핫썸머 프린트 티셔츠 393507</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d5'>현대백화점 5%</span>
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
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub6/bottom11.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>16,830</strong>
                                                            </h1>
                                                            <h3>[지오다노] 393507 핫썸머 프린트 티셔츠 05393507</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d5'>현대백화점 5%</span>
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
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub6/bottom12.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>11,520</strong>
                                                            </h1>
                                                            <h3>[지오다노] 093502 코튼 클래식맨 프린트 티셔츠 01093502</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d5'>현대백화점 5%</span>
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
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub6/bottom13.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>159,000</strong>
                                                            </h1>
                                                            <h3>RTW-ST143 : VERUTUM Applique Arch Logo SweatshirtsㅣBlack</h3>
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
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub6/bottom14.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>159,000</strong>
                                                            </h1>
                                                            <h3>RTW-PT131 : R Floking SweatpantsㅣWhite Melange Grey</h3>
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
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub6/bottom15.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>159,000</strong>
                                                            </h1>
                                                            <h3>RTW-PT132 : R Floking Pintuck SweatpantsㅣBlack</h3>
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
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub6/bottom16.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>15,600</strong>
                                                            </h1>
                                                            <h3>NERDY 21S/S 백 슬로건 반팔 티셔츠 남여공용 (PNEU21KG04)</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d5'>현대백화점 5%</span>
                                                            <span className='c2'>스토어픽</span>
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
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub6/bottom17.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>22,000</strong>
                                                            </h1>
                                                            <h3>NERDY 22S/S 백 머니토 반팔 티셔츠 남여공용 (PNEU23KG2KG37)</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d5'>현대백화점 5%</span>
                                                            <span className='c2'>스토어픽</span>
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
                                                            <img src={process.env.PUBLIC_URL + "/lbh/img/sub6/bottom18.jpg"} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="bottom-slide-text-box">
                                                        <div className="text-box">
                                                            <h1>
                                                                <strong>27,000</strong>
                                                            </h1>
                                                            <h3>NERDY 23S/S 에슬레틱 반팔 티셔츠 남여공용 (PNEU23KG07)</h3>
                                                        </div>
                                                        <div className="info-box">
                                                            <span className='d5'>현대백화점 5%</span>
                                                            <span className='c2'>스토어픽</span>
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
