import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/Cursor"
import Footer from "@/components/Footer"

type IconsURLs = {
  icon: string;
  shortcut: string;
  apple: string;
}

export const metadata: Metadata = {
  title: "Junior Caucus Website",
  description: `jcDescription`,
  icons: {
    icon: "/static/icons/favicon.ico",
    shortcut: "/static/icons/favicon-32x32.png",
    apple: "/static/icons/apple-touch-icon.png",
  },
};
const jcDescription = ` 
  We represent the Junior class body and are dedicated to easing the challenges of junior year by alleviating stress through valuable resources and fun events!
   We are also prioritizing open communication and transparency from effective team collaboration to fostering clear and consistent communication with the student body!
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/static/icons/favicon.ico" sizes="any" />
        <link rel="stylesheet" href="https://use.typekit.net/zfd0jrc.css" />
        <link rel="apple-touch-icon" href="/static/icons/apple-touch-icon.png" type="image/png" sizes="any" />
        <link rel="icon2" href="/static/icons/favicon-32x32.png" type="image/png" sizes="any" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="children-holder">
        {children}
        </div>
        <Cursor />
        <Footer />
      </body>
    </html>
  );
}
