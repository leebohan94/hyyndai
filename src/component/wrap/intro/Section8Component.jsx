import React from 'react';
import $ from 'jquery'

export default  function Section8Component (){

    const [state, setState] = React.useState(true)
   const onClickMake=(e)=>{
        e.preventDefault();
        setState(!state);
    }
    
    React.useEffect(()=>{
        
        let setId=0;
        function timerFn(){
          setState(prevState=>!prevState);
        };
        setId=setInterval(timerFn, 3000);
      
        const sec8Top = $('#section8').offset().top;

        console.log(`sec8Top ${sec8Top}`);

        $(window).scroll(function(){
            if($(window).scrollTop() >= sec8Top){
                $('#section8 .title').addClass('on');
                $('#section8 .left-box-text-box').addClass('on');
            }

            if($(window).scrollTop() === 0){
                $('#section8 .title').removeClass('on');
                $('#section8 .left-box-text-box').removeClass('on');
            }
        })


      /*   function startTimer() {
          setId = setTimeout(function () {
            timerFn();
          }, 1000);
        }
    
        startTimer(); */
        
        /* return () => {
          clearInterval(setId);
        }; */
    },[])


    return (
      <section id="section8">
        <div className="container">
          <div className="gap">
            <div className="title">
              <h1>Gifts</h1>
              <h2>선물하기 전체보기</h2>
            </div>
            <div className="content">
              <div className="cover">
                  <div className={`row1${state?' on':''}`}>
                    <div className="left-box">
                      <div className="left-box-text-box">
                        <ul>
                          <li>
                            <h1>Holiday Wishes</h1>
                          </li>
                          <li>
                            <h2>
                              휴가철 맞이해 갖고 싶은
                              <br />
                              나의 위시리스트를 공유해요
                            </h2>
                          </li>
                        </ul>
                      </div>
                      <div className="left-box-button-box">
                        <ul>
                          <li>
                            <button className="sum on">#여름휴가</button>
                          </li>
                          <li>
                            <button onClick={onClickMake} className="makeup on">
                              #여름 메이크업
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="center-box">
                      <div className="center-box-zoom">
                        <a href="!#">
                          <img src={process.env.PUBLIC_URL+"/img/HSM/intro/team099.jpg"} alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="right-box">
                      <div className="right-box-top-img">
                        <div className="right-box-top-zoom">
                          <a href="!#">
                            <img src={process.env.PUBLIC_URL+"/img/HSM/intro/team100.jpg"} alt="" />
                          </a>
                        </div>
                        <div className="bgCol"></div>
                        <div className="right-top-text-box">
                          <h1>[헬렌카민스키] 이스톤 EASTON</h1>
                        </div>
                      </div>
                      <div className="right-box-bottom-img">
                        <div className="right-box-bottom-zoom">
                          <a href="!#">
                            <img src={process.env.PUBLIC_URL+"/img/HSM/intro/team101.jpg"} alt="" />
                          </a>
                        </div>
                        <div className="bgCol"></div>
                        <div className="right-bottom-text-box">
                          <h1>[헬렌카민스키] 코리 CORI</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`row2${state?'':' on'}`}>
                    <div className="left-box">
                      <div className="left-box-text-box">
                        <ul>
                          <li>
                            <h1>썸머 뷰티 Lesson</h1>
                          </li>
                          <li>
                            <h2>
                              빛나는 휴가를 위한 나만의
                              <br />
                              Summer Makeup
                            </h2>
                          </li>
                        </ul>
                      </div>
                      <div className="left-box-button-box">
                        <ul>
                          <li>
                            <button onClick={onClickMake}>#여름휴가</button>
                          </li>
                          <li>
                            <button>#여름 메이크업</button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="center-box">
                      <div className="center-box-zoom">
                        <a href="!#">
                          <img src={process.env.PUBLIC_URL+"/img/HSM/intro/team096.jpg"} alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="right-box">
                      <div className="right-box-top-img">
                        <div className="right-box-top-zoom">
                          <a href="!#">
                            <img src={process.env.PUBLIC_URL+"/img/HSM/intro/team097.jpg"} alt="" />
                          </a>
                        </div>
                        <div className="bgCol"></div>
                        <div className="right-top-text-box">
                          <h1>
                            [메이크업포에버] [단 독] UHD 세팅 파우더(+선크림
                            5ML)
                          </h1>
                        </div>
                      </div>
                      <div className="right-box-bottom-img">
                        <div className="right-box-bottom-zoom">
                          <a href="!#">
                            <img src={process.env.PUBLIC_URL+"/img/HSM/intro/team098.jpg"} alt="" />
                          </a>
                        </div>
                        <div className="bgCol"></div>
                        <div className="right-bottom-text-box">
                          <h1>
                            [메이크업포에버][스벅1잔/단 독]HD SKIN 파운데이션
                            30ml(+미스트 10ML)
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="img">
          <img src={process.env.PUBLIC_URL+"/img/HSM/intro/team095.png"} alt="" />
        </div>
        <div className="test"></div>
      </section>
    );
};

