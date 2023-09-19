import React from 'react';
import './scss/pw_search.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignInPwSearchComponent(props) {
    const navigate = useNavigate();
    const [state, setState] = React.useState({
        아이디: '',
        핸드폰: '',
        비밀번호: '',
        비밀번호확인: ''
    })

    const onClickPwReset = (e) => {
        e.preventDefault();
        axios({
            url: 'https://adlaylatte.duckdns.org/portfolio/team_project2/hyundai_user/pwResetAction.jsp',
            method: 'POST',
            data: {},
            params: {
                "user_id": state.아이디,
                "user_hp": state.핸드폰,
                "user_pw": state.비밀번호,
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    const result = res.data;
                    console.log(result);
                    try {
                        if (result === 1) {
                            setState({
                                ...state,

                            })
                            alert('비밀번호 변경 성공');
                            setTimeout(function () {
                                navigate(`/intro`);
                            }, 1000);
                        }

                        else {
                            alert('유효한 아이디와 비밀번호를 입력해주세요')
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
                        <h3>
                            비밀번호를 찾으려는 아이디와<br />핸드폰번호를 입력해주세요.<br />
                            초기화시킬 비밀번호도 입력해주세요.
                        </h3>
                        <div className="input-box">
                            <label htmlFor="userId">아이디</label>
                            <input type="text" name="user_id" id="userId" onChange={(e) => setState({ ...state, 아이디: e.target.value })} value={state.아이디} />
                            <label htmlFor="userHp">핸드폰</label>
                            <input type="text" name="user_hp" id="userHp" onChange={(e) => setState({ ...state, 핸드폰: e.target.value })} value={state.핸드폰} />
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

export default SignInPwSearchComponent;