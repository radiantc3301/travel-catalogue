import React from 'react'
import ReactDOM from 'react-dom'

export default function Main(props) {
    return(
        <div id = 'main'>
            <div>
                <img src = {props.item.imageUrl}/>
            </div>
            <div id = 'content'>
                <div id = 'basic'>
                    <p id = 'locate' >{props.item.location}</p>
                    <a id = 'link' href = {props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 id = 'title'>{props.item.title}</h1>
                <div id = 'date'>
                    <span>{props.item.startDate}</span>
                    <span> - </span>
                    <span>{props.item.endDate}</span>
                </div>
                <p id = 'desc'>{props.item.description}</p>
            </div>
        </div>
    )
}
