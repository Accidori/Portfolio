import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <html lang="en">

    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Portfolio</title>
    </head> 
    

    <header>
      <h1>Rita</h1>

      <nav>
        <ul>
          <li>
            <h2>About Me</h2>
          </li>
          <li>
            <h2>Portfolio</h2>
          </li>
          <li>
            <h2>Contact</h2>
          </li>
          <li>
            <h2>Resume</h2>
          </li>
        </ul>
      </nav>
    </header>

    <body>
      <h1>About me</h1>
      <p>Sample text</p>
    </body>

    <></>

    <footer>
      <p>© 2024 Rita</p>
        </footer>
    </html>
  )
}

export default App;
