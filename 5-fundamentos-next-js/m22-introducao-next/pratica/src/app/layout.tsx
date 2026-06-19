import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portal de Viagens",
  description: "Descubra o seus próximos destinos turísticos e visualize informações detalhadas sobre onde ir!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        <main className="page-content">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
