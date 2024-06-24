import React from "react";

interface ProgressBarProps {
  value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  return (
    <div className="w-full bg-gray rounded-full h-4">
      <div
        className="bg-blue h-4 rounded-full"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
