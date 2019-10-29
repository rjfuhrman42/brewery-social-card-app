import React from "react"
import Brewery from "./Brewery"

function Container()
{
    return(
        <div className="grid-container">
            {renderCards()}
        </div>
    )
}

function renderCards()
{
    let deck = [];
    for(let x = 0; x < 8; x++)
    {
        if(x === 1 || x === 3)
        {}
        else{
            deck.push(<Brewery num={x} key={x*2}/>)
        }
    }
    return deck;
}

export default Container