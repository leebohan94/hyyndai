import React from 'react';
import './scss/notice.scss'
import NoticeLeftComponent from './notice/NoticeLeftComponent';
import NoticeRightComponent from './notice/NoticeRightComponent';
import FastMenuComponent from './notice/FastMenuComponent'
import { GlobalContext } from '../../../context/GlobalContext';
import axios from 'axios'

export default function NoticeComponent() {
    const { isAdmin } = React.useContext(GlobalContext);
    React.useEffect(() => {
        console.log(isAdmin);
    }, []);
    const [on, setOn] = React.useState('공지사항')

    const onClickOn = (value) => {
        setOn(value)
    }

    // const [Notice, setNotice] = React.useState([]);


    // React.useEffect(()=>{

    //     axios({
    //         url:'./data/notice_page/board.json',
    //         method:'GET'
    //     })
    //     .then((res)=>{
    //         setNotice(res.data.Notice);
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // })

    const [notice, setNotice] = React.useState([]);

    React.useEffect(() => {

        axios({
            url: 'https://adlaylatte.duckdns.org/portfolio/team_project2/hyundai_bbs/bbsNoticeJSON.jsp',
            method: 'GET'
        })
            .then((res) => {
                setNotice(res.data);
                setNotice(res.data.공지사항);

                console.log(res.data)
                console.log(res.data.공지사항)

            })
            .catch((err) => {
                console.log(err);
            });

    }, []);

    return (
        <div id='notice'>
            <div id="container">
                <div className="gap">
                    <div className="title">
                        <div className="top-title">
                            <ul>
                                <li>
                                    <h1>Home</h1>
                                </li>
                                <li>
                                </li>
                                <li>
                                    <h1>
                                        고객센터
                                    </h1>
                                </li>
                                <li>
                                </li>
                                <li>
                                    <h1>공지사항</h1>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="content">
                        <NoticeLeftComponent onClickOn={onClickOn} on={on} />
                        {on === '빠른메뉴' && <FastMenuComponent />}
                        {on === '공지사항' && <NoticeRightComponent notice={notice} />}
                    </div>
                </div>

            </div>
            <div className="border">

            </div>
        </div>

    );
};

