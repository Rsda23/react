import { useState } from 'react';
import { Link } from 'react-router';

export default function Welcome() {
  const [count, setCount] = useState(0);

  return (
    <div className="mx-auto mt-10 max-w-md px-4">
      <div className="mt-5 mb-5">
        <Link to="/logo">
          <button className="flex items-center gap-1 rounded border border-white px-3 py-1.5 text-sm text-white transition-all hover:border-fuchsia-500 hover:text-fuchsia-500">
            <span className="mr-1 text-lg">←</span> Retour
          </button>
        </Link>
      </div>
      <p className="mt-5 mb-3 bg-fuchsia-950">components Welcome.tsx :</p>

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
  );
}
