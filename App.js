import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'
import data from './data'

export default function App() {
    const main = data.map(item => {
        return(
            <Main
                key = {item.id}
                item = {item}
            />
        )
    })
    return(
        <div>
            <Navbar />
            <section>
                {main}
            </section>
        </div>
    )
}
