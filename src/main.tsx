import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";

import App from "./App.tsx";
import CreateProject from "./components/Projects/CreateProject.tsx";
import UploadImages from "./components/Projects/UploadImages.tsx";
import UserProfile from "./components/User/UserProfile.tsx";
import UserHome from "./components/User/UserHome.tsx";
import ProjectDetail from "./components/Projects/ProjectDetail.tsx";
import "./index.css";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/home" element={<UserHome />}></Route>
      <Route path="/createproject" element={<CreateProject />}></Route>
      <Route
        path="/createproject/uploadimages"
        element={<UploadImages />}
      ></Route>
      <Route path="/user" element={<UserProfile />}></Route>
      <Route path="/project/:projectId" element={<ProjectDetail />}></Route>
    </Route>,
  ),
);

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <RouterProvider router={router} />
      </ConvexProviderWithClerk>
    </ClerkProvider>
  </React.StrictMode>,
);
