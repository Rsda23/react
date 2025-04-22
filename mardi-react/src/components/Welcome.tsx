import { useState } from 'react'

export default function Welcome() {
    const [count, setCount] = useState(0)

    return (
        <div className="w-full max-w-md">
          <p className="mt-5 bg-fuchsia-950">components Welcome.tsx :</p>
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
          </div>
      )
}
