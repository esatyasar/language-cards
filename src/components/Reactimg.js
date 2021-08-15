import React from 'react'
import reactimg from "../assets/react.svg";

function reactimgFunc() {
    return (
        <div className="d-flex justify-content-center my-5">
            <img className="col-3" src= {reactimg} alt="react" />
        </div>
    )
}

export default reactimgFunc
