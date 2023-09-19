import React from 'react';

export default function TshirtChild1Component({지금이상품, setViewProduct}){

        // 정가, 판매가 금액에 콤머 형식 정규표현식 구현하기
        const commaPrice=(price)=>{
            let value = price.toString();
            const regExp = /(^\d+)(\d{3})/g;
            while( regExp.test(value) ){
                return  value.replace(regExp, '$1,$2');
            }        
        }
    
        const onClickProductList=(e, item)=>{
            e.preventDefault();
            let obj = {            
                제품코드: item.제품코드,
                이미지: `http://localhost:3000/./img/sub6/${item.이미지}`,
                제조사: item.제조사,
                제품명: item.제품명,
                제품특성: item.제품특성,
                정가: item.정가,
                할인: item.할인,
                배송구분: item.배송구분,
                추천: item.추천,
                할부: item.할부,            
                저장일시: new Date().getTime()
            }
            setViewProduct(obj);  // 최상위 컴포넌트에게 전달
            window.location.pathname = '/project1/product';
        }
    


    return (
        <ul className='product-list'>
            {   
                지금이상품 && 지금이상품.map((item)=>{
                    return(
                        <li key={item.제품코드}>
                            <div className="prod">
                                <div className="img-box">
                                    <a href="!#" onClick={(e)=>onClickProductList(e, item)}>
                                        <img src={`/project1/img/sub6/${item.이미지}`} alt="" />
                                    </a>
                                </div>
                                <div className="price-box">
                                    <span>{commaPrice(item.정가)}<i>원</i></span>
                                </div>
                                <div className="text-box">
                                    <a href="!#">{[item.제조사]}{item.제품명}</a>
                                </div>
                                <div className="info-box">
                                    <span>{item.할인}</span>
                                    <span>{item.추천}</span>
                                    <span>{item.할부}</span>
                                    <span>{item.배송구분}</span>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    );
};

