import { useState } from 'react'
import heroImg from '../assets/img/kinal_sports.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img
            src={heroImg}
            className="base"
            width="170"
            height="179"
            alt="Kinal Sports"
          />
        </div>

        <div>
          <h1>Kinal Sports</h1>
          <p>
            Edit <code>src/app/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>

        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
    </>
  )
}

export default App