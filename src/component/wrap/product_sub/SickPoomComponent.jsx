import React from 'react';
import './scss/sickpoom.scss'
import $ from'jquery'
import axios from 'axios'
import SickPoomChildComponent from './SickPoomChildComponent'


export default function SickPoomComponent () {

  const [state, setState] = React.useState({
    식품:[],
    first:[],
    last:[]
  })

  const getProduct=()=>{
    axios({
      url:'./data/notice_page/product.json',
      method:'GET'
    })
    .then((res)=>{
      let living = (res.data.상품).filter((item)=>item.제품종류==="식품");
      setState({
        ...state,
        식품:living,
        first:living.slice(0,3),
        last:living.slice(-3),
      })
    })
    .catch((err)=>{
      console.log(err + "오류")
    })
  }
  React.useEffect(()=>{
    getProduct();
  },[])
    React.useEffect(()=>{
        const $middleSlideContainer     = $('#sickpoom .middle-slide-container');
        const $middleSlideWrap          = $('#sickpoom .middle-slide-wrap');
        const $middleSlide              = $('#sickpoom .middle-slide');
        const $slidea              = $('#sickpoom .slide a');
    
        let cnt=0;
        let setId =0;
        function mainSlide(){
          $('#sickpoom .middle-slide-wrap').stop().animate({left: `${-100*cnt}%`},600,()=>{
            if(cnt > 4) cnt=0;
            if(cnt < 0) cnt=4;
            $('#sickpoom .middle-slide-wrap').stop().animate({left: `${-100*cnt}%`},0)
          });
    
          pageNation();
        }
        function nextCount(){
          cnt++;
          mainSlide();
        }
        function prevCount(){
          cnt--;
          mainSlide();
        }
        function autoTimer(){
          setId = setInterval(nextCount, 3000);
        }
        autoTimer();
        
        $middleSlideContainer.on({
          mouseenter(){
            clearInterval(setId);
          },
          mouseleave(){
            autoTimer();
          }
        })
        $slidea.on({
          click(e){
              e.preventDefault();
          }
      })  
        function pageNation(){
          $('#sickpoom .middle-page-btn').removeClass('on');
          $('#sickpoom .middle-page-btn').eq( cnt > 4 ? 0 : cnt).addClass('on');
        }
    
        $('#sickpoom .middle-page-btn').each(function(idx){
          $(this).on({
              click(e){
                  e.preventDefault();
                  clearInterval(setId);
                  cnt = idx; 
                  mainSlide();
                  autoTimer();
              }
          });
      });
      },[])
      React.useEffect(()=>{
        const $bottomSlideContainer    = $('#sickpoom .bottom-slide-container');
        const $bottomSlideWrap          = $('#sickpoom-slide-wrap');
        const $bottomSlide             = $('#sickpoom .bottom-slide');
        const $bottomSlidea              = $('#sickpoom .bottom-slide a');
    
        let cnt=0;
        let setId =0;
        function mainSlide(){
          $('#sickpoom .bottom-slide-wrap').stop().animate({left: `${-100*cnt}%`},700,()=>{
            if(cnt > 6) cnt=0;
            if(cnt < 0) cnt=6;
            $('#sickpoom .bottom-slide-wrap').stop().animate({left: `${-100*cnt}%`},0)
          });
    
          pageNation();
        }
        function nextCount(){
          cnt++;
          mainSlide();
        }
        function prevCount(){
          cnt--;
          mainSlide();
        }
        function autoTimer(){
          setId = setInterval(nextCount, 3000);
        }
        autoTimer();
        
        $bottomSlideContainer.on({
          mouseenter(){
            clearInterval(setId);
          },
          mouseleave(){
            autoTimer();
          }
        })
        $bottomSlidea.on({
          click(e){
              e.preventDefault();
          }
      })  
        function pageNation(){
          $('#sickpoom .bottom-left-page-btn-box').removeClass('on');
          $('#sickpoom .bottom-left-page-btn-box').eq( cnt > 6 ? 0 : cnt).addClass('on');
        }
    
        $('#sickpoom .bottom-left-page-btn-box').each(function(idx){
          $(this).on({
              click(e){
                  e.preventDefault();
                  clearInterval(setId);
                  cnt = idx; 
                  mainSlide();
                  autoTimer();
              }
          });
      });
      },[])
    return (
        <div id='sickpoom'>
            <div className="container">
            <div className="top">
            <div className="title">
              <div className="top-title">
                <ul>
                  <li>
                    <h1>Home</h1>
                  </li>
                  <li>
                    <img src={process.env.PUBLIC_URL+"/img/HSM/sub10/sub914.png"} alt="" />
                  </li>
                  <li>
                    <h2>
                      식품
                      <div className="top-title-text-box">
                        <ul>
                          <li>
                            <h5>화장품</h5>
                            <img src={process.env.PUBLIC_URL+"/img/HSM/sub10/sub937.png"} alt="" />
                          </li>
                          <li>
                            <h5>명품/잡화</h5>
                            <img src={process.env.PUBLIC_URL+"/img/HSM/sub10/sub937.png"} alt="" />
                          </li>
                          <li>
                            <h5>여성패션</h5>
                            <img src={process.env.PUBLIC_URL+"/img/HSM/sub10/sub937.png"} alt="" />
                          </li>
                          <li>
                            <h5>영캐주얼</h5>
                            <img src={process.env.PUBLIC_URL+"/img/HSM/sub10/sub937.png"} alt="" />
                          </li>
                          <li>
                            <h5>진/이지</h5>
                            <img src={process.env.PUBLIC_URL+"/img/HSM/sub10/sub937.png"} alt="" />
                          </li>
                          <li>
                            <h5>남성패션</h5>
                            <img src={process.env.PUBLIC_URL+"/img/HSM/sub10/sub937.png"} alt="" />
                          </li>
                          <li>
                            <h5>유아동/문화</h5>
                            <img src={process.env.PUBLIC_URL+"/img/HSM/sub10/sub937.png"} alt="" />
                          </li>
                          <li>
                            <h5>스포츠/레저</h5>
                            <img src={process.env.PUBLIC_URL+"/img/HSM/sub10/sub937.png"} alt="" />
                          </li>
                          <li>
                            <h5>리빙/가전</h5>
                            <img src={process.env.PUBLIC_URL+"/img/HSM/sub10/sub937.png"} alt="" />
                          </li>
                          <li>
                            <h5>식품</h5>
                            <img src={process.env.PUBLIC_URL+"/img/HSM/sub10/sub937.png"} alt="" />
                          </li>
                        </ul>
                      </div>
                    </h2>
                  </li>
                  <li>
                    <a href="!#">
                      <img src={process.env.PUBLIC_URL+"/img/HSM/sub10/icon_down_new.png"} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bottom-title">
                <h2>식품</h2>
              </div>
            </div>
          </div>
          <div className="middle1">
            <div className="middle1-left-box">
              <div className="left-box-top">
                <h1>식품</h1>
              </div>
              <div className="left-box-bottom">
                <ul>
                  <li>
                      <h5>
                      그로서리
                        <div className="left-box-bottom1">
                          <ul>
                            <li>
                              <a href="!#">수입오일/소스</a>
                            </li>
                            <li>
                              <a href="!#">간편식/안주</a>
                            </li>
                          </ul>
                        </div>
                      </h5>
                  </li>
                  <li>
                      <h5>
                      디저트
                        <div className="left-box-bottom2">
                          <ul>
                            <li>
                              <a href="!#">베이커리/쿠키</a>
                            </li>
                            <li>
                              <a href="!#">초콜릿/젤리/캔디</a>
                            </li>
                          </ul>
                        </div>
                      </h5>
                  </li>
                  <li>
                      <h5>
                      차/커피/음료
                        <div className="left-box-bottom3">
                          <ul>
                            <li>
                              <a href="!#">차</a>
                            </li>
                            <li>
                              <a href="!#">과일차/청</a>
                            </li>
                            <li>
                              <a href="!#">선물세트</a>
                            </li>
                            <li>
                              <a href="!#">커피</a>
                            </li>
                            <li>
                              <a href="!#">과일주스/이온음료</a>
                            </li>
                          </ul>
                        </div>
                      </h5>
                  </li>
                  <li>
                      <h5>
                      건강식품/홍상
                        <div className="left-box-bottom4">
                          <ul>
                            <li>
                              <a href="!#">홍삼/인삼/수삼</a>
                            </li>
                            <li>
                              <a href="!#">비타민</a>
                            </li>
                            <li>
                              <a href="!#">오메가/루테인</a>
                            </li>
                            <li>
                              <a href="!#">칼슘/마그네슘/철분</a>
                            </li>
                            <li>
                              <a href="!#">유산균</a>
                            </li>
                            <li>
                              <a href="!#">콜라겐/다이어트</a>
                            </li>
                            <li>
                              <a href="!#">초유/산양유</a>
                            </li>
                            <li>
                              <a href="!#">꿀/프로폴리스</a>
                            </li>
                            <li>
                              <a href="!#">기타 건강식품</a>
                            </li>
                          </ul>
                        </div>
                      </h5>
                  </li>
                  <li>
                      <h5>
                      기프티콘
                        <div className="left-box-bottom5">
                          <ul>
                            <li>
                              <a href="!#">스타벅스</a>
                            </li>
                            <li>
                              <a href="!#">커피빈</a>
                            </li>
                            <li>
                              <a href="!#">배스킨라빈스</a>
                            </li>
                            <li>
                              <a href="!#">피그인더가든</a>
                            </li>
                            <li>
                              <a href="!#">라그릴리아</a>
                            </li>
                          </ul>
                        </div>
                      </h5>
                  </li>
                </ul>
              </div>
            </div>
            <div className="middle1-right-box">
              <div className="middle-slide-container">
                <div className="middle-slide-view">
                  <ul className="middle-slide-wrap">
                    <li className="middle-slide slide5">
                      <a href="!#">
                        <img src={process.env.PUBLIC_URL+"/img/HSM/sub10/sickpoom33.jpg"} alt="" />
                      </a>
                    </li>
                    <li className="middle-slide slide1">
                      <a href="!#">
                        <img src={process.env.PUBLIC_URL+"/img/HSM/sub10/sickpoom34.jpg"} alt="" />
                      </a>
                    </li>
                    <li className="middle-slide slide2">
                      <a href="!#">
                        <img src={process.env.PUBLIC_URL+"/img/HSM/sub10/sickpoom35.jpg"} alt="" />
                      </a>
                    </li>
                    <li className="middle-slide slide3">
                      <a href="!#">
                        <img src={process.env.PUBLIC_URL+"/img/HSM/sub10/sickpoom36.jpg"} alt="" />
                      </a>
                    </li>
                    <li className="middle-slide slide4">
                      <a href="!#">
                        <img src={process.env.PUBLIC_URL+"/img/HSM/sub10/sickpoom37.jpg"} alt="" />
                      </a>
                    </li>
                    <li className="middle-slide slide5">
                      <a href="!#">
                        <img src={process.env.PUBLIC_URL+"/img/HSM/sub10/sickpoom33.jpg"} alt="" />
                      </a>
                    </li>
                    <li className="middle-slide slide1">
                      <a href="!#">
                        <img src={process.env.PUBLIC_URL+"/img/HSM/sub10/sickpoom34.jpg"} alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="middle-page-btn-box">
                <span>
                  <a href="!#" className="middle-page-btn on">
                  산지스토리관
                  </a>
                </span>
                <span>
                  <a href="!#" className="middle-page-btn">
                  현대식품관투홈
                  </a>
                </span>
                <span>
                  <a href="!#" className="middle-page-btn">
                  미식선물
                  </a>
                </span>
                <span>
                  <a href="!#" className="middle-page-btn">
                  청과 큐레이션박스
                  </a>
                </span>
                <span>
                  <a href="!#" className="middle-page-btn">
                  퓨이탄프라이드
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="middle2">
            <div className="middle2-left">
              <h1>전체브랜드보기</h1>
              <a href="!#">
                <img src={process.env.PUBLIC_URL+"/img/HSM/sub10/sub937.png"} alt="" />
              </a>
            </div>
            <div className="middle2-right">
              <ul>
                <li>
                  <label htmlFor="userSearch">
                    <input
                      type="text"
                      name="user_search"
                      id="userSearch"
                      placeholder="브랜드검색"
                    />
                  </label>
                </li>
                <li>
                  <h2>
                    <a href="!#">
                      <img src={process.env.PUBLIC_URL+"/img/HSM/sub10/sickpoom02.png"} alt="" />
                    </a>
                  </h2>
                </li>
              </ul>
            </div>
          </div>
          <div className="middle3">
            <span>
                <h1>SPECIAL BRAND</h1>
            </span>
            <div className="middle3-pics">
                <ul>
                    <li><a href="!#"><img src={process.env.PUBLIC_URL+"/img/HSM/sub10/sickpoom40.jpg"} alt="" /></a></li>
                    <li><a href="!#"><img src={process.env.PUBLIC_URL+"/img/HSM/sub10/sickpoom41.jpg"} alt="" /></a></li>
                    <li><a href="!#"><img src={process.env.PUBLIC_URL+"/img/HSM/sub10/sickpoom42.jpg"} alt="" /></a></li>
                </ul>
            </div>
          </div>
          <div className="bottom">
            <span>
              <h1>MD추천상품</h1>
            </span>
            <div className="bottom-all">
              <div className="bottom-left-page-btn">
                <ul>
                  <li className="bottom-left-page-btn-box on">
                    <h1>만전식품</h1>
                    <img src={process.env.PUBLIC_URL+"/img/HSM/sub10/bg_green_arrow.png"} alt="" />
                  </li>
                  <li className="bottom-left-page-btn-box">
                    <h2>벨로타벨로타</h2>
                    <img src={process.env.PUBLIC_URL+"/img/HSM/sub10/bg_green_arrow.png"} alt="" />
                  </li>
                  <li className="bottom-left-page-btn-box">
                    <h3>한결영농</h3>
                    <img src={process.env.PUBLIC_URL+"/img/HSM/sub10/bg_green_arrow.png"} alt="" />
                  </li>
                  <li className="bottom-left-page-btn-box">
                    <h4>식도락푸트(백화점)</h4>
                    <img src={process.env.PUBLIC_URL+"/img/HSM/sub10/bg_green_arrow.png"} alt="" />
                  </li>
                  <li className="bottom-left-page-btn-box">
                    <h5>에코솔트(백화점)</h5>
                    <img src={process.env.PUBLIC_URL+"/img/HSM/sub10/bg_green_arrow.png"} alt="" />
                  </li>
                  <li className="bottom-left-page-btn-box">
                    <h5>이천미감</h5>
                    <img src={process.env.PUBLIC_URL+"/img/HSM/sub10/bg_green_arrow.png"} alt="" />
                  </li>
                  <li className="bottom-left-page-btn-box">
                    <h5>비스테까</h5>
                    <img src={process.env.PUBLIC_URL+"/img/HSM/sub10/bg_green_arrow.png"} alt="" />
                  </li>
                </ul>
              </div>
              <div className="bottom-right-box">
              <div className="bottom-slide-container">
                <div className="bottom-slide-view">
                  <ul className="bottom-slide-wrap">
                    <li className="bottom-slide">
                    <SickPoomChildComponent 식품={state.식품} first={state.first} last={state.last}/>
                    </li>
                  </ul>
                </div>
              </div>
                
              </div>
            </div>
          </div>
            </div>
            
        </div>
    );
};

