import React from 'react';
import './scss/mypage_intro.scss';

function MypageIntroComponent({ member }) {
    return (
        <>
            <div className="member-header">
                <span>{member.이름} 고객님의 등급은 <figure></figure>입니다.</span>
                <a href="!#">등급 쿠폰 다운받기</a>
                <a href="!#">회원등급혜택</a>
            </div>
            <div className="member-summary">
                <table>
                    <thead>
                        <tr>
                            <th>쿠폰</th>
                            <th>H.Point</th>
                            <th>예치금</th>
                            <th>더머니</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0장</td>
                            <td>-P</td>
                            <td>0원</td>
                            <td>0원</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/*       <div className="myclub-box">
                <h3>마이클럽</h3>
                <span>클럽 가입하고 쿠폰/적립 혜택 받으세요!</span>
                <button>가입하기</button>
            </div>
            <div className="order-check-box">
                <div className="title-box">
                    <h3>주문현황</h3>
                    <span>(최근 1개월 기준)</span>
                </div>
            </div>
            <div className="recent-order-box">
                <div className="title-box">
                    <h3>최근 주문 배송내역</h3>
                    <span>(최근 1개월 기준)</span>
                </div>
            </div>  */}


        </>
    );
}

export default MypageIntroComponent;