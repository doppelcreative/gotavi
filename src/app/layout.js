import "./global.scss";
import "../common/assets/scss/main.scss";
import localFont from "next/font/local";
import "@fortawesome/fontawesome-free/css/all.min.css";

const neurialGrotesk = localFont({
  src: [
    {
      path: "../common/assets/fonts/NeurialGrotesk-Light.woff",
      weight: "400",
      style: "normal",
    },
     {
      path: "../common/assets/fonts/NeurialGrotesk-Medium.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../common/assets/fonts/NeurialGrotesk-Bold.woff",
      weight: "700",
      style: "bold",
    },
    
  ],
  variable: "--font-neurialGrotesk",
});

export const metadata = {
  title: "Gotavi",
  description: "GotAvi - Business Registration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${neurialGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
