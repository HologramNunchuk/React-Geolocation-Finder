import React from 'react';

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
       <div className="ui big text loader">
         {props.message}
       </div>
    </div>
  )
}

// If there is no value for the message props, this will be the default text value given for message with the defaultProps()
Spinner.defaultProps = {
  message: "Hold up, it's loading..."
}

export default Spinner
