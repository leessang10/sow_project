import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Atelier Sow | Sound Of Wise",
    description: "아틀리에 소우(Atelier SOW)",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" suppressHydrationWarning>
        <body className={`${inter.className} transition-colors`}>
        <ThemeProvider>
            <Navigation/>
            {children}
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    );
}
