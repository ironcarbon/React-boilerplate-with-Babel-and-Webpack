import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//Components have 3 different aspects to it.
// 1. Can have some state and manage it. The whole idea of React, they are each able to manage their own states. Then, build whole application by composing other components together.
// 2. Lifecycle: fetching some data from API
// 3. UI  => render method is used to describe how UI looks like. 
// A component is concerned about STATE, LIFECYCLE, UI.
// Babel convert or compile JSX code into regular old JS, using createElement invocation

class App extends React.Component {
    render() {
        return (
            <div>
                Hello Developers!
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
)