import React from 'react';

const ErrorMessage = (props)=>{
    return(

        <div className="error">
            <p>{props.msg}</p>
        </div>
    )
}

export default ErrorMessage;