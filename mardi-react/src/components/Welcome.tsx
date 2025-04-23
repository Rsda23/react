import { useState } from 'react';
import { Link } from 'react-router';

export default function Welcome() {
    const [count, setCount] = useState(0)

    return (
        <div className="max-w-md mx-auto mt-10 px-4">
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
          <div className="mt-5 mb-5">
                <Link to="/addTodo">
                    <button className="bg-purple-600 text-white px-4 py-2 rounded hover:text-fuchsia-700">
                        Aller à AddTodo.tsx
                    </button>
                </Link>
            </div>
            <div className="mt-5 mb-5">
                <Link to="/list">
                    <button className="bg-purple-600 text-white px-4 py-2 rounded hover:text-fuchsia-700">
                        Aller à Liste.tsx
                    </button>
                </Link>
            </div>
            <div className="mt-5 mb-5">
                <Link to="/logo">
                    <button className="bg-purple-600 text-white px-4 py-2 rounded hover:text-fuchsia-700">
                        Aller à Logo.tsx
                    </button>
                </Link>
            </div>
            <div className="mt-5 mb-5">
                <Link to="/tests">
                    <button className="bg-purple-600 text-white px-4 py-2 rounded hover:text-fuchsia-700">
                        Aller à Test.tsx
                    </button>
                </Link>
            </div>
            <div className="mt-5 mb-5">
                <Link to="/login">
                    <button className="bg-purple-600 text-white px-4 py-2 rounded hover:text-fuchsia-700">
                        Aller à Login.tsx
                    </button>
                </Link>
            </div>
        </div>
      )
}
