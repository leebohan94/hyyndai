import React from 'react';

export default function Section2Component() {
    const [isSec2, setIsSec2] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            console.log('Scroll Position:', scrollPosition);
            if(scrollPosition===500){
                console.log(isSec2);
                setIsSec2(true);
                console.log(isSec2);
            }
        };

    
        // window.document.querySelector();
        // .addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id='section2'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>Pre&Free 바캉스</h2>
                    </div>
                    <div className="content">
                        <div className="left-box">
                            <div className="top-text">
                                <span>In Air, After Air</span>
                                <p>국내 공항 패션 vs 해외 여행지 패션</p>
                            </div>
                            <div className="bottom-img">
                                <img src={process.env.PUBLIC_URL+"/CYS/img/intro/thehyundai_intro_sec2_1.jpg"} alt="" />
                            </div>
                        </div>
                        <div className="right-box">
                            <img src={process.env.PUBLIC_URL+"/CYS/img/intro/thehyundai_intro_sec2_2.jpg"} alt="" />
                            <div className="text">
                                <span>Active Vacance!</span>
                                <p>아웃도어 액티비티를 함께 할 기능성 Item!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}