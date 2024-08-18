import React, {useState, useEffect, useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faRedo } from '@fortawesome/free-solid-svg-icons';


export function Pomonic() {
    const [time, setTime] = useState(1500);
    const [isRunning, setIsRunning] = useState(false);
    
    const startTimer = () => {
        setIsRunning(true);
    };
    const stopTimer = () => {
        setIsRunning(false);
    };
    const resetTime = () => {
        setTime(1500)
        setIsRunning(false)
    };

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime > 0) {
                        return prevTime - 1;
                    } else {
                        clearInterval(interval);
                        return 0;
                    }
                });
            }, 1000);
    } else {
            clearInterval(interval);
        } return () => clearInterval(interval);
    }, [isRunning]);


    return(
        <div className="Pomonic">
            <h1>Pomonic</h1>
            <Timer time={time} />
            <Controls startTimer={startTimer} stopTimer={stopTimer} resetTime={resetTime}/>
        </div>
    );
}


function formattedTime(seconds){
    console.log(seconds/60)
    const minutes = Math.floor(seconds/ 60);
    const secs = seconds % 60;
    return `${minutes < 10 ? '0' + minutes : minutes}:${secs < 10 ? '0' + secs : secs}`;
  };

function Timer({time}) {
    return (
        <div className="timer-display">
            {formattedTime(time)}
        </div>
    );
};

const Controls = ({ startTimer, stopTimer, resetTime }) => {
    return (
        <div className="buttons-container">
            <FontAwesomeIcon icon={faPause} onClick={stopTimer} alt="pausa" id="stop-time"/>
            <FontAwesomeIcon icon={faPlay} onClick={startTimer} alt="play" id="play-time"/>
            <FontAwesomeIcon icon={faRedo} onClick={resetTime}  alt="resetar"id="reset-time"/>
        </div>
    );
};