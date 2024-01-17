import UserProfile from "./User/UserProfile";
import { SignOutButton, SignInButton, useUser } from "@clerk/clerk-react";

import { useConvexAuth, Authenticated, Unauthenticated } from "convex/react";

import "./App.css";

// function App() {
//   const { isAuthenticated } = useConvexAuth();

//   return (
//     <div className="App">
//       {isAuthenticated ? "Logged in" : "Logged out or still loading"}
//     </div>
//   );
// }

function App() {
  //const { isAuthenticated } = useConvexAuth();

  const { user } = useUser();

  let LoggedInID = user?.id;

  // if (!isAuthenticated) {
  //   console.log(LoggedInID);

  return (
    <>
      <Unauthenticated>
        <div className="font-sans text-white font-thin">
          <header className="flex items-center justify-between bg-neutral-950 py-4">
            <div className="flex items-center flex-shrink-0 text-lime-500 ml-6 float-left">
              <span className="font-semibold text-xl tracking-tight">
                projector
              </span>
            </div>
            <nav className="flex items-center justify-between flex-wrap">
              <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                  <a
                    href="#responsive-header"
                    className="block mt-2 lg:inline-block lg:mt-0 text-neutral-50 hover:text-white mr-4"
                  >
                    Docs
                  </a>
                  <a
                    href="#responsive-header"
                    className="block mt-2 lg:inline-block lg:mt-0 text-neutral-50 hover:text-white mr-4"
                  >
                    Examples
                  </a>
                  <a
                    href="#responsive-header"
                    className="block mt-2 lg:inline-block lg:mt-0 text-neutral-50  hover:text-white"
                  >
                    Blog
                  </a>
                </div>
                <div className="px-6">
                  <div
                    className="inline-block text-sm px-4 py-2 leading-none
                    border rounded text-neutral-50 border-lime-500
                    hover:border-transparent hover:text-neutral-950
                    hover:bg-neutral-50 mt-4 lg:mt-0"
                  >
                    <SignInButton />
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <section className="pt-9 sm:container mx-auto">
            <p>Please sign in or create an account.</p>
          </section>
        </div>
      </Unauthenticated>
      <Authenticated>
        <div className="font-sans text-white font-thin">
          <header className="flex items-center justify-between bg-neutral-950 py-4">
            <div className="flex items-center flex-shrink-0 text-lime-500 ml-6 float-left">
              <span className="font-semibold text-xl tracking-tight">
                projector
              </span>
            </div>
            <nav className="flex items-center justify-between flex-wrap">
              <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                  <a
                    href="#responsive-header"
                    className="block mt-2 lg:inline-block lg:mt-0 text-neutral-50 hover:text-white mr-4"
                  >
                    Docs
                  </a>
                  <a
                    href="#responsive-header"
                    className="block mt-2 lg:inline-block lg:mt-0 text-neutral-50 hover:text-white mr-4"
                  >
                    Examples
                  </a>
                  <a
                    href="#responsive-header"
                    className="block mt-2 lg:inline-block lg:mt-0 text-neutral-50  hover:text-white"
                  >
                    Blog
                  </a>
                </div>
                <div className="px-6">
                  <div
                    className="
                    inline-block 
                    text-sm 
                    px-4 
                    py-2 
                    leading-none
                    border rounded 
                    text-neutral-50 
                    border-neutral-500 
                    hover:border-neutral-500
                    hover:border-transparent 
                    hover:text-neutral-50
                    hover:bg-neutral-900 
                    mt-4 
                    lg:mt-0"
                  >
                    <SignOutButton />
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <section className="pt-9 sm:container mx-auto">
            <UserProfile />
          </section>
        </div>
      </Authenticated>
    </>
  );
}

export default App;
