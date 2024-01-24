import { SignOutButton, SignInButton } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated } from "convex/react";
import { Outlet } from "react-router-dom";

import "./App.css";
import useStoreNewUser from "./hooks/useStoreNewUser.ts";

function App() {
  const userId = useStoreNewUser();

  console.log(userId);

  return (
    <>
      <Unauthenticated>
        <div className="font-sans font-thin text-white">
          <header className="flex items-center justify-between bg-neutral-950 py-4">
            <div className="float-left ml-6 flex flex-shrink-0 items-center text-lime-500">
              <span className="text-xl font-semibold tracking-tight">
                projector
              </span>
            </div>
            <nav className="flex flex-wrap items-center justify-between">
              <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
                <div className="text-sm lg:flex-grow">
                  <a
                    href="#responsive-header"
                    className="mr-4 mt-2 block text-neutral-50 hover:text-white lg:mt-0 lg:inline-block"
                  >
                    Docs
                  </a>
                  <a
                    href="#responsive-header"
                    className="mr-4 mt-2 block text-neutral-50 hover:text-white lg:mt-0 lg:inline-block"
                  >
                    Examples
                  </a>
                  <a
                    href="#responsive-header"
                    className="mt-2 block text-neutral-50 hover:text-white lg:mt-0  lg:inline-block"
                  >
                    Blog
                  </a>
                </div>
                <div className="px-6">
                  <div
                    className="mt-4 inline-block rounded border border-lime-500
                    px-4 py-2 text-sm leading-none
                    text-neutral-50 hover:border-transparent
                    hover:bg-neutral-50 hover:text-neutral-950 lg:mt-0"
                  >
                    <SignInButton />
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <section className="mx-auto pt-9 sm:container">
            <p>Please sign in or create an account.</p>
          </section>
        </div>
      </Unauthenticated>
      <Authenticated>
        <div className="font-sans font-thin text-white">
          <header className="flex items-center justify-between bg-neutral-950 py-4">
            <div className="float-left ml-6 flex flex-shrink-0 items-center text-lime-500">
              <span className="text-xl font-semibold tracking-tight">
                projector
              </span>
            </div>
            <nav className="flex flex-wrap items-center justify-between">
              <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
                <div className="text-sm lg:flex-grow">
                  <a
                    href="#responsive-header"
                    className="mr-4 mt-2 block text-neutral-50 hover:text-white lg:mt-0 lg:inline-block"
                  >
                    Docs
                  </a>
                  <a
                    href="#responsive-header"
                    className="mr-4 mt-2 block text-neutral-50 hover:text-white lg:mt-0 lg:inline-block"
                  >
                    Examples
                  </a>
                  <a
                    href="#responsive-header"
                    className="mt-2 block text-neutral-50 hover:text-white lg:mt-0  lg:inline-block"
                  >
                    Blog
                  </a>
                </div>
                <div className="px-6">
                  <div className="mt-4 inline-block rounded  border border-neutral-500 px-4 py-2  text-sm leading-none text-neutral-50 hover:border-neutral-500 hover:border-transparent hover:bg-neutral-900 hover:text-neutral-50 lg:mt-0">
                    <SignOutButton />
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <section className="mx-auto pt-9 sm:container">
            <Outlet />
          </section>
        </div>
      </Authenticated>
    </>
  );
}

export default App;
