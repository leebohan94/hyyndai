import React from 'react';
import './scss/sign_up.scss';
import $ from 'jquery';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function SignUpComponent({ timer, timerCounterfn, 회원가입, confirmModalOpen }) {
    const navigate = useNavigate();
    //타이머 변수 가져오기
    const { minutes, seconds, setId, isTimer } = timer;
    const [state, setState] = React.useState(회원가입);
    //인증박스 클릭 이벤트
    const [isOn, setIsOn] = React.useState(true);//핸드폰이나 이메일 인증 박스 띄우기 위한 용도
    React.useEffect(() => {
        const $aTag = $('#signUp .choice-box a');
        $aTag.on({
            click(e) {
                e.preventDefault();
                let returnBoolean = window.confirm('인증방식을 변경하시겠습니까? 입력했던 정보는 초기화됩니다.');
                if (returnBoolean === true) {
                    //yes버튼을 입력한 경우 바귄다
                    $aTag.removeClass('on');
                    $(e.target).addClass('on');
                    if ($(e.target).hasClass('hp') === true) {
                        //핸드폰 인증 클릭한 경우
                        setIsOn(true);
                    }
                    else {
                        //이메일 인증 클릭한 경우
                        setIsOn(false);
                    }
                    //회원가입 초기값으로 초기화
                    setState(회원가입);
                }
            }
        })

    }, [])


    const onChangeHp1 = (e) => {
        //도메인 선택을 통한 입력
        let 핸드폰앞자리 = '';

        e.preventDefault();
        핸드폰앞자리 = e.target.value;
        setState({
            ...state,
            hp1: 핸드폰앞자리
        })
    }

    const onChangeHp2 = (e) => {
        e.preventDefault();
        setState({
            ...state,
            hp2: e.target.value,
        })
    }
    const onChangeHp3 = (e) => {
        e.preventDefault();
        setState({
            ...state,
            hp3: e.target.value,
        })
    }
    //인증번호 발송받기 이벤트
    const onClickHpNum = (e) => {
        e.preventDefault();
        const regExp = /^[0-9]{10,11}$/;
        let num = 0;//발송인증번호 난수 생성 용도
        let 발송인증번호 = 0;
        if (regExp.test(state.hp1 + state.hp2 + state.hp3) === false) {
            confirmModalOpen('잘못된 형식입니다. 확인 후 다시 시도 해 주세요.');
        }
        else {
            // 발송인증번호 전송 타이밍
            num = Math.floor(Math.random() * 900000 + 100000); // 발송인증번호: 6자리의 난수 발생
            // 상태관리 변수에 발송인증번호 저장
            발송인증번호 = num;
            confirmModalOpen(`발송인증번호가 발송되었습니다.  ${num}`);

            setState({
                ...state,
                발송인증번호: 발송인증번호,
            })
            timerCounterfn();
        }

    }
    //인증번호 입력 이벤트
    const onChangeHpOk = (e) => {
        const { value } = e.target;
        let 입력인증번호 = '';
        const regExp1 = /[^\d]/g;
        입력인증번호 = value.replace(regExp1, '');
        setState({
            ...state,
            입력인증번호: 입력인증번호
        })
    }

    const onClickHpNum2 = (e) => {
        e.preventDefault();
        if (state.입력인증번호 === '') {
            confirmModalOpen('인증번호를 입력해주세요');
        }
        else if (state.발송인증번호 === Number(state.입력인증번호)) {
            confirmModalOpen('인증 성공');
            clearInterval(setId);
            setState({
                ...state,
                핸드폰: `${state.hp1}-${state.hp2}-${state.hp3}`,
                인증여부: true
            })
        }
        else {
            confirmModalOpen('잘못된 인증번호');
        }
    }

    //이메일 입력 이벤트

    const onChangeEmailFront = (e) => {
        let 이메일앞 = '';
        이메일앞 = e.target.value;

        //직접 입력
        e.preventDefault();
        setState({
            ...state,
            이메일앞: 이메일앞,

        })
    }
    const onChangeEmaildirect = (e) => {
        let 이메일뒤 = '';
        이메일뒤 = e.target.value;
        //직접 입력
        e.preventDefault();
        setState({
            ...state,
            이메일뒤: 이메일뒤
        })
    }
    const onChangeEmailDomain = (e) => {
        //도메인 선택을 통한 입력
        let 선택된도메인 = '';

        e.preventDefault();
        선택된도메인 = e.target.value;
        if (선택된도메인 === '직접입력') {
            선택된도메인 = '';
        }
        setState({
            ...state,
            이메일뒤: 선택된도메인
        })
    }
    const onClickEmail = (e) => {
        e.preventDefault();

        setState({
            ...state,
            아이디: `${state.이메일앞}@${state.이메일뒤}`,
            isIdError: false,
            isIdMsg: ''
        })
    }

    const onChangeId = (e) => {
        //특수문자 방지용도
        const regExp1 = /[`~!#$%^&*()\-_=+[{\]}\\|;:'",<>/?]/g;

        //이건 한 줄로 끝내기 const regExp2=/^(?=.*[a-zA-Z])(?=.*[^\s])[a-zA-Z\d]{6,16}$/g;

        const regExp2 = /^(.){6,30}$/g;   //6자 이상 30자 이하
        const regExp3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;   // 한글 
        const regExp4 = /[A-Za-z]+[0-9]*/g;   // 영문필수 1자이상 +,  숫자선택 0자이상 *
        const regExp5 = /\s/g;   // 공백

        let 아이디 = '';
        let isIdError = false;
        let isIdMsg = '';

        아이디 = e.target.value.replace(regExp1, '');

        if (regExp2.test(아이디) === false || regExp3.test(아이디) === true || regExp4.test(아이디) === false || regExp5.test(아이디) === true) {
            isIdError = true;
            isIdMsg = '6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합';
        }
        else {
            isIdError = false;
            isIdMsg = '';
        }
        setState({
            ...state,
            아이디: e.target.value.replace(regExp1, ''),
            isIdError: isIdError,
            isIdMsg: isIdMsg
        })
    }
    //아이디 중복확인
    const onClickUserIdOk = (e) => {
        e.preventDefault();
        const value = state.아이디;
        const regExp1 = /[`~!#$%^&*()\-_=+[{\]}\\|;:'",<>/?]/g;
        const regExp2 = /^(.){6,16}$/g;
        const regExp3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;
        const regExp4 = /[A-Za-z]+[0-9]*/g;
        const regExp5 = /\s/g;   // 공백

        if (regExp2.test(value) === false || regExp3.test(value) === true || regExp4.test(value) === false || regExp5.test(value) === true) {
            confirmModalOpen('6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합');
        }
        else {

            axios({  // http://localhost:8080/kurly/idCheckAction.jsp
                // 아이디를 보내서 비교한결과를 반환받는다.
                url: 'https://adlaylatte.duckdns.org/portfolio/team_project2/hyundai_user/idCheckAction.jsp',
                method: 'POST',
                data: {},
                params: {
                    "user_id": state.아이디
                }
            })
                .then((res) => {

                    try {
                        console.log(res);
                        console.log(res.data);
                        if (res.data === true) { // true 이면 중복된것임.                   
                            setState({
                                ...state,
                                isIdOk: false
                            })
                            confirmModalOpen('사용 불가능한 아이디 입니다.');
                        }
                        else {
                            setState({
                                ...state,
                                isIdOk: true
                            })
                            confirmModalOpen('사용 가능한 아이디 입니다.');
                        }
                    } catch (error) {
                        console.log(error);
                    }
                })
                .catch((err) => {
                    console.log(`AXIOS 실패! ${err} `)
                });

        }

    }
    // 비밀번호 입력상자 onChange 이벤트
    const onChangeUserPw1 = (e) => {
        const { value } = e.target;
        let isPwError = false;
        let isPwMsg = '';
        const regExp1 = /^(.){8,16}$/g;
        const regExp2 = /([A-Za-z]+[0-9]+)+|([0-9]+[A-Za-z]+)+|([A-Za-z]+[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]+)+|([`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]+[A-Za-z]+)+|([0-9]+[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]+)+|([`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]+[0-9]+)+/g;
        const regExp3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g
        const regExp4 = /\s/g;
        const regExp5 = /(\d)\1\1/g

        if (regExp1.test(value) === false) {
            isPwError = true;
            isPwMsg = '최소 8자 이상 입력';
        }
        else if (regExp2.test(value) === false || regExp3.test(value) === true || regExp4.test(value) === true) {
            isPwError = true;
            isPwMsg = '영문/숫자/특수문자(공백 제외)만 하용하며, 2개이상 조합';
        }
        else if (regExp5.test(value) === true) {
            isPwError = true;
            isPwMsg = '동일한 숫자 3개이상 연속 사용 불가'
        }
        else {
            isPwError = false;
            isPwMsg = '';
        }
        setState({
            ...state,
            isPwError: isPwError,
            isPwMsg: isPwMsg,
            비밀번호: value
        })
    }

    // 비밀번호 확인
    const onChangeUserPw2 = (e) => {
        const { value } = e.target;
        let isPw2Error = false;
        let isPw2Msg = '';

        // 현재 입력값과 이전에 입력된 비밀번호를 비교
        if (value === '') {
            isPw2Error = true;
            isPw2Msg = '비밀번호를 한번 더 입력해 주세요'
        }
        else if (value !== state.비밀번호) {
            isPw2Error = true;
            isPw2Msg = '동일한 비밀번호를 입력 하세요'
        }
        else {
            isPw2Error = false;
            isPw2Msg = '';
        }
        setState({
            ...state,
            isPw2Error: isPw2Error,
            isPw2Msg: isPw2Msg,
            비밀번호확인: value
        })
    }

    //이름
    const onChangeName = (e) => {
        let 이름 = e.target.value;
        if (이름 === '') {
            setState({
                ...state,
                이름: 이름,
                isNameError: true,
                isNameMsg: '이름을 입력해주세요',
            })
        }
        else {
            setState({
                ...state,
                이름: 이름,
                isNameError: false,
                isNameMsg: '',

            })
        }


    }

    //생년월일
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

    const onChangeAddr1 = (e) => {
        setState({
            ...state,
            주소1: e.target.value
        })
    }

    const onChangeAddr2 = (e) => {
        setState({
            ...state,
            주소2: e.target.value
        })
    }

    //약관 전체 선택
    const onChangeAgreeAll = (e) => {
        let 이용약관체크 = [];
        if (e.target.checked === true) {
            //전체 동의에 체크하면
            이용약관체크 = state.이용약관전체;
        }
        else {
            //전체 동의 체크 해제하면 전부 비우기
            이용약관체크 = [];
        }
        setState((prevState) => ({
            ...prevState,
            이용약관체크: 이용약관체크,
        }))
    }
    //약관 필수사항
    const onChangeAgreeEss = (e) => {
        if (e.target.value === "이용약관(필수)") {
            setState({
                ...state,
                이용약관체크: [...state.이용약관체크, "이용약관(필수)"]
            })
        }
        else {
            setState({
                ...state,
                이용약관체크: state.이용약관체크.filter((item) => item !== "이용약관(필수)")
            })
        }
    }

    //약관 선택사항
    //-라디오 버튼 클릭 이벤트
    const onChangeOptChange = (e) => {
        if (e.target.value === "yes2") {
            setState({
                ...state,
                //하나라도 선택약관에 있는 요소가 있을 경우 제거하고 다시 선택약관의 모든 요소들을 이용약관체크 배열에 삽입하기
                이용약관체크: [...state.이용약관체크.filter((item) => !state.선택약관.includes(item)), ...state.선택약관]
            })
        }
        else {
            setState({
                ...state,
                //선택약관 배열의 요소를 이용약관체크에서 제거시키기
                이용약관체크: [...state.이용약관체크.filter((item) => !state.선택약관.includes(item))]
            })
        }
    }
    //개별선택 이벤트
    const onChangeAgree = (e) => {
        if (e.target.checked === true) {
            //체크되면 추가하기
            setState({
                ...state,
                이용약관체크: [...state.이용약관체크, e.target.value]
            })
        }
        else {
            //체크해제되면 제거하기
            setState({
                ...state,
                이용약관체크: state.이용약관체크.filter((item) => item !== e.target.value)
            })
        }
        //혹시 모를 백업용
        // setState((prevState)=>({
        //     ...prevState,
        //     이용약관체크: [...prevState.이용약관체크.filter((item)=>!state.선택약관.includes(item)), ...prevState.선택약관]
        // }))
    }


    const onSubmitSignupEvent = (e) => {
        e.preventDefault();
        if (state.isIdError === true) {
            confirmModalOpen('아이디를 입력하세요');
        }
        else if (state.isPwError === true) {
            confirmModalOpen('비밀번호를 제대로');
        }
        else if (state.isPw2Error === true) {
            confirmModalOpen('한번더 비밀번호를 입력하세요');
        }
        else if (state.isNameError === true) {
            confirmModalOpen('이름을 제대로 입력하세요');
        }
        else if (state.isBirthError === true) {
            confirmModalOpen('생년월일을 제대로 입력하세요');
        }
        else if (state.isPwError === true) {
            confirmModalOpen('핸드폰 번호를 제대로 입력하세요');
        }
        else if (state.user_addr1 === '') {
            confirmModalOpen('주소를 검색 해주세요');
        }
        else if (state.user_addr2 === '') {
            confirmModalOpen('나머지 주소를 입력 해주세요');
        }
        //이용약관필수에 해당하는 모든 약관이 이용약관에 들어가 있지 않으면 false를 반환
        else if (!state.이용약관필수.every((item) => state.이용약관체크.includes(item))) {
            confirmModalOpen('모든 필수 약관에 동의해주세요');
        }
        else {
            //모든 조건이 만족되면

            //일단 임시
            let 약관동의문자열 = '';
            state.이용약관체크.map((item, idx) => {
                if (idx === state.이용약관체크.length - 1) {
                    //배열의 마지막 요소를 의미
                    약관동의문자열 += item
                }
                else {
                    약관동의문자열 += item + ', '
                }
            })
            const formData = {
                "user_id": state.아이디,
                "user_pw": state.비밀번호,
                "user_name": state.이름,
                "user_birth": state.생년월일,
                "user_hp": state.핸드폰,
                "user_addr1": state.주소1,
                "user_addr2": state.주소2,
                "user_agree": 약관동의문자열
            }

            axios({
                url: 'https://adlaylatte.duckdns.org/portfolio/team_project2/hyundai_user/signUpAction.jsp',
                method: 'POST',
                data: {},
                params: formData
            })
                .then((res) => {
                    if (res.status === 200) {
                        confirmModalOpen('회원가입에 성공했습니다!');
                        setTimeout(function () {
                            navigate(`/intro`);
                        }, 1000);
                    }

                })
                .catch((err) => {
                    console.log('AXIOS 실패!' + err);
                });
        }
    }


    return (

        <main id="signUp">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h1>회원가입</h1>
                    </div>
                    <div className="content">
                        <form onSubmit={onSubmitSignupEvent} name='sign_up_form' id='signUpForm'>
                            <div className="chapter1">
                                <h2><strong>1단계</strong> <span>간편인증 방법 선택</span></h2>
                                <ul className="choice-box">
                                    <li><a href="!#" className='hp on'>핸드폰 인증</a></li>
                                    <li><a href="!#" className='email'>이메일 인증</a></li>
                                </ul>
                                <div className="input-box">
                                    {
                                        isOn &&
                                        <>
                                            <div className="hp-box">
                                                <div className="hp-input">
                                                    <h4>핸드폰번호</h4>
                                                    <select name="hp1" id="hp1" onChange={onChangeHp1}>
                                                        <option value="010">010</option>
                                                        <option value="011">011</option>
                                                        <option value="016">016</option>
                                                        <option value="017">017</option>
                                                        <option value="018">018</option>
                                                    </select>-
                                                    <input type="text" maxLength={4} name="hp2" id="hp2" onChange={onChangeHp2} value={state.hp2} />-
                                                    <input type="text" maxLength={4} name="hp3" id="hp3" onChange={onChangeHp3} value={state.hp3} />
                                                    <button onClick={onClickHpNum}>인증번호 받기</button>
                                                </div>
                                                <div className="hp-auth">
                                                    <input maxLength={6} onChange={onChangeHpOk} value={state.입력인증번호} name='hp_auth' id='hpAuth' type="text" placeholder='번호확인' />
                                                    <span className={`hp-timer-counter${isTimer ? ' on' : ''}`}>유효시간 {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>
                                                    <button onClick={onClickHpNum2}>핸드폰 인증</button>
                                                </div>
                                                <div className="text-box">
                                                    <p>- 핸드폰으로 발송된 인증번호를 입력하세요. (3분 이내)</p>
                                                    <p>- 인증번호가 도착하지 않을 시에는 재발송을 해주세요.</p>
                                                    <p>- 입력한 핸드폰번호는 고객님 동의없이는 공개, 또는 제 3자에게 제공되지 않으며, 보안시스템을 통해 안전하게 관리됩니다.</p>
                                                </div>
                                            </div>

                                        </>
                                    }


                                    {
                                        !isOn &&
                                        <div className="email-box">
                                            <p>이메일 인증을 위해 현재 사용하고 계시는 이메일 주소를 입력해주세요</p>
                                            <input type="text" placeholder='이메일주소' onChange={onChangeEmailFront} value={state.이메일앞} />
                                            <span>@</span>
                                            <input type="text" placeholder='' onChange={onChangeEmaildirect} value={state.이메일뒤} />
                                            <select name="email-domain" id="emailDomain" onChange={onChangeEmailDomain}>
                                                <option value="직접입력">직접입력</option>
                                                <option value="naver.com">naver.com</option>
                                                <option value="daum.net">daum.net</option>
                                                <option value="nate.com">nate.com</option>
                                                <option value="gmail.com">gmail.com</option>
                                                <option value="hanmail.net">hanmail.net</option>
                                                <option value="hotmail.com">hotmail.com</option>
                                            </select>
                                            <button onClick={onClickEmail}>동의하고 인증하기</button>
                                        </div>
                                    }
                                </div>
                            </div>

                            <div className="chapter2">
                                <h2><strong>2단계</strong> <span>가입정보 입력</span></h2>
                                <p>입력한 개인정보가 정확하지 않을 경우 사이트 이용에 불이익이 발생할 수 있습니다.</p>
                                <div className="input-box">
                                    <ul>
                                        <li>
                                            <input type="text" name="user_id" id="userId" placeholder='아이디(아이디 또는 이메일 주소' value={state.아이디} onChange={onChangeId} disabled={state.인증여부 ? false : true} />
                                            <span className={`validation-check ${state.아이디 === '' ? '' : (state.isIdError ? 'error' : 'ok')}`}></span>
                                            <button onClick={onClickUserIdOk}>중복확인</button>
                                            {state.isIdError ? <p className={`error-msg ${state.isIdError ? ' on' : ''}`}>{state.isIdMsg}</p> : ''}
                                        </li>
                                        <li>
                                            <input type="password" name="" id="pw" placeholder='비밀번호' value={state.비밀번호} onChange={onChangeUserPw1} disabled={state.인증여부 ? false : true} />
                                            <span className={`validation-check ${state.비밀번호 === '' ? '' : (state.isPwError ? 'error' : 'ok')}`}></span>
                                            <p className={`error-msg${state.isPwError ? ' on' : ''}`}>{state.isPwMsg}</p>
                                        </li>
                                        <li>
                                            <input type="password" name="" id="pw2" placeholder='비밀번호 확인' value={state.비밀번호확인} onChange={onChangeUserPw2} disabled={state.인증여부 ? false : true} />
                                            <span className={`validation-check ${state.비밀번호확인 === '' ? '' : (state.isPw2Error ? 'error' : 'ok')}`}></span>
                                            <p className={`error-msg${state.isPw2Error ? ' on' : ''}`}>{state.isPw2Msg}</p>
                                        </li>
                                        <li>
                                            <input type="text" placeholder='이름' value={state.이름} onChange={onChangeName} disabled={state.인증여부 ? false : true} />
                                            <span className={`validation-check ${state.이름 === '' ? '' : (state.isNameError ? 'error' : 'ok')}`}></span>
                                            <p className={`error-msg${state.isNameError ? ' on' : ''}`}>{state.isNameMsg}</p>
                                        </li>
                                        <li>
                                            <input type="text" maxLength={10} placeholder='생년월일(예:1982-06-15)' value={state.생년월일} onChange={onChangeBirth} disabled={state.인증여부 ? false : true} />
                                            <span className={`validation-check ${state.생년월일 === '' ? '' : (state.isBirthError ? 'error' : 'ok')}`}></span>
                                            <p className={`error-msg${state.isBirthError ? ' on' : ''}`}>{state.isBirthMsg}</p>
                                        </li>
                                        <li>
                                            <input type="text" maxLength={13} placeholder='핸드폰번호' name='user_hp' id='userHp' value={state.핸드폰} onChange={onChangeHp} disabled={state.인증여부 ? false : true} />
                                            <span className={`validation-check ${state.핸드폰 === '' ? '' : (state.isHpError ? 'error' : 'ok')}`}></span>
                                            <p className={`error-msg${state.isHpError ? ' on' : ''}`}>{state.isHpMsg}</p>
                                        </li>
                                        <li style={{ visibility: "hidden" }}>
                                            <input type="text" placeholder='주소1' name='user_addr1' id='userAddr1' value={state.주소1} onChange={onChangeAddr1} disabled={state.인증여부 ? false : true} />
                                            <span className={`validation-check ${state.주소1 === '' ? '' : (state.isAddr1Error ? 'error' : 'ok')}`}></span>
                                            <p className={`error-msg${state.isAddr1Error ? ' on' : ''}`}>{state.isAddr1Msg}</p>
                                        </li>
                                        <li style={{ visibility: "hidden" }}>
                                            <input type="text" placeholder='주소2' name='user_addr2' id='userAddr2' value={state.주소2} onChange={onChangeAddr2} disabled={state.인증여부 ? false : true} />
                                            <span className={`validation-check ${state.주소2 === '' ? '' : (state.isAddr2Error ? 'error' : 'ok')}`}></span>
                                            <p className={`error-msg${state.isAddr2Error ? ' on' : ''}`}>{state.isAddr2Msg}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="chapter3">
                                <h2><strong>3단계</strong> 개인정보 수집 이용 동의</h2>
                                <div className="all-agree-box">
                                    <label htmlFor="all"><input type="checkbox" name="all" id="all" onChange={onChangeAgreeAll} checked={state.이용약관체크.length === state.이용약관전체.length} />전체동의</label>
                                </div>
                                <div className="essential-box">
                                    <h3>필수사항</h3>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>구분</th>
                                                <th>이용목적</th>
                                                <th>수집항목</th>
                                                <th>보유기간</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>가입</td>
                                                <td>서비스 이용 및 상담</td>
                                                <td>이메일, 성명, ID, 비밀번호, 생년월일, 핸드폰번호</td>
                                                <td rowSpan={3}>회원탈퇴시 또는 법정보유기간</td>
                                            </tr>
                                            <tr>
                                                <td rowSpan={2}>구매 및 배송</td>
                                                <td>구매 결제</td>
                                                <td>결제정보(카드번호, 계좌번호, 핸드폰번호 등)</td>
                                            </tr>
                                            <tr>
                                                <td>물품배송</td>
                                                <td>배송정보(주문자/수취인 성명, 연락처, 배송지주소)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="radio-box">

                                        <label htmlFor="yes"><input type="radio" name="agree" id="yes" value={"이용약관(필수)"} checked={state.이용약관체크.includes('이용약관(필수)')} onChange={onChangeAgreeEss} />동의합니다</label>

                                        <label htmlFor="no"><input type="radio" name="agree" id="no" value={"동의하지 않음(필수)"} checked={!state.이용약관체크.includes('이용약관(필수)')} onChange={onChangeAgreeEss} />동의하지 않습니다</label>
                                    </div>
                                </div>
                                <div className="optional-box">
                                    <h3>선택사항</h3>
                                    <table className="tbl-type1">
                                        <thead>
                                            <tr>
                                                <th>구분</th>
                                                <th>이용목적</th>
                                                <th>수집항목</th>
                                                <th>보유기간</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td rowSpan={2}>기타</td>
                                                <td>신규 서비스/상품 안내/마케팅</td>
                                                <td>이메일, 핸드폰번호, 성별, 스페셜데이</td>
                                                <td rowSpan={2}><span>회원탈퇴시 또는 동의철회시</span></td>
                                            </tr>
                                            <tr>
                                                <td>현금영수증 발급, 앱설치 URL 전송</td>
                                                <td>핸드폰번호</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="radio-box">                                                        {/*이용약관체크 배열 요소 중 선택약관에 해당하는 요소만 추출함 */}
                                        <label htmlFor="yes2"><input type="radio" name="agree2" id="yes2" value={"yes2"} checked={state.이용약관체크.filter((item) => state.선택약관.includes(item)).length >= 1} onChange={onChangeOptChange} />동의합니다</label>
                                        <i>(</i>
                                        <label htmlFor="sms"><input type="checkbox" name="option" id="sms" value={state.선택약관[0]} onChange={onChangeAgree} checked={state.이용약관체크.includes(state.선택약관[0])} />{state.선택약관[0]}</label>
                                        <label htmlFor="email"><input type="checkbox" name="option" id="email" value={state.선택약관[1]} onChange={onChangeAgree} checked={state.이용약관체크.includes(state.선택약관[1])} />{state.선택약관[1]}</label>
                                        <i>)</i>
                                        <label htmlFor="no2"><input type="radio" name="agree2" id="no2" value={"no2"} checked={state.이용약관체크.filter((item) => state.선택약관.includes(item)).length === 0} onChange={onChangeOptChange} />동의하지 않습니다</label>
                                    </div>
                                </div>
                            </div>

                            <div className="chapter4">
                                <h2><strong>4단계</strong> 이용약관 및 개인정보 처리방침</h2>
                            </div>
                            <div className="button-box">
                                <p>이용약관 및 개인정보 수집 및 이용에 대한 내용을 확인하고 동의합니다.</p>
                                <button type='submit'>동의하고 회원가입</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SignUpComponent;


SignUpComponent.defaultProps = {
    회원가입: {
        인증여부: false,

        아이디: '',
        isIdError: false,
        isIdMsg: '',

        비밀번호: '',
        비밀번호확인: '',
        isPwError: false,
        isPwMsg: '',
        isPw2Error: false,
        isPw2Msg: '',

        이름: '',
        isNameError: false,
        isNameMsg: '',

        생년월일: '',
        isBirthError: false,
        isBirthMsg: '',

        hp1: '010',
        hp2: '',
        hp3: '',
        핸드폰: '',
        isHpMsg: '',
        isHpError: false,

        발송인증번호: 0,
        입력인증번호: '',

        주소1: '테스트용1',
        주소2: '테스트용2',
        isAddr1Msg: '',
        isAddr1Error: false,
        isAddr2Msg: '',
        isAddr2Error: false,

        //이용약관


        이용약관체크: [],
        이용약관필수: [
            "이용약관(필수)",
        ],
        선택약관: [
            "SMS 수신동의",
            "이메일 수신동의"
        ],
        get 이용약관전체() {
            return [...this.이용약관필수, ...this.선택약관];
        },



    }
}