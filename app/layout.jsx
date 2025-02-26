import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";
import Navbar from "./Components/Navbar";
import { icons } from "lucide";
import Footer from "./Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Health Point",
  description: "Health Point - Your first destination for integrated medical care! 🏥💙We provide you with a specialized platform to connect patients with the best doctors in various medical specialties. Book your appointments easily, consult doctors remotely, and read other patients &#39; reviews and experiences. Our goal is to facilitate your access to reliable, high-quality healthcare. Your health is our priority!",
  icons: {
    icon: "/logo.svg",
  },
};


export default function RootLayout({ children }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
          {children}
        <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
