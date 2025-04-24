import { Link } from 'react-router';
export default function Tests() {
  return (
    <div className="mx-auto mt-10 max-w-md px-4">
      <div className="mt-5 mb-5">
        <Link to="/logo">
          <button className="flex items-center gap-1 rounded border border-white px-3 py-1.5 text-sm text-white transition-all hover:border-fuchsia-500 hover:text-fuchsia-500">
            <span className="mr-1 text-lg">←</span> Retour
          </button>
        </Link>
      </div>

      <p className="mt-5 mb-3 bg-fuchsia-950">components Tests.tsx :</p>

      <h1 className="font-bold">hello World!</h1>
    </div>
  );
}
