import React from "react";

function ImgCards (props) {
    return (
        <div>
            <div className="card">
                <img src={ props.image } alt={ props.name } />
            </div>
        </div>
    )
};

export default ImgCards;