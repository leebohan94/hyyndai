import React from 'react';
import './scss/women_fashion_sub.scss';
import $ from 'jquery';

function WomenFashionSubComponent(props) {
    
    React.useEffect(()=>{
        const $button=$('#womenFashion .category-box .category-btn');
        const $slideWrap=$('#womenFashion .category-box .slide-wrap');
        const $categoryBtn=$('#womenFashion .category-box .category-btn');
        let cnt=0;
        let setId=0;
        //category-box 슬라이드 함수
        function mainSlide(){
            $slideWrap.stop().animate({left: `${-100*cnt}%` }, 500, function(){
                if(cnt>4){
                    cnt=0;
                    $slideWrap.stop().animate({left: `${-100*cnt}%` },0);
                }
            });
            page();
        }
        function nextCount(){
            cnt++;
            mainSlide();
        }
        function autoTimer(){
           setId=setInterval(nextCount, 4000);
        }
        autoTimer();
        $('#womenFashion .category-box .play-btn').on({
            click(e){
                $(this).toggleClass('play');
                if($(this).hasClass('play')){
                    autoTimer();
                    alert('시작');
                }
                else {
                    clearInterval(setId);
                    alert('정지');
                }
            }
        });

        $button.on({
            click(e){
                    e.preventDefault();
                    $button.removeClass('on');
                    $(e.target).addClass('on');
                    cnt=$(e.target).index();//내가 선택한 버튼 태그의 인덱스번호 추출;

                    $slideWrap.stop().animate({left: `${-100*cnt}%` }, 500);
            }
        });
         // 페이지 함수 ==> 메인슬라이드 연결
         function page(){
            $categoryBtn.removeClass('on');
            $categoryBtn.eq(cnt>4 ? 0 : cnt).addClass('on');
        }

        ///////////////////////////////////////////////////////////
        //new-arrival-box 슬라이드 함수

        const $button2=$('#womenFashion .new-arrival-box .category-btn');
        const $slideWrap2=$('#womenFashion .new-arrival-box .slide-wrap');
        const $categoryBtn2=$('#womenFashion .new-arrival-box .category-btn');

        let cnt2=0;
        let setId2=0;
        function mainSlide2(){
            $slideWrap2.stop().animate({left: `${-100*cnt2}%` }, 500, function(){
                if(cnt2>6){
                    cnt2=0;
                    $slideWrap2.stop().animate({left: `${-100*cnt2}%` },0);
                }
            });
            page2();
        }
        function nextCount2(){
            cnt2++;
            mainSlide2();
        }
        function autoTimer2(){
            setId2=setInterval(nextCount2, 4000);
        }
        autoTimer2();
        $button2.on({
            click(e){
                e.preventDefault();
                    $button2.removeClass('on');
                    $(e.target).addClass('on');
                    cnt2=$(e.target).index();//내가 선택한 버튼 태그의 인덱스번호 추출;
                    $slideWrap2.stop().animate({left: `${-100*cnt2}%` }, 500);
            }
        })
        function page2(){
            $categoryBtn2.removeClass('on');
            $categoryBtn2.eq(cnt2>6 ? 0 : cnt2).addClass('on');
        }

        //category-list 마우스 호버 이벤트
        const $mainBtn = $('#womenFashion .left-category-box .main-btn');
        const $sub = $('#womenFashion .left-category-box .sub');
            $mainBtn.on({
                mouseenter(e){
                    $sub.removeClass('on');
                    $(e.target).next().addClass('on');
                }
            });
            $('#womenFashion .left-box').on({
                mouseleave(){
                    $sub.removeClass('on');
                }
            })
    },[]);
    return (
        <div id="womenFashion">
            <div className="container">
                <div className="gap">
                    <div className="title"></div>
                    <div className="content">
                        <div className="women-header">
                            <ul>
                                <li className='menu1'><a href="">Home</a></li>
                                <li className='menu2'>
                                    <a href="">여성패션</a>
                                    <ul className='sub'>
                                        <li><a href="">화장품</a></li>
                                        <li><a href="">명품/잡화</a></li>
                                        <li><a href="">여성패션</a></li>
                                        <li><a href="">영캐주얼</a></li>
                                        <li><a href="">진/이지</a></li>
                                        <li><a href="">남성패션</a></li>
                                        <li><a href="">유아동/문화</a></li>
                                        <li><a href="">스포츠/레저</a></li>
                                        <li><a href="">리빙/가전</a></li>
                                        <li><a href="">식품</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="category-box">
                            <h2>여성패션</h2>
                            <div className="left-box">
                                <div className="left-title-box">
                                    <h3>여성패션</h3>  
                                </div>
                                <div className="left-category-box">
                                    <ul className='category-list'>
                                        <li>
                                            <a href="" className='main-btn'>티셔츠/블라우스/니트</a>
                                            <div className="sub sub1">
                                                <ul>
                                                    <li><a href="">티셔츠</a></li>
                                                    <li><a href="">셔츠/블라우스</a></li>
                                                    <li><a href="">가디건/베스트</a></li>
                                                    <li><a href="">니트/스웨터</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="" className='main-btn'>팬츠/스커트</a>
                                            <div className="sub sub2">
                                                <ul>
                                                    <li><a href="">팬츠</a></li>
                                                    <li><a href="">스커트</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="" className='main-btn'>점퍼/코트/재킷</a>
                                            <div className="sub sub3">
                                                <ul>
                                                    <li><a href="">점퍼</a></li>
                                                    <li><a href="">코트</a></li>
                                                    <li><a href="">재킷</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="" className='main-btn'>가죽/모피</a>
                                            <div className="sub sub4">
                                                <ul>
                                                    <li><a href="">가죽</a></li>
                                                    <li><a href="">모피</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="" className='main-btn'>언더웨어/이지웨어</a>
                                            <div className="sub sub5">
                                                <ul>
                                                    <li><a href="">여성 언더웨어</a></li>
                                                    <li><a href="">남성 언더웨어</a></li>
                                                    <li><a href="">이지웨어/잠옷</a></li>
                                                    <li><a href="">임산부 언더웨어</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="" className='main-btn'>여성정장</a>
                                            <div className="sub sub6">
                                                <ul>
                                                    <li><a href="">정장/수트</a></li>
                                                    <li><a href="">원피스</a></li>
                                                    <li><a href="">티셔츠/남방/블라우스</a></li>
                                                    <li><a href="">니트/스웨터</a></li>
                                                    <li><a href="">가디건/베스트/조끼</a></li>
                                                    <li><a href="">스커트</a></li>
                                                    <li><a href="">바지/팬츠</a></li>
                                                    <li><a href="">재킷/점퍼/코트</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="right-box">
                                <div className="slide-container">
                                    <div className="slide-view">
                                        <ul className="slide-wrap">
                                            <li className="slide slide1">
                                                <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/women_fashion_slide1.jpg"} alt="" />
                                            </li>
                                            <li className="slide slide2">
                                                <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/women_fashion_slide2.jpg"} alt="" />
                                            </li>
                                            <li className="slide slide3">
                                                <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/women_fashion_slide3.jpg"} alt="" />
                                            </li>
                                            <li className="slide slide4">
                                                <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/women_fashion_slide4.jpg"} alt="" />
                                            </li>
                                            <li className="slide slide5">
                                                <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/women_fashion_slide5.jpg"} alt="" />
                                            </li>
                                            <li className="slide slide1">
                                                <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/women_fashion_slide1.jpg"} alt="" />
                                            </li>
                                        </ul>
                                        <button className="play-btn play"></button>
                                    </div>
                                </div>
                                <div className="page-btn-box">
                                    <button className='category-btn on'>MM6 & ALYX</button>
                                    <button className='category-btn'>SUMMER LOOK</button>
                                    <button className='category-btn'>로렌 랄프로렌</button>
                                    <button className='category-btn'>point bag</button>
                                    <button className='category-btn'>CKU with 손흥민</button>
                                </div>
                            </div>
                        </div>
                        <div className="search-box">
                            <div className="left-box">전체브랜드보기</div>
                            <div className="right-box">
                                <input type="text" placeholder="브랜드검색"/>
                                <a href="">
                                    
                                    <i>
                                        f
                                    </i>
                                </a>
                            </div>
                        </div>
                        <div className="special-brand-box">
                            <h2>SPECIAL BRAND</h2>
                            <ul className="brand-box">
                                    <li>
                                        <a href="">
                                            <div className="img-box">
                                                <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/specialbrand_slide1.jpg"} alt="" />
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <div className="img-box">
                                                <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/specialbrand_slide2.jpg"} alt="" />
                                            </div>
                                            
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <div className="img-box">
                                                <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/specialbrand_slide3.jpg"} alt="" />
                                            </div>
                                        </a>
                                    </li>
                            </ul>
                        </div>
                        <div className="new-arrival-box">
                            <h2>New Arrivals</h2>
                            <div className="product-box">
                                <div className="left-box">
                                    <div className="left-category-box">
                                        <button className="category-btn on"type="button">아데쿠베</button>
                                        <button className="category-btn"type="button">질스튜어트</button>
                                        <button className="category-btn"type="button">헤지스 레이디</button>
                                        <button className="category-btn"type="button">폴로랄프로렌(여성)</button>
                                        <button className="category-btn"type="button">랄프로렌 컬렉션스토어</button>
                                        <button className="category-btn"type="button">CK언더웨어</button>
                                        <button className="category-btn"type="button">게스언더웨어</button>
                                    </div>
                                </div>
                                <div className="right-box">
                                    <div className="slide-container">
                                        <div className="slide-view">
                                            <ul className="slide-wrap">
                                                {/* 아데쿠베 */}
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/new_arrival1.jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">1,247,400원</span>
                                                                <span className="original-price">1,386,000원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                [아데쿠베] 마티체브스키 (MATICEVSKI) 핑키 앱스트랙트 아키타이프 드레이프 탑(TO5112/22)
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 5%</span>
                                                                <span className="d2">무 12</span>
                                                                <span className="d3">무료배송</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/new_arrival1 (1).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">1,247,400원</span>
                                                                <span className="original-price">1,386,000원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                [아데쿠베] 마티체브스키 (MATICEVSKI) 테너시티 튜브 드레스 (DR5109/22)
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 5%</span>
                                                                <span className="d2">무 12</span>
                                                                <span className="d3">무료배송</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/new_arrival1 (2).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">1,247,400원</span>
                                                                <span className="original-price">1,386,000원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                [아데쿠베] 마티체브스키 (MATICEVSKI) 블랙 악셀러레이트 미니 스커트 (SK5077/22)
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 5%</span>
                                                                <span className="d3">무료배송</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                {/* 질스튜어트 */}
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/new_arrival1 (3).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">0원</span>
                                                                <span className="original-price">559,000원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                [질스튜어트] 블랙 러플 소매 니트 가디건 JSSW3B130BK
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 5%</span>
                                                                <span className="d2"></span>
                                                                <span className="d3">무료배송</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/new_arrival1 (4).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">0원</span>
                                                                <span className="original-price">559,000원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                 [질스튜어트] 그린 짜임 트위드 니트 가디건 JSSW3B1000E2
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 5%</span>
                                                                <span className="d2"></span>
                                                                <span className="d3">무료배송</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/new_arrival1 (5).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">0원</span>
                                                                <span className="original-price">1,190,000원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                [질스튜어트] 블랙 양가죽 싱글 버튼 크롭 긴팔캐주얼점퍼 JSJU3B200BK
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 5%</span>
                                                                <span className="d2">무 12</span>
                                                                <span className="d3">무료배송</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                {/* 헤지스 레이디 */}
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/new_arrival1 (6).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">0원</span>
                                                                <span className="original-price">175,200원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                헤지스레이디스 HSPA3B501 스트레치 면혼방 데님팬츠
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 5%</span>
                                                                <span className="d2">스토어픽</span>
                                                                <span className="d3"></span>
                                                                <span className="d4">무료배송</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/new_arrival1 (7).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">0원</span>
                                                                <span className="original-price">97,300원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                헤지스레이디스 HSTS3BC35 단색 면혼방 반팔카라티셔츠
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 5%</span>
                                                                <span className="d2">스토어픽</span>
                                                                <span className="d3"></span>
                                                                <span className="d4">무료배송</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/new_arrival1 (8).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">0원</span>
                                                                <span className="original-price">79,200원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                헤지스레이디스 HSTS3B324 스트라이프 면 반팔티셔츠
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 5%</span>
                                                                <span className="d2">스토어픽</span>
                                                                <span className="d3"></span>
                                                                <span className="d4">무료배송</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                {/* 폴로란프로렌(여성) */}       
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/new_arrival1 (9).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">0원</span>
                                                                <span className="original-price">139,300원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                폴로 랄프 로렌 여성 케이블 니트 코튼 V넥 스웨터 베스트(WMPOSWENC020672700)
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 5%</span>
                                                                <span className="d2"></span>
                                                                <span className="d3"></span>
                                                                <span className="d4">무료배송</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/new_arrival1 (10).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">0원</span>
                                                                <span className="original-price">153,300원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                            폴로 랄프 로렌 여성 오버사이즈 코튼 트윌 셔츠(WMPOSHTNDO20329250)
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 5%</span>
                                                                <span className="d2"></span>
                                                                <span className="d3"></span>
                                                                <span className="d4">무료배송</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/new_arrival1 (11).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">0원</span>
                                                                <span className="original-price">239,000원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                폴로 랄프 로렌 여성 릴렉스핏 리넨 셔츠(WMPOSHTNDO20437410)
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 5%</span>
                                                                <span className="d2"></span>
                                                                <span className="d3"></span>
                                                                <span className="d4">무료배송</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                {/* 랄프로렌 컬렉션스토어 */}                                       
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/new_arrival1 (12).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">0원</span>
                                                                <span className="original-price">1,500,000원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                Collection 실라 스키니 앵클 데님 진 (WMCLDNM64P20037001)
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 5%</span>
                                                                <span className="d2"></span>
                                                                <span className="d3">무 6</span>
                                                                <span className="d4">무료배송</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/new_arrival1 (13).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">0원</span>
                                                                <span className="original-price">1,800,000원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                Collection 750 스트레이트 앵클 진 (WMCLDNM64P20036200)
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 5%</span>
                                                                <span className="d2"></span>
                                                                <span className="d3">무 6</span>
                                                                <span className="d4">무료배송</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/new_arrival1 (14).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">0원</span>
                                                                <span className="original-price">1,350,000원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                Collection 말로 글렌 플래드 트위드 쇼트 (WMCLSHON7620018200)
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 5%</span>
                                                                <span className="d2"></span>
                                                                <span className="d3">무 6</span>
                                                                <span className="d4">무료배송</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                {/* CK언더웨어 */}
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/new_arrival1 (15).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">0원</span>
                                                                <span className="original-price">81,190원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                [CK언더웨어]모던 코튼 트라이앵글 여성SET 3종택1 QF5650 F3787AD
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 5%</span>
                                                                <span className="d2"></span>
                                                                <span className="d3"></span>
                                                                <span className="d4">무료배송</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/new_arrival1 (16).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">0원</span>
                                                                <span className="original-price">81,190원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                CK언더웨어[선물추천] 모던 코튼 여성세트 QF5490 F3787AD 020
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 5%</span>
                                                                <span className="d2"></span>
                                                                <span className="d3"></span>
                                                                <span className="d4">무료배송</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/new_arrival1 (17).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">0원</span>
                                                                <span className="original-price">22,500원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                [CK언더웨어](선물포장) (D1618O-020) 여성 캐러셀 비키니 팬티
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 5%</span>
                                                                <span className="d2"></span>
                                                                <span className="d3"></span>
                                                                <span className="d4"></span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                {/* 게스언더웨어 */}
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/new_arrival1 (18).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">7번쨰1,247,400원</span>
                                                                <span className="original-price">1,386,000원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                [아데쿠베] 마티체브스키 (MATICEVSKI) 핑키 앱스트랙트 아키타이프 드레이프 탑(TO5112/22)
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 5%</span>
                                                                <span className="d2"></span>
                                                                <span className="d3">무 6</span>
                                                                <span className="d4">무료배송</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/new_arrival1 (19).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">1,247,400원</span>
                                                                <span className="original-price">1,386,000원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                [아데쿠베] 마티체브스키 (MATICEVSKI) 핑키 앱스트랙트 아키타이프 드레이프 탑(TO5112/22)
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 5%</span>
                                                                <span className="d2"></span>
                                                                <span className="d3">무 6</span>
                                                                <span className="d4">무료배송</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/new_arrival1 (20).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">1,247,400원</span>
                                                                <span className="original-price">1,386,000원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                [아데쿠베] 마티체브스키 (MATICEVSKI) 핑키 앱스트랙트 아키타이프 드레이프 탑(TO5112/22)
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 5%</span>
                                                                <span className="d2"></span>
                                                                <span className="d3">무 6</span>
                                                                <span className="d4">무료배송</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                {/* 반복용도 */}
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/60A1678525_0_300.jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">1,247,400원</span>
                                                                <span className="original-price">1,386,000원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                [아데쿠베] 마티체브스키 (MATICEVSKI) 핑키 앱스트랙트 아키타이프 드레이프 탑(TO5112/22)
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 5%</span>
                                                                <span className="d2">무 12</span>
                                                                <span className="d3">무료배송</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/60A1678525_0_300.jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">1,247,400원</span>
                                                                <span className="original-price">1,386,000원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                [아데쿠베] 마티체브스키 (MATICEVSKI) 핑키 앱스트랙트 아키타이프 드레이프 탑(TO5112/22)
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 5%</span>
                                                                <span className="d2">무 12</span>
                                                                <span className="d3">무료배송</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/60A1678525_0_300.jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">1,247,400원</span>
                                                                <span className="original-price">1,386,000원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                [아데쿠베] 마티체브스키 (MATICEVSKI) 핑키 앱스트랙트 아키타이프 드레이프 탑(TO5112/22)
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 5%</span>
                                                                <span className="d2">무 12</span>
                                                                <span className="d3">무료배송</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                   

                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default WomenFashionSubComponent;