import { Inter } from "next/font/google";
import { Typography } from "@mui/material";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Authores App",
  description: "Favorities Authors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Typography variant="h4">Fav Authors</Typography>
        {children}
      </body>
    </html>
  );
}
