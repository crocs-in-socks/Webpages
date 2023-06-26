import React from "react"
import Itemcard from "./Itemcard.js"

export default function Column(props) {

    const columnItems = props.items.map((item) => {
        return (
        <Itemcard 
            logo={item.logo}
            name={item.name}
            currentIndex={item.currentIndex}
            percent={item.percent}
            inc={item.inc}
        />)
    })

    return (
        <div className="column--container">
            <p className="column--title">
                {props.title}
            </p>
            <div className="column--card">
                {columnItems}
                <p className="column--link">See More</p>
            </div>
        </div>
    )
}