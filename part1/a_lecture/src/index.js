import React from 'react'
import ReactDOM from 'react-dom'

const Clock = () => {
    const now = new Date();
    return (
        <div>
            <p>The time is now {now.toString()}.</p>
        </div>
    )
}

const Hello = (props) => {
    const difference = 80 - props.age;
    const isYounger = (difference > 0);

    return (
        <div>
            <p>Hello {props.name}, {isYounger ? "you will turn 80 in" : "you turned 80"} {Math.abs(difference)} years{isYounger ? "" : " ago"}.</p>
        </div>
    )
}
const App = () => {
    console.log("Component logging");
    const a = 10;
    const b = 16;
    const now = new Date();
    return (
        <>
            <p>Hello world!</p>
            <p>a is {a}, and b {b}.</p>
            <Clock />
            <Clock />
            <Hello name="T-Dawg" age={90} />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));