import React from 'react';
import './scss/gajeon.scss'
import $ from 'jquery'
import GageonChildComponent from './GageonChildComponent'
import axios from 'axios';


export default function GageonComponent() {

  const [state, setState] = React.useState({
    상품: [],
    first: [],
    last: []
  })

  const getProduct = () => {
    axios({
      url: './data/notice_page/product.json',
      method: 'GET'
    })
      .then((res) => {
        let living = (res.data.상품).filter((item) => item.제품종류 === "리빙/가전");
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
    const $middleSlideContainer = $('#gajeon .middle-slide-container');
    const $middleSlideWrap = $('#gajeon .middle-slide-wrap');
    const $middleSlide = $('#gajeon .middle-slide');
    const $slidea = $('#gajeon .slide a');

    let cnt = 0;
    let setId = 0;
    function mainSlide() {
      $('#gajeon .middle-slide-wrap').stop().animate({ left: `${-100 * cnt}%` }, 600, () => {
        if (cnt > 4) cnt = 0;
        if (cnt < 0) cnt = 4;
        $('#gajeon .middle-slide-wrap').stop().animate({ left: `${-100 * cnt}%` }, 0)
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
      $('#gajeon .middle-page-btn').removeClass('on');
      $('#gajeon .middle-page-btn').eq(cnt > 4 ? 0 : cnt).addClass('on');
    }

    $('#gajeon .middle-page-btn').each(function (idx) {
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
    const $middle3SlideContainer = $('#gajeon .middle3-slide-container');
    const $middle3SlideWrap = $('#gajeon .middle3-slide-wrap');
    const $middle3Slide = $('#gajeon .middle3-slide');
    const $middle3Slidea = $('#gajeon .middle3-slide a');

    let cnt = 0;
    let setId = 0;
    function mainSlide() {
      $('#gajeon .middle3-slide-wrap').stop().animate({ top: `${-100 * cnt}%` }, 600, () => {
        if (cnt > 1) cnt = 0;
        if (cnt < 0) cnt = 1;
        $('#gajeon .middle3-slide-wrap').stop().animate({ top: `${-100 * cnt}%` }, 0)
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
      $('#gajeon .middle3-page-btn').removeClass('on');
      $('#gajeon .middle3-page-btn').eq(cnt > 1 ? 0 : cnt).addClass('on');
    }

    $('#gajeon .middle3-page-btn').each(function (idx) {
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
    const $bottomSlideContainer = $('#gajeon .bottom-slide-container');
    const $bottomSlideWrap = $('#bottom-slide-wrap');
    const $bottomSlide = $('#gajeon .bottom-slide');
    const $bottomSlidea = $('#gajeon .bottom-slide a');

    let cnt = 0;
    let setId = 0;
    function mainSlide() {
      $('#gajeon .bottom-slide-wrap').stop().animate({ left: `${-100 * cnt}%` }, 700, () => {
        if (cnt > 4) cnt = 0;
        if (cnt < 0) cnt = 4;
        $('#gajeon .bottom-slide-wrap').stop().animate({ left: `${-100 * cnt}%` }, 0)
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
      $('#gajeon .bottom-left-page-btn-box').removeClass('on');
      $('#gajeon .bottom-left-page-btn-box').eq(cnt > 4 ? 0 : cnt).addClass('on');
    }

    $('#gajeon .bottom-left-page-btn-box').each(function (idx) {
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
    <div id="gajeon">
      <div className="container">
        <div className="top">
          <div className="title">
            <div className="top-title">
              <ul>
                <li>
                  <h1>Home</h1>
                </li>
                <li>
                  <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/sub914.png"} alt="" />
                </li>
                <li>
                  <h2>
                    리빙/가전
                    <div className="top-title-text-box">
                      <ul>
                        <li>
                          <h5>화장품</h5>
                          <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/sub937.png"} alt="" />
                        </li>
                        <li>
                          <h5>명품/잡화</h5>
                          <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/sub937.png"} alt="" />
                        </li>
                        <li>
                          <h5>여성패션</h5>
                          <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/sub937.png"} alt="" />
                        </li>
                        <li>
                          <h5>영캐주얼</h5>
                          <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/sub937.png"} alt="" />
                        </li>
                        <li>
                          <h5>진/이지</h5>
                          <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/sub937.png"} alt="" />
                        </li>
                        <li>
                          <h5>남성패션</h5>
                          <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/sub937.png"} alt="" />
                        </li>
                        <li>
                          <h5>유아동/문화</h5>
                          <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/sub937.png"} alt="" />
                        </li>
                        <li>
                          <h5>스포츠/레저</h5>
                          <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/sub937.png"} alt="" />
                        </li>
                        <li>
                          <h5>리빙/가전</h5>
                          <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/sub937.png"} alt="" />
                        </li>
                        <li>
                          <h5>식품</h5>
                          <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/sub937.png"} alt="" />
                        </li>
                      </ul>
                    </div>
                  </h2>
                </li>
                <li>
                  <a href="!#">
                    <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/icon_down_new.png"} alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="bottom-title">
              <h2>리빙/가전</h2>
            </div>
          </div>
        </div>
        <div className="middle1">
          <div className="middle1-left-box">
            <div className="left-box-top">
              <h1>리빙/가전</h1>
            </div>
            <div className="left-box-bottom">
              <ul>
                <li>
                  <h5>
                    침구/카페트/커튼
                    <div className="left-box-bottom1">
                      <ul>
                        <li>
                          <a href="!#">침구단품/세트</a>
                        </li>
                        <li>
                          <a href="!#">카페트/러그/대자리</a>
                        </li>
                        <li>
                          <a href="!#">베개/베개솜/베개커버</a>
                        </li>
                        <li>
                          <a href="!#">쿠션/방석/커버</a>
                        </li>
                        <li>
                          <a href="!#">커튼/블라인드</a>
                        </li>
                        <li>
                          <a href="!#">기타/러너/패브릭</a>
                        </li>
                      </ul>
                    </div>
                  </h5>
                </li>
                <li>
                  <h5>
                    생활/인테리어
                    <div className="left-box-bottom2">
                      <ul>
                        <li>
                          <a href="!#">액자/시계/거울</a>
                        </li>
                        <li>
                          <a href="!#">수납/정리</a>
                        </li>
                        <li>
                          <a href="!#">캔들/방향제/디퓨저</a>
                        </li>
                        <li>
                          <a href="!#">화병</a>
                        </li>
                        <li>
                          <a href="!#">손/발 관리용품</a>
                        </li>
                        <li>
                          <a href="!#">기타 생활용품</a>
                        </li>
                        <li>
                          <a href="!#">서비스/배달</a>
                        </li>
                        <li>
                          <a href="!#">조명</a>
                        </li>
                        <li>
                          <a href="!#">디자인소품</a>
                        </li>
                      </ul>
                    </div>
                  </h5>
                </li>
                <li>
                  <h5>
                    바디/욕실용품
                    <div className="left-box-bottom3">
                      <ul>
                        <li>
                          <a href="!#">욕실용품</a>
                        </li>
                        <li>
                          <a href="!#">바디용품</a>
                        </li>
                        <li>
                          <a href="!#">비누/세정제</a>
                        </li>
                        <li>
                          <a href="!#">방향제/습기제거제</a>
                        </li>
                        <li>
                          <a href="!#">욕실/목욕용품</a>
                        </li>
                        <li>
                          <a href="!#">기타 욕실잡화</a>
                        </li>
                      </ul>
                    </div>
                  </h5>
                </li>
                <li>
                  <h5>
                    주방/조리/식기
                    <div className="left-box-bottom4">
                      <ul>
                        <li>
                          <a href="!#">조리/식기</a>
                        </li>
                        <li>
                          <a href="!#">냄비</a>
                        </li>
                        <li>
                          <a href="!#">후라이팬</a>
                        </li>
                        <li>
                          <a href="!#">압력솥/주전자</a>
                        </li>
                        <li>
                          <a href="!#">칼/조리기구</a>
                        </li>
                        <li>
                          <a href="!#">주방잡화</a>
                        </li>
                        <li>
                          <a href="!#">식기</a>
                        </li>
                        <li>
                          <a href="!#">컵/머그/잔</a>
                        </li>
                        <li>
                          <a href="!#">보관용기</a>
                        </li>
                        <li>
                          <a href="!#">주방기구</a>
                        </li>
                      </ul>
                    </div>
                  </h5>
                </li>
                <li>
                  <h5>
                    주방/TV/냉장고/세탁기
                    <div className="left-box-bottom5">
                      <ul>
                        <li>
                          <a href="!#">주방가전</a>
                        </li>
                        <li>
                          <a href="!#">생활가전/TV</a>
                        </li>
                        <li>
                          <a href="!#">냉장고</a>
                        </li>
                        <li>
                          <a href="!#">세탁기</a>
                        </li>
                        <li>
                          <a href="!#">계절가전</a>
                        </li>
                        <li>
                          <a href="!#">리퍼 가전</a>
                        </li>
                      </ul>
                    </div>
                  </h5>
                </li>
                <li>
                  <h5>
                    컴퓨터/스마트폰/카메라
                    <div className="left-box-bottom6">
                      <ul>
                        <li>
                          <a href="!#">컴퓨터/주변기기</a>
                        </li>
                        <li>
                          <a href="!#">스마트폰/휴대폰</a>
                        </li>
                        <li>
                          <a href="!#">디지털카메라</a>
                        </li>
                        <li>
                          <a href="!#">카메라 주변기기</a>
                        </li>
                        <li>
                          <a href="!#">모바일액세서리</a>
                        </li>
                        <li>
                          <a href="!#">전자사전</a>
                        </li>
                      </ul>
                    </div>
                  </h5>
                </li>
                <li>
                  <h5>
                    거실/침실 가구
                    <div className="left-box-bottom7">
                      <ul>
                        <li>
                          <a href="!#">소파</a>
                        </li>
                        <li>
                          <a href="!#">거실장/서랍장</a>
                        </li>
                        <li>
                          <a href="!#">테이블</a>
                        </li>
                        <li>
                          <a href="!#">스툴/의자</a>
                        </li>
                        <li>
                          <a href="!#">침대</a>
                        </li>
                        <li>
                          <a href="!#">돌침대</a>
                        </li>
                        <li>
                          <a href="!#">매트리스</a>
                        </li>
                        <li>
                          <a href="!#">장롱/옷장</a>
                        </li>
                        <li>
                          <a href="!#">협탁/콘솔/화장대</a>
                        </li>
                        <li>
                          <a href="!#">책상/의자/세트</a>
                        </li>
                        <li>
                          <a href="!#">식탁/의자/세트</a>
                        </li>
                        <li>
                          <a href="!#">학생/아동용가구</a>
                        </li>
                        <li>
                          <a href="!#">기타 생활 가구</a>
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
                  <li className="middle-slide slide5">
                    <a href="!#">
                      <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/sub922.jpg"} alt="" />
                    </a>
                  </li>
                  <li className="middle-slide slide1">
                    <a href="!#">
                      <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/sub923.jpg"} alt="" />
                    </a>
                  </li>
                  <li className="middle-slide slide2">
                    <a href="!#">
                      <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/sub924.jpg"} alt="" />
                    </a>
                  </li>
                  <li className="middle-slide slide3">
                    <a href="!#">
                      <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/sub925.jpg"} alt="" />
                    </a>
                  </li>
                  <li className="middle-slide slide4">
                    <a href="!#">
                      <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/sub926.jpg"} alt="" />
                    </a>
                  </li>
                  <li className="middle-slide slide5">
                    <a href="!#">
                      <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/sub922.jpg"} alt="" />
                    </a>
                  </li>
                  <li className="middle-slide slide1">
                    <a href="!#">
                      <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/sub923.jpg"} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="middle-page-btn-box">
              <span>
                <a href="!#" className="middle-page-btn on">
                  휘슬러
                </a>
              </span>
              <span>
                <a href="!#" className="middle-page-btn">
                  씰리
                </a>
              </span>
              <span>
                <a href="!#" className="middle-page-btn">
                  시원한 여름나기
                </a>
              </span>
              <span>
                <a href="!#" className="middle-page-btn">
                  해외 조명
                </a>
              </span>
              <span>
                <a href="!#" className="middle-page-btn">
                  프리츠한센
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="middle2">
          <div className="middle2-left">
            <h1>전체브랜드보기</h1>
            <a href="!#">
              <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/sub937.png"} alt="" />
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
                    <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/sub902.png"} alt="" />
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
                    <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/sub932.jpg"} alt="" />
                  </a>
                </li>
                <li className="middle3-slide slide2">
                  <a href="!#">
                    <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/sub933.jpg"} alt="" />
                  </a>
                </li>
                <li className="middle3-slide slide3">
                  <a href="!#">
                    <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/sub934.jpg"} alt="" />
                  </a>
                </li>
                <li className="middle3-slide slide4">
                  <a href="!#">
                    <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/sub929.jpg"} alt="" />
                  </a>
                </li>
                <li className="middle3-slide slide5">
                  <a href="!#">
                    <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/sub930.jpg"} alt="" />
                  </a>
                </li>
                <li className="middle3-slide slide6">
                  <a href="!#">
                    <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/sub931.jpg"} alt="" />
                  </a>
                </li>
                <li className="middle3-slide slide1">
                  <a href="!#">
                    <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/sub932.jpg"} alt="" />
                  </a>
                </li>
                <li className="middle3-slide slide2">
                  <a href="!#">
                    <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/sub933.jpg"} alt="" />
                  </a>
                </li>
                <li className="middle3-slide slide3">
                  <a href="!#">
                    <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/sub934.jpg"} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="middle3-page-btn-box">
            <ul>
              <li className="middle3-page-btn on"></li>
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
                  <h1>유라</h1>
                  <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/bg_green_arrow.png"} alt="" />
                </li>
                <li className="bottom-left-page-btn-box">
                  <h2>젠하이저</h2>
                  <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/bg_green_arrow.png"} alt="" />
                </li>
                <li className="bottom-left-page-btn-box">
                  <h3>이메텍</h3>
                  <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/bg_green_arrow.png"} alt="" />
                </li>
                <li className="bottom-left-page-btn-box">
                  <h4>러쉬</h4>
                  <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/bg_green_arrow.png"} alt="" />
                </li>
                <li className="bottom-left-page-btn-box">
                  <h5>에델코첸</h5>
                  <img src={process.env.PUBLIC_URL + "/img/HSM/sub9/bg_green_arrow.png"} alt="" />
                </li>
              </ul>
            </div>
            <div className="bottom-right-box">
              <div className="bottom-slide-container">
                <div className="bottom-slide-view">
                  <ul className="bottom-slide-wrap">
                    <li className="bottom-slide">
                      <GageonChildComponent 상품={state.상품} first={state.first} last={state.last} />
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
