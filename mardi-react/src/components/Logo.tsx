import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import { Link } from 'react-router';

export default function Logo() {
  const navButtons = [
    { to: '/addTodo', label: 'Aller à AddTodo.tsx' },
    { to: '/list', label: 'Aller à Liste.tsx' },
    { to: '/tests', label: 'Aller à Test.tsx' },
    { to: '/welcome', label: 'Aller à Welcome.tsx' },
    { to: '/login', label: 'Aller à Login.tsx' },
  ];

  const logos = [
    {
      src: viteLogo,
      href: 'https://vite.dev',
      alt: 'Vite logo',
      className: 'logo',
    },
    {
      src: reactLogo,
      href: 'https://react.dev',
      alt: 'React logo',
      className: 'logo react',
    },
  ];

  return (
    <div className="mx-auto mt-10 max-w-md px-4">
      <p className="mt-5 bg-fuchsia-950">components Logo.tsx :</p>
      <div className="mt-4 flex justify-center gap-6">
        {logos.map((logo, index) => (
          <a
            key={index}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo.src} className={logo.className} alt={logo.alt} />
          </a>
        ))}
      </div>
      {navButtons.map(({ to, label }) => (
        <div key={to} className="mt-5 mb-5">
          <Link to={to}>
            <button className="w-full rounded bg-purple-600 px-4 py-2 text-white hover:text-fuchsia-700">
              {label}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
