import { useImperativeHandle  , forwardRef , useRef } from "react"

const ResultModal = forwardRef( function ResultModal( {result , targetTime , remainingTime} , ref ){
    
    const dialog = useRef();
    useImperativeHandle(ref , () => {
        return {
            
            open(){
            
                dialog.current.showModal();
            
            }
            
        }
    })

    const lost = remainingTime <= 0;
    const formattedTime = (remainingTime / 1000).toFixed(2)
    return(
        <dialog ref={dialog} className="result-modal" >
            <h2>
                You {lost ? "Lost" : "Won"}!
            </h2>
            <p>
                The Target Time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                You Stopped The Timer with <strong>{formattedTime} Seconds Left.</strong>
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
})

export default ResultModal;