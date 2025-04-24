import { useState } from 'react';
import { Link } from 'react-router';

export default function Welcome() {
    const [count, setCount] = useState(0)

    return (
        <div className="max-w-md mx-auto mt-10 px-4">
            <div className="mt-5 mb-5">
                <Link to="/logo">
                    <button className="flex items-center gap-1 text-sm text-white px-3 py-1.5 rounded border border-white hover:text-fuchsia-500 hover:border-fuchsia-500 transition-all">
                    <span className="text-lg mr-1">←</span> Retour
                    </button>
                </Link>
            </div>
          <p className="mt-5 bg-fuchsia-950 mb-3">components Welcome.tsx :</p>
          
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
