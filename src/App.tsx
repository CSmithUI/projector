import { useState } from 'react';

import './App.css';

function App() {
  return (
    <div className='font-sans text-white'>
      <header>
        <nav className='flex items-center justify-between flex-wrap bg-stone-950 p-6'>
          <div className='flex items-center flex-shrink-0 text-lime-500 mr-6'>
            <span className='font-semibold text-xl tracking-tight'>
              projector
            </span>
          </div>
          <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
            <div className='text-sm lg:flex-grow'>
              <a
                href='#responsive-header'
                className='block mt-4 lg:inline-block lg:mt-0 text-stone-50 hover:text-white mr-4'
              >
                Docs
              </a>
              <a
                href='#responsive-header'
                className='block mt-4 lg:inline-block lg:mt-0 text-stone-50 hover:text-white mr-4'
              >
                Examples
              </a>
              <a
                href='#responsive-header'
                className='block mt-4 lg:inline-block lg:mt-0 text-stone-50  hover:text-white'
              >
                Blog
              </a>
            </div>
            <div>
              <a
                href='#'
                className='inline-block text-sm px-4 py-2 leading-none border rounded text-stone-50 border-lime-500 hover:border-transparent hover:text-stone-950 hover:bg-stone-50 mt-4 lg:mt-0'
              >
                Download
              </a>
            </div>
          </div>
        </nav>
      </header>
      <section className='pt-9'></section>
    </div>
  );
}

export default App;
