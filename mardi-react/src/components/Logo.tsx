import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import { Link } from 'react-router';

export default function Logo() {
  return (
    <div className="mx-auto mt-10 max-w-md px-4">
      <p className="mt-5 bg-fuchsia-950">components Logo.tsx :</p>
      <div className="mt-4 flex justify-center gap-6">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="mt-5 mb-5">
        <Link to="/addTodo">
          <button className="w-full rounded bg-purple-600 px-4 py-2 text-white hover:text-fuchsia-700">
            Aller à AddTodo.tsx
          </button>
        </Link>
      </div>
      <div className="mt-5 mb-5">
        <Link to="/list">
          <button className="w-full rounded bg-purple-600 px-4 py-2 text-white hover:text-fuchsia-700">
            Aller à Liste.tsx
          </button>
        </Link>
      </div>
      <div className="mt-5 mb-5">
        <Link to="/tests">
          <button className="w-full rounded bg-purple-600 px-4 py-2 text-white hover:text-fuchsia-700">
            Aller à Test.tsx
          </button>
        </Link>
      </div>
      <div className="mt-5 mb-5">
        <Link to="/welcome">
          <button className="w-full rounded bg-purple-600 px-4 py-2 text-white hover:text-fuchsia-700">
            Aller à Welcome.tsx
          </button>
        </Link>
      </div>
      <div className="mt-5 mb-5">
        <Link to="/login">
          <button className="w-full rounded bg-purple-600 px-4 py-2 text-white hover:text-fuchsia-700">
            Aller à Login.tsx
          </button>
        </Link>
      </div>
    </div>
  );
}
