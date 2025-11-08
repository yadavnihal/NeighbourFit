import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  {/* <GoogleOAuthProvider clientId="660907925069-d5ii6sn0nkrfv95s88tug59msb6n3dd7.apps.googleusercontent.com"> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </GoogleOAuthProvider> */}
  </StrictMode>
);
