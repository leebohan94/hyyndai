import axios from 'axios';
import $ from 'jquery';
import React from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import './scss/sub1.scss';

export default function Sub1Component() {
  const { setViewProduct } = React.useContext(GlobalContext);
  const onClickProductList = (e, item) => {
    e.preventDefault();
    let obj = {
      제품코드: item.제품코드,
      제품종류: item.제품종류,
      상품로고이미지: item.상품로고이미지,
      퀵메뉴이미지: `${process.env.PUBLIC_URL}/img/KHB/${item.상품헤더이미지[0]}.jpg`,
      상품헤더이미지: item.상품헤더이미지,
      상품상세이미지: item.상품상세이미지,
      제조사: item.제조사,
      상품명: item.상품명,
      정가: item.정가,
      할인율: item.할인율,
      상품옵션: item.상품옵션,
      배송비: item.배송비,
      저장일시: new Date().getTime()
    }
    setViewProduct(obj);
    window.location.pathname = process.env.PUBLIC_URL + '/detailpage';
  }
  const [state, setState] = React.useState({
    상품: [],
    first: [],
    last: []
  })

  const { 상품, first, last } = state;

  const getProduct = () => {
    axios({
      url: './data/notice_page/product.json',
      method: 'GET'
    })
      .then((res) => {
        let living = (res.data.상품).filter((item) => item.제품종류 === "화장품");
        setState({
          ...state,
          상품: living,
          first: living.slice(0, 3),
          last: living.slice(-3),
        })
      })
      .catch((err) => {
        console.log(err + "오류")
      })
  }
  React.useEffect(() => {
    getProduct();
  }, [])
  React.useEffect(() => {
    const $middleSlideContainer = $('#Sub1Component .middle-slide-container');
    const $middleSlideWrap = $('#Sub1Component .middle-slide-wrap');
    const $middleSlide = $('#Sub1Component .middle-slide');
    const $slidea = $('#Sub1Component .slide a');

    let cnt = 0;
    let setId = 0;
    function mainSlide() {
      $('#Sub1Component .middle-slide-wrap').stop().animate({ left: `${-100 * cnt}%` }, 600, () => {
        if (cnt > 3) cnt = 0;
        if (cnt < 0) cnt = 3;
        $('#Sub1Component .middle-slide-wrap').stop().animate({ left: `${-100 * cnt}%` }, 0)
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
      $('#Sub1Component .middle-page-btn').removeClass('on');
      $('#Sub1Component .middle-page-btn').eq(cnt > 3 ? 0 : cnt).addClass('on');
    }

    $('#Sub1Component .middle-page-btn').each(function (idx) {
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
    const $middle3SlideContainer = $('#Sub1Component .middle3-slide-container');
    const $middle3SlideWrap = $('#Sub1Component .middle3-slide-wrap');
    const $middle3Slide = $('#Sub1Component .middle3-slide');
    const $middle3Slidea = $('#Sub1Component .middle3-slide a');

    let cnt = 0;
    let setId = 0;
    function mainSlide() {
      $('#Sub1Component .middle3-slide-wrap').stop().animate({ top: `${-100 * cnt}%` }, 600, () => {
        if (cnt > 2) cnt = 0;
        if (cnt < 0) cnt = 2;
        $('#Sub1Component .middle3-slide-wrap').stop().animate({ top: `${-100 * cnt}%` }, 0)
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
      $('#Sub1Component .middle3-page-btn').removeClass('on');
      $('#Sub1Component .middle3-page-btn').eq(cnt > 2 ? 0 : cnt).addClass('on');
    }

    $('#Sub1Component .middle3-page-btn').each(function (idx) {
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
    const $bottomSlideContainer = $('#Sub1Component .bottom-slide-container');
    const $bottomSlideWrap = $('#bottom-slide-wrap');
    const $bottomSlide = $('#Sub1Component .bottom-slide');
    const $bottomSlidea = $('#Sub1Component .bottom-slide a');

    let cnt = 0;
    let setId = 0;
    function mainSlide() {
      $('#Sub1Component .bottom-slide-wrap').stop().animate({ left: `${-100 * cnt}%` }, 700, () => {
        if (cnt > 6) cnt = 0;
        if (cnt < 0) cnt = 6;
        $('#Sub1Component .bottom-slide-wrap').stop().animate({ left: `${-100 * cnt}%` }, 0)
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
      $('#Sub1Component .bottom-left-page-btn-box').removeClass('on');
      $('#Sub1Component .bottom-left-page-btn-box').eq(cnt > 6 ? 0 : cnt).addClass('on');
    }

    $('#Sub1Component .bottom-left-page-btn-box').each(function (idx) {
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
    <div id="Sub1Component">
      <div className="container">
        <div className="top">
          <div className="title">
            <div className="top-title">
              <ul>
                <li>
                  <h1>Home</h1>
                </li>
                <li>
                  <img src={process.env.PUBLIC_URL + "/KHB/img/sub/sub914.png"} alt="" />
                </li>
                <li>
                  <h2>
                    화장품
                    <div className="top-title-text-box">
                      <ul>
                        <li>
                          <h5>화장품</h5>
                          <img src={process.env.PUBLIC_URL + "/KHB/img/sub/sub937.png"} alt="" />
                        </li>
                        <li>
                          <h5>명품/잡화</h5>
                          <img src={process.env.PUBLIC_URL + "/KHB/img/sub/sub937.png"} alt="" />
                        </li>
                        <li>
                          <h5>여성패션</h5>
                          <img src={process.env.PUBLIC_URL + "/KHB/img/sub/sub937.png"} alt="" />
                        </li>
                        <li>
                          <h5>영캐주얼</h5>
                          <img src={process.env.PUBLIC_URL + "/KHB/img/sub/sub937.png"} alt="" />
                        </li>
                        <li>
                          <h5>진/이지</h5>
                          <img src={process.env.PUBLIC_URL + "/KHB/img/sub/sub937.png"} alt="" />
                        </li>
                        <li>
                          <h5>남성패션</h5>
                          <img src={process.env.PUBLIC_URL + "/KHB/img/sub/sub937.png"} alt="" />
                        </li>
                        <li>
                          <h5>유아동/문화</h5>
                          <img src={process.env.PUBLIC_URL + "/KHB/img/sub/sub937.png"} alt="" />
                        </li>
                        <li>
                          <h5>스포츠/레저</h5>
                          <img src={process.env.PUBLIC_URL + "/KHB/img/sub/sub937.png"} alt="" />
                        </li>
                        <li>
                          <h5>리빙/가전</h5>
                          <img src={process.env.PUBLIC_URL + "/KHB/img/sub/sub937.png"} alt="" />
                        </li>
                        <li>
                          <h5>식품</h5>
                          <img src={process.env.PUBLIC_URL + "/KHB/img/sub/sub937.png"} alt="" />
                        </li>
                      </ul>
                    </div>
                  </h2>
                </li>
                <li>
                  <a href="!#">
                    <img src={process.env.PUBLIC_URL + "/KHB/img/sub/icon_down_new.png"} alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="bottom-title">
              <h2>화장품</h2>
            </div>
          </div>
        </div>
        <div className="middle1">
          <div className="middle1-left-box">
            <div className="left-box-top">
              <h1>화장품</h1>
            </div>
            <div className="left-box-bottom">
              <ul>
                <li>
                  <h5>
                    스킨케어
                    <div className="left-box-bottom1">
                      <ul>
                        <li>
                          <a href="!#">스킨/토너/미스트</a>
                        </li>
                        <li>
                          <a href="!#">로션/에멀젼</a>
                        </li>
                        <li>
                          <a href="!#">에센스/세럼</a>
                        </li>
                        <li>
                          <a href="!#">크림</a>
                        </li>
                        <li>
                          <a href="!#">아이크림</a>
                        </li>
                        <li>
                          <a href="!#">클렌징</a>
                        </li>
                        <li>
                          <a href="!#">마스크/팩</a>
                        </li>
                        <li>
                          <a href="!#">각질/스크럽/필링</a>
                        </li>
                        <li>
                          <a href="!#">세트</a>
                        </li>
                        <li>
                          <a href="!#">유아용화장품</a>
                        </li>
                        <li>
                          <a href="!#">페이스오일</a>
                        </li>
                      </ul>
                    </div>
                  </h5>
                </li>
                <li>
                  <h5>
                    메이크업
                    <div className="left-box-bottom2">
                      <ul>
                        <li>
                          <a href="!#">페이스</a>
                        </li>
                        <li>
                          <a href="!#">립</a>
                        </li>
                        <li>
                          <a href="!#">아이</a>
                        </li>
                        <li>
                          <a href="!#">블러셔</a>
                        </li>
                        <li>
                          <a href="!#">네일</a>
                        </li>
                        <li>
                          <a href="!#">메이크업 세트</a>
                        </li>
                      </ul>
                    </div>
                  </h5>
                </li>
                <li>
                  <h5>
                    바디/헤어케어
                    <div className="left-box-bottom3">
                      <ul>
                        <li>
                          <a href="!#">바디</a>
                        </li>
                        <li>
                          <a href="!#">헤어</a>
                        </li>
                      </ul>
                    </div>
                  </h5>
                </li>
                <li>
                  <h5>
                    기능성케어
                    <div className="left-box-bottom4">
                      <ul>
                        <li>
                          <a href="!#">썬케어</a>
                        </li>
                        <li>
                          <a href="!#">화이트닝</a>
                        </li>
                        <li>
                          <a href="!#">아이케어</a>
                        </li>
                        <li>
                          <a href="!#">주름케어</a>
                        </li>
                      </ul>
                    </div>
                  </h5>
                </li>
                <li>
                  <h5>
                    향수/캔들
                    <div className="left-box-bottom5">
                      <ul>
                        <li>
                          <a href="!#">여성용</a>
                        </li>
                        <li>
                          <a href="!#">남성용</a>
                        </li>
                        <li>
                          <a href="!#">캔들</a>
                        </li>
                        <li>
                          <a href="!#">디퓨저</a>
                        </li>
                        <li>
                          <a href="!#">퍼퓸 스프레이</a>
                        </li>
                      </ul>
                    </div>
                  </h5>
                </li>
                <li>
                  <h5>
                    미용기기/용품
                    <div className="left-box-bottom6">
                      <ul>
                        <li>
                          <a href="!#">바디용품</a>
                        </li>
                        <li>
                          <a href="!#">헤어용품</a>
                        </li>
                        <li>
                          <a href="!#">기타소품</a>
                        </li>
                        <li>
                          <a href="!#">여드름/피지관리</a>
                        </li>
                        <li>
                          <a href="!#">피부마사지</a>
                        </li>
                      </ul>
                    </div>
                  </h5>
                </li>
                <li>
                  <h5>
                    남성화장품
                    <div className="left-box-bottom7">
                      <ul>
                        <li>
                          <a href="!#">남성화장품세트</a>
                        </li>
                        <li>
                          <a href="!#">스킨/로션/크림/에센스</a>
                        </li>
                        <li>
                          <a href="!#">스페셜케어</a>
                        </li>
                        <li>
                          <a href="!#">쉐이빙</a>
                        </li>
                        <li>
                          <a href="!#">클렌징</a>
                        </li>
                        <li>
                          <a href="!#">선케어/비비크림</a>
                        </li>
                      </ul>
                    </div>
                  </h5>
                </li>
                <li>
                  <h5>
                    BRAND SHOP
                    <div className="left-box-bottom8">
                      <ul>
                        <li>
                          <a href="!#">Aesop</a>
                        </li>
                        <li>
                          <a href="!#">BYREDO</a>
                        </li>
                        <li>
                          <a href="!#">CREED</a>
                        </li>
                        <li>
                          <a href="!#">Diptyque</a>
                        </li>
                        <li>
                          <a href="!#">GIVENCHY</a>
                        </li>
                        <li>
                          <a href="!#">Hermès</a>
                        </li>
                        <li>
                          <a href="!#">NARS</a>
                        </li>
                        <li>
                          <a href="!#">SK-Ⅱ</a>
                        </li>
                        <li>
                          <a href="!#">VALMONT</a>
                        </li>
                        <li>
                          <a href="!#">VDL</a>
                        </li>
                        <li>
                          <a href="!#">겔랑</a>
                        </li>
                        <li>
                          <a href="!#">논픽션</a>
                        </li>
                        <li>
                          <a href="!#">니콜라이</a>
                        </li>
                        <li>
                          <a href="!#">달팡</a>
                        </li>
                        <li>
                          <a href="!#">더 디퍼런트 컴퍼니</a>
                        </li>
                        <li>
                          <a href="!#">더라퓨즈</a>
                        </li>
                        <li>
                          <a href="!#">더 후</a>
                        </li>
                        <li>
                          <a href="!#">데코르테</a>
                        </li>
                        <li>
                          <a href="!#">라메르</a>
                        </li>
                        <li>
                          <a href="!#">랑콤</a>
                        </li>
                        <li>
                          <a href="!#">라프레리</a>
                        </li>
                        <li>
                          <a href="!#">로라 메르시에</a>
                        </li>
                        <li>
                          <a href="!#">록시땅</a>
                        </li>
                      </ul>
                    </div>
                  </h5>
                </li>
              </ul>
            </div>
          </div>
          <div className="middle1-right-box">
            <div className="middle-slide-container">
              <div className="middle-slide-view">
                <ul className="middle-slide-wrap">
                  <li className="middle-slide slide4">
                    <a href="!#">
                      <img src={process.env.PUBLIC_URL + "/KHB/img/sub/dispbnnr2000116020230602113732.jpg"} alt="" />
                    </a>
                  </li>
                  <li className="middle-slide slide1">
                    <a href="!#">
                      <img src={process.env.PUBLIC_URL + "/KHB/img/sub/dispbnnr2000111020230622162726.jpg"} alt="" />
                    </a>
                  </li>
                  <li className="middle-slide slide2">
                    <a href="!#">
                      <img src={process.env.PUBLIC_URL + "/KHB/img/sub/dispbnnr2000113020230626091804.jpg"} alt="" />
                    </a>
                  </li>
                  <li className="middle-slide slide3">
                    <a href="!#">
                      <img src={process.env.PUBLIC_URL + "/KHB/img/sub/dispbnnr2000115020230620085810.jpg"} alt="" />
                    </a>
                  </li>
                  <li className="middle-slide slide4">
                    <a href="!#">
                      <img src={process.env.PUBLIC_URL + "/KHB/img/sub/dispbnnr2000116020230602113732.jpg"} alt="" />
                    </a>
                  </li>

                </ul>
              </div>
            </div>
            <div className="middle-page-btn-box">
              <span>
                <a href="!#" className="middle-page-btn on">
                  논픽션
                </a>
              </span>
              <span>
                <a href="!#" className="middle-page-btn">
                  샤넬
                </a>
              </span>
              <span>
                <a href="!#" className="middle-page-btn">
                  디올
                </a>
              </span>
              <span>
                <a href="!#" className="middle-page-btn">
                  데코르테
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="middle2">
          <div className="middle2-left">
            <h1>전체브랜드보기</h1>
            <a href="!#">
              <img src={process.env.PUBLIC_URL + "/KHB/img/sub/sub914.png"} alt="" />
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
        <div className="middle3">
          <span>
            <h1>SPECIAL BRAND</h1>
          </span>
          <div className="middle3-slide-container">
            <div className="middle3-slide-view">
              <ul className="middle3-slide-wrap">
                <li className="middle3-slide slide1">
                  <a href="!#">
                    <img src={process.env.PUBLIC_URL + "/KHB/img/sub/large173245.jpg"} alt="" />
                  </a>
                </li>
                <li className="middle3-slide slide2">
                  <a href="!#">
                    <img src={process.env.PUBLIC_URL + "/KHB/img/sub/large173247.jpg"} alt="" />
                  </a>
                </li>
                <li className="middle3-slide slide3">
                  <a href="!#">
                    <img src={process.env.PUBLIC_URL + "/KHB/img/sub/large173246.jpg"} alt="" />
                  </a>
                </li>
                <li className="middle3-slide slide4">
                  <a href="!#">
                    <img src={process.env.PUBLIC_URL + "/KHB/img/sub/large173243.jpg"} alt="" />
                  </a>
                </li>
                <li className="middle3-slide slide5">
                  <a href="!#">
                    <img src={process.env.PUBLIC_URL + "/KHB/img/sub/large173274.jpg"} alt="" />
                  </a>
                </li>
                <li className="middle3-slide slide6">
                  <a href="!#">
                    <img src={process.env.PUBLIC_URL + "/KHB/img/sub/large175290.jpg"} alt="" />
                  </a>
                </li>
                <li className="middle3-slide slide1">
                  <a href="!#">
                    <img src={process.env.PUBLIC_URL + "/KHB/img/sub/large173214.jpg"} alt="" />
                  </a>
                </li>
                <li className="middle3-slide slide2">
                  <a href="!#">
                    <img src={process.env.PUBLIC_URL + "/KHB/img/sub/large205437.jpg"} alt="" />
                  </a>
                </li>
                <li className="middle3-slide slide3">
                  <a href="!#">
                    <img src={process.env.PUBLIC_URL + "/KHB/img/sub/large177809.jpg"} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="middle3-page-btn-box">
            <ul>
              <li className="middle3-page-btn on"></li>
              <li className="middle3-page-btn "></li>
              <li className="middle3-page-btn "></li>
            </ul>
          </div>
        </div>
        <div className="coochen">
          <div className="title">
            <h2>추천기획전</h2>
          </div>
          <div className="img-box">
            <ul>
              <li><a href="!#"><img src={process.env.PUBLIC_URL + "/KHB/img/sub/small115842.jpg"} alt="" /></a></li>
              <li><a href="!#"><img src={process.env.PUBLIC_URL + "/KHB/img/sub/middle105567.jpg"} alt="" /></a></li>
              <li><a href="!#"><img src={process.env.PUBLIC_URL + "/KHB/img/sub/middle105567.jpg"} alt="" /></a></li>
              <li><a href="!#"><img src={process.env.PUBLIC_URL + "/KHB/img/sub/middle138763.jpg"} alt="" /></a></li>
              <li><a href="!#"><img src={process.env.PUBLIC_URL + "/KHB/img/sub/middle184666.jpg"} alt="" /></a></li>
              <li><a href="!#"><img src={process.env.PUBLIC_URL + "/KHB/img/sub/middle105142.jpg"} alt="" /></a></li>
              <li><a href="!#"><img src={process.env.PUBLIC_URL + "/KHB/img/sub/middle105142.jpg"} alt="" /></a></li>
              <li><a href="!#"><img src={process.env.PUBLIC_URL + "/KHB/img/sub/middle175236.jpg"} alt="" /></a></li>
              <li><a href="!#"><img src={process.env.PUBLIC_URL + "/KHB/img/sub/middle169400.jpg"} alt="" /></a></li>
              <li><a href="!#"><img src={process.env.PUBLIC_URL + "/KHB/img/sub/small197077.jpg"} alt="" /></a></li>
              <li><a href="!#"><img src={process.env.PUBLIC_URL + "/KHB/img/sub/middle136634.jpg"} alt="" /></a></li>
              <li><a href="!#"><img src={process.env.PUBLIC_URL + "/KHB/img/sub/middle102094.jpg"} alt="" /></a></li>
              <li><a href="!#"><img src={process.env.PUBLIC_URL + "/KHB/img/sub/middle180458.jpg"} alt="" /></a></li>
              <li><a href="!#"><img src={process.env.PUBLIC_URL + "/KHB/img/sub/middle103149.jpg"} alt="" /></a></li>
              <li><a href="!#"><img src={process.env.PUBLIC_URL + "/KHB/img/sub/middle101637.jpg"} alt="" /></a></li>
              <li><a href="!#"><img src={process.env.PUBLIC_URL + "/KHB/img/sub/middle129248.jpg"} alt="" /></a></li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <span>
            <h1>브랜드 제안 상품</h1>
          </span>
          <div className="bottom-all">
            <div className="bottom-left-page-btn">
              <ul>
                <li className="bottom-left-page-btn-box on">
                  <h1>겔랑</h1>
                  {/* <img src=""} alt="" /> */}
                </li>
                <li className="bottom-left-page-btn-box">
                  <h2>나스</h2>
                  {/* <img src=""} alt="" /> */}
                </li>
                <li className="bottom-left-page-btn-box">
                  <h3>바비브라운</h3>
                  {/* <img src=""} alt="" /> */}
                </li>
                <li className="bottom-left-page-btn-box">
                  <h4>헤라</h4>
                  {/* <img src=""} alt="" /> */}
                </li>
                <li className="bottom-left-page-btn-box">
                  <h5>정샘물</h5>
                  {/* <img src=""} alt="" /> */}
                </li>
                <li className="bottom-left-page-btn-box">
                  <h5>샤넬</h5>
                  {/* <img src=""} alt="" /> */}
                </li>
                <li className="bottom-left-page-btn-box">
                  <h5>디올</h5>
                  {/* <img src=""} alt="" /> */}
                </li>
              </ul>
            </div>
            <div className="bottom-right-box">
              <div className="bottom-slide-container">
                <div className="bottom-slide-view">
                  <ul className="bottom-slide-wrap">
                    <li className="bottom-slide">
                      <ul>
                        {
                          last.map((item, idx) => {
                            return (
                              <li key={idx} onClick={(e) => onClickProductList(e, item)}>
                                <div className="bottom-slide-img-box">
                                  <a href="!#">
                                    <img src={`./img/HSM/${item.상품헤더이미지[0]}.jpg`} alt="" />
                                  </a>
                                </div>
                                <div className="bottom-slide-text-box">
                                  <div className="up-text-box">
                                    <h1>
                                      <strong >{(item.정가).toLocaleString('ko-KR')}</strong>원
                                    </h1>
                                    <h3>{item.상품명}</h3>
                                  </div>
                                  <div className="down-text-box">
                                    <h5>현대백화점5%</h5>
                                    {item.배송비 === 0 && <h3>무료배송</h3>}
                                  </div>
                                </div>
                              </li>
                            )

                          })
                        }
                        {
                          상품.map((item, idx) => {
                            return (
                              <li key={idx} onClick={(e) => onClickProductList(e, item)}>
                                <div className="bottom-slide-img-box">
                                  <a href="!#">
                                    <img src={`./img/HSM/${item.상품헤더이미지[0]}.jpg`} alt="" />
                                  </a>
                                </div>
                                <div className="bottom-slide-text-box">
                                  <div className="up-text-box">
                                    <h1>
                                      <strong >{(item.정가).toLocaleString('ko-KR')}</strong>원
                                    </h1>
                                    <h3>{item.상품명}</h3>
                                  </div>
                                  <div className="down-text-box">
                                    <h5>현대백화점5%</h5>
                                    {item.배송비 === 0 && <h3>무료배송</h3>}
                                  </div>
                                </div>
                              </li>
                            )

                          })
                        }
                        {
                          first.map((item, idx) => {
                            return (
                              <li key={idx} onClick={(e) => onClickProductList(e, item)}>
                                <div className="bottom-slide-img-box">
                                  <a href="!#">
                                    <img src={`./img/HSM/${item.상품헤더이미지[0]}.jpg`} alt="" />
                                  </a>
                                </div>
                                <div className="bottom-slide-text-box">
                                  <div className="up-text-box">
                                    <h1>
                                      <strong >{(item.정가).toLocaleString('ko-KR')}</strong>원
                                    </h1>
                                    <h3>{item.상품명}</h3>
                                  </div>
                                  <div className="down-text-box">
                                    <h5>현대백화점5%</h5>
                                    {item.배송비 === 0 && <h3>무료배송</h3>}
                                  </div>
                                </div>
                              </li>
                            )

                          })
                        }
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
}


