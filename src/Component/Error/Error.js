import React from "react"
import "./Error.css"
const Error = ({message}) => {
    return (
        <div className="error">
            <h2>{message}</h2>
        </div>
    )
}

export default Error;