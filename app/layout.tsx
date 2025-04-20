import './globals.css';
import type { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';
import { Analytics } from '@vercel/analytics/react';

import { hindienglosoftw8asc } from "@/components/lifonts/localfonts";

export const metadata: Metadata = {
  metadataBase: new URL('https://zawa8.vercel.app'),
  alternates: { canonical: '/', },
  title: { default: 'wimxl kumAr', template: '%s | wimxl kumAr', },
  description: 'frontend developer, optimist, community builder.',
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${hindienglosoftw8asc.className}`}>
        <body className="antialiased tracking-tight">
          <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-white text-gray-900">
            <main className="max-w-[60ch] mx-auto w-full space-y-6">
              {children}
            </main>
            <Footer />
            <Analytics />
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}

function Footer() {
  const links = [
    { name: '@etphor', url: 'https://x.com/etphor' },
    { name: 'facebook', url: 'https://www.fb.com/ztrabc' },
    { name: 'github', url: 'https://github.com/zawa8' },
  ];
  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
		  <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 
		  hover:text-blue-500 transition-colors duration-200" >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
