import React from 'react';
import './scss/noticeRight.scss'
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { GlobalContext } from '../../../../context/GlobalContext';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

export default function NoticeRightComponent({ notice }) {

    const [state, setState] = React.useState({
        subject: '',
        content: '',
        번호: 0
    })

    const { subject, content, 번호 } = state;

    const [param, setParam] = useSearchParams();
    let listNum = param.get('listNum');
    const [notice2, setNotice2] = React.useState({});

    React.useEffect(() => {
        axios({
            url: 'https://adlaylatte.duckdns.org/portfolio/team_project2/hyundai_bbs/bbsNoticeJSON.jsp',
            method: 'GET'
        })
            .then((res) => {
                if (res.status === 200) {
                    let result = res.data.공지사항.filter((item) => item.번호 === Number(listNum));

                    setNotice2(result[0]); // 객체 저장 => {}

                    // 입력상자에 데이터가 저장 그리고 수정하면 저장하면된다. 수정
                    setState({
                        ...state,
                        subject: result[0].제목,
                        content: result[0].내용,
                        번호: result[0].번호
                    })
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [listNum]);

    const { isAdmin } = React.useContext(GlobalContext);
    const [list] = React.useState(10);
    const [pageNumber, setPageNumber] = React.useState(1);
    const [groupPage] = React.useState(3);
    const [cnt, setCnt] = React.useState(1);

    const [startNum, setStartNum] = React.useState();
    const [endNum, setEndNum] = React.useState();

    const onClickPageNum = (e, num) => {
        e.preventDefault();
        setPageNumber(num)
    }

    const onClickNextGroup = (e) => {
        e.preventDefault();
        setCnt(cnt + 1)
    }
    const onClickPrevGroup = (e) => {
        e.preventDefault();
        setCnt(cnt - 1)
    }


    React.useEffect(() => {
        console.log(isAdmin);
    }, []);
    React.useEffect(() => {
        setStartNum((cnt - 1) * groupPage);
    }, [cnt, groupPage])

    React.useEffect(() => {
        setEndNum(startNum + groupPage);
    }, [startNum, groupPage])

    React.useEffect(() => {
        setPageNumber(startNum + 1);
    }, [endNum, startNum]);

    const [showIndex, setShowIndex] = React.useState(-1);

    const onClickCol = (e, n) => {
        e.preventDefault();
        if (showIndex === n) {
            // 클릭한 항목이 이미 확장되어 있는 경우 숨김 처리
            setShowIndex(-1);
        } else {
            // 그렇지 않으면 클릭한 항목을 보여줌
            setShowIndex(n);
        }
    };

    const onClickUpdate = (e) => {
        e.preventDefault();
        // window.location.pathname=`/notice_update?listNum=${}`
    }




    const onClickDele = (e, item) => {
        e.preventDefault();
        const confirmModal = window.confirm("정말 삭제 하시겠습니까?");
        if (!confirmModal) {
            return;
        }
        axios({
            url: 'https://adlaylatte.duckdns.org/portfolio/team_project2/hyundai_bbs/deleteAction.jsp',
            method: 'POST',
            data: {},
            params: {
                subject: subject,
                content: content,
                bbsId: item.번호
            }
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                window.location.pathname = '/customer';
                // 삭제 후 필요한 작업을 수행합니다. 예를 들면 공지사항 목록을 새로고침하거나 페이지를 이동하는 등의 작업입니다.
            })
            .catch((err) => {
                console.log(`AXIOS 실패! ${err} `);
            });
    };

    return (
        <div id='noticeRight'>
            <div className="container">
                <div className="title">
                    <ul>
                        <li>
                            <h1>공지사항</h1>
                        </li>
                        <li>
                            <h2>더현대닷컴의 최근 소식과 현황을 알려드립니다.</h2>
                        </li>
                    </ul>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notice.map((item, idx) => {
                            if (Math.ceil((idx + 1) / list) === pageNumber) {
                                return (
                                    <>
                                        <tr
                                            key={idx}
                                            data-key={'data-key' + idx}
                                            className={`subject ${showIndex === idx ? 'on' : ''}`}
                                            onClick={(e) => onClickCol(e, idx)}
                                        >
                                            <td>{item.번호}</td>
                                            <td>{item.제목}</td>
                                            <td>{item.작성일.substring(0, 10).replace(/-/g, '.')}</td>
                                        </tr>
                                        {showIndex === idx && (
                                            <tr
                                                key={`content-${idx}`}
                                                className={`content-box ${showIndex === idx ? 'on' : ''}`}
                                            >
                                                <td className='contents1' colSpan={3} dangerouslySetInnerHTML={{ __html: item.내용 }}></td>
                                                <td className='contents2'>
                                                    <span><Link to={`/notice_update?listNum=${item.번호}`}>수정</Link></span>
                                                    <span><button onClick={(e) => onClickDele(e, item)} >삭제</button></span>
                                                </td>
                                            </tr>
                                        )}
                                    </>
                                );
                            }
                        })}
                    </tbody>
                </table>
                <div className="bottom">
                    <div className="page-button-box">
                        {cnt > 1 && <a href="!#" className='prev-btn blind' onClick={onClickPrevGroup}>이전</a>}
                        {
                            (() => {
                                let arr = [];
                                for (let i = startNum; i < endNum; i++) {
                                    if (i < Math.ceil(notice.length / list)) {
                                        arr = [...arr, <a key={i} data-key={`num${i}`} className={pageNumber === (i + 1) ? 'on' : null} href='!#' onClick={(e) => onClickPageNum(e, (i + 1))}>{i + 1}</a>]
                                    }
                                }
                                return arr;
                            })()
                        }
                        {cnt < Math.ceil(notice.length / list / groupPage) && <a href="!#" className='next-btn blind' onClick={onClickNextGroup}>다음</a>}
                    </div>
                    {
                        isAdmin && (
                            <div className="write-box">
                                <Link to="/notice_write"><button>글쓰기</button></Link>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    );
};
