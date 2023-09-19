import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignInIdSearchComponent(props) {

    const [state, setState] = useState({
        이름: '',
        생년월일: '',
        핸드폰: '',
    });
    const navigate = useNavigate();
    const onChangeBirth = (e) => {
        let 생년월일 = e.target.value.replace(/[^\d]/g, '');
        if (생년월일.length > 7) {
            생년월일 = 생년월일.replace(/^(\d{4})(\d{2})(\d{2})$/, '$1-$2-$3');
        }
        else if (생년월일.length > 6) {
            생년월일 = 생년월일.replace(/^(\d{4})(\d{2})(\d{1})$/, '$1-$2-$3');
        }
        else if (생년월일.length > 4) {
            생년월일 = 생년월일.replace(/^(\d{4})(\d{1,})$/, '$1-$2');
        }
        setState({
            ...state,
            생년월일: 생년월일,
        })
        if (생년월일.length >= 10) {
            setState({
                ...state,
                생년월일: 생년월일,
                isBirthError: false,
                isBirthMsg: ''
            })
        }
        else {
            setState({
                ...state,
                생년월일: 생년월일,
                isBirthError: true,
                isBirthMsg: '생년월일을 입력해주세요'
            })
        }
    }

    const onChangeHp = (e) => {
        let 핸드폰 = e.target.value.replace(/[^\d]/g, '');

        if (핸드폰.length > 10) {
            핸드폰 = 핸드폰.replace(/^(\d{3})(\d{4})(\d{4})$/, '$1-$2-$3');
        }
        else if (핸드폰.length > 6) {
            핸드폰 = 핸드폰.replace(/^(\d{3})(\d{3})(\d{4})$/, '$1-$2-$3');
        }
        else if (핸드폰.length > 3) {
            핸드폰 = 핸드폰.replace(/^(\d{3})(\d{1,})$/, '$1-$2');
        }
        setState({
            ...state,
            핸드폰: 핸드폰,
        })
        if (핸드폰.length >= 12) {
            setState({
                ...state,
                핸드폰: 핸드폰,
                isHpError: false,
                isHpMsg: ''
            })
        }
        else {
            setState({
                ...state,
                핸드폰: 핸드폰,
                isHpError: true,
                isHpMsg: '핸드폰 번호를 입력해주세요'
            })
        }
    }

    const onSubmitSignupEvent = (e) => {
        e.preventDefault();
        axios({
            // 이름, 생년월일, 핸드폰번호를 전송한다.
            url: 'https://adlaylatte.duckdns.org/portfolio/team_project2/hyundai_user/idSearchAction.jsp',
            method: 'POST',
            data: {},
            params: {
                "user_name": state.이름,
                "user_birth": state.생년월일,
                "user_hp": state.핸드폰
            }
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                const result = res.data;
                try {
                    if (result === null) { // null 이면 가입회원이 아닙니다. 회원가입하세요                      
                        alert('가입회원이 아님');
                    }
                    else {
                        console.log(result.아이디);
                        // 라우터 네비게이트 사용 구현 파미터전송                       
                        navigate('/idSearchResult', { state: { 아이디: result.아이디, 가입일: result.가입일 } });
                    }
                } catch (error) {
                    console.log(error);
                }


            })
            .catch((err) => {
                console.log(`AXIOS 실패! ${err} `)
            });
    }

    //navigate('/idSearchResult', {state: {아이디: result.아이디, 가입일: result.가입일}});



    return (
        <main id="signInIdSearch">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>아이디 찾기</h2>
                    </div>
                    <div className="content">
                        <h3>필수 정보 입력</h3>
                        <form action="" onSubmit={onSubmitSignupEvent}>
                            <div className="input-box">
                                <ul>
                                    <li><label htmlFor="">이름</label><input type="text" name="user_name" id="" onChange={(e) => setState({ ...state, 이름: e.target.value })} value={state.이름} /></li>
                                    <li><label htmlFor="">생년월일(8자리)</label><input type="text" maxLength={10} name="user_birth" id="" onChange={onChangeBirth} value={state.생년월일} /></li>
                                    <li><label htmlFor="">핸드폰 번호</label><input type="text" maxLength={13} name="user_hp" id="" onChange={onChangeHp} value={state.핸드폰} /></li>
                                    <button type="submit">확인</button>
                                </ul>
                            </div>

                        </form>

                    </div>
                </div>
            </div>



        </main>
    );
}

export default SignInIdSearchComponent;