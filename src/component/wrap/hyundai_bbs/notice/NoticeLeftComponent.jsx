import React from 'react';
import './scss/noticeLeft.scss'

export default function NoticeLeftComponent ({onClickOn, on}) {


    return (
        <div id='noticeLeft'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <ul>
                            <li>
                                <h1>고객센터</h1>
                                <h2>CUSTOMER CENTER</h2>
                            </li>
                        </ul>
                    </div>
                    <div className="line"></div>
                    <div className="left-menu">
                        <ul>
                            <li>
                                <dl className='first-menu'>
                                    <dt>1:1 문의</dt>
                                    <dd>1:1 문의하기</dd>
                                    <dd>1:1 문의내역</dd>
                                </dl>
                            </li>
                            <li>
                                <dl className='second-menu'>
                                    <dt>자주 묻는 질문</dt>
                                    <dd>회원</dd>
                                    <dd>상품</dd>
                                    <dd>주문/결제</dd>
                                    <dd>배송</dd>
                                    <dd>취소/반품/교환</dd>
                                    <dd>혜택/이벤트</dd>
                                    <dd>거래증빙</dd>
                                    <dd>사이트이용</dd>
                                </dl>
                            </li>
                        </ul>
                        <div className="bottom">
                                <ul>
                                    <li onClick={()=>onClickOn('빠른메뉴')} className={on==='빠른메뉴'?'on':''}>빠른메뉴</li>
                                    <li>고객의 의견</li>
                                    <li>비회원 주문/배송조회</li>
                                    <li onClick={()=>onClickOn('공지사항')} className={on==='공지사항'?'on':''}>공지사항</li>
                                    <li>현대백화점 지점안내</li>
                                </ul>
                            </div>
                    </div>
                    <div className="bottom1">
                        <img src={process.env.PUBLIC_URL+"/img/HSM/notice/img_ai_chatbot_service.png"} alt="" />
                        <h1>AI 챗봇</h1>
                    </div>
                    <div className="bottom2">
                        <ul>
                            <li>고객센터</li>
                            <li>1800-2233</li>
                            <li>09:30~21:00</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

