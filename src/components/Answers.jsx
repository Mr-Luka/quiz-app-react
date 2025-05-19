import {useRef} from 'react';

export default function Answers({answers, selectedAnswer, answerState, onSelect}){
    const shuffledAnswers = useRef();

    if(!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(()=> Math.random() - 0.5);
    }
    return (
            <ul id='answers'> 
                {shuffledAnswers.current.map(answer=>  {
                    const isSelected = selectedAnswer === answer;
                    let cssClass = '';

                    if(answerState === 'answered' && isSelected){
                        cssClass = 'selected'
                    }

                    if((answerState === 'correct' || answerState === 'wrong') && isSelected){
                        cssClass = answerState;
                    }

                 return <li key={answer} className='answer'>
                        <button onClick={()=>onSelect(answer)} className={cssClass} disabled={answerState !== ''}>{answer}</button>
                    </li>
                })}
            </ul>
    )
}

/*
Shuffling: The answers are shuffled only once when the component mounts for a particular question, ensuring a consistent shuffled order throughout the time the question is active.
Visual Feedback: The cssClass is dynamically set based on the answerState and whether the current answer is the selectedAnswer, providing visual cues to the user.
Disabling Buttons: The buttons are disabled after an answer is selected, preventing further interaction until the component potentially re-renders for the next question.
Communication with Parent: The onSelect prop is crucial for communicating the user's choice back to the Question component, which then handles the logic for evaluating correctness and updating the overall quiz state.
*/