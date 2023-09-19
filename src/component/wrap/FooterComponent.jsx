import React from 'react';

export default function FooterComponent() {

    
    const [open, setOpen] = React.useState(false)

    const onClickOpen=(e)=>{
        setOpen(close=>!close)
    }
    return (
        <footer id="footer">
            <div className="row1">
                <div className="row1-left">

                    <ul className='menu'>
                        <li><a href="!#">현대백화점그룹</a></li>
                        <li><a href="!#">공지사항</a></li>
                        <li><a href="!#">윤리경영</a></li>
                        <li><a href="!#">사회공헌</a></li>
                        <li><a href="!#">이용약관</a></li>
                        <li><a href="!#">개인정보 처리방침</a></li>
                    </ul>
                    <div className={`family-box ${open? ' on' : ''}`} onClick={onClickOpen} >
                        <ul>
                            <li><h1>FAMILY SITE</h1></li>
                            {/* <li><img src=""} alt="" /></li> */}
                        </ul>
                    </div>
                    <div className={`family-child ${open? ' on' : ''}`}  onClick={onClickOpen}>
                        <div className="child-top">
                            <ul>
                                <li>현대식품관 투홈</li>
                                <li>현대Hmall</li>
                                <li>현대백화점 DUTY FREE</li>
                                <li>더한섬닷컴</li>
                                <li>현대리바트몰</li>
                                <li>현대렌탈케어</li>
                                <li>H패션몰</li>
                                <li>현대어린이책미술관</li>
                                <li>그리팅</li>
                                <li>한섬EQL</li>
                            </ul>
                        </div>
                        <h4>관계사 site</h4>
                        <div className="child-bottom">
                            <ul>
                            <li>현대백화점 그룹</li>
                            <li>현대백화점</li>
                            <li>현대홈쇼핑</li>
                            <li>현대그린푸드</li>
                            <li>한섬</li>
                            <li>현대리바트</li>
                            <li>지누스</li>
                            <li>현대L&C</li>
                            <li>현대렌탈케어</li>
                            <li>현대드림투어</li>
                            <li>현대에버다임</li>
                            <li>씨엔에스푸드시스템</li>
                            <li>현대캐터링시스템</li>
                            <li>현대IT&E</li>
                            <li>현대퓨처넷</li>
                            <li>현대이지웰</li>
                            <li>현대바이오랜드</li>
                            <li>벤디스</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">

                <div className="row2">
                    <div className='logo'>
                        <a href="!#"><img src={process.env.PUBLIC_URL+"/img/HSM/footer/footer_logo.png"} alt="" /></a>
                    </div>
                    <div className='info'>
                        <p>주식회사 현대백화점 대표이사 : 김형종 외 2인 서울시 강남구 테헤란로98길 12</p>
                        <p>사업자등록번호 : 211-87-21455 <a href="!#">[사업자정보 확인]</a>  통신판매업신고 : 2010-서울강남-01882</p>
                        <p>홈페이지/앱 문의 : <a href="!#">customerservice@thehyundai.com</a>고객센터 :<strong>1800-2233</strong></p>
                        <p>호스팅서비스 : (주)현대백화점</p>
                        <p className='copy'>CopyrightⓒHyundai Department Store. All rights reserved.</p>
                        <p>Where's Wally?ⓒDreamWorks Distribution Limited. All rights reserved.</p>
                    </div>
                    <div className='sns'>
                        <a href="!#"><img src={process.env.PUBLIC_URL+"/img/HSM/footer/footer-icon.png"} alt="" /></a>
                    </div>
                </div>
                <div className="row3">
                    <div className="left">
                        <img src={process.env.PUBLIC_URL+"/img/HSM/footer/footer_row3.png"} alt="" />
                        <span>|</span>
                        <img src={process.env.PUBLIC_URL+"/img/HSM/footer/footer_row3_02.png"} alt="" />
                        <span>|</span>
                        <img src={process.env.PUBLIC_URL+"/img/HSM/footer/footer_row3_03.png"} alt="" />
                        <span>|</span>
                        <img src={process.env.PUBLIC_URL+"/img/HSM/footer/footer_row3_04.png"} alt="" />
                    </div>
                    <div className="right">
                        <img src={process.env.PUBLIC_URL+"/img/HSM/footer/footer_row3_left.png"} alt="" />
                    </div>

                </div>
            </div>
        </footer>
    );
}