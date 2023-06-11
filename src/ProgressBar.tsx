import React from "react";
import "./style.css";

export function ProgressBar({progress}:any){
  return (
    <div className="progress-bar">
      <div className="progress-bar-fill"></div>
    </div>
  )
}