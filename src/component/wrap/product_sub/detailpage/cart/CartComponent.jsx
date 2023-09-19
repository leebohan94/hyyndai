import React, { useEffect, useState } from 'react';
import './scss/cart.scss';
export default function CartComponent() {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    // 전체선택, 개별선택
    const [isAllCheck, setIsAllCheck] = useState(true);
    
    const [CheckAll, setCheckAll] = useState([]);
    const [check, setCheck] = useState([]);

    useEffect(()=>{

        let total = 0
        let checkAll = [];
        if(localStorage.getItem("CARTPRODUCT")!==null){
            let result = JSON.parse(localStorage.getItem("CARTPRODUCT"));
            // let imsi = [];
            setCart(result);
            // 총 가격
            result.map((item, idx)=>{
                total += Number(item.정가);
                // console.log(item.제품코드);
                checkAll = [...checkAll, item.제품코드]
            },[]);
            setCheckAll(checkAll);
            // 제품코드 저장
        }
        setTotalPrice(total);
        // console.log(cart.length===0);
        
    },[]);

    const onChangeAllCheck=(e)=>{
        const {checked} = e.target;

        let imsi = [];

        if(checked===true){
            imsi = check;
        }
        else {
            imsi = [];
        }

        setCheckAll(imsi);

    }

  // 개별 체크 체크박스
    const  onChangeCheck=(e)=>{
        let imsi = [];
        const {checked} = e.target;
        if( checked===true ){                
            setCheck([...check, checked]);       
        }
        else if( checked===false ){    // 선택취소 삭제                          
            imsi = check.filter((item)=>item !== checked); // 제품코드 값만 들어있다.
            setCheck(imsi);
        }
    }

    useEffect(()=>{
        if(isAllCheck===true){
            setCheck(true);
        }
        else {

        }
    },[isAllCheck,]);

    const onClickDelete=(e, value)=>{
        e.preventDefault();
        let imsi = [];
        if(window.confirm("현재 선택하신 상품을 장바구니에서 삭제 하시겠습니까?")===true){
            imsi = cart.filter((item)=>item.제품코드!==value);
            localStorage.setItem("CARTPRODUCT", JSON.stringify(imsi));
            setCart(imsi);
        }
    }
    const onClickDeleteAll=(e)=>{
        e.preventDefault();
        if(window.confirm("모든 상품을 장바구니에서 삭제 하시겠습니까?")===true){
            setCart([]);
            localStorage.removeItem("CARTPRODUCT");
        }
    }

    return (
        <div id='cart'>
            <div className="container">
                <div className="title">
                    <h2>장바구니</h2>
                    <div className="step">
                        <ul>
                            <li>
                                <div className="icon icon1"></div>
                                <div className="text-box">
                                    <span>STEP 01</span>
                                    <span>장바구니</span>
                                </div>
                            </li>
                            <li>
                                <div className="step-arrow"></div>
                                <div className="icon icon2"></div>
                                <div className="text-box">
                                    <span>STEP 02</span>
                                    <span>주문서작성</span>
                                </div>
                            </li>
                            <li>
                                <div className="step-arrow"></div>
                                <div className="icon icon3"></div>
                                <div className="text-box">
                                    <span>STEP 03</span>
                                    <span>주문완료</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="content">
                    <div className="left-box">
                        <ul>
                            <li className='listCheck'>
                                <input onChange={onChangeAllCheck} id='listCheckAll' type="checkbox" checked={isAllCheck}/>
                                <label htmlFor="listCheckAll">전체선택</label>
                                <button className='checkDel'>선택삭제</button>
                                <button onClick={onClickDeleteAll} style={{marginLeft:"10px"}} className='checkDel'>전체삭제</button>
                            </li>
                            {
                                cart.map((item,idx)=>{
                                    return(
                                        <li key={idx} className='product-list'>
                                            <div className="product-check-group">
                                                <input type="checkbox" name='list_check' onChange={onChangeCheck} checked={check}/>
                                                <button onClick={(e)=>onClickDelete(e, item.제품코드)}><img src="./CYS/img/cart/icon_delete.png" alt="" /></button>
                                            </div>
                                            <div className="product-img-box">
                                                <img src={`./img/HSM/${item.상품헤더이미지[0]}.jpg`} alt="" />
                                                <div className="product-img-hover-info">
                                                    <a href="!#" className='blind'>상품 바로가기</a>
                                                    <a href="!#" className='blind'>상품 찜하기</a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-name">
                                                    <a href="!#">{item.상품명}</a>
                                                </div>
                                                <div className="product-option-top">
                                                    <div className="product-count-box">
                                                        <button></button>
                                                        <span>1</span>
                                                        <button></button>
                                                        <em>속성없음</em>
                                                    </div>
                                                    <div className="product-deliver">
                                                        <span>무료배송</span>
                                                    </div>
                                                </div>
                                                <div className="product-option-bottom">
                                                    <div className="product-price">
                                                        <strong>{Number(item.정가).toLocaleString("ko-KR")}원</strong>
                                                        <span>{Number(item.정가).toLocaleString("ko-KR")}원</span>
                                                    </div>
                                                    <div className="btn-box">
                                                        <button>옵션변경</button>
                                                        <button>바로주문</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        )
                                })
                            }

                        </ul>
                    </div>
                    <div className="right-box">
                        <div className="right-wrap">
                            <div className="tot-price-box">
                                <div className="price-title">
                                    <h4>결제금액</h4>

                                </div>
                                <div className="price-content">
                                    <div className="top-box box">
                                        <ul>
                                            <li><h4>총 주문금액</h4><p><strong>{totalPrice.toLocaleString("ko-KR")}</strong> 원</p></li>
                                            <li><h5>상품금액</h5><p><strong>{totalPrice.toLocaleString("ko-KR")}</strong> 원</p></li>
                                            <li><h5>배송비</h5><em>무료</em></li>
                                        </ul>
                                    </div>
                                    <div className="mid-box box">
                                        <ul>
                                            <li><h4>총 할인금액</h4><p><strong>0</strong> 원</p></li>
                                            <li><h5>혜택할인가</h5><p><strong>0</strong> 원</p></li>
                                        </ul>
                                    </div>
                                    <div className="bot-box box">
                                            <h4>결제 예정 금액</h4>
                                            <p><strong>{totalPrice.toLocaleString("ko-KR")}</strong> 원</p>
                                    </div>
                                    <p className="attention">* 실제 결제 금액은 할인 및 추가혜택에 따라 달라질 수 있습니다.</p>
                                    <button>주문하기</button>
                                </div>
                            </div>
                            <div className="cart-guide">
                                <h4>장바구니 이용안내</h4>
                                <ul>
                                    <li>로그인 시 장바구니에 담긴 상품은 <span>30일</span>간 보관됩니다.</li>
                                    <li>상품은 최대 <span>100개</span>까지 담을 수 있습니다.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}