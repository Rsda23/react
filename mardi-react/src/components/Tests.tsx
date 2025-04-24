import { Link } from 'react-router';
export default function Tests() {
    return (
        <div className="max-w-md mx-auto mt-10 px-4">
            <div className="mt-5 mb-5">
                <Link to="/logo">
                <button className="flex items-center gap-1 text-sm text-white px-3 py-1.5 rounded border border-white hover:text-fuchsia-500 hover:border-fuchsia-500 transition-all">
                    <span className="text-lg mr-1">←</span> Retour
                </button>
                </Link>
            </div>

            <p className="mt-5 bg-fuchsia-950 mb-3">components Tests.tsx :</p>
          
            <h1 className="font-bold">hello World!</h1>
        </div>
      );
    }