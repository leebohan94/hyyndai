import React from 'react';
import './scss/notice_update.scss'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom';

export default function NoticeUpdateFromComponent() {

    const [state, setState] = React.useState({
        subject: '',
        content: '',
        번호: 0
    })

    const { subject, content, 번호 } = state;

    const [param, setParam] = useSearchParams();
    let listNum = param.get('listNum');
    const [notice, setNotice] = React.useState({});

    React.useEffect(() => {
        axios({
            url: 'https://adlaylatte.duckdns.org/portfolio/team_project2/hyundai_bbs/bbsNoticeJSON.jsp',
            method: 'GET'
        })
            .then((res) => {
                if (res.status === 200) {
                    let result = res.data.공지사항.filter((item) => item.번호 === Number(listNum));

                    setNotice(result[0]); // 객체 저장 => {}

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



    const onChangeSubject = (e) => {
        setState({
            ...state,
            subject: e.target.value
        })
    }
    const onChangeContents = (e) => {
        setState({
            ...state,
            content: e.target.value
        })
    }

    const onSubmitUpdate = (e) => {
        e.preventDefault();
        const confirmModal = window.confirm("정말 수정 하시겠습니까?");
        if (!confirmModal) {
            return;
        }
        axios({
            url: `https://adlaylatte.duckdns.org/portfolio/team_project2/hyundai_bbs/updateAction.jsp`,
            method: 'POST',
            data: {},
            params: {
                "subject": subject,
                "content": content,
                "bbsId": 번호
            }
        })
            .then((res) => {


                console.log(res);
                console.log(res.data);
                window.location.pathname = '/customer';


            })
            .catch((err) => {
                console.log(`AXIOS 실패! ${err} `)
            });

    }
    React.useEffect(() => {
        // console.log(param);
    }, []);
    return (
        <div id='noticeUpdate'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>수정하기</h2>
                    </div>
                    <div className="content">
                        <form onSubmit={onSubmitUpdate}>
                            <ul>
                                <li>
                                    <label htmlFor="subject">제목<i>*</i></label>
                                    <input autoComplete='off' onChange={onChangeSubject} type="text" name='subject' id='subject' value={subject} placeholder="제목을 입력해주세요" />
                                </li>
                                <li>
                                    <label htmlFor="content">내용<i>*</i></label>
                                    <textarea onChange={onChangeContents} name="content" id="content" placeholder='내용을 입력해주세요' value={content}></textarea>
                                </li>
                            </ul>
                            <div className="button-box">
                                <button type='submit'>등록</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

