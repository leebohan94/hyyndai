import React from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
export default function GageonChildComponent ({상품,first,last}) {
  const {setViewProduct} = React.useContext(GlobalContext);
  const onClickProductList=(e, item)=>{
    e.preventDefault();
    let obj = {            
      제품코드: item.제품코드,
      제품종류: item.제품종류,
      상품로고이미지: item.상품로고이미지,
      퀵메뉴이미지 : `http://localhost:3000/img/HSM/${item.상품헤더이미지[0]}.jpg`,
      상품헤더이미지: item.상품헤더이미지[0],
      상품상세이미지: item.상품상세이미지,
      제조사: item.제조사,
      상품명: item.상품명,
      정가: item.정가,
      할인율: item.할인율,
      상품옵션: item.상품옵션,
      배송비: item.배송비,            
      저장일시: new Date().getTime()
  }
  setViewProduct(obj);
    window.location.pathname = '/detailpage';
  }


  return (
          <ul>
          <>
            {
              last.map((item, idx)=>{
                return(
              <li key={idx} onClick={(e)=>onClickProductList(e, item)}>
                  <div className="bottom-slide-img-box">
                    <a href="!#">
                      <img src={`./img/HSM/${item.상품헤더이미지[0]}.jpg`} alt="" />
                    </a>
                  </div>
                  <div className="bottom-slide-text-box">
                    <div className="up-text-box">
                      <h1>
                        <strong >{(item.정가).toLocaleString('ko-KR')}</strong>원
                      </h1>
                      <h3>{item.상품명}</h3>
                    </div>
                    <div className="down-text-box">
                      <h5>현대백화점5%</h5>
                      {item.배송비===0 && <h3>무료배송</h3>}
                    </div>
                  </div>
                  </li>
                )
                
              })
            }
            {
              상품.map((item, idx)=>{
                return(
                  <li key={idx} onClick={(e)=>onClickProductList(e, item)}>
                  <div className="bottom-slide-img-box">
                    <a href="!#">
                      <img src={`./img/HSM/${item.상품헤더이미지[0]}.jpg`} alt="" />
                    </a>
                  </div>
                  <div className="bottom-slide-text-box">
                    <div className="up-text-box">
                      <h1>
                        <strong >{(item.정가).toLocaleString('ko-KR')}</strong>원
                      </h1>
                      <h3>{item.상품명}</h3>
                    </div>
                    <div className="down-text-box">
                      <h5>현대백화점5%</h5>
                      {item.배송비===0 && <h3>무료배송</h3>}
                    </div>
                  </div>
                  </li>
                )
                
              })
            }
            {
              first.map((item, idx)=>{
                return(
                  <li key={idx} onClick={(e)=>onClickProductList(e, item)}>
                  <div className="bottom-slide-img-box">
                    <a href="!#">
                      <img src={`./img/HSM/${item.상품헤더이미지[0]}.jpg`} alt="" />
                    </a>
                  </div>
                  <div className="bottom-slide-text-box">
                    <div className="up-text-box">
                      <h1>
                        <strong >{(item.정가).toLocaleString('ko-KR')}</strong>원
                      </h1>
                      <h3>{item.상품명}</h3>
                    </div>
                    <div className="down-text-box">
                      <h5>현대백화점5%</h5>
                      {item.배송비===0 && <h3>무료배송</h3>}
                    </div>
                  </div>
                  </li>
                )
                
              })
            }
           
           </>
          </ul>
       
  

 
  );
};

