import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Render content on selected HTML element
createRoot(document.getElementById("root")).render(
  <StrictMode>Hello</StrictMode>
);
