import './FAQs.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

function index() {

    const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

    function ExpandIcon(){
        return(
            <span className='expand-plus'>+</span>
        )
    }
    
    const qAndAnswers = [
        {
            id: 1,
            question: 'Do I need a personal injury report?',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.',
        },
        {
            id: 2,
            question: 'How much is my case worth?',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.',
        },
        {
            id: 3,
            question: 'What should I do right after car accidect',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.',
        },
        {
            id: 4,
            question: 'How much is my case worth?',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.',
        },              
    ]
  return (
    <div className='FAQ-page'>
      <p className='FAQ-title'>FAQ</p>
      <div className='FAQ-bottom'>
        <div className='FAQ-left'>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        </div>
        <div className='FAQ-right'>
            {qAndAnswers.map(element => <Accordion
                expanded={expanded === `panel1${element.id}`} onChange={handleChange(`panel1${element.id}`)}
                sx={{
                    backgroundColor: '#1D1D1D',
                    borderBottom: '2px solid rgba(255, 255, 255, .05)',
                    paddingBottom: '10px'
                }}
                key={element.id}
            >
                <AccordionSummary
                    expandIcon={<ExpandIcon />}
                    aria-controls={`panel${element.id}a-content`}
                    id={`panel${element.id}a-header`}
                >
                    <p className='accordion-summary'>{element.question}</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p className='accordion-details'>{element.answer}</p>
                </AccordionDetails>
            </Accordion>)}
        </div>
      </div>
      
    </div>
  )
}

export default index
