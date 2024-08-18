import React, {useState, useEffect, useRef} from "react";
// não conheço fontawesome, mas fica a vontade pra alterar os icons

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
    return formattedTime(time)
};

const Controls = ({ startTimer, stopTimer, resetTime }) => {
    return (
        <div className="buttons-container">
            <button className="" onClick={stopTimer}>
                <img src="" alt="pause" />
            </button>
            <button id="" onClick={startTimer}>
                <img src="" alt="play" />
            </button>
            <button id="" onClick={resetTime}>
                <img src="" alt="reset" />
            </button>
        </div>
    );
};