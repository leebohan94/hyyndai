import React, { useState } from 'react';
import { useNavigate, Link, Outlet } from 'react-router-dom';
import './scss/cart_header.scss';
import './scss/header.scss';
export default function HeaderComponent({ onSignInON, isLogin, setIsLogin }) {

  const navigate = useNavigate();

  const [isClick, setIsClick] = React.useState(false)

  const onClickBtn = (e) => {
    e.preventDefault();
    if (isClick === false) {
      setIsClick(true);
    }
    else {
      setIsClick(false);
    }
  }
  const [isHover, setIsHover] = useState(false);
  const onMouseEnterGift = () => {
    setIsHover(true);
  }
  const onMouseLeaveGift = () => {
    setIsHover(false);
  }

  const [state, setState] = React.useState({
    isSub1: false,
    isSub2: true,
  })

  //로그인 창 띄우기
  const onClcikSignIn = (e) => {
    e.preventDefault();
    onSignInON();
  }
  //로그아웃하기
  const onClickSignOut = (e) => {
    e.preventDefault();
    sessionStorage.removeItem('user_id');
    setIsLogin(false);
    navigate("/");
  }

  const onMouseEnter = (e) => {
    e.preventDefault();

    setState({
      ...state,
      isSub2: true
    })
  }
  const onMouseLeaveTotal = (e) => {
    e.preventDefault();
    setState({
      ...state,
      isSub2: false
    })
  }
  const [show, setShow] = React.useState('화장품')

  const mouseenter = (value) => {
    setShow(value);
  }

  //마이페이지로 이동
  const onClickGoToMypage = (e) => {
    if (sessionStorage.getItem('user_id') != null) {
      navigate('/mypageMain');
    }
    else {
      alert('회원가입을 먼저 해주세요');
      navigate('/signup');
    }

  }

  return (
    <>
      <header id="header">
        <div className="container">
          <div className="gap">
            <div className="title">
              <div className="title-up">
                <div className="title-up-left">
                  <ul>
                    <li>
                      <button
                        className={`logo_btn${isClick ? " on" : ""}`}
                        onClick={() => navigate('/')}
                      >
                        <img src={process.env.PUBLIC_URL + "/img/HSM/intro/team005.png"} alt="" />
                      </button>
                    </li>
                    <li>
                      <button
                        className={`arrow_btn${isClick ? " on" : ""}`}
                        onClick={onClickBtn}
                      >
                        <img src={process.env.PUBLIC_URL + "/img/HSM/intro/gatefront_logo_btn_arrow.png"} alt=""
                        />
                      </button>
                    </li>
                    <div className={`box${isClick ? " on" : ""}`}>
                      <ul className={`box-gap${isClick ? " on" : ""}`}>
                        <li className={isClick ? "on" : ""}>
                          <img
                            src={process.env.PUBLIC_URL + "/img/HSM/intro/gatefront_logo_ehyundai.png"}
                            alt=""
                            className=""
                          />
                          <h1>현대백화점</h1>
                        </li>
                        <li className={isClick ? "on" : ""}>
                          <img
                            src={process.env.PUBLIC_URL + "/img/HSM/intro/gatefront_logo_thehyundai.png"}
                            alt=""
                          />
                          <h2>더현대닷컴</h2>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </div>
                <div className="title-up-center">
                  <label htmlFor="">
                    <input type="text" name="" id="" />
                  </label>
                  <h1>
                    <a href="!#">
                      <img src={process.env.PUBLIC_URL + "/img/HSM/intro/team006.png"} alt="" />
                    </a>
                  </h1>
                  <div className="title-up-inner">
                    <ul>
                      <li>
                        <h1>최근검색어</h1>
                      </li>
                      <li>
                        <h3>최근 검색어가 없습니다.</h3>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <h1>인기검색어</h1>
                      </li>
                    </ul>
                    <div className="left-right">
                      <div className="title-up-inner-left">
                        <ul>
                          <li>
                            <h5>1. 명품</h5>
                            <img src={process.env.PUBLIC_URL + "/img/HSM/intro/icon_dash.png"} alt="" />
                          </li>
                          <li>
                            <h5>1. COS퀼티드백</h5>
                            <img src={process.env.PUBLIC_URL + "/img/HSM/intro/icon_dash.png"} alt="" />
                          </li>
                          <li>
                            <h5>1. 오니츠카타이거</h5>
                            <img src={process.env.PUBLIC_URL + "/img/HSM/intro/icon_dash.png"} alt="" />
                          </li>
                          <li>
                            <h5>4. 토롱이</h5>
                            <img src={process.env.PUBLIC_URL + "/img/HSM/intro/icon_up.png"} alt="" />
                          </li>
                          <li>
                            <h5>5. COS 퀄팅</h5>
                            <img src={process.env.PUBLIC_URL + "/img/HSM/intro/icon_down2.png"} alt="" />
                          </li>
                        </ul>
                      </div>
                      <div className="title-up-inner-right">
                        <ul>
                          <li>
                            <h5>6. COS 퀄팅</h5>
                            <h2>NEW</h2>
                          </li>
                          <li>
                            <h5>7. COS 퀄팅</h5>
                            <h2>NEW</h2>
                          </li>
                          <li>
                            <h5>8. COS 퀄팅</h5>
                            <h2>NEW</h2>
                          </li>
                          <li>
                            <h5>9. 스카프</h5>
                            <img src={process.env.PUBLIC_URL + "/img/HSM/intro/icon_down2.png"} alt="" />
                          </li>
                          <li>
                            <h5>10. COS</h5>
                            <img src={process.env.PUBLIC_URL + "/img/HSM/intro/icon_down2.png"} alt="" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="title-up-right">
                  <ul>
                    <li onMouseEnter={onMouseEnter} >
                      {!isLogin ? <h2 onMouseEnter={onMouseEnter} onClick={onClcikSignIn}>로그인/회원</h2> : <h2 onMouseEnter={onMouseEnter} onClick={onClickSignOut}>로그아웃</h2>}
                      <img src={process.env.PUBLIC_URL + "/img/HSM/intro/icon_down_new.png"} alt="" />
                      <div
                        /* onMouseLeaveTotal={onMouseLeaveTotal} */ className={`total ${state.isSub2 ? " on" : ""
                          }`}
                      >
                        <ul onMouseEnter={onMouseEnter}>
                          <li>
                            <h1 onClick={onClickGoToMypage}>마이현대</h1>
                          </li>
                          <li>
                            <h1>주문배송</h1>
                          </li>
                          <li>
                            <h1>나의 찜</h1>
                          </li>
                          <li>
                            <h2 onClick={() => { navigate('/signup'); }}>회원가입</h2>
                          </li>
                          <li>
                            <h1>나의 쇼핑 혜택</h1>
                            <img src={process.env.PUBLIC_URL + "/img/HSM/intro/icon_my_arr.png"} alt="" />
                          </li>
                          <li>
                            <h1>쿠폰</h1>
                            <img src={process.env.PUBLIC_URL + "/img/HSM/intro/icon_my_arr.png"} alt="" />
                          </li>
                          <li>
                            <h1>H.Point</h1>
                            <img src={process.env.PUBLIC_URL + "/img/HSM/intro/icon_my_arr.png"} alt="" />
                          </li>
                          <li>
                            <h1>더머니</h1>
                            <img src={process.env.PUBLIC_URL + "/img/HSM/intro/icon_my_arr.png"} alt="" />
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link to='/customer'>고객센터</Link>
                    </li>
                    <li onClick={() => navigate("/cart")}>
                      <h4>장바구니</h4>
                      <img src={process.env.PUBLIC_URL + "/img/HSM/intro/team010.png"} alt="" />
                    </li>
                    <li>
                      <h3>바로접속</h3>
                      <button>off</button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="title-down">
                <div className="title-down-left">
                  <ul>
                    <li>
                      <img src={process.env.PUBLIC_URL + "/img/HSM/intro/icon_burger.svg"} alt="" />
                      <div className="main-nav">
                        <div className="burger-main-nav">
                          <nav>
                            <ul>
                              <li >
                                <Link to={"/sub1"} href="!#" className="main-btn" onMouseEnter={() => mouseenter('화장품')} >
                                  화장품  <img src={process.env.PUBLIC_URL + "/img/HSM/intro/icon_my_arr.png"} alt="" />
                                </Link>

                                <div className={`sub ${show === '화장품' ? ' on' : ''}`}>
                                  <div className="container">
                                    <ul>
                                      <li>
                                        <dl>
                                          <dd>스킨케어</dd>
                                          <dd>메이크업</dd>
                                          <dd>바디/헤어케어</dd>
                                          <dd>기능성케어</dd>
                                          <dd>향수/캔들</dd>
                                          <dd>미용기기/용품</dd>
                                          <dd>남성화장품</dd>
                                          <dd>BRAND SHOP</dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <dd>& Other Stories</dd>
                                          <dd>CHANEL BEAUTY</dd>
                                          <dd>Dior</dd>
                                          <dd>아모레퍼시픽</dd>
                                          <dd>SISLEY</dd>
                                          <dd>L'OCCITANE</dd>
                                          <dd>CREED</dd>
                                          <dd>Hermès</dd>
                                          <dd>TOM FORD BEAUTY</dd>
                                          <dd>GUCCI BEAUTY</dd>
                                          <dd>LANCOME</dd>
                                          <dd>GUERLAIN</dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <dd>Augustinus Bader</dd>
                                          <dd>GIVENCHY</dd>
                                          <dd>CLARINS</dd>
                                          <dd>LA MER</dd>
                                          <dd>LA PRAIRIE</dd>
                                          <dd>VALMONT</dd>
                                          <dd>Be CLEAN</dd>
                                          <dd>Oera</dd>
                                          <dd>SK-Ⅱ</dd>
                                          <dd>NARS</dd>
                                          <dd>메종 마르지엘라</dd>
                                          <dd>리바이리</dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <a href="!#">
                                            <img
                                              src={process.env.PUBLIC_URL + "/img/HSM/intro/1.jpg"} alt=""
                                            />
                                          </a>
                                          <dt>니콜라이 NEW</dt>
                                          <dd>
                                            리비에라 버베나 출시!
                                          </dd>
                                        </dl>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <Link to={"/sub2"} href="!#" className="main-btn" onMouseEnter={() => mouseenter('명품/잡화')}>
                                  명품/잡화<img src={process.env.PUBLIC_URL + "/img/HSM/intro/icon_my_arr.png"} alt="" />
                                </Link>
                                <div className={`sub ${show === '명품/잡화' ? ' on' : ''}`}>
                                  <div className="container">
                                    <ul>
                                      <li>
                                        <dl>
                                          <dd>핸드백/가방</dd>
                                          <dd>슈즈</dd>
                                          <dd>지갑/벨트</dd>
                                          <dd>시계</dd>
                                          <dd>악세사리</dd>
                                          <dd>기타잡화</dd>
                                          <dd>웨딩밴드 전문관</dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <dd>Disney</dd>
                                          <dd>HOGAN</dd>
                                          <dd>MaiSon Margiela</dd>
                                          <dd>Mulberry</dd>
                                          <dd>JIMMY CHOO</dd>
                                          <dd>GOLDEN GOOSE</dd>
                                          <dd>TUMI</dd>
                                          <dd>Luxury boutique</dd>
                                          <dd>LONGINES</dd>
                                          <dd>LONGCHAMP</dd>
                                          <dd>루즈앤라운지</dd>
                                          <dd>덱케</dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <dd>Manushka</dd>
                                          <dd>TOTEME</dd>
                                          <dd>매터스</dd>
                                          <dd>A GIFT PAGE</dd>
                                          <dd>vunque</dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <a href="!#">
                                            <img src={process.env.PUBLIC_URL + "/img/HSM/intro/goldendew.jpg"} alt="" />
                                          </a>
                                          <dt>골든듀 Good Luck 34th</dt>
                                          <dd>
                                            UP TO 30%
                                          </dd>
                                        </dl>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <a href="!#" className="main-btn" onMouseEnter={() => mouseenter('여성패션')}>
                                  여성패션<img src={process.env.PUBLIC_URL + "/img/HSM/intro/icon_my_arr.png"} alt="" />
                                </a>
                                <div className={`sub ${show === '여성패션' ? ' on' : ''}`}>
                                  <div className="container">
                                    <ul>
                                      <li>
                                        <dl>
                                          <dd>점퍼/코트/재킷</dd>
                                          <dd>티셔츠/블라우스/니트</dd>
                                          <dd>팬트/스커트</dd>
                                          <dd>여성정장</dd>
                                          <dd>가죽/모피</dd>
                                          <dd>언더웨어/이지웨어</dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <dd>Nanushka</dd>
                                          <dd>COS</dd>
                                          <dd>TOTEME</dd>
                                          <dd>Rodebjer</dd>
                                          <dd>RALPH LAUREN</dd>
                                          <dd>COLLECTION</dd>
                                          <dd>GLOBAL EDITION</dd>
                                          <dd>TOM GREYHOUND</dd>
                                          <dd>FOURM STUDIO</dd>
                                          <dd>PICK & CHOOSE</dd>
                                          <dd>1423 Naivewater</dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <dd>ADEKUVER</dd>
                                          <dd>0914</dd>
                                          <dd>HAZZYS</dd>
                                          <dd>JAMES PERSE</dd>
                                          <dd>TOMMY HILFIGER</dd>
                                          <dd>JILLSTUART NEW YORK</dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <a href="!#">
                                            <img src={process.env.PUBLIC_URL + "/img/HSM/intro/230531.jpg"} alt="" />
                                          </a>
                                          <dt>a point-colored bag</dt>
                                          <dd>
                                            나만의 포인트로 스타일 완성
                                          </dd>
                                        </dl>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <a href="!#" className="main-btn" onMouseEnter={() => mouseenter('영캐주얼')}>
                                  영캐주얼<img src={process.env.PUBLIC_URL + "/img/HSM/intro/icon_my_arr.png"} alt="" />
                                </a>
                                <div className={`sub ${show === '영캐주얼' ? ' on' : ''}`}>
                                  <div className="container">
                                    <ul>
                                      <li>
                                        <dl>
                                          <dd>티셔츠/셔츠/블라우스</dd>
                                          <dd>카디션/베스트/니트/스웨터</dd>
                                          <dd>팬츠/스커트</dd>
                                          <dd>정장/수트/원피스</dd>
                                          <dd>재킷/코트/점퍼</dd>
                                          <dd>가죽/모띠</dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <dd>&Other Stories</dd>
                                          <dd>FOURM THE STORE</dd>
                                          <dd>ALLSAINTS</dd>
                                          <dd>SISLEY</dd>
                                          <dd>VOV</dd>
                                          <dd>G-CUT</dd>
                                          <dd>SJYP</dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <a href="!#">
                                            <img src={process.env.PUBLIC_URL + "/img/HSM/intro/wonder.jpg"} alt="" />
                                          </a>
                                          <dt>WONDER PLACE</dt>
                                          <dd>
                                            Ordinary holiday x Hello kitty
                                          </dd>
                                        </dl>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <Link to={"/sub5"} href="!#" className="main-btn" onMouseEnter={() => mouseenter('남성패션')}>
                                  남성패션<img src={process.env.PUBLIC_URL + "/img/HSM/intro/icon_my_arr.png"} alt="" />
                                </Link>
                                <div className={`sub ${show === '남성패션' ? ' on' : ''}`}>
                                  <div className="container">
                                    <ul>
                                      <li>
                                        <dl>
                                          <dd>정장/수트</dd>
                                          <dd>재킷/점퍼/코트</dd>
                                          <dd>티셔츠/셔츠/니트/가디건</dd>
                                          <dd>팬츠</dd>
                                          <dd>패션소품</dd>
                                          <dd>캐주얼 의류</dd>
                                          <dd>남성 언더웨어/이지웨어</dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <dd>Nanushka</dd>
                                          <dd>COS</dd>
                                          <dd>ZEGNA</dd>
                                          <dd>폼라운지</dd>
                                          <dd>RALPH LAUREN</dd>
                                          <dd>RRL</dd>
                                          <dd>Purple Label</dd>
                                          <dd>HAZZYS</dd>
                                          <dd>TOMMY HILFIGER</dd>
                                          <dd>SONGZIO</dd>
                                          <dd>Barbour</dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <dd>Paul Smith</dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <a href="!#">
                                            <img src={process.env.PUBLIC_URL + "/img/HSM/intro/V.jpg"} alt="" />
                                          </a>
                                          <dt>남성 여름 맞춤정장 MTM</dt>
                                          <dd>
                                            최대 50% 할인 + 추가 쿠폰
                                          </dd>
                                        </dl>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <Link to={"/sub6"} href="!#" className="main-btn" onMouseEnter={() => mouseenter('진/이지')}>
                                  진/이지<img src={process.env.PUBLIC_URL + "/img/HSM/intro/icon_my_arr.png"} alt="" />
                                </Link>
                                <div className={`sub ${show === '진/이지' ? ' on' : ''}`}>
                                  <div className="container">
                                    <ul>
                                      <li>
                                        <dl>
                                          <dd>티셔츠/셔츠/블라우스</dd>
                                          <dd>원피스/니트/가디건</dd>
                                          <dd>팬츠/스커트</dd>
                                          <dd>데님팬츠</dd>
                                          <dd>자켓/점퍼/코트</dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <dd>PEER</dd>
                                          <dd>TOMMY HILFIGER</dd>
                                          <dd>GUESS</dd>
                                          <dd>Calvin Klein Jeans</dd>
                                          <dd>MLB</dd>
                                          <dd>VERUTUM</dd>
                                          <dd>NERDY</dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <a href="!#">
                                            <img src={process.env.PUBLIC_URL + "/img/HSM/intro/0621_cate.jpg"} alt="" />
                                          </a>
                                          <dt>CASUAL SEASON OFF</dt>
                                          <dd>
                                            게스/ 써스데이아일랜드/ 지오다노外
                                          </dd>
                                        </dl>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <a href="!#" className="main-btn" onMouseEnter={() => mouseenter('유아동/문화')}>
                                  유아동/문화<img src={process.env.PUBLIC_URL + "/img/HSM/intro/icon_my_arr.png"} alt="" />
                                </a>
                                <div className={`sub ${show === '유아동/문화' ? ' on' : ''}`}>
                                  <div className="container">
                                    <ul>
                                      <li>
                                        <dl>
                                          <dd>유아의류</dd>
                                          <dd>아동의류</dd>
                                          <dd>유아동 잡화</dd>
                                          <dd>출산용품/스킨케어</dd>
                                          <dd>발육용품</dd>
                                          <dd>유모차/카시트</dd>
                                          <dd>문구/팬시/소품</dd>
                                          <dd>장난감/취미</dd>
                                          <dd>문화/서비스</dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <dd>RALPH LAUREN</dd>
                                          <dd>TOMMY HILFIGER</dd>
                                          <dd>Pottery Barn Kids</dd>
                                          <dd>스토케</dd>
                                          <dd>봉쁘앙</dd>
                                          <dd>MLB키즈</dd>
                                          <dd>노스페이스키즈</dd>
                                          <dd>Daks Kids</dd>
                                          <dd>Hazzys Kids</dd>
                                          <dd>FILA KIDS</dd>
                                          <dd>Green Friends</dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <dd>더현대닷컴 Culture H</dd>
                                          <dd>[컬쳐H] Gallery H</dd>
                                          <dd>[컬쳐H] Collectable</dd>
                                          <dd>[컬쳐H] Entertaining</dd>
                                          <dd>[컬쳐H] MOKA 현대어린이책미술관</dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <a href="!#">
                                            <img src={process.env.PUBLIC_URL + "/img/HSM/intro/ca_image.jpg"} alt="" />
                                          </a>
                                          <dt>스토케</dt>
                                          <dd>
                                            프리미엄 유아 용품 브랜드
                                          </dd>
                                        </dl>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <a href="!#" className="main-btn" onMouseEnter={() => mouseenter('스포츠/레저')}>
                                  스포츠/레저<img src={process.env.PUBLIC_URL + "/img/HSM/intro/icon_my_arr.png"} alt="" />
                                </a>
                                <div className={`sub ${show === '스포츠/레저' ? ' on' : ''}`}>
                                  <div className="container">
                                    <ul>
                                      <li>
                                        <dl>
                                          <dd>스포츠 의류</dd>
                                          <dd>스포츠 슈즈/잡화</dd>
                                          <dd>등산/아웃도어</dd>
                                          <dd>캠핑용품</dd>
                                          <dd>골프의류/용품</dd>
                                          <dd>수영/스키/보드/시즌</dd>
                                          <dd>BRAND 스포츠/레저</dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <dd>나이키 전문관</dd>
                                          <dd>아디다스 전문관</dd>
                                          <dd>언더아머</dd>
                                          <dd>컨버스</dd>
                                          <dd>파리게이츠</dd>
                                          <dd>파타고니아</dd>
                                          <dd>아크테릭스</dd>
                                          <dd>노스페이스</dd>
                                          <dd>디스커버리</dd>
                                          <dd>컬럼비아</dd>
                                          <dd>VICTORINOX</dd>
                                          <dd>보드라이더스</dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <dd>RVCA</dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <a href="!#">
                                            <img src={process.env.PUBLIC_URL + "/img/HSM/intro/260x300_pc.jpg"} alt="" />
                                          </a>
                                          <dt>여름 컬렉션</dt>
                                          <dd>
                                            노스페이스 x 화이트라벨
                                          </dd>
                                        </dl>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <Link to={"/sub9"} className="main-btn" onMouseEnter={() => mouseenter('리빙/가전')}>
                                  리빙/가전<img src={process.env.PUBLIC_URL + "/img/HSM/intro/icon_my_arr.png"} alt="" />
                                </Link>
                                <div className={`sub ${show === '리빙/가전' ? ' on' : ''}`}>
                                  <div className="container">
                                    <ul>
                                      <li>
                                        <dl>
                                          <dd>거실/침실 가구</dd>
                                          <dd>침구/카페트/커튼</dd>
                                          <dd>생활/인테리어</dd>
                                          <dd>바디/욕실용품</dd>
                                          <dd>주방/조리/식기</dd>
                                          <dd>컴퓨터/스마트폰/카메라</dd>
                                          <dd>주방/TV/냉장고/세탁기</dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <dd>지누스</dd>
                                          <dd>Williams Sonoma</dd>
                                          <dd>west elm</dd>
                                          <dd>Pottery Barn</dd>
                                          <dd>Pottery Barn Kids</dd>
                                          <dd>LIVART Online</dd>
                                          <dd>BOSE</dd>
                                          <dd>드롱기</dd>
                                          <dd>스메그</dd>
                                          <dd>제이엘꼬께</dd>
                                          <dd>웨지우드</dd>
                                          <dd>로얄 코펜하겐</dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <dd>LUSH</dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <a href="!#">
                                            <img src={process.env.PUBLIC_URL + "/img/HSM/intro/banner_gnb9.jpg"} alt="" />
                                          </a>
                                          <dt>여름의 순간을 담은 집</dt>
                                          <dd>
                                            TREND STORY
                                          </dd>
                                        </dl>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <Link to={"/sub10"} className="main-btn" onMouseEnter={() => mouseenter('식품')}>
                                  식품<img src={process.env.PUBLIC_URL + "/img/HSM/intro/icon_my_arr.png"} alt="" />
                                </Link>
                                <div className={`sub ${show === '식품' ? ' on' : ''}`}>
                                  <div className="container">
                                    <ul>
                                      <li>
                                        <dl>
                                          <dd>산지스토리관</dd>
                                          <dd>그로서리</dd>
                                          <dd>디저트</dd>
                                          <dd>차/커피/음료</dd>
                                          <dd>건강식품/홍삼</dd>
                                          <dd>기프티콘</dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <dd>정관장</dd>
                                          <dd>세노비스</dd>
                                          <dd>GNC</dd>
                                          <dd>명인명촌</dd>
                                          <dd>오설록</dd>
                                          <dd>쌍계명차</dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <a href="!#">
                                            <img src={process.env.PUBLIC_URL + "/img/HSM/intro/05_category_260x300.jpg"} alt="" />
                                          </a>
                                          <dt>여름 필수 건강 케어</dt>
                                          <dd>
                                            엔바이탈
                                          </dd>
                                        </dl>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <a href="!#" className="main-btn" onMouseEnter={() => mouseenter('반려동물')}>
                                  반려동물<img src={process.env.PUBLIC_URL + "/img/HSM/intro/icon_my_arr.png"} alt="" />
                                </a>
                                <div className={`sub ${show === '반려동물' ? ' on' : ''}`}>
                                  <div className="container">
                                    <ul>
                                      <li>
                                        <dl>
                                          <dd>THE PET</dd>
                                          <dd>티셔츠</dd>
                                          <dd>아우터</dd>
                                          <dd>드레스</dd>
                                          <dd>올인원</dd>
                                          <dd>Acc</dd>
                                          <dd>리빙</dd>
                                          <dd>케어</dd>
                                          <dd>푸드</dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <dd>몽슈슈</dd>
                                          <dd>위드토리</dd>
                                          <dd>비쇼네</dd>
                                          <dd>허글앤넬로</dd>
                                          <dd>코코스퀘어</dd>
                                          <dd>코니도기</dd>
                                          <dd>펫컴</dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                          <dd></dd>
                                        </dl>
                                      </li>
                                      <li>
                                        <dl>
                                          <a href="!#">
                                            <img src={process.env.PUBLIC_URL + "/img/HSM/intro/sssss.jpg"} alt="" />
                                          </a>
                                          <dt>펫팸족이라면 주목!</dt>
                                          <dd>
                                            프리미엄 반려동물 편집샵
                                          </dd>
                                        </dl>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </li>
                    <li onMouseLeave={onMouseLeaveGift}>
                      <h1 onMouseEnter={onMouseEnterGift}>Gift</h1>
                      <div
                        onMouseLeave={onMouseLeaveGift}
                        className={`title-down-left-sub1${isHover ? " on" : ""
                          }`}
                      >
                        <ul>
                          <li>
                            <a href="!#">
                              <img src={process.env.PUBLIC_URL + "/img/HSM/intro/team022.jpg"} alt="" />
                            </a>
                            <h3>위시리스트</h3>
                            <h4>모두가 원하는 선물</h4>
                          </li>
                          <li>
                            <a href="!#">
                              <img src={process.env.PUBLIC_URL + "/img/HSM/intro/team023.jpg"} alt="" />
                            </a>
                            <h3>패션&스타일</h3>
                            <h4>감각적인 스타일링</h4>
                          </li>
                          <li>
                            <a href="!#">
                              <img src={process.env.PUBLIC_URL + "/img/HSM/intro/team024.jpg"} alt="" />
                            </a>
                            <h3>뷰티풀샵</h3>
                            <h4>아름다움을 선물해요</h4>
                          </li>
                          <li>
                            <a href="!#">
                              <img src={process.env.PUBLIC_URL + "/img/HSM/intro/team025.jpg"} alt="" />
                            </a>
                            <h3>출산&키즈</h3>
                            <h4>우리 아이, 조카를 위한 선물</h4>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h2>New</h2>
                        <div className="title-down-left-sub2">
                          <ul>
                            <li>
                              <a href="!#">
                                <img src={process.env.PUBLIC_URL + "/img/HSM/intro/team026.jpg"} alt="" />
                              </a>
                              <h3>
                                Travel in TOTEME <br />
                                한층 정제된 여름 휴양지 룩을 만나보세요.
                              </h3>
                            </li>
                            <li>
                              <a href="!#">
                                <img src={process.env.PUBLIC_URL + "/img/HSM/intro/team027.jfif"} alt="" />
                              </a>
                              <h3>TOTEME</h3>
                              <h4>니트탑</h4>
                              <h5>730,000원</h5>
                            </li>
                            <li>
                              <a href="!#">
                                <img src={process.env.PUBLIC_URL + "/img/HSM/intro/team028.jfif"} alt="" />
                              </a>
                              <h3>TOTEME</h3>
                              <h4>토트백</h4>
                              <h5>1,040,000원</h5>
                            </li>
                            <li>
                              <a href="!#">
                                <img src={process.env.PUBLIC_URL + "/img/HSM/intro/team029.jfif"} alt="" />
                              </a>
                              <h3>TOTEME</h3>
                              <h4>플립플랍</h4>
                              <h5>520,000원</h5>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h3>Store In</h3>
                    </li>
                    <li>
                      <h4>Show-Room</h4>
                    </li>
                    <li>
                      <h5>Re.Green</h5>
                    </li>
                    <li>
                      <p>Event</p>
                    </li>
                  </ul>
                </div>

                <div className="title-down-right">
                  <Link to={process.env.PUBLIC_URL + "./intro"}><img src={process.env.PUBLIC_URL + "/img/HSM/intro/team037.jpg"} alt="" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export function CartHeaderComponent() {
  return (
    <>
      <header id='cartHeader'>
        <div className="container">
          <div className="logo">
            <h1>
              <Link to={"/"}>
                <img src={process.env.PUBLIC_URL + "/CYS/img/header/thehyundai_header_cart1.png"} alt="" />
              </Link>
            </h1>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}