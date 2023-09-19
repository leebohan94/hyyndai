import React from 'react';
import './scss/guerlain.scss';
export default function ProductDetailComponent() {

    const tabBtn1 = React.useRef();
    const tabBtn2 = React.useRef();
    const tabBtn3 = React.useRef();
    const tabBtn4 = React.useRef();
    const [icon1, setIcon1] = React.useState(false);
    const [icon2, setIcon2] = React.useState(false);
    const [infoImg, setInfoImg] = React.useState(1);
    const [isSub, setIsSub] = React.useState(false);
    const [local, setLocal] = React.useState();

    // 상품데이터
    const [product, setProduct] = React.useState({});
    // 상품 헤더이미지
    const [headerImg, setHeaderImg] = React.useState([]);
    // 상품 상세이미지
    const [productDetailImg, setProductDetailImg] = React.useState([]);
    // 상품 옵션
    const [productOption, setProductOption] = React.useState([]);

    const [selectedValues, setSelectedValues] = React.useState([]);
    const [isCart, setIsCart] = React.useState(false);

    const [option, setOption] = React.useState([]);
    const [cnt, setCnt] = React.useState();

    const onClickSaveCart = (e) => {
        e.preventDefault();
        let obj = {
            ...product,
        }
        let arr = [];
        if (localStorage.getItem("CARTPRODUCT") === null) {
            arr = [obj]
        }
        else {
            arr = JSON.parse(localStorage.getItem("CARTPRODUCT"));
            arr = [obj, ...arr]
        }
        localStorage.setItem("CARTPRODUCT", JSON.stringify(arr));
        if (window.confirm("상품이 장바구니에 담겼습니다.\n 장바구니로 이동하시겠습니까?") === true) {
            window.location.pathname = "/cart";
        }
    }

    // 페이지 상단의 option 선택 onChange 이벤트
    const onChangeSelectChange = (event) => {
        const { value } = event.target;
        if (selectedValues.includes(value) === false) {
            setSelectedValues((prevSelectedValues) => [...prevSelectedValues, value]);
        }
        else {
            alert("이미 선택하신 상품입니다.");
        }
    };

    // sticky로 따라오는 option의 onClick 이벤트
    const onClickSelectChange = (e, value) => {
        e.preventDefault();

        console.log(value);
        console.log(selectedValues.includes(value));
        if (selectedValues.includes(value) === false) {
            setSelectedValues((prevSelectedValues) => [...prevSelectedValues, value]);
        }
        else {
            alert("이미 선택하신 상품입니다.");
        }
        setIsSub(false);

    }

    const onClickDelete = (e, value) => {
        e.preventDefault();
        setSelectedValues((prevSelectedValues) =>
            prevSelectedValues.filter((selectedValue) => selectedValue !== value)
        );
    };

    // 무이자 오른쪽 클릭버튼
    const onClickIcon1 = (e) => {
        e.preventDefault();
        setIcon1(true);
        console.log(icon1);
        if (icon2 === true) {
            setIcon2(false);
        }
    }
    const onClickClose1 = (e) => {
        e.preventDefault();
        // alert("닫기");
        setIcon1(false);
    }

    // 적립금 오른쪽 클릭버튼
    const onClickIcon2 = (e) => {
        e.preventDefault();
        setIcon2(true);
        if (icon1 === true) {
            setIcon1(false);
        }
    }
    const onClickClose2 = (e) => {
        e.preventDefault();
        setIcon2(false);
    }

    const onMouseEnterInfoImg = (n) => {
        setInfoImg(n);
        console.log(n);
    }

    const onClickInfoImg = (e, n) => {
        e.preventDefault();
        setInfoImg(n);
    }

    const onClickSelectSub = (e) => {
        e.preventDefault();
        setIsSub(!isSub);
    }

    const onClickBtn1 = (e) => {
        e.preventDefault();
        tabBtn1.current.scrollIntoView();
    }
    const onClickBtn2 = (e) => {
        e.preventDefault();
        tabBtn2.current.scrollIntoView();
    }
    const onClickBtn3 = (e) => {
        e.preventDefault();
        tabBtn3.current.scrollIntoView();
    }
    const onClickBtn4 = (e) => {
        e.preventDefault();
        tabBtn4.current.scrollIntoView();
    }


    // 페이지 이동시 로컬스토리지 데이터 저장
    React.useEffect(() => {
        if (localStorage.getItem("VIEWPRODUCTKEY") !== null) {
            let res = JSON.parse(localStorage.getItem("VIEWPRODUCTKEY"));
            let data = res[0];

            setProduct(data);

            let arr = [data];
            setHeaderImg(arr[0].상품헤더이미지);
            setProductDetailImg(arr[0].상품상세이미지);
            setProductOption(arr[0].상품옵션);
            setLocal(arr);
        }
    }, []);

    // React.useEffect(() => {
    //     if (localStorage.getItem("VIEWPRODUCTKEY") !== null) {
    //         let res = JSON.parse(localStorage.getItem("VIEWPRODUCTKEY"));
    //         let data = res[0];
    //         setOption(data);
    //         console.log(data.상품명);
    //     }
    // }, []);

    React.useEffect(() => {
        setOption({
            ...option,

            ...option.상품옵션,
            // 수량: cnt,
            // 총상품금액: Math.round(cnt*(option.정가*(1-option.할인율)))

        })
    }, [cnt]);

    // 개수 증가 함수
    const onClickAdd = (e) => {
        e.preventDefault();
        setCnt(cnt + 1);
        setIsCart(true);
    }
    // 개수 감소 함수
    const onClickDown = (e) => {
        e.preventDefault();
        if (cnt <= 1) return;
        setCnt(cnt - 1);
        setIsCart(true);
    }

    return (
        <div id='Guerlain'>
            <div className="container">
                <div className="title"> {/* 왼쪽카테고리메뉴 */}
                    <div className="top-title">
                        <ul>
                            <li>
                                <h1>Home</h1>
                            </li>
                            <li>
                                <img className='home' src={process.env.PUBLIC_URL + "/KHB/img/sub/sub914.png"} alt="" />
                            </li>
                            <li>
                                <div className='hover-menu'>
                                    Re.Green
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
                                </div>
                            </li>
                            <li>
                                <a href="!#">
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/sub/icon_down_new.png"} alt="" />
                                </a>
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + "/KHB/img/sub/sub914.png"} alt="" />
                            </li>
                            <li>
                                <h2>Re.Green Main</h2>
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + "/KHB/img/sub/sub914.png"} alt="" />
                            </li>
                            <li>
                                <h2>Cosmetic</h2>
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + "/KHB/img/sub/sub914.png"} alt="" />
                            </li>
                            <li>
                                <h2>[Re.]메이크업(색조)</h2>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="content"> {/* 상품정보시작 */}
                    <div className="first-info">{/* 상품이미지가격정보 */}
                        <div className="left">
                            <div className="info-img-box">
                                {headerImg.map((item, idx) => {
                                    return (
                                        <img className={infoImg === idx + 1 ? "on" : ""} src={process.env.PUBLIC_URL + `/img/HSM/${item}.jpg`} alt="" />
                                    )
                                })}
                                {/* <img className={infoImg === 2 ? "on" : ""} src={process.env.PUBLIC_URL+"/KHB/img/detailSub/scrollimg2.jpg"} alt="" />
                                <img className={infoImg === 3 ? "on" : ""} src={process.env.PUBLIC_URL+"/KHB/img/detailSub/scrollimg3.jpg"} alt="" />
                                <img className={infoImg === 4 ? "on" : ""} src={process.env.PUBLIC_URL+"/KHB/img/detailSub/scrollimg4.jpg"} alt="" />
                                <img className={infoImg === 5 ? "on" : ""} src={process.env.PUBLIC_URL+"/KHB/img/detailSub/scrollimg5.jpg"} alt="" />
                                <img className={infoImg === 6 ? "on" : ""} src={process.env.PUBLIC_URL+"/KHB/img/detailSub/scrollimg6.jpg"} alt="" />
                                <img className={infoImg === 7 ? "on" : ""} src={process.env.PUBLIC_URL+"/KHB/img/detailSub/scrollimg7.jpg"} alt="" />
                                <img className={infoImg === 8 ? "on" : ""} src={process.env.PUBLIC_URL+"/KHB/img/detailSub/scrollimg8.jpg"} alt="" />
                                <img className={infoImg === 9 ? "on" : ""} src={process.env.PUBLIC_URL+"/KHB/img/detailSub/scrollimg9.jpg"} alt="" /> */}
                            </div>
                            <div className="sub-img">
                                {headerImg.map((item, idx) => {
                                    return (
                                        <a key={`subimg-${idx}`} onClick={(e) => onClickInfoImg(e, idx + 1)} onMouseEnter={() => onMouseEnterInfoImg(idx + 1)} href="!#"><img src={process.env.PUBLIC_URL + `/img/HSM/${item}.jpg`} alt="" /></a>
                                    )
                                })}
                                {/* <a onClick={(e) => onClickInfoImg(e, 2)} onMouseEnter={() => onMouseEnterInfoImg(2)} href="!#"><img src={process.env.PUBLIC_URL+"/KHB/img/detailSub/subimg1.jpg"} alt="" /></a>
                                <a onClick={(e) => onClickInfoImg(e, 3)} onMouseEnter={() => onMouseEnterInfoImg(3)} href="!#"><img src={process.env.PUBLIC_URL+"/KHB/img/detailSub/subimg2.jpg"} alt="" /></a>
                                <a onClick={(e) => onClickInfoImg(e, 4)} onMouseEnter={() => onMouseEnterInfoImg(4)} href="!#"><img src={process.env.PUBLIC_URL+"/KHB/img/detailSub/subimg3.jpg"} alt="" /></a>
                                <a onClick={(e) => onClickInfoImg(e, 5)} onMouseEnter={() => onMouseEnterInfoImg(5)} href="!#"><img src={process.env.PUBLIC_URL+"/KHB/img/detailSub/subimg4.jpg"} alt="" /></a>
                                <a onClick={(e) => onClickInfoImg(e, 6)} onMouseEnter={() => onMouseEnterInfoImg(6)} href="!#"><img src={process.env.PUBLIC_URL+"/KHB/img/detailSub/subimg5.jpg"} alt="" /></a>
                                <a onClick={(e) => onClickInfoImg(e, 7)} onMouseEnter={() => onMouseEnterInfoImg(7)} href="!#"><img src={process.env.PUBLIC_URL+"/KHB/img/detailSub/subimg6.jpg"} alt="" /></a>
                                <a onClick={(e) => onClickInfoImg(e, 8)} onMouseEnter={() => onMouseEnterInfoImg(8)} href="!#"><img src={process.env.PUBLIC_URL+"/KHB/img/detailSub/subimg7.jpg"} alt="" /></a>
                                <a onClick={(e) => onClickInfoImg(e, 9)} onMouseEnter={() => onMouseEnterInfoImg(9)} href="!#"><img src={process.env.PUBLIC_URL+"/KHB/img/detailSub/subimg8.jpg"} alt="" /></a> */}
                            </div>
                            <div className="satisfy">
                                만족도
                                <span>4.9</span>
                                점
                                <i>/</i>
                                상품평
                                <span>38</span>
                                건
                            </div>
                            <div className="product-code">
                                <div className="code">
                                    <p>상품코드 :<strong>{product.제품코드}</strong></p>
                                    <a href="!#">복사</a>
                                </div>
                                <div className="button">
                                    <div className="btnL">
                                        <a href="!#">
                                            <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/ic_heart.png"} alt="" />
                                            <p>찜</p>
                                        </a>
                                    </div>
                                    <div className="btnR">
                                        <a href="!#">
                                            <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/ic_share.png"} alt="" />
                                            <p>공유</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="logo">
                                <a href="!#"><img src={process.env.PUBLIC_URL + `/img/HSM/${product.상품로고이미지}.jpg`} alt="" /><i></i></a>
                                <p>판교점</p>
                            </div>
                            <div className="product-name">
                                <h3>{product.상품명}</h3>
                                <h1>{Number(product.정가).toLocaleString("ko-KR")}<p>원</p></h1>
                            </div>
                            <ul className='card-benebit'>
                                <li>
                                    <p>카드 혜택</p>
                                    <em>현대백화점카드5%</em>
                                </li>
                                <li>
                                    <p>무이자<a onClick={onClickIcon1} href="!#"><i ></i></a></p>
                                    <em>최대 6개월 (5만원 이상 결제시)</em>
                                    <div className={`muija-icon-content ${icon1 ? " on" : ""}`}> {/* 무이자아이콘버튼 */}
                                        <div className="info">
                                            <div className="row1">
                                                <h5>무이자 할부 안내</h5>
                                                <a onClick={onClickClose1} href="!#">
                                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/ic_x.png"} alt="" />
                                                </a>
                                            </div>
                                            <div className="row2">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>대상 카드</th>
                                                            <th>카드 결제금액</th>
                                                            <th>할부 개월 수(최대)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>현대백화점 카드</td>
                                                            <td>5만원 이상 결제시</td>
                                                            <td>3개월</td>
                                                        </tr>
                                                        <tr>
                                                            <td>KB국민카드</td>
                                                            <td>5만원 이상 결제시</td>
                                                            <td>3개월</td>
                                                        </tr>
                                                        <tr>
                                                            <td>삼성카드</td>
                                                            <td>5만원 이상 결제시</td>
                                                            <td>2개월</td>
                                                        </tr>
                                                        <tr>
                                                            <td>현대카드</td>
                                                            <td>5만원 이상 결제시</td>
                                                            <td>3개월</td>
                                                        </tr>
                                                        <tr>
                                                            <td>신한카드</td>
                                                            <td>5만원 이상 결제시</td>
                                                            <td>6개월</td>
                                                        </tr>
                                                        <tr>
                                                            <td>BC카드</td>
                                                            <td>5만원 이상 결제시</td>
                                                            <td>6개월</td>
                                                        </tr>
                                                        <tr>
                                                            <td>NH농협카드</td>
                                                            <td>5만원 이상 결제시</td>
                                                            <td>4개월</td>
                                                        </tr>
                                                        <tr>
                                                            <td>롯데카드</td>
                                                            <td>5만원 이상 결제시</td>
                                                            <td>6개월</td>
                                                        </tr>
                                                        <tr>
                                                            <td>KEB하나카드</td>
                                                            <td>5만원 이상 결제시</td>
                                                            <td>6개월</td>
                                                        </tr>
                                                        <tr>
                                                            <td>은련</td>
                                                            <td>5만원 이상 결제시</td>
                                                            <td>6개월</td>
                                                        </tr>
                                                        <tr>
                                                            <td>VISA</td>
                                                            <td>5만원 이상 결제시</td>
                                                            <td>2개월</td>
                                                        </tr>
                                                        <tr>
                                                            <td>MASTER</td>
                                                            <td>5만원 이상 결제시</td>
                                                            <td>2개월</td>
                                                        </tr>
                                                        <tr>
                                                            <td>JCB</td>
                                                            <td>5만원 이상 결제시</td>
                                                            <td>2개월</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="row3">
                                                <ul>
                                                    <li>상품별로 무이자 할부 개월 수가 다릅니다.</li>
                                                    <li>복수 상품 구매 시 높은 할부 개월 수가 적용됩니다.</li>
                                                    <li>법인 및 체크 카드는 제외됩니다.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <p>적립금<a onClick={onClickIcon2} href="!#"><i></i></a></p>
                                    <em>H.Point 90P적립<br />KB제휴카드 결제시 최대 1.5% 추가적립</em>
                                    <div className={`saved-money ${icon2 ? " on" : ""}`}> {/* 적립금아이콘버튼 */}
                                        <div className="txt">
                                            전국 H.Point 제휴사와 제휴가맹점 이용시 포인트를 쌓고
                                            <br />
                                            사용할수 있는 적립형 포인트 입니다.
                                            <br />
                                            유효기간 : 지급일로부터 2년
                                        </div>
                                        <a onClick={onClickClose2} href="!#"><img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/ic_x.png"} alt="" /></a>
                                        <a href="!#">
                                            <button>H.Point란? (상세안내 및 회원가입 바로가기)
                                                <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/ic_right_arrow.png"} alt="" />
                                            </button>
                                        </a>
                                        <em>※ KB제휴카드 결제시 최대 1.5% 추가적립</em>
                                    </div>
                                </li>
                                <li>
                                    <p>배송비</p>
                                    <em>무료배송</em>
                                </li>
                            </ul>
                            <div className="select-box"> {/* 옵션박스 */}
                                <div className="select-click">
                                    <select onChange={onChangeSelectChange} placeholder='옵션을 선택하세요'>
                                        {
                                            productOption.map((item, idx) => {
                                                return (
                                                    <option value={item}>{item}</option>
                                                )
                                            })
                                        }
                                        {/* <option value="value1">{local.상품옵션}</option>
                                        <option value="value2">{local.상품옵션}</option>
                                        <option value="value3">{local.상품옵션}</option> */}
                                    </select>
                                </div>
                            </div>
                            <div className="select-option"> {/* 선택한옵션리스트 */}
                                <ul className='sel-opt-box'>
                                    {
                                        selectedValues.map((item, idx) => {
                                            return (
                                                <li className='sel-opt-wrap'>
                                                    <div className="sel-opt">
                                                        <p className='name'>{item}</p>
                                                        <div className="cnt-box"> {/* cnt증가/감소박스 */}
                                                            <a onClick={(e) => onClickAdd(e)} href="!#" className='cnt-down'>-</a>
                                                            <input className='cnt' type="number" value={cnt} />
                                                            <a onClick={(e) => onClickDown(e)} href="!#" className='cnt-up'>+</a>
                                                        </div>
                                                        <div className="price">{Number(product.정가).toLocaleString("kr-KO")}<span>원</span></div>
                                                        <a href="!#" className='exit' onClick={(e) => onClickDelete(e, item)}><i className='exitimg'></i></a>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="btn-box"> {/* 버튼 */}
                                <button onClick={onClickSaveCart}>장바구니</button>
                                <button><img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/present.png"} alt="" />선물하기</button>
                                <button>바로구매</button>
                            </div>
                        </div>
                    </div>
                    <div className="banner">
                        <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/0701_cbeauty_1120x140.jpg"} alt="" />
                    </div>
                    <div className="other-customer"> {/* 다른 고객님들은 이 상품을 보고 있어요 */}
                        <div className="left">
                            <hr />
                            <div className="title">
                                <h4>다른 고객님들은 이 상품을 보고 있어요</h4>
                            </div>
                            <div className="left-slide">
                                <a href="!#">
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/watcher0.jpg"} alt="" />
                                    <p>49,000원</p>
                                    <p>[지방시] 로즈 퍼펙토 립 밤</p>
                                </a>
                                <a href="!#">
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/watcher1.jpg"} alt="" />
                                    <p>55,000원</p>
                                    <p>[디올] 루즈 디올</p>
                                </a>
                                <a href="!#">
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/watcher2.jpg"} alt="" />
                                    <p>43,000원</p>
                                    <p>바비 브라운 크러쉬드 오일-인퓨즈드 글로스</p>
                                </a>
                                <a href="!#">
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/watcher3.jpg"} alt="" />
                                    <p>49,000</p>
                                    <p>[랑콤] 압솔뤼 루즈 크림 n 드라마 마뜨</p>
                                </a>
                                <a href="!#">
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/watcher4.jpg"} alt="" />
                                    <p>49,000</p>
                                    <p>[디올] 립 맥시마이저 세럼</p>
                                </a>
                                <a href="!#">
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/watcher5.jpg"} alt="" />
                                    <p>55,000</p>
                                    <p>[디올] 루즈 디올 밤</p>
                                </a>
                                <a href="!#">
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/watcher6.jpg"} alt="" />
                                    <p>55,000</p>
                                    <p>[디올] 루즈 디올 포에버 스틱</p>
                                </a>
                                <a href="!#">
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/watcher7.jpg"} alt="" />
                                    <p>49,000</p>
                                    <p>[지방시] 로즈 퍼펙토 리퀴드 립 밤</p>
                                </a>
                                <a href="!#">
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/watcher8.jpg"} alt="" />
                                    <p>55,000</p>
                                    <p>[디올] NEW 디올 어딕트 립스틱</p>
                                </a>
                            </div>
                        </div>
                        <div className="right">
                            <hr />
                            <div className="title">
                                <h4>다른 고객님들이 많이 구매했어요</h4>
                            </div>
                            <div className="right-slide">
                                <a href="!#">
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/purchase0.jpg"} alt="" />
                                    <p>48,000원</p>
                                    <p>[디올] NEW 립 글로우</p>
                                </a>
                                <a href="!#">
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/purchase1.jpg"} alt="" />
                                    <p>55,000원</p>
                                    <p>바비 브라운 [7] 엑스트라 립 틴트 세트 (크러쉬드 미니 립 루비 증정)</p>
                                </a>
                                <a href="!#">
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/watcher1.jpg"} alt="" />
                                    <p>55,000</p>
                                    <p>[디올] 루즈 디올</p>
                                </a>
                                <a href="!#">
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/purchase3.jpg"} alt="" />
                                    <p>228,000원</p>
                                    <p>골든듀 KU컴바인하트 16인치 체인 381600001</p>
                                </a>
                                <a href="!#">
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/purchase4.jpg"} alt="" />
                                    <p>199,000원</p>
                                    <p>폴로 랄프 로렌 여성 코튼 블렌드 숏 슬리브 스웨터(WMPOSWENC020597020)</p>
                                </a>
                                <a href="!#">
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/purchase5.jpg"} alt="" />
                                    <p>55,000원</p>
                                    <p>샤넬 루쥬 알뤼르 잉크 6ml</p>
                                </a>
                                <a href="!#">
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/purchase6.jpg"} alt="" />
                                    <p>33,000</p>
                                    <p>이솝 레저렉션 아로마틱 핸드 밤 75ml</p>
                                </a>
                                <a href="!#">
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/purchase7.jpg"} alt="" />
                                    <p>48,000</p>
                                    <p>[디올] 디올 어딕트 립 글로우 - 백스테이지 홀리데이 에디션</p>
                                </a>
                                <a href="!#">
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/purchase8.jpg"} alt="" />
                                    <p>31,200원</p>
                                    <p>[아디다스/adidas] EG2069 컴포트 플립플랍 COMFORT FLIP FLOP</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="tab"> {/* 상품상세/상품평/q&a/교환 탭 */}
                        <ul>
                            <li className='on'><a onClick={onClickBtn1} href="!#">상품상세</a></li>
                            <li><a onClick={onClickBtn2} href="!#">상품평 <var>38</var></a></li>
                            <li><a onClick={onClickBtn3} href="!#">Q&A <var>3</var></a></li>
                            <li><a onClick={onClickBtn4} href="!#">교환/반품/환불</a></li>
                        </ul>
                    </div>
                    <div ref={tabBtn1} className="tab-content">
                        <div className="product-detail">{/* 상품상세구매/배송안내 */}
                            <div className="conduite"> {/* 구매안내/배송안내 */}
                                <div className="left">
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/prd_buyingguide.png"} alt="" />
                                    <div className="txt">
                                        <h2>구매안내</h2>
                                        <ul>
                                            <li>온라인 전용 브랜드 또는 일부 상품의 경우 인터넷에서만 판매</li>
                                            <li>수령 후 7일 내 교환/반품 신청 가능 (훼손/누락 시 불가)</li>
                                            <li>동일 브랜드 행사라도 점포별 내용이 상이할 수 있으며, <br />브랜드별 사은행사의 경우 타 점포간 상품 구매액 합산 증정 불가</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="right">
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/prdd_buyingguide.png"} alt="" />
                                    <div className="txt">
                                        <h2>배송안내</h2>
                                        <ul>
                                            <li>백화점 매장 3일 이내(주말 및 공휴일 제외) 발송</li>
                                            <li>단, 온라인 전용 브랜드 또는 일부 상품은 브랜드 창고에서 출고</li>
                                            <li>설치/주문제작/해외배송 상품 14일 내 발송</li>
                                            <li>주문 상품 품절/배송지연 예상 시 유선/SMS 안내</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-box">
                                <div className="phone-number">
                                    <p>※ 상품 정보 문의</p>
                                    <em>브랜드 매장 080-343-9500 | 배송/교환/반품/AS문의 : 1800-2233</em>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="scroll-wrap"> {/* 전체스크롤페이지 */}
                        <div className="product-detail-img-box"> {/* 상품상세 */}
                            <div className="left-box">
                                <p>키스키스 비글로우 립밤</p>
                                {
                                    productDetailImg.map((item, idx) => {
                                        return (
                                            <img src={`./img/HSM/${item}.jpg`} alt="" />
                                        )
                                    })
                                }
                                {/* <img src={process.env.PUBLIC_URL+"/KHB/img/detailSub/product_20230526035136.jpg"} alt="" /> */}
                                <p>[전성분]</p>
                                <span>폴리글리세릴-2트라이아이소스테아레이트,피마자씨오일,비스-베헤닐/아이소스테아릴/피토스테릴다이머다이리놀레일다이머다이리놀리에이트,하이드로제네이티드캐스터오일다이머다이리놀레에이트,하이드로제네이티드식물성오일,메틸하이드로제네이티드로지네이트,해바라기씨왁스,비즈왁스,에틸헥실팔미테이트,시어버터,쌀겨왁스,해바라기씨오일,시어버터불검화물,티타늄디옥사이드,카프릴릭/카프릭트라이글리세라이드,폴리하이드록시스테아릭애씨드,향료,프로폴리스추출물,다이아이소스테아릴말레이트,트라이메틸올프로판트라이아이소스테아레이트,꿀,프로판다이올,에틸바닐린,황색5호 레이크,펜타에리스리틸테트라-다이-t-부틸하이드록시하이드로신나메이트,정제수,토코페롤,트라이하이드록시스테아린,아이소스테아릭애씨드,아스코빌팔미테이트,적색223호,적색산화철,폴리글리세릴-3폴리리시놀리에이트,레시틴,적색202호,소듐하이알루로네이트,몬모릴로나이트,흑색산화철,안토시아닌,말토덱스트린,프로필갈레이트,라벤더오일,시트릭애씨드, 성분 목록은 변경될 수 있습니다. 최신 정보는 제품 포장을 참고하시거나 고객상담실로 연락 주시기 바랍니다.</span>
                                <div className="img-box">
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/scrollimg1.jpg"} alt="" />
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/scrollimg2.jpg"} alt="" />
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/scrollimg3.jpg"} alt="" />
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/scrollimg4.jpg"} alt="" />
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/scrollimg5.jpg"} alt="" />
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/scrollimg6.jpg"} alt="" />
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/scrollimg7.jpg"} alt="" />
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/scrollimg8.jpg"} alt="" />
                                    <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/scrollimg9.jpg"} alt="" />
                                </div>
                                <div className="table-box">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>배송비</th>
                                                <td>무료</td>
                                            </tr>
                                            <tr>
                                                <th>평균배송일</th>
                                                <td>1.7일  (2일 이내 60% 이상) 가구/설치/주문제작 제외</td>
                                            </tr>
                                            <tr>
                                                <th>배송지역</th>
                                                <td>전지역 배송 가능</td>
                                            </tr>
                                            <tr>
                                                <th>반품/교환</th>
                                                <td>상품확인 후 환불</td>
                                            </tr>
                                            <tr>
                                                <th>내용물의 용량 또는 중량</th>
                                                <td>3.2g</td>
                                            </tr>
                                            <tr>
                                                <th>제품주요사양<br />피부타입,색상</th>
                                                <td>모든 피부 타입</td>
                                            </tr>
                                            <tr>
                                                <th>사용기한 또는 개봉 후 사용기간</th>
                                                <td>발송일 기준 52개월 이내 제조된 제품으로 발송, 제조일로부터 60개월 이내 사용</td>
                                            </tr>
                                            <tr>
                                                <th>사용방법</th>
                                                <td>입술에 발라줍니다.</td>
                                            </tr>
                                            <tr>
                                                <th>화장품제조업자, 화장품책임판매업자 및 맞춤형 화장품판매업자, 책임판매업자</th>
                                                <td>겔랑/엘브이엠에이치코스메틱(유), 겔랑/엘브이엠에이치코스메틱(유)</td>
                                            </tr>
                                            <tr>
                                                <th>제조국</th>
                                                <td>프랑스</td>
                                            </tr>
                                            <tr>
                                                <th>화장품법에 따라 기재·표시하여야 하는<br />모든 성분</th>
                                                <td>폴리글리세릴-2트라이아이소스테아레이트,피마자씨오일,비스-베헤닐/아이소스테아릴/피토스테릴다이머다이리놀레일다이머다이리놀리에이트,하이드로제네이티드캐스터오일다이머다이리놀레에이트,하이드로제네이티드식물성오일,메틸하이드로제네이티드로지네이트,해바라기씨왁스,비즈왁스,에틸헥실팔미테이트,시어버터,쌀겨왁스,해바라기씨오일,시어버터불검화물,티타늄디옥사이드,카프릴릭/카프릭트라이글리세라이드,폴리하이드록시스테아릭애씨드,향료,프로폴리스추출물,다이아이소스테아릴말레이트,트라이메틸올프로판트라이아이소스테아레이트,꿀,프로판다이올,에틸바닐린,황색5호 레이크,펜타에리스리틸테트라-다이-t-부틸하이드록시하이드로신나메이트,정제수,토코페롤,트라이하이드록시스테아린,아이소스테아릭애씨드,아스코빌팔미테이트,적색223호,적색산화철,폴리글리세릴-3폴리리시놀리에이트,레시틴,적색202호,소듐하이알루로네이트,몬모릴로나이트,흑색산화철,안토시아닌,말토덱스트린,프로필갈레이트,라벤더오일,시트릭애씨드, 성분 목록은 변경될 수 있습니다. 최신 정보는 제품 포장을 참고하시거나 고객상담실로 연락 주시기 바랍니다.</td>
                                            </tr>
                                            <tr>
                                                <th>식품의약품안전처 심사필 유무 (기능성 화장품)</th>
                                                <td>해당없음</td>
                                            </tr>
                                            <tr>
                                                <th>사용시 주의사항</th>
                                                <td>사용 중 피부 문제 발생 시 사용을 중지하고 피부과 전문의와 상담할 것 - 상처가 있는 부위 등의 이상이 있는 부위에는 사용을 금할 것 - 사용 후에는 반드시 마개를 닫아둘 것 - 고온 내지 저온의 장소 및 직사광선이 닿는 곳에는 보관하지 말 것</td>
                                            </tr>
                                            <tr>
                                                <th>품질보증기준</th>
                                                <td>관련 법 및 소비자 분쟁해결 기준에 따름</td>
                                            </tr>
                                            <tr>
                                                <th>소비자상담 관련<br />전화번호</th>
                                                <td>080-343-9500</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="right-box"> {/* 오른쪽스크롤 */}
                                <div className="scroll-content">
                                    <div className="background">
                                        <div onClick={onClickSelectSub} className="select-box">
                                            선택
                                        </div>
                                        {isSub && <ul className='select-sub'>
                                            {
                                                productOption.map((item, idx) => {
                                                    return (
                                                        <li><a onClick={(e) => onClickSelectChange(e, item)} href="!#">{item}</a></li>
                                                    )
                                                })
                                            }
                                        </ul>}
                                        {
                                            selectedValues.map((item, idx) => {
                                                return (
                                                    <div className='cart-box'>
                                                        <p>{item}</p>
                                                        <div className="cnt">
                                                            {cnt}1 개
                                                        </div>
                                                        <div className='price'>{Number(product.정가).toLocaleString("ko-KR")/*  * Number(cnt) */}원</div>
                                                    </div>
                                                )
                                            })
                                        }
                                        <div className="sumprice">
                                            합계<strong>49,000</strong>원
                                        </div>
                                        <div className="btn-box">
                                            <ul>
                                                <a href="!#" onClick={onClickSaveCart}><li className="cart-btn">장바구니</li></a>
                                                <a href="!#"><li className="present-btn"><img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/present.png"} alt="" /> 선물하기</li></a>
                                                <a href="!#"><li className="buy-btn">바로구매</li></a>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-review"> {/* 상품평 */}
                            <div ref={tabBtn2} className="review-container">
                                <div className="review-title"> {/* 별점수 */}
                                    <div className="title-left">
                                        <div className="star">
                                            <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/star_score.png"} alt="" />
                                            <i>4.9</i>
                                        </div>
                                        <p>상품평 작성하고 더머니 받아가세요!</p>
                                    </div>
                                    <div className="title-right">
                                        <a href="!#">
                                            <span>클럽뷰티 가입하고 추가혜택받기</span>
                                            <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/icon_opt_selc_arrow.png"} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="img-box">
                                    <ul>
                                        <li><img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/review0.jpg"} alt="" /></li>
                                        <li><img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/review1.jpg"} alt="" /></li>
                                        <li><img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/review2.jpg"} alt="" /></li>
                                        <li><img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/review3.jpg"} alt="" /></li>
                                        <li><img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/review4.jpg"} alt="" /></li>
                                        <li><img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/review5.jpg"} alt="" /></li>
                                        <li><div>더보기</div></li>
                                    </ul>
                                </div>
                                <div className="total-title">
                                    <div className="left-title">
                                        <p>전체(38)</p>
                                        <p>포토상품평(25)</p>
                                    </div>
                                    <div className="right-title">
                                        <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/icon_filter.png"} alt="" />
                                        필터
                                    </div>
                                </div>
                                <div className="review-list-box">
                                    <ul>
                                        <li>
                                            <div className="top">
                                                <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/little_star.png"} alt="" />
                                                <p>5</p>
                                            </div>
                                            <div className="middle">
                                                <div className="col1">
                                                    <i>409 푸치아 글로우</i>
                                                    <h4><em>한달사용</em>향도 좋고 촉촉하고 부드럽게 바를 수 있어 만족해요~</h4>
                                                </div>
                                                <div className="col2">
                                                    <span>bl***</span>
                                                    <span>2023-06-05</span>
                                                    <h5>신고</h5>
                                                </div>
                                                <div className="col3">
                                                    <button><span>0</span></button>
                                                </div>
                                            </div>
                                            <div className="bottom">

                                            </div>
                                        </li>
                                        <li>
                                            <div className="top">
                                                <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/little_star.png"} alt="" />
                                                <p>5</p>
                                            </div>
                                            <div className="middle">
                                                <div className="col1">
                                                    <i>409 푸치아 글로우</i>
                                                    <h4><em>한달사용</em>향도 좋고 촉촉하고 부드럽게 바를 수 있어 만족해요~</h4>
                                                </div>
                                                <div className="col2">
                                                    <span>bl***</span>
                                                    <span>2023-06-05</span>
                                                    <h5>신고</h5>
                                                </div>
                                                <div className="col3">
                                                    <button><span>0</span></button>
                                                </div>
                                            </div>
                                            <div className="bottom">

                                            </div>
                                        </li>
                                        <li>
                                            <div className="top">
                                                <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/little_star.png"} alt="" />
                                                <p>5</p>
                                            </div>
                                            <div className="middle">
                                                <div className="col1">
                                                    <i>409 푸치아 글로우</i>
                                                    <h4><em>한달사용</em>향도 좋고 촉촉하고 부드럽게 바를 수 있어 만족해요~</h4>
                                                </div>
                                                <div className="col2">
                                                    <span>bl***</span>
                                                    <span>2023-06-05</span>
                                                    <h5>신고</h5>
                                                </div>
                                                <div className="col3">
                                                    <button><span>0</span></button>
                                                </div>
                                            </div>
                                            <div className="bottom">

                                            </div>
                                        </li>
                                        <li>
                                            <div className="top">
                                                <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/little_star.png"} alt="" />
                                                <p>5</p>
                                            </div>
                                            <div className="middle">
                                                <div className="col1">
                                                    <i>409 푸치아 글로우</i>
                                                    <h4><em>한달사용</em>향도 좋고 촉촉하고 부드럽게 바를 수 있어 만족해요~</h4>
                                                </div>
                                                <div className="col2">
                                                    <span>bl***</span>
                                                    <span>2023-06-05</span>
                                                    <h5>신고</h5>
                                                </div>
                                                <div className="col3">
                                                    <button><span>0</span></button>
                                                </div>
                                            </div>
                                            <div className="bottom">

                                            </div>
                                        </li>
                                        <li>
                                            <div className="top">
                                                <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/little_star.png"} alt="" />
                                                <p>5</p>
                                            </div>
                                            <div className="middle">
                                                <div className="col1">
                                                    <i>409 푸치아 글로우</i>
                                                    <h4><em>한달사용</em>향도 좋고 촉촉하고 부드럽게 바를 수 있어 만족해요~</h4>
                                                </div>
                                                <div className="col2">
                                                    <span>bl***</span>
                                                    <span>2023-06-05</span>
                                                    <h5>신고</h5>
                                                </div>
                                                <div className="col3">
                                                    <button><span>0</span></button>
                                                </div>
                                            </div>
                                            <div className="bottom">

                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pagenation">
                                    <ul>
                                        <li><a href="!#">1</a></li>
                                        <li><a href="!#">2</a></li>
                                        <li><a href="!#">3</a></li>
                                        <li><a href="!#"><i></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="QnA"> {/* Q&A */}
                            <div ref={tabBtn3} className="qna-container">
                                <ul>
                                    <li><a href="!#">전체</a></li>
                                    <li><a href="!#">내질문</a></li>
                                </ul>
                                <button>
                                    질문하기
                                </button>
                            </div>
                            <div ref={tabBtn4} className="qna-content">
                                <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/20230704_214350.png"} alt="" />
                                <div className="txt">
                                    <p>비밀글입니다<span>답변완료</span></p>
                                    <h4>2023-06-04<em>me***</em></h4>
                                </div>
                            </div>
                            <div className="qna-content">
                                <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/20230704_214350.png"} alt="" />
                                <div className="txt">
                                    <p>비밀글입니다<span>답변완료</span></p>
                                    <h4>2023-06-04<em>me***</em></h4>
                                </div>
                            </div>
                            <div className="qna-content">
                                <img src={process.env.PUBLIC_URL + "/KHB/img/detailSub/20230704_214350.png"} alt="" />
                                <div className="txt">
                                    <p>비밀글입니다<span>답변완료</span></p>
                                    <h4>2023-06-04<em>me***</em></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

