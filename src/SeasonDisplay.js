import './SeasonDisplay.css';
import React from 'react';

// config objects
const seasonConfig = {
    summer: {
      text: "Summer time, y'all! Surfing Time!!",
      iconName: 'sun'
    },
    winter: {
      text: "Winter time, y'all!  Snowboarding Time!!",
      iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
      return lat > 0 ? 'summer' : 'winter';
    } else {
      return lat > 0 ? 'winter' : 'summer';
    }
}
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {text, iconName} = seasonConfig[season]; // {text, iconName}

return (
   <div className={`season-display ${season}`}>
     <i className={`icon-left massive ${iconName} icon`}/>
     <h1>{text}</h1>
     <i className = {`icon-right massive ${iconName} icon`}/>

   </div>

  )
}

export default SeasonDisplay;
