import React from "react"

function CardBack (props)
{
    return (
        <div className="image">
            <img src={props.image} alt="brewery logo"></img>
        </div>
    )
}

export default CardBack