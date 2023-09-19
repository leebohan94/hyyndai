import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

import FooterComponent from './wrap/FooterComponent';
import HeaderComponent, { CartHeaderComponent } from './wrap/HeaderComponent';
import IntroComponent from './wrap/IntroComponent';

// 공지사항
import NoticeComponent from './wrap/hyundai_bbs/NoticeComponent';
// 게시판 관리
import NoticeUpdateFromComponent from './wrap/hyundai_bbs/NoticeUpdateFromComponent';
import NoticeWriteFromPageComponent from './wrap/hyundai_bbs/NoticeWriteFromPageComponent';
import NotView404PageComponent from './wrap/NotView404PageComponent';

// 상품서브 컴포넌트
import Sub1Component from './wrap/product_sub/Sub1Component';
import Sub2Component from './wrap/product_sub/Sub2Component';
import SickPoomComponent from './wrap/product_sub/SickPoomComponent';
import GageonComponent from './wrap/product_sub/GageonComponent';
import Sub5Component from './wrap/product_sub/Sub5Component';
import Sub6Component from './wrap/product_sub/Sub6Component';
import SportComponent from './wrap/product_sub/SportComponent';
import WomenFashionSubComponent from './wrap/product_sub/WomenFashionSubComponent';
import YoungCasualSubComponent from './wrap/product_sub/YoungCasualSubComponent';

// 상품상세 컴포넌트
import ProductDetailComponent from './wrap/product_sub/detailpage/ProductDetailComponent';
// 카트
import CartComponent from './wrap/product_sub/detailpage/cart/CartComponent';

// 회원 컴포넌트
import ConfirmModal from './wrap/ConfirmModal';
import IdSearchResultComponent from './wrap/user/IdSearchResultComponent';
import MemberDeleteComponent from './wrap/user/MemberDeleteComponent';
import MypageComponent from './wrap/user/MypageComponent';
import PwSearchResetComponent from './wrap/user/PwSearchResetComponent';
import SignInComponent from './wrap/user/SignInComponent';
import SignInIdSearchComponent from './wrap/user/SignInIdSearchComponent';
import SignInPwSearchComponent from './wrap/user/SignInPwSearchComponent';
import SignUpComponent from './wrap/user/SignUpComponent';

