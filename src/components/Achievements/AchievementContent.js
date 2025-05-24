import React from "react";

function AchievementContent(props) {
  return (
    <div className="achievement-item resume-item">
      <ul>
        {props.content && props.content.map((value, index) => (
          <li key={index}> ‣ {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default AchievementContent;
