import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}


/* return (
  <>
    <!DOCTYPE html>

    <html lang="en">

    <head>
      <meta charset="UTF-8" />
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

    </html>
  </>
)


*/
export default App
