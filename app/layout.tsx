import type { Metadata } from "next";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import StoreProvider from "./StoreProvide";
import Navbar from "./components/layout/navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Aravinda Nawarathna",
  description: "RefCoins Assessment - Aravinda Nawarathna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <StoreProvider>
            <Navbar/>
            {children}
          </StoreProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
