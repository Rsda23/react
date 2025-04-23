import { Link } from 'react-router';
export default function Tests() {
    return (
        <div className="max-w-md mx-auto mt-10 px-4">
          <p className="mt-5 bg-fuchsia-950 mb-3">components Tests.tsx :</p>
          <h1 className="font-bold">hello World!</h1>
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
                <Link to="/login">
                    <button className="bg-purple-600 text-white px-4 py-2 rounded hover:text-fuchsia-700">
                        Aller à Login.tsx
                    </button>
                </Link>
            </div>
            <div className="mt-5 mb-5">
                <Link to="/welcome">
                    <button className="bg-purple-600 text-white px-4 py-2 rounded hover:text-fuchsia-700">
                        Aller à Welcome.tsx
                    </button>
                </Link>
            </div>
        </div>
      );
    }