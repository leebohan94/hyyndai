import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HeaderComponent,{CartHeaderComponent} from './wrap/HeaderComponent';
import FooterComponent from './wrap/FooterComponent';
import IntroComponent from './wrap/IntroComponent';
import NotView404PageComponent from './wrap/NotView404PageComponent';
import {GlobalContext} from '../context/GlobalContext';
import NoticeWriteFromPageComponent from './wrap/main_sub_bbs/NoticeWriteFromPageComponent';
import NoticeUpdateFromComponent from './wrap/main_sub_bbs/NoticeUpdateFromComponent';
//서브 페이지
import GageonComponent from '../component/wrap/sub9/GageonComponent'
import SickPoomComponent from '../component/wrap/sub10/SickPoomComponent'

// 공지사항
import NoticeComponent from './wrap/main_sub_bbs/NoticeComponent';

// 최용석
// 카트
import CartComponent from './wrap/cart/CartComponent';
// 서브페이지
import SportComponent from './wrap/sub_title_page/SportComponent';

export default function WrapComponent() {
    const [isAdmin, setIsAdmin] = React.useState(true);

    const [product, setPoduct] = React.useState({
        key:"VIEWPRODUCTKEY",
        getViewProduct : []
    });
    // 상품 클릭 이벤트 매개변수 들어옴
    const setViewProduct=(value)=>{
        let arr = [];

        if(localStorage.getItem(product.key)!==null){
            arr = JSON.parse(localStorage.getItem(product.key));
            arr = [value, ...arr]
            localStorage.setItem(product.key, JSON.stringify(arr) );  
            setPoduct({
                ...product,
                getViewProduct: arr
            });  
        }
        else {
            arr = [value]
            localStorage.setItem(product.key, JSON.stringify(arr) );
            setPoduct({
                ...product,
                getViewProduct: arr
            });
        }        
    }














    
    return (
        <div id='wrap'>
            <GlobalContext.Provider value={{isAdmin, setViewProduct}}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path='/' element={<HeaderComponent/>}>
                        <Route index element={<IntroComponent/>}/>
                        <Route path='/intro' element={<IntroComponent/>}/>
                        <Route path='/sub8' element={<SportComponent/>}/>
                        <Route path='/sub9' element={<GageonComponent/>}/>
                        <Route path='/sub10' element={<SickPoomComponent/>}/>
                        <Route path='/customer' element={<NoticeComponent/>}/>
                        <Route path='/*' element={<NotView404PageComponent/>}/>
                        <Route path='/notice_write' element={<NoticeWriteFromPageComponent />} />
                        <Route path='/notice_update' element={<NoticeUpdateFromComponent />} />
                    </Route>
                    <Route path='/cart' element={<CartHeaderComponent/>}>
                        <Route index element={<CartComponent/>}/>
                        <Route path='/cart/view' element={<CartComponent/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
            <FooterComponent/>
            </GlobalContext.Provider>
        </div>
    );
}
