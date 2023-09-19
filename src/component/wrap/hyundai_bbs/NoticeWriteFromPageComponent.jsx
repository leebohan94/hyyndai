import React from 'react';
import './scss/notice_write.scss'
import axios from 'axios'

export default function NoticeWriteFromPageComponent() {

    const [state, setState] = React.useState({
        subject: '',
        content: ''
    })

    const { subject, content } = state;

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

    const onSubmitWrite = (e) => {
        e.preventDefault();

        axios({
            url: 'https://adlaylatte.duckdns.org/portfolio/team_project2/hyundai_bbs/writeAction.jsp',
            method: 'POST',
            data: {},
            params: {
                "subject": subject,
                "content": content
            }
        })
            .then((res) => {


                console.log(res);
                console.log(res.data);
                // window.location.pathname='/customer';


            })
            .catch((err) => {
                console.log(`AXIOS 실패! ${err} `)
            });

    }

    return (
        <div id='noticeWrite'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>공지사항</h2>
                    </div>
                    <div className="content">
                        <form onSubmit={onSubmitWrite}>
                            <ul>
                                <li>
                                    <label htmlFor="subject">제목<i>*</i></label>
                                    <input autoComplete='off' onChange={onChangeSubject} type="text" name='' id='' value={subject} placeholder="제목을 입력해주세요" />
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

