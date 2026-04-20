import "./globals.css";

export const metadata = {
  title: "Fame",
  description: "The best Printing Company in Cox's Bazar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}