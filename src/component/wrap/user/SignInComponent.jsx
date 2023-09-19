import React from 'react';
import './scss/sign_in.scss';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
function SignInComponent({ onSignInOff }) {

    const navigate = useNavigate();
    const onClickConfirmModalClose = (e) => {
        e.preventDefault();
        onSignInOff(); // 닫기 메서드(함수)를 호출 실행 
    }
    const onSignUp = (e) => {
        e.preventDefault();
        navigate("/signup");
        onSignInOff(); // 닫기 메서드(함수)를 호출 실행 
    }
    const onMoveIdSearch = (e) => {
        e.preventDefault();
        navigate("/idSearch");
        onSignInOff(); // 닫기 메서드(함수)를 호출 실행 
    }
    const onMovePwSearch = (e) => {
        e.preventDefault();
        navigate("/pwSearch");
        onSignInOff(); // 닫기 메서드(함수)를 호출 실행 
    }

    // 아이디, 비밀번호 
    const [state, setState] = React.useState({
        user_id: '',
        user_pw: '',
        isIdError: false,
        isIdMsg: '',
        isPwError: false,
        isPwMsg: ''
    });
    const { user_id, user_pw } = state;

    // 아이디 입력상자
    const onChangeUser_id = (e) => {
        setState({
            ...state,
            user_id: e.target.value
        })
    }

    // 비밀번호 입력상자
    const onChangeUser_pw = (e) => {
        setState({
            ...state,
            user_pw: e.target.value
        })
    }
    // 로그인 구현
    // user_signin_action.jsp
    const onClickLogin = (e) => {

        if (user_id === '') {

        }
        else if (user_pw === '') {

        }
        else {
            axios({
                url: 'https://adlaylatte.duckdns.org/portfolio/team_project2/hyundai_user/signInAction.jsp',
                method: 'POST',
                data: {},
                params: {
                    "user_id": user_id,
                    "user_pw": user_pw
                }
            })
                .then((res) => {
                    if (res.status === 200) {
                        const result = res.data;
                        console.log(res);
                        try {
                            if (result.case === -1) {
                                setState({
                                    ...state,
                                    isIdError: true,
                                    isIdMsg: '틀린 아이디입니다. 다시 입력해주세요'
                                })
                            }
                            else if (result.case === 0) {
                                setState({
                                    ...state,
                                    isPwError: true,
                                    isPwMsg: '틀린 비밀번호입니다. 다시 입력해주세요'
                                })
                            }
                            else {
                                console.log(result);
                                sessionStorage.setItem('user_id', result.아이디);

                                setState({
                                    ...state,
                                    isIdError: false,
                                    isIdMsg: '',
                                    isPwError: false,
                                    isPwMsg: ''
                                })
                                setTimeout(function () {
                                    navigate(`/`);
                                }, 1000);
                            }
                        } catch (error) {
                            console.log(error);
                        }
                    }

                })
                .catch((err) => {
                    console.log(`AXIOS 실패! ${err} `)
                });

        }

    }


    return (
        <main id="signIn">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h1>로그인</h1>
                    </div>
                    <div className="content">
                        <h2>더현대닷컴 회원</h2>
                        <div className="login-box">
                            <div className="input-box">
                                <input type="text" name="user_id" id="userId" placeholder='더현대닷컴 아이디 또는 이메일' onChange={onChangeUser_id} value={user_id} />
                                {state.isIdError ? <p className={`error-msg ${state.isIdError ? ' on' : ''}`}>{state.isIdMsg}</p> : ''}
                                <input type="password" name="user_pw" id="userPw" placeholder='더현대닷컴 비밀번호' onChange={onChangeUser_pw} value={user_pw} />
                                {state.isPwError ? <p className={`error-msg ${state.isPwError ? ' on' : ''}`}>{state.isPwMsg}</p> : ''}
                            </div>
                            <button className='login-btn' onClick={onClickLogin}>로그인</button>
                        </div>
                        <div className="sub-btn-box">
                            <label htmlFor="idSave"><input type="checkbox" name="id-save" id="idSave" />아이디 저장하기</label>
                            <div className="search-btn-box">
                                <a href="!#" onClick={onMoveIdSearch} >아이디 찾기</a>
                                <a href="!#" onClick={onMovePwSearch}>비밀번호 찾기</a>
                            </div>
                        </div>
                        <div className="etc-btn-box">
                            <a href="!#"><img src={process.env.PUBLIC_URL + "/PJH/img/icon/ic_sns.png"} alt="" /></a>
                            <a href="!#"><img src={process.env.PUBLIC_URL + "/PJH/img/icon/ic_sns.png"} alt="" /></a>
                            <a href="!#"><img src={process.env.PUBLIC_URL + "/PJH/img/icon/ic_sns.png"} alt="" /></a>
                            <a href="!#"><img src={process.env.PUBLIC_URL + "/PJH/img/icon/ic_sns.png"} alt="" /></a>
                        </div>
                        <div className="signup-link-box">
                            <a href='!#' onClick={onSignUp}>회원가입</a>
                            <i>|</i>
                            <a href='!#'>비회원 주문조회</a>
                        </div>
                        <div className="close-btn-box">
                            <button className="close-btn" onClick={onClickConfirmModalClose} >닫기</button>
                        </div>
                    </div>
                </div>
            </div>



        </main>
    );
}

export default SignInComponent;