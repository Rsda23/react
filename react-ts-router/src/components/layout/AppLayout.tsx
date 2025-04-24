// src/components/layout/AppLayout.tsx
import React from 'react';
import { Outlet, Navigate } from 'react-router';
import { useAuth } from '../../hooks/useAuth';
import Navbar from './Navbar';

const AppLayout: React.FC = () => {
  const { isAuthenticated } = useAuth();

  // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;