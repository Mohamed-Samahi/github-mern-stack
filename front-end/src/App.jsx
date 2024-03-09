import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar } from './components';
import { ExplorePage, HomePage, LikesPage, LoginPage, SignUpPage } from './pages';

import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div className='flex h-screen max-h-screen overflow-hidden'>
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

      <Sidebar />
      <div className='flex items-center justify-center flex-1 w-full h-full overflow-x-hidden overflow-y-auto text-white transition-all duration-300'>
        <div className='w-full h-full max-w-5xl mx-auto my-5'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/explore' element={<ExplorePage />} />
            <Route path='/likes' element={<LikesPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App