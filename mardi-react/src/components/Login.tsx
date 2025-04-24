import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';



export default function Login(){
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
        <div className="max-w-md mx-auto mt-10 px-4">
            <p className="mt-5 bg-fuchsia-950 mb-8">components Login.tsx :</p>
            <div className="max-w-xl mx-auto border p-6 rounded-2xl">
                <h2 className="text-2xl font-bold text-center mb-6">Connexion</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col md:col-span-2">
                        <label className="mb-1 text-sm font-semibold">Identifiant</label>
                        <input className="p-2 rounded text-white border" value={username} onChange={(e) => setUsername(e.target.value)}  />
                    </div>

                    <div className="flex flex-col md:col-span-2">
                        <label className="mb-1 text-sm font-semibold">Mot de passe</label>
                        <div className="relative">
                            <input
                            id="password" className="p-2 rounded text-white border w-full pr-10" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 end-0 px-3 flex focus:outline-none items-center border-l text-black z-20 rounded-e-md !border-white !bg-transparent">
                            <svg className="shrink-0 size-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                {showPassword ? (
                                <>
                                    <path d="M1 1l22 22" />
                                    <path d="M17.94 17.94A10.43 10.43 0 0 1 12 19c-7 0-10-7-10-7a13.05 13.05 0 0 1 4.12-4.94M12 5c7 0 10 7 10 7a13.05 13.05 0 0 1-4.12 4.94" />
                                    <path d="M15 12a3 3 0 0 1-3 3" />
                                </>
                                ) : (
                                <>
                                    <path d="M12 12a3 3 0 1 0 3 3" />
                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                </>
                                )}
                            </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-6">
                    <button onClick={handleLogin} className="bg-black text-white px-6 py-2 rounded hover:bg-white hover:text-fuchsia-700 transition-all">
                    Se connecter
                    </button>
                </div>
            </div>
            <div className="mt-5 mb-5">
                <p className="mt-5 font-bold">Identifiant : azerty</p>
                <p className="font-bold mb-8">Mot de passe : 123456</p>
            </div>
        </div>
      );
}
