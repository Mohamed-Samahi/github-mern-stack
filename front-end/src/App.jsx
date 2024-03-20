import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Sidebar } from './components';
import { ExplorePage, HomePage, LikesPage, LoginPage, SignUpPage } from './pages';

import { Toaster } from 'react-hot-toast';
import Modal from './components/Modal';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { authorizedUser, loading } = useAuth()

  if (loading) return null;

  return (
    <div className='relative flex w-full h-full'>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 2500,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            icon: '✅',
          },
          error: {
            icon: '❌',
          },
        }}
      />
      <Modal />
      <Sidebar />
      <div className='flex items-center justify-center flex-1 w-full max-w-5xl mx-auto my-5 text-white transition-all duration-300'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={!authorizedUser ? <LoginPage /> : <Navigate to={"/"} />} />
          <Route path='/signup' element={!authorizedUser ? <SignUpPage /> : <Navigate to={"/"} />} />
          <Route path='/explore' element={authorizedUser ? <ExplorePage /> : <Navigate to={"/login"} />} />
          <Route path='/likes' element={authorizedUser ? <LikesPage /> : <Navigate to={"/login"} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App