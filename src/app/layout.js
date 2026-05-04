import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'animate.css';

const OutfitFont = Outfit({
  subsets: ["latin"],
});


export const metadata = {
  title: "Suncart Summer Store",
  description: "Suncart Summer store to purchase all your summer essential needs",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${OutfitFont.className}  h-full antialiased`}
      data-theme='light'
    >
      <body className="flex flex-col min-h-screen">
        
        <Navbar></Navbar>

        <main className="flex-1">
            {children}
        </main>
        
        <Footer></Footer>

        <ToastContainer />

      </body>
    </html>
  );
}
