import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { clientId, domain } from "./utils.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      cacheLocation="localstorage"
      domain={domain}
      clientId={clientId}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
