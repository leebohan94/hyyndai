import React from 'react';

export default function TshirtComponent(){

    const [state, setState] = React.useState({
        isFixed: false,
        isSub1: false,
        isSub2: false        
    });

    // 고객센터 서브메뉴(툴팁메뉴) 마우스 엔터 이벤트
    const onMouseOverSub1=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isSub1: true
        })
    }

    
    // 고객센터 서브1 메뉴를 마우스가 떠나면
    const onMouseLeaveSub1=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isSub1: false
        })
    }   


    return (
        <main id='tshirt'>
            <div className="container">
                <div className="sub-nav">
                    <ul className='sub-nav-list'>
                        <li><a href="!#">Home</a><i>&gt;</i></li>
                        <li><a href="!#">남성패션</a><img src={process.env.PUBLIC_URL+"/lbh/img/sub/sub5/icon_down2.png"} alt="" /></li>
                    </ul>
                </div>
                <div className="content-wrap">
                    <div className="content">
                        <div className="category-top">
                            <h2>남성패션</h2>
                            <div className="category-left">
                                <em>남성패션</em>
                                <div className="category-left-list">
                                    <ul>
                                        <li>
                                            <a onMouseOver={onMouseOverSub1} href="!#">정장/수트</a>
                                            {
                                                 state.isSub1 && (
                                                    <div className="sub" onMouseLeave={onMouseLeaveSub1}>
                                                        <ul>
                                                            <li>
                                                                <a href="!#">정장</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                 )
                                            }
                                        </li>
                                        <li>
                                            <a href="!#">재킷/점퍼/코트</a>
                                            
                                        </li>
                                        <li><a href="!#">티셔츠/셔츠/니트/가디건</a></li>
                                        <li><a href="!#">팬츠</a></li>
                                        <li><a href="!#">패션소품</a></li>
                                        <li><a href="!#">캐주얼 의류</a></li>
                                        <li><a href="!#">남성 언더웨어/이지웨어</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="category-right">
                                <div className="slide-img">
                                    <li>
                                        <a href="!#">
                                            <img src={process.env.PUBLIC_URL+"/img/man/dispbnnr2005111020230609134623.jpg"} alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className='hide' href="!#">
                                            <img src={process.env.PUBLIC_URL+"/img/man/dispbnnr2005111020230512170050.jpg"} alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className='hide' href="!#">
                                            <img src={process.env.PUBLIC_URL+"/img/man/dispbnnr2005111020230504091326.jpg"} alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className='hide' href="!#">
                                            <img src={process.env.PUBLIC_URL+"/img/man/dispbnnr2005115020230512170058.jpg"} alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className='hide' href="!#">
                                            <img src={process.env.PUBLIC_URL+"/img/man/dispbnnr2005115020230322170208.jpg"} alt="" />
                                        </a>
                                    </li>
                                </div>
                                <ul className="brand-list">
                                    <li>
                                        <a href="!#">폴스미스 시즌오프</a>
                                    </li>
                                    <li>
                                        <a href="!#">Timeless Fashion</a>
                                    </li>
                                    <li>
                                        <a href="!#">컨템포러리 종합전</a>
                                    </li>
                                    <li>
                                        <a href="!#">아버지를 위한 선물</a>
                                    </li>
                                    <li>
                                        <a href="!#">맞춤 정장</a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="brand-search-wrap">
                            <h2><a href="!#">전체브랜드보기</a></h2>
                            <div className="brand-search-form">
                                <input type="text" name='' id='' placeholder='브랜드검색'/>
                                <a href="!#">

                                </a>
                            </div>
                        </div>
                        <div className="special-brand">
                            <h2>SPECIAL BRAND</h2>
                            <div className="slider-wrap">
                                <ul className='slider'>
                                    <li>
                                        <a href="!#">
                                            <img src={process.env.PUBLIC_URL+"/img/man/large202234.jpg"} alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="!#">
                                            <img src={process.env.PUBLIC_URL+"/img/man/large173260.jpg"} alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="!#">
                                            <img src={process.env.PUBLIC_URL+"/img/man/large173436.jpg"} alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-title">
                            <h3>New Arrivals</h3>
                        </div>
                        <div className="product-wrap">
                            <div className="product-inner-wrap">
                                <div className="left">
                                    <ul className='nav'>
                                        <li>
                                            <a href="!#">제냐</a>
                                        </li>
                                        <li>
                                            <a href="!#">랄프로렌 퍼플라벨</a>
                                        </li>
                                        <li>
                                            <a href="!#">RRL</a>
                                        </li>
                                        <li>
                                            <a href="!#">프레드페리</a>
                                        </li>
                                        <li>
                                            <a href="!#">빈폴멘</a>
                                        </li>
                                        <li>
                                            <a href="!#">듀퐁셔츠</a>
                                        </li>
                                        <li>
                                            <a href="!#">카운테스마라</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="right">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

