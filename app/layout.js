import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MegaMenuWithHover from "./components/NavbarLayout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoriteContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Resom",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white antialiased`}
      >
        <CartProvider>
        <FavoritesProvider>
        <Header />
          {children}
          <Footer />
        </FavoritesProvider>
        </CartProvider>
      </body>
    </html>
  );
}
