import {useState, useEffect} from 'react';

export default function QuestionTimer({timeout, onTimeout, mode}){
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(()=> {
        const timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer)
        }
    }, [onTimeout, timeout])


    useEffect(()=> {
        const interval = setInterval(()=> {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
        }, 100);

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <progress id='question-time' max={timeout} value={remainingTime} className={mode}/>
    )
}
/*
This component starts a visual timer that counts down from the timeout value. If the timer reaches zero 
(or very close to it due to the 100ms interval), it calls the onTimeout function you provided. 
It also makes sure to clean up the timers when the component is no longer needed to avoid issues. 
The mode prop allows you to change the appearance of the timer based on whether the question has been answered, 
was correct, or was wrong.
*/
    // because we are using two props onTimeout and timeout, we need to populate dependecies
    // setTimeout(()=> {
    //     onTimeout();
    // }, timeout)