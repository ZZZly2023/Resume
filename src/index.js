import React from 'react'
import ReactDOM  from "react-dom/client"
import App from "./App"

const targetDom = document.getElementById('app')
debugger
const root = ReactDOM.createRoot(targetDom)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
