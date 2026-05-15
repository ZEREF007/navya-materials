import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <App />
        <Toaster
          position="bottom-center"
          toastOptions={{
            className: "font-sans",
            style: {
              background: "hsl(140 22% 24%)",
              color: "hsl(42 50% 97%)",
              border: "1px solid hsl(140 22% 30%)",
              borderRadius: "999px",
              padding: "12px 20px",
            },
          }}
        />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
