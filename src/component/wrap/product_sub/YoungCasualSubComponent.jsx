import React from 'react';
import './scss/young_casual_sub.scss';
import $ from 'jquery';

function YoungCasualSubComponent(props) {
    
    React.useEffect(()=>{
        
        const $button=$('#youngCasual .category-box .category-btn');
        const $slideWrap=$('#youngCasual .category-box .slide-wrap');
        const $categoryBtn=$('#youngCasual .category-box .category-btn');


        
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
        $('#youngCasual .category-box .play-btn').on({
            click(e){
                e.preventDefault();
                $(this).toggleClass('play');
                if($(this).hasClass('play')){
                    autoTimer();
                }
                else {
                    clearInterval(setId);
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

        const $button2=$('#youngCasual .new-arrival-box .category-btn');
        const $slideWrap2=$('#youngCasual .new-arrival-box .slide-wrap');
        const $categoryBtn2=$('#youngCasual .new-arrival-box .category-btn');

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
        const $mainBtn = $('#youngCasual .left-category-box .main-btn');
        const $sub = $('#youngCasual .left-category-box .sub');
            $mainBtn.on({
                mouseenter(e){
                    $sub.removeClass('on');
                    $(e.target).next().addClass('on');
                }
            });
            $('#youngCasual .left-box').on({
                mouseleave(){
                    $sub.removeClass('on');
                }
            })
    },[]);
    return (
        <div id="youngCasual">
            <div className="container">
                <div className="gap">
                    <div className="title"></div>
                    <div className="content">
                        <div className="category-box">
                            <h2>영캐주얼</h2>
                            <div className="left-box">
                                <div className="left-title-box">
                                    <h3>영캐주얼</h3>  
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
                                            <a href="" className='main-btn'>카디건/베스트/니트/스웨터</a>
                                            <div className="sub sub2">
                                                <ul>
                                                    <li><a href="">니트/스웨터</a></li>
                                                    <li><a href="">카디건/베스트</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="" className='main-btn'>팬츠/스커트</a>
                                            <div className="sub sub3">
                                                <ul>
                                                    <li><a href="">팬츠</a></li>
                                                    <li><a href="">스커트</a></li>
                                                    <li><a href="">트레이닝복</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="" className='main-btn'>정장/수트/원피스</a>
                                            <div className="sub sub4">
                                                <ul>
                                                    <li><a href="">정장/수트</a></li>
                                                    <li><a href="">원피스</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="" className='main-btn'>재킷/코트/점퍼</a>
                                            <div className="sub sub5">
                                                <ul>
                                                    <li><a href="">자켓</a></li>
                                                    <li><a href="">코트</a></li>
                                                    <li><a href="">점퍼</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="" className='main-btn'>가죽/모피</a>
                                            <div className="sub sub6">
                                                <ul>
                                                    <li><a href="">가죽</a></li>
                                                    <li><a href="">모피</a></li>
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
                                                <img src={process.env.PUBLIC_URL+"/PJH/img/youngCasual/young_casual_slide1.jpg"} alt="" />
                                            </li>
                                            <li className="slide slide2">
                                                <img src={process.env.PUBLIC_URL+"/PJH/img/youngCasual/young_casual_slide2.jpg"} alt="" />
                                            </li>
                                            <li className="slide slide3">
                                                <img src={process.env.PUBLIC_URL+"/PJH/img/youngCasual/young_casual_slide3.jpg"} alt="" />
                                            </li>
                                            <li className="slide slide4">
                                                <img src={process.env.PUBLIC_URL+"/PJH/img/youngCasual/young_casual_slide4.jpg"} alt="" />
                                            </li>
                                            <li className="slide slide5">
                                                <img src={process.env.PUBLIC_URL+"/PJH/img/youngCasual/young_casual_slide5.jpg"} alt="" />
                                            </li>
                                            <li className="slide slide1">
                                                <img src={process.env.PUBLIC_URL+"/PJH/img/youngCasual/young_casual_slide1.jpg"} alt="" />
                                            </li>
                                        </ul>
                                        <button className="play-btn play"></button>
                                    </div>
                                </div>
                                <div className="page-btn-box">
                                    <button className='category-btn on'>에잇세컨즈</button>
                                    <button className='category-btn'>ULlala!</button>
                                    <button className='category-btn'>원더플레이스</button>
                                    <button className='category-btn'>O!Oi x NEWJEANS</button>
                                    <button className='category-btn'>FOURM THE STORE</button>
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
                                    
                                        <button className="category-btn on"type="button">지컷</button>
                                        <button className="category-btn"type="button">베네통</button>
                                        <button className="category-btn"type="button">톰보이</button>
                                        <button className="category-btn"type="button">플라스틱아일랜드</button>
                                        <button className="category-btn"type="button">케네스레이디</button>
                                        <button className="category-btn"type="button">올리브데올리브</button>
                                        <button className="category-btn"type="button">세컨스킨</button>
                                        
                                    </div>
                                </div>
                                <div className="right-box">
                                    <div className="slide-container">
                                        <div className="slide-view">
                                            <ul className="slide-wrap">
                                                {/* 지컷 */}
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/youngCasual/new arrival1 (0).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">66,870원</span>
                                                                <span className="original-price">83,580원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                [지컷] 백 버튼 볼륨 슬리브 맨투맨 (7222340001)
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
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/youngCasual/new arrival1 (1).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">94,870원</span>
                                                                <span className="original-price">118,580원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                [지컷] 더블 빅 카라 나일론 원피스 (7222337604)
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 5%</span>
                                                                <span className="d2">스토어픽</span>
                                                                <span className="d3"></span>
                                                                <span className="d4"></span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/youngCasual/new arrival1 (2).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">111,670원</span>
                                                                <span className="original-price">139,580원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                [지컷] 후드 니트 믹스 벨티드 원피스 (7222337602)
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

                                                {/* 베네통 */}
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/youngCasual/new arrival1 (3).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">2번쨰1,247,400원</span>
                                                                <span className="original-price">189,000원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                베네통 (BAPT91341)앞절개 코튼 팬츠
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
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/youngCasual/new arrival1 (4).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">0원</span>
                                                                <span className="original-price">103,200원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                베네통 (BAPT99331)핫픽스 밴딩 반바지    
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
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/youngCasual/new arrival1 (5).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">0원</span>
                                                                <span className="original-price">179,000원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                베네통 (BAPT92331)밴딩 와이드 팬츠
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

                                                {/* 톰보이 */}
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/youngCasual/new arrival1 (6).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">38,080원</span>
                                                                <span className="original-price">47,600원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                TOMBOY 반집업카라티셔츠 9192422112
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
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/youngCasual/new arrival1 (7).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">85,920원</span>
                                                                <span className="original-price">107,400원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                [톰보이](9103252321) 스카시 베스트
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
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/youngCasual/new arrival1 (8).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">105,120원</span>
                                                                <span className="original-price">131,400원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                [톰보이](9103251331) 스카시 가디건
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

                                                {/* 플라스틱아일랜드 오류있음*/}
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/womenSub/60A1678525_0_300.jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">오류오류오류1,247,400원</span>
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
                                                
                                                {/* 케네스레이디 */}
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/youngCasual/new arrival1 (12).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">0원</span>
                                                                <span className="original-price">125,300원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                [케네스레이디] 린디온 H라인 패치포켓 스커트 EWSKNF4100
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 10%</span>
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
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/youngCasual/new arrival1 (13).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">0원</span>
                                                                <span className="original-price">181,300원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                [케네스레이디] 린디온 원버튼 자켓 EWJKNF4100
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 10%</span>
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
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/youngCasual/new arrival1 (14).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">0원</span>
                                                                <span className="original-price">223,200원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                [케네스레이디] (E303) 체킨슨 솔리드 크롭자켓 EWJKNE47
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 10%</span>
                                                                <span className="d2"></span>
                                                                <span className="d3"></span>
                                                                <span className="d4">무료배송</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>

                                                {/* 올리브데올리브 */}
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/youngCasual/new arrival1 (15).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">152,320원</span>
                                                                <span className="original-price">190,400원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                올리브데올리브OW3MCL615 밴딩 와이드 큐롯 팬츠
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
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/youngCasual/new arrival1 (16).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">101,120원</span>
                                                                <span className="original-price">126,400원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                올리브데올리브 OJ3MCL456 컬러풀포인트 배기핏데님팬츠
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
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/youngCasual/new arrival1 (17).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">49,920원</span>
                                                                <span className="original-price">62,400원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                올리브데올리브 OW3MCE449 퍼프소매포인트 데일리반팔티셔츠
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
                                                
                                                {/* 세컨스킨 */}
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/youngCasual/new arrival1 (18).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">44,240원</span>
                                                                <span className="original-price">55,300원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                [세컨스킨] 나일론 니트 민소매 크롭탑 WDWST5500
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 10%</span>
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
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/youngCasual/new arrival1 (19).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">33,040원</span>
                                                                <span className="original-price">41,300원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                [세컨스킨] 나일론 니트 브라미 탑 WDWST5400
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 10%</span>
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
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/youngCasual/new arrival1 (20).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">31,200원</span>
                                                                <span className="original-price">39,000원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                [세컨스킨] 솔리드 와이드 롱팬츠 Q9WFN3102
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 10%</span>
                                                                <span className="d2">스토어픽</span>
                                                                <span className="d3"></span>
                                                                <span className="d4">무료배송</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                {/* 반복용도 */}
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/youngCasual/new arrival1 (0).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">66,870원</span>
                                                                <span className="original-price">83,580원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                [지컷] 백 버튼 볼륨 슬리브 맨투맨 (7222340001)
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
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/youngCasual/new arrival1 (1).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">94,870원</span>
                                                                <span className="original-price">118,580원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                [지컷] 더블 빅 카라 나일론 원피스 (7222337604)
                                                            </div>
                                                            <div className="additional-info">
                                                                <span className="d1">현대백화점 5%</span>
                                                                <span className="d2">스토어픽</span>
                                                                <span className="d3"></span>
                                                                <span className="d4"></span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className='slide'>
                                                    <a href="">
                                                        <div className="img-box">
                                                            <img src={process.env.PUBLIC_URL+"/PJH/img/youngCasual/new arrival1 (2).jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <div className="price-info">
                                                                <span className="discount-price">111,670원</span>
                                                                <span className="original-price">139,580원</span>
                                                            </div>
                                                            <div className="goods-info">
                                                                [지컷] 후드 니트 믹스 벨티드 원피스 (7222337602)
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

export default YoungCasualSubComponent;