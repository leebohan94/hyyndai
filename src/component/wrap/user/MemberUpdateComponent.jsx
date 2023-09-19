import React from 'react';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';
import './scss/member_update.scss';
function MemberUpdateComponent({ member }) {
    //비밀번호 변경박스 열기 변수
    const [isPwOn, setIsPwOn] = React.useState(false);




    const [state, setState] = React.useState({
        기존비밀번호: '',
        비밀번호: '',
        비밀번호확인: '',
        아이디: sessionStorage.getItem('user_id'),
    })


    //비밀번호 변경 기능
    const onPwChange = (e) => {
        e.preventDefault();
        axios({
            // 이름, 생년월일, 핸드폰번호를 전송한다.
            url: 'https://adlaylatte.duckdns.org/portfolio/team_project2/hyundai_user/pwUpdateAction.jsp',
            method: 'POST',
            data: {},
            params: {
                "old_user_pw": state.기존비밀번호,
                "user_pw": state.비밀번호,
                "user_id": state.아이디,
            }
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                const result = res.data;
                try {
                    if (result === 1) {
                        alert('변경 성공');
                        setIsPwOn(false);
                    }
                } catch (error) {
                    console.log(error);
                }
            })
            .catch((err) => {
                console.log(`AXIOS 실패! ${err} `)
            });
    }
    return (
        <>
            <section id="memberUpdate">
                <div className="container">
                    <div className="title"></div>
                    <div className="content">
                        {/*                     <div className="input-box">
                        <ul>
                            <li>
                                <label htmlFor="">더현대닷컴 아이디</label>
                                <span>변수아이디</span>
                            </li>
                            <li>
                                <label htmlFor="">
                                    더현대닷컴 비밀번호
                                    <input type="password" />
                                </label>
                            </li>
                        </ul>
                    </div>
                    <button type="submit">확인</button> */}
                        {
                            <div className="update-box">
                                <div className="title-box">
                                    <h3>회원정보</h3>
                                </div>
                                <div className="info-box">
                                    <ul>
                                        <li>
                                            <span className="title">아이디</span>
                                            <span className="information"> {member.아이디}</span>
                                        </li>
                                        <li>
                                            <span className="title">이름</span>
                                            <span className="information">{member.이름}</span>
                                        </li>
                                        <li className='pw-box'>
                                            <span className="title">비밀번호</span>
                                            {!isPwOn && <button className='pwon-btn' onClick={() => { setIsPwOn(true) }}>변경하기</button>}

                                            {isPwOn
                                                &&
                                                (<div>
                                                    <h4>비밀번호 변경</h4>
                                                    <button className='close-btn' onClick={() => { setIsPwOn(false) }}>닫기버튼</button>
                                                    <form action="" onSubmit={onPwChange}>
                                                        <input type="password" placeholder='기존 비밀번호' onChange={(e) => { setState({ ...state, 기존비밀번호: e.target.value }) }} value={state.기존비밀번호} />
                                                        <input type="password" placeholder='새 비밀번호' onChange={(e) => { setState({ ...state, 비밀번호: e.target.value }) }} value={state.비밀번호} />
                                                        <input type="password" placeholder='비밀번호 확인' onChange={(e) => { setState({ ...state, 비밀번호확인: e.target.value }) }} value={state.비밀번호확인} />
                                                        <p>* 8~30자 이내로 영문자, 숫자 특수문자 중 2가지 이상 포함</p>
                                                        <button type="submit">확인</button>
                                                    </form>
                                                </div>)
                                            }

                                        </li>

                                        <li>
                                            <span className="title">생년월일</span>
                                            <span className="information">{member.생년월일}</span>
                                        </li>
                                        <li>
                                            <span className="title">핸드폰 번호</span>
                                            <span className="information">{member.핸드폰}</span>
                                        </li>
                                        <li>
                                            <span className="title">더현대닷컴 마케팅정보<br /> 수신 동의 <strong>[선택]</strong></span>
                                            <span className="information">
                                                <input type="checkbox" name="optinal-agree" id="" />SMS/알림톡
                                                <input type="checkbox" name="optinal-agree" id="" />전화상담
                                                <input type="checkbox" name="optinal-agree" id="" />이메일
                                            </span>
                                        </li>
                                    </ul>
                                    <button className='submit-btn'>확인</button>

                                    <div className="delete-box">
                                        <p>탈퇴를 원하시면 우측의 회원탈퇴 버튼을 눌러주세요.</p>
                                        <Link to="/mypageMain/memberDelete">회원탈퇴</Link>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>


                </div>
            </section>
            <Outlet />
        </>
    );
}

export default MemberUpdateComponent;