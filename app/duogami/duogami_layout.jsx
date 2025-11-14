// app/layout.jsx
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "DuoGami",
  description: "DuoGami — Fold. Learn. Create.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="root">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
