import * as React from 'react';
import ProgressBar from './ProgressBar';
import "./style.css";

const timerDuration = 1 * 1000;
const totalDuration = 10 * 1000;
const totalCycle = totalDuration / timerDuration;
const progressEachCycle = (timerDuration / totalDuration) * 100;

export default function App() {
  const [progress, setProgress] = React.useState(0);
  const timerRef = React.useRef<any>();
  const cycleCompleted = React.useRef(0);

  React.useEffect(()=>{
    
  }, [])
  return (
    <ProgressBar progress={10} />
  );
}
