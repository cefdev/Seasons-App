import React from 'react';

// Loading spinner
const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui large text loader">{props.message}</div>
        </div>
    )
}

// Default Spinner props in case we haven't defined any for message prop
Spinner.defaultProps = {
    message: "Loading..."
}

export default Spinner;