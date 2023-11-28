import './ClientFeedback.css';
import {Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function index() {

    const clientFeedbackDetails = [
        {
            id: 1,
            avatar: './images/ClientFeedback/JaneCooper.png',
            userName: 'Jane Cooper',
            post: 'Ceo of Hunt',
            feedback: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia'
        },
        {
            id: 2,
            avatar: './images/ClientFeedback/DevonLane.png',
            userName: 'Devon Lane',
            post: 'Ceo of Hunt',
            feedback: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia'
        },
        {
            id: 3,
            avatar: './images/ClientFeedback/RobertFox.png',
            userName: 'Robert Fox',
            post: 'Ceo of Hunt',
            feedback: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia'
        },
        {
            id: 4,
            avatar: './images/ClientFeedback/JaneCooper.png',
            userName: 'Jane Cooper',
            post: 'Ceo of Hunt',
            feedback: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia'
        },
        {
            id: 5,
            avatar: './images/ClientFeedback/DevonLane.png',
            userName: 'Devon Lane',
            post: 'Ceo of Hunt',
            feedback: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia'
        },
        {
            id: 6,
            avatar: './images/ClientFeedback/RobertFox.png',
            userName: 'Robert Fox',
            post: 'Ceo of Hunt',
            feedback: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia'
        }
    ]
    const teamDetails = [
        {
            id: 1,
            avatar: './images/ClientFeedback/DanialDef.png',
            userName: 'Danial Def',
            cases: '301',
        },
        {
            id: 2,
            avatar: './images/ClientFeedback/Sanfole.png',
            userName: 'Sanfole',
            cases: '850',
        },
        {
            id: 3,
            avatar: './images/ClientFeedback/Cesforila.png',
            userName: 'Cesforila',
            cases: '470',
        },
        {
            id: 4,
            avatar: './images/ClientFeedback/Colleen.png',
            userName: 'Colleen',
            cases: '180',
        },
        {
            id: 5,
            avatar: './images/ClientFeedback/Haldone.png',
            userName: 'Haldone',
            cases: '212',
        },
        {
            id: 6,
            avatar: './images/ClientFeedback/NikJeo.png',
            userName: 'Nik Jeo',
            cases: '350',
        },
]
    function ClientFeedbackCard({avatar, userName, post, feedback}){
        return(
            <div className='client-feedback-card'>
                <div className='client-img'>
                    <img src={avatar} alt={userName} />
                </div>
                <p className='client-username'>{userName}</p>
                <p className='client-post'>{post}</p>
                <p className='client-feedback'>{feedback}</p>
            </div>
        )
    }
    function  TeamCard({avatar, userName, cases}){
        return(
            <div className="team-cards-bcg">
                <div className="team-cards">
                    <div className='team-member-img'>
                        <img src={avatar} alt={userName} />
                    </div>
                    <div>
                        <p className='team-member-name'>{userName}</p>
                        <p className='team-member-cases'>{cases} Cases</p>
                    </div>
                </div>
            </div>
        )
    }
    

  return (
    <div className='client-feedback-page'>
        <div className="client-feedback-container">
            <div className='heading-and-btn'>
                <div>
                    <p>What says our</p>
                    <p>happy Clients</p>
                </div>
                <div className='feedback-carousel-btn'>
                    <button className='arrow-left'>
                        <img src="./images/ClientFeedback/Left.png" alt="Left" />
                    </button>
                    <button className='arrow-right'>
                        <img src="./images/ClientFeedback/Right.png" alt="Right" />
                    </button>
                </div>
            </div>
        <div className='client-feedback-cards-container'>
            <Swiper
                modules={[Navigation]}
                slidesPerView='3'
                navigation={{ nextEl: `.arrow-left`, prevEl: `.arrow-right` }}
            >
                {clientFeedbackDetails.map(element => {
                    return(
                        <SwiperSlide key={element.id} className="feedback-slide" > 
                        {/* add a custom class name */}
                            <ClientFeedbackCard
                                avatar={element.avatar}
                                userName={element.userName}
                                post={element.post}
                                feedback={element.feedback}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
        </div>
        <div className="our-team">
            <p className="team-detail">Our Team</p>
            <div className="team-cards-container">
                {teamDetails.map(element => <TeamCard
                    key={element.id}
                    avatar={element.avatar}
                    userName={element.userName}
                    cases={element.cases}
                />)}
            </div>
        </div>
    </div>
  )
}

export default index
