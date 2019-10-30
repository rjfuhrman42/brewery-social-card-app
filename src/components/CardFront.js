import React from "react"

function CardFront (props) 
{
    const {name, established, isOrganic, isMassOwned, isInBusiness, website} = props.data
    const organic = isOrganic === "Y" ? "Is organic" : "Is not organic"
    const massOwned = isMassOwned === "Y" ? "Is mass owned" : "Is not mass owned"
    const inBusiness = isInBusiness === "Y" ? "Is currently in Business" : "Is currently out of business"
    
    return(
            <div className="description">
                <h1>{name}</h1>
                <p>est. {established}</p>
                <p>{organic}</p>
                <p>{massOwned}</p>
                <p>{inBusiness}</p>
                <a href={website}>{name} Website</a>
            </div>
    )
}

export default CardFront