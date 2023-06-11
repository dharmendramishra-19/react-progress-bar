import React from 'react';
import './style.css';

type IProps = {
  progress: number;
};

const ProgressBar: React.FC<IProps> = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-fill"></div>
    </div>
  );
};

export default ProgressBar;
