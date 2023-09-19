import React from 'react';
import './scss/fastMenu.scss';

export default function FastMenuComponent () {
    // const [isCol1, setIsCol1] = React.useState([false,false,false,false,false]);

    // const onClickCol1=(e, n)=>{
    //     e.preventDefault();
    //     if(isCol1[n] === true){
    //         isCol1[n] = false;
    //     }
    //     else{
    //         isCol1[n] = true;
    //     }
    // }

    const [isCol1, setIsCol1] = React.useState({});

    const onClickCol1=(e, n)=>{
        e.preventDefault();
        setIsCol1((hiru)=>({
            [n]:!hiru[n]
        }))
    }
    
    // React.useEffect(()=>{
    // },[]);
    return (
        <div id='fast_menu'>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="first">
                            <div className="first-top">
                                <h1>빠른메뉴</h1>
                            </div>
                            <div className="first-middle">
                                <ul>
                                    <li>
                                        <figure>
                                            <img src={process.env.PUBLIC_URL+"/img/HSM/notice/fast_menu1.png"} alt="" />
                                        </figure>
                                        <h2>ID/PW 찾기</h2>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src={process.env.PUBLIC_URL+"/img/HSM/notice/fast_menu1.png"} alt="" />
                                        </figure>
                                        <h2>회원정보변경</h2>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src={process.env.PUBLIC_URL+"/img/HSM/notice/fast_menu1.png"} alt="" />
                                        </figure>
                                        <h2>주문/배송 조회</h2>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src={process.env.PUBLIC_URL+"/img/HSM/notice/fast_menu1.png"} alt="" />
                                        </figure>
                                        <h2>취소/반품/교환</h2>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src={process.env.PUBLIC_URL+"/img/HSM/notice/fast_menu1.png"} alt="" />
                                        </figure>
                                        <h2>등급혜택</h2>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src={process.env.PUBLIC_URL+"/img/HSM/notice/fast_menu1.png"} alt="" />
                                        </figure>
                                        <h2>1:1 문의하기</h2>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="second">
                            <ul>
                                <li>
                                    <label htmlFor="userAsk">자주 묻는 질문</label><input type="text" name='user_ask' id='userAsk' placeholder='궁금한 사항을 입력해 주세요.' /> 
                                    <button><i></i><h1>검색</h1></button>
                                </li>
                                <li>
                                    <ul>
                                        <li><h2>추천 검색어</h2></li>
                                        <li><button>회원가입</button></li>
                                        <li><button>주문확인</button></li>
                                        <li><button>스토어픽</button></li>
                                        <li><button>배송비</button></li>
                                        <li><button>건의사항</button></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="third">
                            <h1>많이 묻는 질문 TOP5</h1>
                            <div className="third-box">
                                <ul>
                                    <li className={`${isCol1[0] ? 'on':''}`} onClick={(e)=>onClickCol1(e,0)}>
                                        <h5>Q1</h5>
                                        <h4>매장에서 직접 반품을 할 수 있나요?</h4>
                                    </li>
                                    <ul className={`colview ${isCol1[0] ? ' on':''}`}>
                                        <li>스토어픽으로 주문한 상품만 가능합니다.</li>
                                        <li>&nbsp;</li>
                                        <li>택배 배송 상품의 경우 온라인으로만 접수 가능하며,</li>
                                        <li>[마이현대 &gt; 주문확인/배송조회] 에서 신청하실 수 있습니다.</li>
                                        <span>A</span>
                                    </ul>
                                    <li className={`${isCol1[1] ? 'on':''}`} onClick={(e)=>onClickCol1(e,1)}>
                                        <h5>Q2</h5>
                                        <h4>매장에서 직접 교환을 할 수 있나요?</h4>
                                    </li>
                                    <ul className={`colview ${isCol1[1] ? ' on':''}`}>
                                        <li>스토어픽으로 주문한 상품만 가능합니다.</li>
                                        <li>&nbsp;</li>
                                        <li>택배 배송 상품의 경우 온라인으로만 접수 가능하며,</li>
                                        <li>[마이현대 &rt; 주문확인/배송조회] 에서 신청하실 수 있습니다.</li>
                                        <span>A</span>
                                    </ul>
                                    <li className={`${isCol1[2] ? 'on':''}`} onClick={(e)=>onClickCol1(e,2)}>
                                        <h5>Q3</h5>
                                        <h4>주문한 상품을 일부 또는 전체 상품 주문취소가 가능한가요?</h4>
                                    </li>
                                    <ul className={`colview ${isCol1[2] ? ' on':''}`}>
                                        <li>네. 상품이 발송되지 않았다면 주문목록에서 일부 혹은 전체 주문취소가 가능합니다.</li>
                                        <li>&nbsp;</li>
                                        <li>단, 일부상품의 경우 취소가 불가할수 있습니다.</li>
                                        <li>취소가 안될 경우 고객센터 (1800-2233)으로 연락해주세요.</li>
                                        <span>A</span>
                                    </ul>
                                    <li className={`${isCol1[3] ? 'on':''}`} onClick={(e)=>onClickCol1(e,3)}>
                                        <h5>Q4</h5>
                                        <h4>'더머니'란 무엇인가요?</h4>
                                    </li>
                                    <ul className={`colview ${isCol1[3] ? ' on':''}`}>
                                        <li>더현대닷컴에서 적립되는 적립금의 명칭입니다.</li>
                                        <li>적립된 더머니는 더현대닷컴에서 현금처럼 사용하실 수 있습니다.</li>
                                        <span>A</span>
                                    </ul>
                                    <li className={`${isCol1[4] ? 'on':''}`} onClick={(e)=>onClickCol1(e,4)}>
                                        <h5>Q5</h5>
                                        <h4>더현대닷컴의 적립금(더머니)는 어떻게 사용하나요?</h4>
                                    </li>
                                    <ul className={`colview ${isCol1[4] ? ' on':''}`}>
                                        <li>더머니는 더현대닷컴의 적립금으로서 주문결제시 사용 가능하며 사용방법은 아래와 같습니다</li>
                                        <li>&nbsp;</li>
                                        <li>
                                        1. 더머니 1,000원 이상, 1원 단위로 결제수단의 전부 또는 일부로 사용할 수 있다.
                                        <br />
                                        2. 회원이 더머니를 사용할 경우 적립된 순서대로 사용된다.
                                        <br />
                                        3. 더머니 유효기간 내에 사용하여야 하며, 유효기간이 경과한 해당 더머니는 자동소멸된다.
                                        <br />
                                        4. 더머니의 유효기간은 지급할 때 별도의 유효기간을 사전고지, 약정한다.
                                        <br />
                                        5. 고객이 사용한 더머니를 현금, 카드 등 타 시재 또는 결제수단으로 환급하지 않는다.
                                        <br />
                                        6. 더머니를 사용하여 구매한 상품을 주문취소 또는 반품하는 경우 최초 적립일을 기준으로 더머니의 유효기간이 경과되지 않는 한 회원에게 환원한다.
                                        <br />
                                        7. 더머니를 적립받은 사유가 고객의 변심 또는 귀책에 위해 취소되는 경우 더머니는 반환처리되며, 만약 해당시점에 반환할 더머니가 회원자산에 남아있지 않는 경우 동일한 액면금액을 현금, 카드 등 타 시재 또는 결재수단으로 지급하여야 한다.
                                        </li>
                                        <span>A</span>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                        <div className="fourth">
                            <dl>
                                <dt>회원</dt>
                                <dd>회원가입</dd>
                                <dd>회원정보</dd>
                                <dd>회원혜택</dd>
                                <dd>회원탈퇴</dd>
                            </dl>
                            <dl>
                                <dt>상품</dt>
                                <dd>일반</dd>
                                <dd>상품평</dd>
                            </dl>
                            <dl>
                                <dt>주문/결제</dt>
                                <dd>주문</dd>
                                <dd>결제</dd>
                            </dl>
                            <dl>
                                <dt>배송</dt>
                                <dd>일반</dd>
                                <dd>스토어픽</dd>
                                <dd>해외배송</dd>
                            </dl>
                            <dl>
                                <dt>취소/반품/교환</dt>
                                <dd>취소</dd>
                                <dd>반품</dd>
                                <dd>교환</dd>
                                <dd>환불</dd>
                            </dl>
                            <dl>
                                <dt>혜택/이벤트</dt>
                                <dd>더머니</dd>
                                <dd>예치금</dd>
                                <dd>쿠폰</dd>
                                <dd>이벤트</dd>
                            </dl>
                            <dl>
                                <dt>거래증빙</dt>
                                <dd>현금영수증</dd>
                                <dd>세금계산기</dd>
                                <dd>신용카드</dd>
                                <dd>기타</dd>
                            </dl>
                            <dl>
                                <dt>사이트이용</dt>
                                <dd>사이트이용</dd>
                                <dd>사이트오류</dd>
                            </dl>
                        </div>
                        <div className="fifth">
                            <div className="fifth-left">
                                <ul>
                                    <li>
                                        <h1>공지사항</h1>
                                        <h3>더보기</h3>
                                    </li>
                                    <li><h4>골드 회원 혜택 대상 변경 안내(23/1/1~)</h4></li>
                                    <li><h4>클럽뷰티 혜택 변경 안내 (23/1/1~)</h4></li>
                                    <li><h4>개인정보처리방침 변경 안내</h4></li>
                                    <li><h4>개인정보 처리방침 변경안내</h4></li>
                                    <li><h4>[서비스 안내] 실시간계좌이체 서비스 종료 안내</h4></li>
                                </ul>
                            </div>
                            <div className="fifth-right">
                                <ul>
                                    <li>
                                        <h1>공지사항</h1>
                                        <h3>더보기</h3>
                                    </li>
                                    <li><h4>[6.12~18] PRE-FRESH 댓글 이벤트</h4></li>
                                    <li><h4>[5.1~31] 유아동 멤버십 "클럽맘스" 사전 알림 신청 댓글 이벤트</h4></li>
                                    <li><h4>[6월] 스페이스원 와인리스트 이벤트</h4></li>
                                    <li><h4>[6.1~6.14] 발몽 VIP 체험단 이벤트</h4></li>
                                    <li><h4>[6.12~18] 세스나 전용기 체험 댓글 이벤트</h4></li>
                                </ul>
                            </div>
                        </div>
                        <div className="sixth">
                            <div className="sixth-left">
                                <ul>
                                    <li><h1>쇼핑가이드</h1></li>
                                    <li>
                                        <h2>더현대닷컴을 현명하게
                                    <br />
                                    이용하는 방법</h2>
                                    </li>
                                </ul>
                            </div>
                            <div className="sixth-center">
                                <ul>
                                    <li><h1>비회원 주문/배송조회</h1></li>
                                    <li>
                                    <h2>비회원 쇼핑내역
                                    <br />
                                    조회하기</h2>
                                    </li>
                                </ul>
                            </div>
                            <div className="sixth-right">
                                <h1>현대백화점 지점안내</h1>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>더현대서울</td>
                                            <td>압구정본점</td>
                                            <td>천호점</td>
                                            <td>신촌점</td>
                                        </tr>
                                        <tr>
                                            <td>미아점</td>
                                            <td>중동점</td>
                                            <td>판교점</td>
                                            <td>부산점</td>
                                        </tr>
                                        <tr>
                                            <td>더현대대구</td>
                                            <td>울산점</td>
                                            <td>울산동구점</td>
                                            <td>무역점</td>
                                        </tr>
                                        <tr>
                                            <td>목동점</td>
                                            <td>킨텍스</td>
                                            <td>충청점</td>
                                            <td>디큐브시티</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

