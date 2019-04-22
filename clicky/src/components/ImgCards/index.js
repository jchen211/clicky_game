import React from "react";

function ImgCards (props) {
    return (
        <div>
            <div className="card">
                <div className="img-container">
                    <img src={ props.image } alt={ props.name } />
                </div>    
            </div>
        </div>
    )
};

export default ImgCards;