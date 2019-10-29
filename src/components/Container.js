import React from "react"
import Brewery from "./Brewery"

function Container()
{
    return(
        <div className="grid-container">
            <Brewery/>
            <Brewery/>
            <Brewery/>
            <Brewery/>
            <Brewery/>
            <Brewery/>
        </div>
    )
}

export default Container