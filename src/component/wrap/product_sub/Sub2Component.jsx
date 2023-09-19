import axios from 'axios';
import $ from 'jquery';
import React from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import './scss/sub2.scss';

export default function Sub2Component() {
  const { setViewProduct } = React.useContext(GlobalContext);
  const onClickProductList = (e, item) => {
    e.preventDefault();
    let obj = {
      제품코드: item.제품코드,
      제품종류: item.제품종류,
      상품로고이미지: item.상품로고이미지,
      퀵메뉴이미지: `http://localhost:3000/img/KHB/${item.상품헤더이미지[0]}.jpg`,
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
    window.location.pathname = '/detailpage';
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
        let living = (res.data.상품).filter((item) => item.제품종류 === "명품/잡화");
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
    const $middleSlideContainer = $('#Sub2Component .middle-slide-container');
    const $middleSlideWrap = $('#Sub2Component .middle-slide-wrap');
    const $middleSlide = $('#Sub2Component .middle-slide');
    const $slidea = $('#Sub2Component .slide a');

    let cnt = 0;
    let setId = 0;
    function mainSlide() {
      $('#Sub2Component .middle-slide-wrap').stop().animate({ left: `${-100 * cnt}%` }, 600, () => {
        if (cnt > 4) cnt = 0;
        if (cnt < 0) cnt = 4;
        $('#Sub2Component .middle-slide-wrap').stop().animate({ left: `${-100 * cnt}%` }, 0)
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
      $('#Sub2Component .middle-page-btn').removeClass('on');
      $('#Sub2Component .middle-page-btn').eq(cnt > 4 ? 0 : cnt).addClass('on');
    }

    $('#Sub2Component .middle-page-btn').each(function (idx) {
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
    const $bottomSlideContainer = $('#Sub2Component .bottom-slide-container');
    const $bottomSlideWrap = $('#bottom-slide-wrap');
    const $bottomSlide = $('#Sub2Component .bottom-slide');
    const $bottomSlidea = $('#Sub2Component .bottom-slide a');

    let cnt = 0;
    let setId = 0;
    function mainSlide() {
      $('#Sub2Component .bottom-slide-wrap').stop().animate({ left: `${-100 * cnt}%` }, 700, () => {
        if (cnt > 6) cnt = 0;
        if (cnt < 0) cnt = 6;
        $('#Sub2Component .bottom-slide-wrap').stop().animate({ left: `${-100 * cnt}%` }, 0)
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
      $('#Sub2Component .bottom-left-page-btn-box').removeClass('on');
      $('#Sub2Component .bottom-left-page-btn-box').eq(cnt > 6 ? 0 : cnt).addClass('on');
    }

    $('#Sub2Component .bottom-left-page-btn-box').each(function (idx) {
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
    <div id="Sub2Component">
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
                    명품/잡화
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
              <h2>명품/잡화</h2>
            </div>
          </div>
        </div>
        <div className="middle1">
          <div className="middle1-left-box">
            <div className="left-box-top">
              <h1>명품/잡화</h1>
            </div>
            <div className="left-box-bottom">
              <ul>
                <li>
                  <a href="!#">
                    <h5>
                      핸드백/가방
                      <div className="left-box-bottom1">
                        <ul>
                          <li>
                            <a href="!#">여성 핸드백/가방</a>
                          </li>
                          <li>
                            <a href="!#">남성가방</a>
                          </li>
                          <li>
                            <a href="!#">여행가방</a>
                          </li>
                        </ul>
                      </div>
                    </h5>
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <h5>
                      슈즈
                      <div className="left-box-bottom2">
                        <ul>
                          <li>
                            <a href="!#">여성화</a>
                          </li>
                          <li>
                            <a href="!#">남성화</a>
                          </li>
                        </ul>
                      </div>
                    </h5>
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <h5>
                      시계
                      <div className="left-box-bottom3">
                        <ul>
                          <li>
                            <a href="!#">여성용시계</a>
                          </li>
                          <li>
                            <a href="!#">남성용시계</a>
                          </li>
                          <li>
                            <a href="!#">커플시계</a>
                          </li>
                        </ul>
                      </div>
                    </h5>
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <h5>
                      기타잡화
                      <div className="left-box-bottom4">
                        <ul>
                          <li>
                            <a href="!#">양말</a>
                          </li>
                          <li>
                            <a href="!#">스타킹/타이즈</a>
                          </li>
                          <li>
                            <a href="!#">모자</a>
                          </li>
                          <li>
                            <a href="!#">선글라스</a>
                          </li>
                          <li>
                            <a href="!#">머플러/스카프</a>
                          </li>
                          <li>
                            <a href="!#">장갑</a>
                          </li>
                          <li>
                            <a href="!#">손수건</a>
                          </li>
                          <li>
                            <a href="!#">안경테</a>
                          </li>
                          <li>
                            <a href="!#">우산/양산</a>
                          </li>
                          <li>
                            <a href="!#">핸드폰악세서리</a>
                          </li>
                          <li>
                            <a href="!#">기타</a>
                          </li>
                        </ul>
                      </div>
                    </h5>
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <h5>
                      지갑/벨트
                      <div className="left-box-bottom5">
                        <ul>
                          <li>
                            <a href="!#">남성지갑</a>
                          </li>
                          <li>
                            <a href="!#">명함지갑</a>
                          </li>
                          <li>
                            <a href="!#">여성벨트</a>
                          </li>
                          <li>
                            <a href="!#">남성벨트</a>
                          </li>
                          <li>
                            <a href="!#">기타</a>
                          </li>
                          <li>
                            <a href="!#">여성지갑</a>
                          </li>
                        </ul>
                      </div>
                    </h5>
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <h5>
                      악세서리
                      <div className="left-box-bottom6">
                        <ul>
                          <li>
                            <a href="!#">귀걸이</a>
                          </li>
                          <li>
                            <a href="!#">목걸이/펜던트</a>
                          </li>
                          <li>
                            <a href="!#">팔찌/발찌</a>
                          </li>
                          <li>
                            <a href="!#">반지</a>
                          </li>
                          <li>
                            <a href="!#">브롯지</a>
                          </li>
                          <li>
                            <a href="!#">헤어액세서리</a>
                          </li>
                          <li>
                            <a href="!#">세트상품</a>
                          </li>
                          <li>
                            <a href="!#">금/골드바/귀금속</a>
                          </li>
                          <li>
                            <a href="!#">기타 소품</a>
                          </li>
                        </ul>
                      </div>
                    </h5>
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <h5>
                      웨딩밴드 전문관
                      <div className="left-box-bottom7">
                        <ul>
                          <li>
                            <a href="!#">더현대닷컴 Exclusive</a>
                          </li>
                          <li>
                            <a href="!#">웨딩밴드</a>
                          </li>
                          <li>
                            <a href="!#">웨딩주얼리</a>
                          </li>
                          <li>
                            <a href="!#">프로포즈 주얼리</a>
                          </li>
                          <li>
                            <a href="!#">레이어드링</a>
                          </li>
                          <li>
                            <a href="!#">파인주얼리</a>
                          </li>
                          <li>
                            <a href="!#">맨즈컬렉션</a>
                          </li>
                          <li>
                            <a href="!#">기프트</a>
                          </li>
                        </ul>
                      </div>
                    </h5>
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
                      <img src={process.env.PUBLIC_URL + "/KHB/img/sub/dispbnnr20011112020230707162204.jpg"} alt="" />
                    </a>
                  </li>
                  <li className="middle-slide slide1">
                    <a href="!#">
                      <img src={process.env.PUBLIC_URL + "/KHB/img/sub/dispbnnr2001111020230707145304.jpg"} alt="" />
                    </a>
                  </li>
                  <li className="middle-slide slide2">
                    <a href="!#">
                      <img src={process.env.PUBLIC_URL + "/KHB/img/sub/dispbnnr2001112020230707152328.jpg"} alt="" />
                    </a>
                  </li>
                  <li className="middle-slide slide3">
                    <a href="!#">
                      <img src={process.env.PUBLIC_URL + "/KHB/img/sub/dispbnnr20011121020230629143729.jpg"} alt="" />
                    </a>
                  </li>
                  <li className="middle-slide slide4">
                    <a href="!#">
                      <img src={process.env.PUBLIC_URL + "/KHB/img/sub/dispbnnr2001115020230707162117.jpg"} alt="" />
                    </a>
                  </li>
                  <li className="middle-slide slide5">
                    <a href="!#">
                      <img src={process.env.PUBLIC_URL + "/KHB/img/sub/dispbnnr20011112020230707162204.jpg"} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="middle-page-btn-box">
              <span>
                <a href="!#" className="middle-page-btn on">
                  메트로시티
                </a>
              </span>
              <span>
                <a href="!#" className="middle-page-btn">
                  THE LUXURY WEEK
                </a>
              </span>
              <span>
                <a href="!#" className="middle-page-btn">
                  골든듀 창립 34주년
                </a>
              </span>
              <span>
                <a href="!#" className="middle-page-btn">
                  스톤헨지
                </a>
              </span>
              <span>
                <a href="!#" className="middle-page-btn">
                  MIKO
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
        <div className="bottom">
          <span>
            <h1>New Arrivals</h1>
          </span>
          <div className="bottom-all">
            <div className="bottom-left-page-btn">
              <ul>
                <li className="bottom-left-page-btn-box on">
                  <h1>분크</h1>
                  {/* <img src=""} alt="" /> */}
                </li>
                <li className="bottom-left-page-btn-box">
                  <h2>멀버리</h2>
                  {/* <img src=""} alt="" /> */}
                </li>
                <li className="bottom-left-page-btn-box">
                  <h3>지미추</h3>
                  {/* <img src=""} alt="" /> */}
                </li>
                <li className="bottom-left-page-btn-box">
                  <h4>티쏘시계</h4>
                  {/* <img src=""} alt="" /> */}
                </li>
                <li className="bottom-left-page-btn-box">
                  <h5>골든구스</h5>
                  {/* <img src=""} alt="" /> */}
                </li>
                <li className="bottom-left-page-btn-box">
                  <h5>론진</h5>
                  {/* <img src=""} alt="" /> */}
                </li>
                <li className="bottom-left-page-btn-box">
                  <h5>메트로시티 핸드백</h5>
                  {/* <img src=""} alt="" /> */}
                </li>
              </ul>
            </div>
            <div className="bottom-right-box">
              <div className="bottom-slide-container">
                <div className="bottom-slide-view">
                  <ul className="bottom-slide-wrap">
                    <li className="bottom-slide slide19">
                      <ul>
                        <li>
                          <div className="bottom-slide-img-box">
                            <a href="!#">
                              {/* <img src=""} alt="" /> */}
                            </a>
                          </div>
                          <div className="bottom-slide-text-box">
                            <div className="up-text-box">
                              <h1>
                                <strong>55,000</strong>원
                              </h1>
                              <h3>[vunque] VQB31AC2571 Love Key Charm (러브 키 참) Purple</h3>
                            </div>
                            <div className="down-text-box">
                              <h5>현대백화점5%</h5>
                              <h3>무료배송</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="bottom-slide slide20">
                      <ul>
                        <li>
                          <div className="bottom-slide-img-box">
                            <a href="!#">
                              {/* <img src=""} alt="" /> */}
                            </a>
                          </div>
                          <div className="bottom-slide-text-box">
                            <div className="up-text-box">
                              <h1>
                                <strong>55,000</strong>원
                              </h1>
                              <h3>[vunque] VQB31AC2561 Love Key Charm (러브 키 참) Ivory</h3>
                            </div>
                            <div className="down-text-box">
                              <h5>현대백화점5%</h5>
                              <h3>무료배송</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="bottom-slide slide21">
                      <ul>
                        <li>
                          <div className="bottom-slide-img-box">
                            <a href="!#">
                              <img src={process.env.PUBLIC_URL + "/KHB/img/sub/dior3.jpg"} alt="" />
                            </a>
                          </div>
                          <div className="bottom-slide-text-box">
                            <div className="up-text-box">
                              <h1>
                                <strong>55,000</strong>원
                              </h1>
                              <h3>[vunque] VQB31AC2551 Love Key Charm (러브 키 참) Blue</h3>
                            </div>
                            <div className="down-text-box">
                              <h5>현대백화점5%</h5>
                              <h3>무료배송</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="bottom-slide slide1">
                      <ul>
                        <li>
                          <div className="bottom-slide-img-box">
                            <a href="!#">
                              <img src={process.env.PUBLIC_URL + "/KHB/img/sub/40A1715056_0_300.jpg"} alt="" />
                            </a>
                          </div>
                          <div className="bottom-slide-text-box">
                            <div className="up-text-box">
                              <h1>
                                <strong>55,000</strong>원
                              </h1>
                              <h3>[vunque] VQB31AC2571 Love Key Charm (러브 키 참) Purple</h3>
                            </div>
                            <div className="down-text-box">
                              <h5>현대백화점5%</h5>
                              <h3>무료배송</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="bottom-slide slide2">
                      <ul>
                        <li>
                          <div className="bottom-slide-img-box">
                            <a href="!#">
                              <img src={process.env.PUBLIC_URL + "/KHB/img/sub/40A1715055_0_300.jpg"} alt="" />
                            </a>
                          </div>
                          <div className="bottom-slide-text-box">
                            <div className="up-text-box">
                              <h1>
                                <strong>55,000</strong>원
                              </h1>
                              <h3>[vunque] VQB31AC2561 Love Key Charm (러브 키 참) Ivory</h3>
                            </div>
                            <div className="down-text-box">
                              <h5>현대백화점</h5>
                              <h3>무료배송</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="bottom-slide slide3">
                      <ul>
                        <li>
                          <div className="bottom-slide-img-box">
                            <a href="!#">
                              <img src={process.env.PUBLIC_URL + "/KHB/img/sub/40A1715053_0_300.jpg"} alt="" />
                            </a>
                          </div>
                          <div className="bottom-slide-text-box">
                            <div className="up-text-box">
                              <h1>
                                <strong>55,000</strong>원
                              </h1>
                              <h3>[vunque] VQB31AC2551 Love Key Charm (러브 키 참) Blue</h3>
                            </div>
                            <div className="down-text-box">
                              <h5>현대백화점</h5>
                              <h3>무료배송</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="bottom-slide slide4">
                      <ul>
                        <li>
                          <div className="bottom-slide-img-box">
                            <a href="!#">
                              <img src={process.env.PUBLIC_URL + "/KHB/img/sub/60A1711164_0_300.jpg"} alt="" />
                            </a>
                          </div>
                          <div className="bottom-slide-text-box">
                            <div className="up-text-box">
                              <h1>
                                <strong>1,830,000</strong>원
                              </h1>
                              <h3>멀버리 시티 백팩 HH7659/736U170</h3>
                            </div>
                            <div className="down-text-box">
                              <h5>현대백화점5%</h5>
                              <h3>무12</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="bottom-slide slide5">
                      <ul>
                        <li>
                          <div className="bottom-slide-img-box">
                            <a href="!#">
                              <img src={process.env.PUBLIC_URL + "/KHB/img/sub/60A1711163_0_300.jpg"} alt="" />
                            </a>
                          </div>
                          <div className="bottom-slide-text-box">
                            <div className="up-text-box">
                              <h1>
                                <strong>1,760,000</strong>원
                              </h1>
                              <h3>
                                멀버리 시티 브리프케이스 HB5118/736U170
                              </h3>
                            </div>
                            <div className="down-text-box">
                              <h5>현대백화점5%</h5>
                              <h3>무12</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="bottom-slide slide6">
                      <ul>
                        <li>
                          <div className="bottom-slide-img-box">
                            <a href="!#">
                              <img src={process.env.PUBLIC_URL + "/KHB/img/sub/60A1711162_0_300.jpg"} alt="" />
                            </a>
                          </div>
                          <div className="bottom-slide-text-box">
                            <div className="up-text-box">
                              <h1>
                                <strong>490,000</strong>원
                              </h1>
                              <h3>멀버리 M 지퍼 삼단 지갑 RL7806/000A100</h3>
                            </div>
                            <div className="down-text-box">
                              <h5>현대백화점5%</h5>
                              <h3>무료배송</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="bottom-slide slide7">
                      <ul>
                        <li>
                          <div className="bottom-slide-img-box">
                            <a href="!#">
                              <img src={process.env.PUBLIC_URL + "/KHB/img/sub/40A1713511_0_300.jpg"} alt="" />
                            </a>
                          </div>
                          <div className="bottom-slide-text-box">
                            <div className="up-text-box">
                              <h1>
                                <strong>73,000</strong>원
                              </h1>
                              <h3>
                                [지미추 공식] 맨 아쿠아 EDT 30ML J000157091
                              </h3>
                            </div>
                            <div className="down-text-box">
                              <h5>현대백화점5%</h5>
                              <h3>무료배송</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="bottom-slide slide8">
                      <ul>
                        <li>
                          <div className="bottom-slide-img-box">
                            <a href="!#">
                              <img src={process.env.PUBLIC_URL + "/KHB/img/sub/40A1711875_0_300.jpg"} alt="" />
                            </a>
                          </div>
                          <div className="bottom-slide-text-box">
                            <div className="up-text-box">
                              <h1>
                                <strong>141,000</strong>원
                              </h1>
                              <h3>
                                [지미추 공식] 맨 아쿠아 EDT 100ML J000157090
                              </h3>
                            </div>
                            <div className="down-text-box">
                              <h5>현대백화점5%</h5>
                              <h3>무료배송</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="bottom-slide slide9">
                      <ul>
                        <li>
                          <div className="bottom-slide-img-box">
                            <a href="!#">
                              <img src={process.env.PUBLIC_URL + "/KHB/img/sub/40A1711849_0_300.jpg"} alt="" />
                            </a>
                          </div>
                          <div className="bottom-slide-text-box">
                            <div className="up-text-box">
                              <h1>
                                <strong>125,000</strong>원
                              </h1>
                              <h3>
                                [지미추 공식] 아이원추 포에버 EDP 60ML J000159796
                              </h3>
                            </div>
                            <div className="down-text-box">
                              <h5>현대백화점5%</h5>
                              <h3>무료배송</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="bottom-slide slide10">
                      <ul>
                        <li>
                          <div className="bottom-slide-img-box">
                            <a href="!#">
                              <img src={process.env.PUBLIC_URL + "/KHB/img/sub/40A1712905_0_300.jpg"} alt="" />
                            </a>
                          </div>
                          <div className="bottom-slide-text-box">
                            <div className="up-text-box">
                              <h1>
                                <strong>550,000</strong>원
                              </h1>
                              <h3>
                                [티쏘] T058.109.11.036.01 여성시계 러블리 스퀘어
                              </h3>
                            </div>
                            <div className="down-text-box">
                              <h5>현대백화점5%</h5>
                              <h3>무료배송</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="bottom-slide slide11">
                      <ul>
                        <li>
                          <div className="bottom-slide-img-box">
                            <a href="!#">
                              <img src={process.env.PUBLIC_URL + "/KHB/img/sub/40A1712904_0_300.jpg"} alt="" />
                            </a>
                          </div>
                          <div className="bottom-slide-text-box">
                            <div className="up-text-box">
                              <h1>
                                <strong>470,000</strong>원
                              </h1>
                              <h3>
                                [티쏘] T058.109.11.041.01 여성시계 러블리 스퀘어
                              </h3>
                            </div>
                            <div className="down-text-box">
                              <h5>현대백화점5%</h5>
                              <h3>무료배송</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="bottom-slide slide12">
                      <ul>
                        <li>
                          <div className="bottom-slide-img-box">
                            <a href="!#">
                              <img src={process.env.PUBLIC_URL + "/KHB/img/sub/40A1707947_0_300.jpg"} alt="" />
                            </a>
                          </div>
                          <div className="bottom-slide-text-box">
                            <div className="up-text-box">
                              <h1>
                                <strong>830,000</strong>원
                              </h1>
                              <h3>
                                [티쏘] T120.417.17.051.03 남성시계 씨스타 1000 크로노그래프
                              </h3>
                            </div>
                            <div className="down-text-box">
                              <h5>현대백화점5%</h5>
                              <h3>무료배송</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="bottom-slide slide13">
                      <ul>
                        <li>
                          <div className="bottom-slide-img-box">
                            <a href="!#">
                              <img src={process.env.PUBLIC_URL + "/KHB/img/sub/60A1713584_0_300.jpg"} alt="" />
                            </a>
                          </div>
                          <div className="bottom-slide-text-box">
                            <div className="up-text-box">
                              <h1>
                                <strong>788,000</strong>원
                              </h1>
                              <h3>골든구스  남성 대드스타 GMF00199 F001211 70137</h3>
                            </div>
                            <div className="down-text-box">
                              <h5>현대백화점5%</h5>
                              <h3>무료배송</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="bottom-slide slide14">
                      <ul>
                        <li>
                          <div className="bottom-slide-img-box">
                            <a href="!#">
                              <img src={process.env.PUBLIC_URL + "/KHB/img/sub/60A1712773_0_300.jpg"} alt="" />
                            </a>
                          </div>
                          <div className="bottom-slide-text-box">
                            <div className="up-text-box">
                              <h1>
                                <strong>748,000</strong>원
                              </h1>
                              <h3>골든구스  여성 하이스타 GWF00118 F003389 11236</h3>
                            </div>
                            <div className="down-text-box">
                              <h5>현대백화점5%</h5>
                              <h3>무료배송</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="bottom-slide slide15">
                      <ul>
                        <li>
                          <div className="bottom-slide-img-box">
                            <a href="!#">
                              <img src={process.env.PUBLIC_URL + "/KHB/img/sub/60A1712772_0_300.jpg"} alt="" />
                            </a>
                          </div>
                          <div className="bottom-slide-text-box">
                            <div className="up-text-box">
                              <h1>
                                <strong>792,000</strong>원
                              </h1>
                              <h3>골든구스  여성 캘리포니아 백 E-W G36WA878 A8</h3>
                            </div>
                            <div className="down-text-box">
                              <h5>현대백화점5%</h5>
                              <h3>무료배송</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="bottom-slide slide16">
                      <ul>
                        <li>
                          <div className="bottom-slide-img-box">
                            <a href="!#">
                              <img src={process.env.PUBLIC_URL + "/KHB/img/sub/40A1703982_0_300.jpg"} alt="" />
                            </a>
                          </div>
                          <div className="bottom-slide-text-box">
                            <div className="up-text-box">
                              <h1>
                                <strong>3,800,000</strong>원
                              </h1>
                              <h3>론진 하이드로 콘퀘스트 크로노그래프 블랙 다이얼 41MM L3.783.4.56.6</h3>
                            </div>
                            <div className="down-text-box">
                              <h3>무료배송</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="bottom-slide slide17">
                      <ul>
                        <li>
                          <div className="bottom-slide-img-box">
                            <a href="!#">
                              <img src={process.env.PUBLIC_URL + "/KHB/img/sub/chanel2.jpg"} alt="" />
                            </a>
                          </div>
                          <div className="bottom-slide-text-box">
                            <div className="up-text-box">
                              <h1>
                                <strong>3,600,000</strong>원
                              </h1>
                              <h3>론진 마스터 컬렉션 파워 리저브 블루 다이얼 레더 스트랩 40MM L2.908.4.92.0</h3>
                            </div>
                            <div className="down-text-box">
                              <h3>무료배송</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="bottom-slide slide18">
                      <ul>
                        <li>
                          <div className="bottom-slide-img-box">
                            <a href="!#">
                              <img src={process.env.PUBLIC_URL + "/KHB/img/sub/chanel3.jpg"} alt="" />
                            </a>
                          </div>
                          <div className="bottom-slide-text-box">
                            <div className="up-text-box">
                              <h1>
                                <strong>87,000</strong>원
                              </h1>
                              <h3>샤넬 울트라 르 뗑</h3>
                            </div>
                            <div className="down-text-box">
                              <h3>무료배송</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="bottom-slide slide19">
                      <ul>
                        <li>
                          <div className="bottom-slide-img-box">
                            <a href="!#">
                              <img src={process.env.PUBLIC_URL + "/KHB/img/sub/dior1.jpg"} alt="" />
                            </a>
                          </div>
                          <div className="bottom-slide-text-box">
                            <div className="up-text-box">
                              <h1>
                                <strong>48,000</strong>원
                              </h1>
                              <h3>[디올] NEW 립 글로우</h3>
                            </div>
                            <div className="down-text-box">
                              <h5>현대백화점5%</h5>
                              <h3>무료배송</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="bottom-slide slide20">
                      <ul>
                        <li>
                          <div className="bottom-slide-img-box">
                            <a href="!#">
                              <img src={process.env.PUBLIC_URL + "/KHB/img/sub/dior2.jpg"} alt="" />
                            </a>
                          </div>
                          <div className="bottom-slide-text-box">
                            <div className="up-text-box">
                              <h1>
                                <strong>80,000</strong>원
                              </h1>
                              <h3>[디올] NEW 디올 르 밤</h3>
                            </div>
                            <div className="down-text-box">
                              <h5>현대백화점5%</h5>
                              <h3>무료배송</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="bottom-slide slide21">
                      <ul>
                        <li>
                          <div className="bottom-slide-img-box">
                            <a href="!#">
                              <img src={process.env.PUBLIC_URL + "/KHB/img/sub/dior3.jpg"} alt="" />
                            </a>
                          </div>
                          <div className="bottom-slide-text-box">
                            <div className="up-text-box">
                              <h1>
                                <strong>49,000</strong>원
                              </h1>
                              <h3>[디올]NEW 디올 어딕트 립 맥시마이저</h3>
                            </div>
                            <div className="down-text-box">
                              <h5>현대백화점5%</h5>
                              <h3>무료배송</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="bottom-slide slide1">
                      <ul>
                        <li>
                          <div className="bottom-slide-img-box">
                            <a href="!#">
                              <img src={process.env.PUBLIC_URL + "/KHB/img/sub/gell1.jpg"} alt="" />
                            </a>
                          </div>
                          <div className="bottom-slide-text-box">
                            <div className="up-text-box">
                              <h1>
                                <strong>33,000</strong>원
                              </h1>
                              <h3>[겔랑] 아쿠아 알레고리아 오 드 뚜왈렛 10ml</h3>
                            </div>
                            <div className="down-text-box">
                              <h5>현대백화점15%</h5>
                              <h3>무료배송</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="bottom-slide slide2">
                      <ul>
                        <li>
                          <div className="bottom-slide-img-box">
                            <a href="!#">
                              <img src={process.env.PUBLIC_URL + "/KHB/img/sub/gell2.jpg"} alt="" />
                            </a>
                          </div>
                          <div className="bottom-slide-text-box">
                            <div className="up-text-box">
                              <h1>
                                <strong>79,000</strong>원
                              </h1>
                              <h3>[겔랑] 빠뤼르 골드 리쥬버네이팅 래디언스 쿠션 리필</h3>
                            </div>
                            <div className="down-text-box">
                              <h5>현대백화점</h5>
                              <h3>무료배송</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="bottom-slide slide3">
                      <ul>
                        <li>
                          <div className="bottom-slide-img-box">
                            <a href="!#">
                              <img src={process.env.PUBLIC_URL + "/KHB/img/sub/gell3.jpg"} alt="" />
                            </a>
                          </div>
                          <div className="bottom-slide-text-box">
                            <div className="up-text-box">
                              <h1>
                                <strong>49,000</strong>원
                              </h1>
                              <h3>[겔랑] 키스키스 비글로우 립밤</h3>
                            </div>
                            <div className="down-text-box">
                              <h5>현대백화점</h5>
                              <h3>무료배송</h3>
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
}


