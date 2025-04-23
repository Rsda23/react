import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg';

export default function Logo() {
    return (
      <div className="max-w-md mx-auto mt-10 px-4">
        <p className="mt-5 bg-fuchsia-950">components Logo.tsx :</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </div>
    )
}