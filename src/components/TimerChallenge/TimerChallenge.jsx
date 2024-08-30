import { useRef, useState } from "react";
import ResultModal from "../ResultModal/ResultModal";


export default function TimerChallenge({ title, time }) {

  const [timeRemaining , setTimeRemaining] = useState(time * 1000)
  // const [timerIsActive , setTimerIsActive ] = useState(false);
  // console.log(time);
  const timer = useRef();
  const  dialog = useRef();

  if(timeRemaining <= 0 ){
    clearInterval(timer.current)
    dialog.current.open();
    setTimeRemaining(time * 1000)
  }

  function handleClick() {
    timer.current = setInterval( () => {
      setTimeRemaining( prevTimeRemaining =>  prevTimeRemaining - 10 )

    } , 10 )

  }

  function handleStop() {
    clearInterval(timer.current)
    dialog.current.open();
    console.log(timerIsActive , timeRemaining)
  }

  return (
    <>
      <ResultModal ref={dialog}  targetTime={time} remainingTime={timeRemaining} />
      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {time} second{time > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleClick}>
            {" "}
            {timerIsActive ? "Stop Challenge" : "Start Challenge "}{" "}
          </button>
        </p>
        <p className={timerIsActive ? "active" : ""}>
          {" "}
          {timerIsActive ? "Timer is Running" : "Timer Inactive"}{" "}
        </p>
      </section>
    </>

  );
}