export default function WrapComponent() {
    const [isAdmin, setIsAdmin] = React.useState(true);

    const [product, setPoduct] = React.useState({
        key: "VIEWPRODUCTKEY",
        getViewProduct: []
    });
    // 상품 클릭 이벤트 매개변수 들어옴
    const setViewProduct = (value) => {
        let arr = [];

        if (localStorage.getItem(product.key) !== null) {
            arr = JSON.parse(localStorage.getItem(product.key));
            arr = [value, ...arr]
            localStorage.setItem(product.key, JSON.stringify(arr));
            setPoduct({
                ...product,
                getViewProduct: arr
            });
        }
        else {
            arr = [value]
            localStorage.setItem(product.key, JSON.stringify(arr));
            setPoduct({
                ...product,
                getViewProduct: arr
            });
        }
    }

    ////////박준호////////////////////////////////////////////////
    //타이머 변수와 타이머 함수 넘겨주기
    const [timer, setTimer] = React.useState({
        minutes: 2,
        seconds: 59,
        setId: 0,
        timerMsg: '',
        isTimer: false,
        isEnd: false,

    });
    const timerCounterfn = () => {
        let setId = 0;
        let minutes = 2;
        let seconds = 59;
        let timerMsg = '';
        let isEnd = false;
        let isTimer = true;
        setId = setInterval(function () {
            seconds--;
            if (seconds < 0) {
                seconds = 59;
                minutes--;
                if (minutes < 0) {
                    clearInterval(setId);
                    seconds = 0;
                    minutes = 0;
                    timerMsg = '유효시간이 경과 되었습니다.';//모달창에 띄울 메시지
                    isTimer = true; //모달창 true
                    confirmModalOpen(timerMsg);
                }
            }
            setTimer({
                ...timer,
                seconds: seconds,
                minutes: minutes,
                timerMsg: timerMsg,
                setId: setId,
                isTimer: isTimer
            })
        }, 1000);//1초에 한 번 실행

    }
    const [modal, setModal] = React.useState({
        confirmMsg: '모달창에 자식창에서 보내온 타이틀 메시지내용입니다.',
        isConfirmModal: false, // true 모달열기  false 모달닫기   
        isSignInModal: false //로그인 모달
    });
    const confirmModalOpen = (msg) => {
        setModal({
            ...modal,
            confirmMsg: msg,
            isConfirmModal: true
        });
    }
    const confirmModalClose = () => {
        setModal({
            ...modal,
            isConfirmModal: false
        })
    }
    //로그인 창 열기 닫기 구현
    const onSignInON = (e) => {
        setModal({
            ...modal,
            isSignInModal: true
        });
    }
    const onSignInOff = (e) => {
        setModal({
            ...modal,
            isSignInModal: false
        });
    }
    //로그인 관련 함수
    const [isLogin, setIsLogin] = React.useState(false);
    React.useEffect(() => {
        //useEffect훅 써서 해결
        if (sessionStorage.getItem('user_id') != null) {
            setIsLogin(true);
        }
    }, [])
    ///////////박준호////////////////////////////

    // console.log(process.env.PUBLIC_URL);

    return (
        <div id='wrap'>
            <GlobalContext.Provider value={{ isAdmin, setViewProduct }}>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    {
                        modal.isSignInModal && <SignInComponent onSignInOff={onSignInOff} />
                    }
                    <Routes>
                        <Route path='/' element={<HeaderComponent onSignInON={onSignInON} isLogin={isLogin} setIsLogin={setIsLogin} />}>
                            <Route index element={<IntroComponent />} />
                            <Route path='/intro' element={<IntroComponent />} />
                            <Route path='/sub1' element={<Sub1Component />} />
                            <Route path='/sub2' element={<Sub2Component />} />
                            <Route path='/sub3' element={<WomenFashionSubComponent />} />
                            <Route path='/sub4' element={<YoungCasualSubComponent />} />
                            <Route path='/sub5' element={<Sub5Component />} />
                            <Route path='/sub6' element={<Sub6Component />} />
                            <Route path='/sub8' element={<SportComponent />} />
                            <Route path='/sub9' element={<GageonComponent />} />
                            <Route path='/sub10' element={<SickPoomComponent />} />
                            <Route path='/customer' element={<NoticeComponent />} />
                            <Route path='/*' element={<NotView404PageComponent />} />
                            <Route path='/detailpage' element={<ProductDetailComponent />} />
                            <Route path='/notice_write' element={<NoticeWriteFromPageComponent />} />
                            <Route path='/notice_update' element={<NoticeUpdateFromComponent />} />
                            <Route path='/signup' element={<SignUpComponent timer={timer} timerCounterfn={timerCounterfn} confirmModalOpen={confirmModalOpen} />} />
                            <Route path='/idSearch' element={<SignInIdSearchComponent />} />
                            <Route path='/idSearchResult' element={<IdSearchResultComponent />} />
                            <Route path='/pwSearch' element={<SignInPwSearchComponent />} />
                            <Route path='/pwSearchReset' element={<PwSearchResetComponent />} />
                            <Route path='/mypageMain' element={<MypageComponent />}>
                                <Route path='/mypageMain/memberDelete' element={<MemberDeleteComponent />} />
                            </Route>
                        </Route>
                        <Route path='/cart' element={<CartHeaderComponent />}>
                            <Route index element={<CartComponent />} />
                            <Route path='/cart/view' element={<CartComponent />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
                <FooterComponent />
            </GlobalContext.Provider>
            {
                modal.isConfirmModal && <ConfirmModal confirmMsg={modal.confirmMsg} confirmModalClose={confirmModalClose} />
            }

        </div>
    );
}
