import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const handleLogin = async () => {
    const success = await login(username, password);
    console.log('username:', username);
    console.log('password:', password);
    if (success) {
      navigate('/logo');
    } else {
      alert('Identifiant ou mot de passe incorrects');
    }
  };

  return (
    <div className="mx-auto mt-10 max-w-md px-4">
      <p className="mt-5 mb-8 bg-fuchsia-950">components Login.tsx :</p>
      <div className="mx-auto max-w-xl rounded-2xl border p-6">
        <h2 className="mb-6 text-center text-2xl font-bold">Connexion</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col md:col-span-2">
            <label className="mb-1 text-sm font-semibold">Identifiant</label>
            <input
              className="rounded border p-2 text-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="mb-1 text-sm font-semibold">Mot de passe</label>
            <div className="relative">
              <input
                id="password"
                className="w-full rounded border p-2 pr-10 text-white"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 end-0 z-20 flex items-center rounded-e-md border-l !border-white !bg-transparent px-3 text-black focus:outline-none"
              >
                <svg
                  className="size-4 shrink-0"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {showPassword ?
                    <>
                      <path d="M1 1l22 22" />
                      <path d="M17.94 17.94A10.43 10.43 0 0 1 12 19c-7 0-10-7-10-7a13.05 13.05 0 0 1 4.12-4.94M12 5c7 0 10 7 10 7a13.05 13.05 0 0 1-4.12 4.94" />
                      <path d="M15 12a3 3 0 0 1-3 3" />
                    </>
                  : <>
                      <path d="M12 12a3 3 0 1 0 3 3" />
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    </>
                  }
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={handleLogin}
            className="rounded bg-black px-6 py-2 text-white transition-all hover:bg-white hover:text-fuchsia-700"
          >
            Se connecter
          </button>
        </div>
      </div>
      <div className="mt-5 mb-5">
        <p className="mt-5 font-bold">Identifiant : azerty</p>
        <p className="mb-8 font-bold">Mot de passe : 123456</p>
      </div>
    </div>
  );
}
