import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eshwar Katika — CS & Cybersecurity Engineer",
  description:
    "Portfolio of Eshwar Katika — B.Tech Computer Science & Cyber Security student specializing in full-stack development, SOC operations, and cybersecurity. MERN Stack, Django, Java, Spring Boot.",
  keywords: [
    "Eshwar Katika",
    "Cybersecurity",
    "Full Stack Developer",
    "MERN Stack",
    "Portfolio",
    "Hyderabad",
    "Computer Science",
  ],
  authors: [{ name: "Eshwar Katika" }],
  openGraph: {
    title: "Eshwar Katika — CS & Cybersecurity Engineer",
    description:
      "Portfolio of Eshwar Katika — B.Tech CS & Cyber Security student with expertise in full-stack dev and cybersecurity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=JetBrains+Mono:wght@400;500;600&family=Dancing+Script:wght@600;700&family=Playfair+Display:ital,wght@0,700;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="noise">{children}</body>
    </html>
  );
}
