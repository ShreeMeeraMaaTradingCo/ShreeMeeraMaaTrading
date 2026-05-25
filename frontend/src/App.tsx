/**
 * Professional Business Website
 *
 * This React application is structured for easy conversion to Next.js:
 * - All pages are in /src/pages/
 * - Components are in /src/components/
 * - CSS files are centralized in /src/styles/
 * - Color palette: Primary Orange (#FF9B45), Background (#F4E7E1), Brown (#7B4019), Peach (#FFBF78)
 *
 * To convert to Next.js:
 * 1. Move pages to /app/ directory structure
 * 2. Replace react-router with Next.js routing
 * 3. Convert CSS imports to CSS modules if needed
 * 4. Update image imports to use next/image
 */

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export default function App() {
  return <RouterProvider router={router} />;
}
