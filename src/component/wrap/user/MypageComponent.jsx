import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import MemberUpdateComponent from './MemberUpdateComponent';
import MypageIntroComponent from './MypageIntroComponent';
import axios from 'axios';
import './scss/mypage.scss';
function MypageComponent(props) {
    //바인딩할 데이터 모음
    const [member, setMember] = React.useState({
        아이디: '',
        이름: '',
        생년월일: '',
        핸드폰: '',
        주소1: '',
        주소2: '',
        약관: '',
        가입일: ''
    })

    //로그인한 아이디 axios로 전달
    React.useEffect(() => {
        axios({
            url: 'https://adlaylatte.duckdns.org/portfolio/team_project2/hyundai_user/updateAction.jsp',
            method: 'POST',
            data: {},
            params: {
                "user_id": sessionStorage.getItem('user_id')
            }
        })
            .then((res) => {
                console.log(res.data);
                const result = res.data;
                try {
                    if (sessionStorage.getItem('user_id') != null) {
                        setMember({
                            ...member,
                            아이디: result.아이디,
                            이름: result.이름,
                            생년월일: result.생년월일,
                            핸드폰: result.핸드폰,
                            주소1: result.주소1,
                            주소2: result.주소2,
                            약관: result.약관내용,
                            가입일: result.가입일
                        })
                    }

                } catch (error) {
                    console.log(error);
                }
            })
            .catch((err) => {
                console.log(`AXIOS 실패! ${err} `)
            });
    }, []);


    return (
        <main id="mypage">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <ul className='mypage-header'>
                            <li><a href="!#">Home</a></li>
                            <li><a href="!#">마이현대</a></li>
                        </ul>
                    </div>
                    <div className="content">
                        <div className="leftarea">
                            <div className="title-box">
                                <h2>마이현대</h2>
                                <h3>MY HYUNDAI</h3>
                                <hr />
                            </div>
                            <div className="left-menu-box">
                                <ul className='parent-menu-box'>
                                    <li>
                                        <h4>주문현황</h4>
                                        <ul className="children-menu-box">
                                            <li><a href="!#">주문확인/배송조회</a></li>
                                            <li><a href="!#">취소/반품/교환</a></li>
                                            <li><a href="!#">영수증/세금계산서</a></li>
                                            <li><a href="!#">스토어픽 관리</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h4>쇼핑통장</h4>
                                        <ul className="children-menu-box">
                                            <li><a href="!#">쿠폰</a></li>
                                            <li><a href="!#">H.Point</a></li>
                                            <li><a href="!#">더머니</a></li>
                                            <li><a href="!#">예치금</a></li>
                                            <li><a href="!#">클럽</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h4>쇼핑백</h4>
                                        <ul className="children-menu-box">
                                            <li><a href="!#">상품평 관리</a></li>
                                            <li><a href="!#">상품 Q&A</a></li>
                                            <li><a href="!#">1:1 문의내역</a></li>
                                            <li><a href="!#">이벤트 응모/당첨</a></li>
                                            <li><a href="!#">선물함</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h4>주문현황</h4>
                                        <ul className="children-menu-box">
                                            <li><a href="!#">주문확인/배송조회</a></li>
                                            <li><a href="!#">취소/반품/교환</a></li>
                                            <li><a href="!#">영수증/세금계산서</a></li>
                                            <li><a href="!#">스토어픽 관리</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h4>나의 정보</h4>
                                        <ul className="children-menu-box">
                                            <li><Link to="/mypageMain/memberupdate">회원정보변경</Link></li>
                                            <li><a href="!#">배송지 관리</a></li>
                                            <li><a href="!#">전용계좌/현금영수증 관리</a></li>
                                            <li><a href="!#">개인계정 연결관리</a></li>
                                            <li><a href="!#">로그인 기록</a></li>
                                            <li><a href="!#">개인정보 이용현황</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="rightarea">
                            <MypageIntroComponent member={member} />
                            <MemberUpdateComponent member={member} />

                        </div>


                    </div>
                </div>
            </div>
        </main>
    );
}

export default MypageComponent;