import React, {useEffect} from "react";

function Timer ({timeLeft, setTimeLeft}) {
        
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTimeLeft => prevTimeLeft -1);
            }, 1000);
            console.log('starting timer.');
        return () => {
            clearInterval(timer); //cleanup
            console.log('cleaning up.')
        }
        // eslint-disable-nexxt-line react-hooks/exhaustive-deps
    }, []);

    return (
        <strong>Time: {timeLeft}</strong>
    )
}
export default Timer;

