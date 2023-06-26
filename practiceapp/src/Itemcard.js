import React from "react"

export default function Itemcard(props){
    return (
        <div className="item--container">
            <div className="item--left">
                <img src={props.logo} />
                <p className="item--name">{props.name}</p>
                <div>
                    <p className="item--index">{props.currentIndex}</p>
                    <p className="item--currency">INR</p>
                </div>
                
            </div>

            <p className={`${props.inc ? "inc" : "dec"} item--percent`}
            >{props.percent}</p>
        </div>
    )
}