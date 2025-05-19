import {useState, useCallback} from 'react';
import QUESTIONS from '../questions.js';
import Question from './Question.jsx';
import Summary from './Summary.jsx';



export default function Quizz(){
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
        setUserAnswers(prevUserAnswers=> {
            return [...prevUserAnswers, selectedAnswer]
        });
    }, []);

    const handleSkipAnswer = useCallback(()=> handleSelectAnswer(null), [handleSelectAnswer]);

    if(quizIsComplete){
        return <Summary userAnswers={userAnswers} />
    }

    
    return (
       <div id='quiz'>
         <Question
            key={activeQuestionIndex}
            index={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer}
          />
       </div>
    )
}

/*
when i put the key={activeQuestionIndex} in <QuestionTimer> it resets the timer i put, resets the component
Key prop also has another purpose, whenever it changes on a component even if that component is not part of a list, whenever it changes React
will destroy the old component instance and create a new one, so it will unmount and remount it basically.
And that is what we need here, i want to recreate this question timer component whenever we switch to a new question.
i did that same for the Answers component
*/