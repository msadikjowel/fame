import "./globals.css";
import "leaflet/dist/leaflet.css";
import Topbar from "../components/Topbar.jsx";
import Navbar from "../components/Navbar.jsx";

export const metadata = {
  title: "Fame",
  description: "The best Printing Company in Cox's Bazar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Topbar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
