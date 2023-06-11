import * as React from 'react';
import ProgressBar from './ProgressBar';
import './style.css';

const TIMERDURATION = 1 * 1000;
const TOTALDURATION = 10 * 1000;
const TOTALCYCLE = TOTALDURATION / TIMERDURATION;
const PROGRESSEACHCYCLE = (TIMERDURATION / TOTALDURATION) * 100;

export default function App() {
  const [progress, setProgress] = React.useState(0);
  const timerRef = React.useRef<any>();
  const cycleCompleted = React.useRef(0);

  React.useEffect(()=>{
    timerRef.current =
    setInterval(()=>{
      setProgress((prevProgress)=>prevProgress + PROGRESSEACHCYCLE);
  cycleCompleted.current +=1
  if(cycleCompleted.current>=10) clearInterval(timerRef.current)
    }, TIMERDURATION)

  return () => {
    clearInterval(timerRef.current)
  }
  }, [])
  return <ProgressBar progress={progress} />;
}
