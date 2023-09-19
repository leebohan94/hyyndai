import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function PwSearchResetComponent(props) {
    const navigate = useNavigate();
    const [state, setState] = React.useState({
        비밀번호: '',
        비밀번호확인: '',
        핸드폰: '',
    });
    const location = useLocation();
    const onClickPwReset = (e) => {
        axios({
            url: 'https://adlaylatte.duckdns.org/portfolio/team_project2/hyundai_user/signInAction.jsp',
            method: 'POST',
            data: {},
            params: {

            }
        })
            .then((res) => {
                if (res.status === 200) {
                    const result = res.data;
                    console.log(result);
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

                            setState({
                                ...state,
                                isIdError: false,
                                isIdMsg: '',
                                isPwError: false,
                                isPwMsg: ''
                            })
                            setTimeout(function () {
                                navigate(`/intro`);
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
    return (
        <main id="pwSearch">
            <div className="container">
                <div className="gap">
                    <div className="title"><h2>비밀번호 찾기</h2></div>
                    <div className="content">
                        <h3>초기화시킬 비밀번호를 입력해주세요</h3>
                        <div className="input-box">
                            <label htmlFor="userId">비밀번호</label>
                            <input type="text" name="user_id" id="userId" onChange={(e) => setState({ ...state, 비밀번호: e.target.value })} value={state.비밀번호} />

                            <label htmlFor="userHp">비밀번호 확인</label>
                            <input type="text" name="user_hp" id="userHp" onChange={(e) => setState({ ...state, 비밀번호확인: e.target.value })} value={state.비밀번호확인} />
                            <button onClick={onClickPwReset}>변경</button>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}

export default PwSearchResetComponent;