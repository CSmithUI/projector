import UserProfile from './User/UserProfile';

import './App.css';

function App() {
  return (
    <div className='font-sans text-white font-thin'>
      <header className='flex items-center justify-between bg-stone-950 py-4'>
        <div className='flex items-center flex-shrink-0 text-lime-500 ml-6 float-left'>
          <span className='font-semibold text-xl tracking-tight'>
            projector
          </span>
        </div>
        <nav className='flex items-center justify-between flex-wrap'>
          <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
            <div className='text-sm lg:flex-grow'>
              <a
                href='#responsive-header'
                className='block mt-2 lg:inline-block lg:mt-0 text-stone-50 hover:text-white mr-4'
              >
                Docs
              </a>
              <a
                href='#responsive-header'
                className='block mt-2 lg:inline-block lg:mt-0 text-stone-50 hover:text-white mr-4'
              >
                Examples
              </a>
              <a
                href='#responsive-header'
                className='block mt-2 lg:inline-block lg:mt-0 text-stone-50  hover:text-white'
              >
                Blog
              </a>
            </div>
            <div className='px-6'>
              <a
                href='#'
                className='inline-block text-sm px-4 py-2 leading-none border rounded text-stone-50 border-lime-500 hover:border-transparent hover:text-stone-950 hover:bg-stone-50 mt-4 lg:mt-0'
              >
                Sign In
              </a>
            </div>
          </div>
        </nav>
      </header>
      <section className='pt-9 lg:container mx-auto'>
        <UserProfile />
      </section>
    </div>
  );
}

export default App;
