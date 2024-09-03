import React from 'react'
import ReactDOM from 'react-dom/client'
import { PokeApp } from './components/PokeApp'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PokeApp/>
    </React.StrictMode>
)