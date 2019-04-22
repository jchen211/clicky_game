import React from "react";
import './styles.css';

function Jumbotron () {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">CLICKY GAME!</h1>
                    <p className="lead">Click the images to earn points. Don't click on the same twice. </p>
                </div>
            </div>
        )
    };

export default Jumbotron;