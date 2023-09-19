import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './scss/member_delete.scss';

function MemberDeleteComponent(props) {
    const navigate = useNavigate();
    const [pw, setPw] = React.useState('');
    const onClickMemberDelete = (e) => {

        e.preventDefault();
        axios({
            url: 'https://adlaylatte.duckdns.org/portfolio/team_project2/hyundai_user/deleteAction.jsp',
            method: 'POST',
            data: {},
            params: {
                "user_id": sessionStorage.getItem('user_id'),
                "user_pw": pw,
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    const result = res.data;
                    console.log(result);
                    console.log(sessionStorage.getItem('user_id'));
                    try {
                        if (result === 1) {
                            alert('탈퇴 성공! 이용해주셔서 감사합니다');
                            sessionStorage.removeItem('user_id');
                            setTimeout(function () {
                                navigate(`/intro`);
                            }, 1000);
                        }

                        else {
                            alert('올바른 비밀번호를 입력해주세요')
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }

            })
            .catch((err) => {
                console.log(`AXIOS 실패! ${err} `)
            });
    }

    return (
        <section id="memberDelete">
            <div className="container">
                <div className="title">
                    <h3>회원탈퇴</h3>
                </div>
                <div className="content">
                    <div className="thanks-box">
                        <strong>그동안 더현대닷컴(theHyundai)를 이용해 주셔서 감사합니다.</strong>
                        <p>
                            더현대닷컴을 이용하시면서 불만족스러웠던 점을 지적해주시면 서비스 개선에 참고하도록 하겠습니다.<br />
                            회원탈퇴시, 아래사항을 유의해주시기 바랍니다.
                        </p>
                    </div>
                    <div className="info-box">
                        <div className="title-box">
                            <h4>회원탈퇴 확인사항</h4>
                            <span>* 더현대닷컴(theHyundai) 회원탈퇴 시 확인하셔야 할 사항을 반드시 체크하시기 바랍니다</span>
                        </div>
                        <p>
                            재가입하셔도 개인정보가 복원되지 않습니다.
                            <span>더현대닷컴에 가지고 계신 더머니,예치금,할인쿠폰 등의 혜택이 자동삭제 되며, 재가입 하실 경우에도 복원되지 않습니다.</span>
                        </p>
                        <p>
                            아이디를 재사용 하실 수 없습니다.
                            <span>기존에 사용하셨던 ID는 재가입 시 사용하실 수 없습니다.</span>
                        </p>
                        <p>
                            탈퇴 후에도 게시판형 서비스에 등록된 게시물은 그대로 남아있습니다.
                            <span>게시판 등에 올린 게시글 및 댓글은 탈퇴시 자동삭제 되지 않고 남아 있습니다. 삭제를 원하시는 게시글이 있다면 탈퇴전에 삭제하시기 바랍니다.
                                (단, 답글이 달린 글은 삭제불가)</span>
                        </p>
                    </div>
                    <div className="survey-box">
                        <h4>설문조사</h4>
                        <span>* 더현대닷컴(theHyundai)을 이용하시면서 어떤 점이 불편하셨나요? (1개 항목만 선택해 주세요.)</span>
                        <div className="survey-checkbox">
                            <label htmlFor=""><input type="radio" name="disappoint" id="" />상품의 다양성/가격/품질/불만</label>
                            <label htmlFor=""><input type="radio" name="disappoint" id="" />회원 특혜/쇼핑 혜택의 부족</label>
                            <label htmlFor=""><input type="radio" name="disappoint" id="" />상품의 선택, 주문 등의 사용이 어려움</label>
                            <label htmlFor=""><input type="radio" name="disappoint" id="" />사이트의 시스템 및 에러 불만</label>
                            <label htmlFor=""><input type="radio" name="disappoint" id="" />주문취소/반품/교환/AS불만</label>
                            <label htmlFor=""><input type="radio" name="disappoint" id="" />자주 이용하지 않음</label>
                            <span>위의 항목 이외에 기타 불만사항이나 의견이 있으시면 기재 부탁 드립니다.(0/1,000byte)</span>
                            <textarea name="" id="" cols="770" rows="70"></textarea>
                        </div>
                    </div>
                    <div className="last-box">
                        <p>진행중인 주문,교환,반품이 있을시 회원 탈퇴가 불가능합니다. 해당 사항을 완료 후 탈퇴를 하실 수 있습니다.</p>
                        <p>고객님께서 보유중이신 예치금이 있으실 경우 <strong className='red-text'>더현대닷컴 고객센터(1800-2233)</strong>로 문의 부탁드립니다.</p>
                        <p>최종확인을 위해 비밀번호를 입력해주세요</p>
                        <input type="password" onChange={(e) => setPw(e.target.value)} value={pw} />
                    </div>
                    <div className="btn-box">
                        <button className='submit-btn' onClick={onClickMemberDelete}>회원탈퇴</button>
                        <button className='cancel-btn'>취소</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MemberDeleteComponent;