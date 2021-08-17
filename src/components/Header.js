import React from 'react'
import Header from "../assets/react.svg";
import "./Header.css"

function HeaderFunc() {
    return (
        <div className="header-container d-flex justify-content-center my-5">
            <img className="image-container col-3" src= {Header} alt="react" />
        </div>
    )
}

export default HeaderFunc;
