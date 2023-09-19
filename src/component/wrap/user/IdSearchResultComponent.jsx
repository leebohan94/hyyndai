import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './scss/id_search_result.scss';
function IdSearchResultComponent(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const [login, setLogin] = React.useState({
        아이디: '',
        비밀번호: '',
        가입일: '',
        이름: ''
    });

    React.useEffect(() => {
        console.log(location.state.아이디);
        console.log(location.state.가입일);
        setLogin({
            ...login,
            아이디: location.state.아이디,
            가입일: location.state.가입일
        })

        // setLogin({
        //     ...login,
        //     아이디: param.get('아이디'),
        //     가입일: param.get('가입일')
        // })
    }, []);

    const onClickPwSearch = (e) => {
        e.preventDefault();
        navigate('/pwSearch');
    }

    const onClickLogin = (e) => {
        e.preventDefault();
        navigate('/signin');
    }


    return (
        <section id='signInIdResult'>
            <div className="container">
                <div className="title">
                    <h2>계정을 찾았습니다.</h2>
                    <p>아이디 확인 후 로그인 해주세요.</p>
                </div>
                <div className="content">
                    <form>
                        <ul>
                            <li>
                                <span>
                                    <strong>{login.아이디}</strong>
                                    <em>{login.가입일}</em>
                                </span>
                            </li>
                            <li></li>
                            <li><button onClick={onClickPwSearch}>비밀번호찾기</button></li>
                            <li><button onClick={onClickLogin}>로그인</button></li>
                        </ul>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default IdSearchResultComponent;