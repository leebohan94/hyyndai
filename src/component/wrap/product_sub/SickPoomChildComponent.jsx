import React from 'react';

export default function SickPoomChildComponent ({식품,first,last}) {

  return (
          <ul>
          <>
            {
              last.map((item, idx)=>{
                return(
              <li key={idx}>
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
              식품.map((item, idx)=>{
                return(
              <li key={idx}>
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
              <li key={idx}>
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

