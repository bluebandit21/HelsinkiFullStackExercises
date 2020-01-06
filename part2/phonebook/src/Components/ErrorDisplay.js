import React from 'react'

const ErrorDisplay =  ({errorMessage}) => {
    if(errorMessage === null) return <></>
    return (
        <p style={{
            color: 'grey',
            border: '1px outset red',
            borderStyle: 'dotted'
        }}>
            {errorMessage}
        </p>
    )
}

export default ErrorDisplay