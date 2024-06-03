import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Footer from "./components/Footer/Footer.tsx";
import "./index.css";
import { router } from "./routes.tsx";
import { clientId, domain } from "./utils.ts";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch((error) => {
        console.log("Service Worker registration failed:", error);
      });
  });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      cacheLocation="localstorage"
      domain={domain}
      clientId={clientId}
    >
      <RouterProvider router={router} />
      <Footer />
    </Auth0Provider>
  </React.StrictMode>
);
